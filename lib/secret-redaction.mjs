// Shared by collection, analysis, rendering and publication. Never log matches.
const REDACTED = '[REDACTED_SECRET]';
const SECRET_PATTERNS = [
  /\bnpm_[A-Za-z0-9]{20,}\b/g,
  /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{20,}\b/g,
  /\bgithub_pat_[A-Za-z0-9_]{20,}\b/g,
  /\bsk-[A-Za-z0-9_-]{20,}\b/g,
  // VolcEngine long-term and temporary access key IDs, including quoted code/HTML.
  /\b(?:AKLT|AKTP)[A-Za-z0-9_-]{12,}/g,
];

// Secret halves may have no vendor prefix. Match explicit credential assignments,
// not arbitrary high-entropy text, so normal IDs, hashes and links remain useful.
const CREDENTIAL_NAME = '(?:access[_-]?key(?:[_-]?id)?|secret[_-]?(?:access[_-]?)?key|api[_-]?key|access[_-]?token)';
const CREDENTIAL_FIELD = new RegExp(`^${CREDENTIAL_NAME}$`, 'i');
const CREDENTIAL_ASSIGNMENT = new RegExp(
  `(\\b${CREDENTIAL_NAME}(?:["'\\x60]|&quot;|&#(?:34|39);)?\\s*[:=]\\s*(?:["'\\x60]|&quot;|&#(?:34|39);)?)([A-Za-z0-9_+/.=-]{16,})`,
  'gi',
);

export function scrubSecrets(value) {
  if (typeof value === 'string') {
    const text = SECRET_PATTERNS.reduce((result, pattern) => result.replace(pattern, REDACTED), value);
    return text.replace(CREDENTIAL_ASSIGNMENT, (_match, label) => `${label}${REDACTED}`);
  }
  if (Array.isArray(value)) return value.map(scrubSecrets);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [
      scrubSecrets(key),
      CREDENTIAL_FIELD.test(key) && typeof item === 'string' && item.length >= 16
        ? REDACTED : scrubSecrets(item),
    ]));
  }
  return value;
}
