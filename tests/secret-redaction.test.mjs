import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { scrubSecrets } from '../lib/secret-redaction.mjs';
import { buildTopicDocument } from '../lib/deepseek-analysis.mjs';

// Construct unmistakably synthetic samples at runtime; never commit full tokens.
const accessId = ['AK', 'LT', 'x'.repeat(40)].join('');
const temporaryId = ['AK', 'TP', 'y'.repeat(40)].join('');
const secretKey = 'z'.repeat(40);
const legacyTokens = ['npm_', 'ghp_', 'github_pat_', 'sk-'].map((prefix) => prefix + 'x'.repeat(40));
const samples = [accessId, temporaryId, secretKey, ...legacyTokens];
const sourceText = `Useful instructions ${accessId}\nSecretAccessKey = "${secretKey}"\n${legacyTokens.join(' ')}\nhttps://example.com/guide`;

function assertSafe(text) {
  for (const sample of samples) assert.equal(text.includes(sample), false, 'credential sample must be removed');
}

test('redacts prefixed and explicitly labelled credentials in nested JSON, text and HTML', () => {
  const original = {
    content: sourceText,
    content_rendered: `<p>${temporaryId}</p><code>secret_key=&quot;${secretKey}&quot;</code>`,
    replies: [{ secretAccessKey: secretKey, text: `${accessId} ${accessId}` }],
    [accessId]: 'credential-shaped key',
    count: 42,
    enabled: true,
    empty: null,
  };
  const clean = scrubSecrets(original);
  assertSafe(JSON.stringify(clean));
  assert.match(clean.content, /Useful instructions/);
  assert.match(clean.content, /https:\/\/example.com\/guide/);
  assert.equal(clean.replies[0].secretAccessKey, '[REDACTED_SECRET]');
  assert.equal(clean.count, 42);
  assert.equal(clean.enabled, true);
  assert.equal(clean.empty, null);
  assert.equal(original.content === sourceText, true, 'do not mutate the input');
  assert.deepEqual(scrubSecrets(clean), clean, 'redaction is idempotent');
});

test('keeps ordinary content, hashes, URLs and short configuration examples', () => {
  const normal = 'AKLT model; access_key = example; secretKey: short; commit ' + 'a'.repeat(40) + ' https://example.com/docs?topic=123';
  assert.equal(scrubSecrets(normal), normal);
});

test('redacts model input before text truncation, including URLs and reply HTML', () => {
  const { document } = buildTopicDocument({
    id: 1, title: sourceText, content: sourceText,
    url: `https://example.com/?key=${accessId}`, member: { username: temporaryId },
  }, [{ id: 2, content_rendered: `<p>${sourceText}</p>` }]);
  assertSafe(JSON.stringify(document));
  assert.match(document.topic.content, /Useful instructions/);
});

async function setupRuntime(t) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'v2ex-redaction-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await fs.copyFile(new URL('../fetch_v2ex_yesterday.mjs', import.meta.url), path.join(dir, 'fetch_v2ex_yesterday.mjs'));
  for (const folder of ['lib', 'scripts']) {
    await fs.cp(new URL(`../${folder}/`, import.meta.url), path.join(dir, folder), { recursive: true });
  }
  return dir;
}

function run(dir, script, env) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script], {
      cwd: dir,
      env: { ...process.env, ...env },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let output = '';
    child.stdout.on('data', (chunk) => { output += chunk; });
    child.stderr.on('data', (chunk) => { output += chunk; });
    child.on('error', reject);
    child.on('close', (code) => resolve({ code, output }));
  });
}

async function checkFiles(dir, files) {
  for (const file of files) {
    const text = await fs.readFile(path.join(dir, file), 'utf8');
    assertSafe(text);
    assert.match(text, /\[REDACTED_SECRET\]/, `redaction marker in ${file}`);
    if (file.endsWith('.json')) JSON.parse(text);
  }
}

test('collection, model output, rebuild and Pages preserve the report without credentials', async (t) => {
  const dir = await setupRuntime(t);
  let analysisCalls = 0;
  let unsafeModelInput = false;
  const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    if (req.url === '/chat/completions') {
      analysisCalls += 1;
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      const input = Buffer.concat(chunks).toString('utf8');
      unsafeModelInput ||= samples.some((sample) => input.includes(sample));
      res.end(JSON.stringify({ choices: [{ message: { content: JSON.stringify({
        topic_id: 1, keep: true, title_content_consistent: true, has_reusable_information: true,
        category: '经验与教程', optimized_title: `Useful ${accessId}`, article: sourceText,
        score_breakdown: { information_density: 20, actionability: 20, evidence_quality: 15, novelty: 12, topic_consistency: 10, credibility: 5 },
        evidence_reply_ids: [2], risk_flags: ['无'],
      }) } }] }));
    } else if (req.url.endsWith('/replies')) {
      res.end(JSON.stringify({ success: true, result: [{ id: 2, content: sourceText, content_rendered: `<p>${sourceText}</p>` }] }));
    } else {
      const response = JSON.stringify({ success: true, result: {
        id: 1, title: `Useful ${accessId}`, content: sourceText, content_rendered: sourceText,
        url: 'https://www.v2ex.com/t/1', created: Date.parse('2026-09-30T12:00:00+08:00') / 1000,
        stars: 1, replies: 1, node: { title: '问与答' },
      } });
      // Exercise credentials hidden by JSON escape sequences as well as plaintext.
      res.end(response.replaceAll(accessId, '\\u0041' + accessId.slice(1)));
    }
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(() => server.close());
  const base = `http://127.0.0.1:${server.address().port}`;
  const env = {
    V2EX_TOKEN: 'test-token', V2EX_DATE: '2026-09-30', V2EX_SCAN_START: '1', V2EX_SCAN_END: '1',
    V2EX_API_BASE_URL: `${base}/api/v2`, V2EX_API_MAX_RETRIES: '0', V2EX_SKIP_AI: '0',
    DEEPSEEK_API_KEY: 'test-only-key', DEEPSEEK_BASE_URL: base, DEEPSEEK_MAX_RETRIES: '0',
  };
  for (const script of ['fetch_v2ex_yesterday.mjs', 'scripts/rebuild_report_from_raw.mjs', 'scripts/publish_github_pages.mjs']) {
    const result = await run(dir, script, env);
    assertSafe(result.output);
    assert.equal(result.code, 0, scrubSecrets(result.output));
  }
  assert.equal(analysisCalls, 1, 'rebuild and publication must not call the model');
  assert.equal(unsafeModelInput, false);
  await checkFiles(dir, [
    'v2ex_2026-09-30_raw.json', 'v2ex_2026-09-30_report.md',
    'v2ex_yesterday_data/replies_2026-09-30.json', 'v2ex_yesterday_data/topics_created_2026-09-30.json',
    'docs/data/2026-09-30.json', 'docs/_posts/2026-09-30-v2ex-yesterday-report.md', 'docs/index.md', 'docs/latest.md',
  ]);
  const latest = await fs.readFile(path.join(dir, 'docs/latest.md'), 'utf8');
  assert.match(latest, /status: success/);
  assert.match(latest, /target_date: 2026-09-30/);
  assert.match(latest, /class="topic-card"/);
  assert.match(latest, /https:\/\/www.v2ex.com\/t\/1/);
});

test('API failures cannot leak credential strings into diagnostics, logs or blocked Pages', async (t) => {
  const dir = await setupRuntime(t);
  const server = http.createServer((_req, res) => {
    res.writeHead(403, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ success: false, message: sourceText }));
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(() => server.close());
  const env = {
    V2EX_TOKEN: 'test-token', V2EX_DATE: '2026-09-30', V2EX_SCAN_START: '1', V2EX_SCAN_END: '1',
    V2EX_API_BASE_URL: `http://127.0.0.1:${server.address().port}/api/v2`, V2EX_API_MAX_RETRIES: '0',
  };
  const failed = await run(dir, 'fetch_v2ex_yesterday.mjs', env);
  assert.equal(failed.code, 1);
  assertSafe(failed.output);
  const published = await run(dir, 'scripts/publish_github_pages.mjs', env);
  assertSafe(published.output);
  assert.equal(published.code, 0, scrubSecrets(published.output));
  await checkFiles(dir, [
    'v2ex_2026-09-30_failure.json', 'v2ex_2026-09-30_report_blocked.md',
    'docs/data/2026-09-30.json', 'docs/_posts/2026-09-30-v2ex-yesterday-report.md', 'docs/index.md', 'docs/latest.md',
  ]);
});

test('standalone rebuild and publisher also redact older unsanitized source files', async (t) => {
  const dir = await setupRuntime(t);
  const env = { V2EX_DATE: '2026-09-30' };
  await fs.writeFile(path.join(dir, 'v2ex_2026-09-30_raw.json'), JSON.stringify({
    targetDate: env.V2EX_DATE, generatedAt: '2026-10-01 12:00:00',
    counts: { allCreated: 1, included: 1, valuable: 1, analysisSuccess: 1 },
    includedTopics: [{ id: 1, title: sourceText, replies: 1, stars: 1, url: 'https://www.v2ex.com/t/1' }],
    deepseek: { analyses: [{ topic_id: 1, status: 'success', keep: true, content_score: 82, article: sourceText }] },
  }));
  const rebuilt = await run(dir, 'scripts/rebuild_report_from_raw.mjs', env);
  assertSafe(rebuilt.output);
  assert.equal(rebuilt.code, 0, scrubSecrets(rebuilt.output));
  await checkFiles(dir, ['v2ex_2026-09-30_report.md']);
  // A publisher can also be invoked against a report created by an older version.
  await fs.appendFile(path.join(dir, 'v2ex_2026-09-30_report.md'), sourceText);
  const published = await run(dir, 'scripts/publish_github_pages.mjs', env);
  assertSafe(published.output);
  assert.equal(published.code, 0, scrubSecrets(published.output));
  await checkFiles(dir, ['docs/data/2026-09-30.json', 'docs/_posts/2026-09-30-v2ex-yesterday-report.md', 'docs/index.md', 'docs/latest.md']);
});
