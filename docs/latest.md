---
layout: report-home
title: "V2EX 每日热点回顾"
permalink: /latest/
status: success
target_date: 2026-11-01
generated_at: "2026-11-02 09:28:39"
summary: "昨日主题 151 个，过滤 68 个，DeepSeek 分析 83 个，保留高价值内容 16 个。"
count_all: 151
count_excluded: 68
count_included: 83
count_high_signal: 0
count_valuable: 16
report_url: "/2026/11/01/"
data_url: "/data/2026-11-01.json"
---

# V2EX 2026-11-01 昨日新帖报告

<details class="topic-card" data-topic-id="1253468" markdown="1">
<summary>
<span class="topic-rank">1</span>
<span class="topic-title">2核2G云主机跑OpenViking：模型选型与成本复盘</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者在阿里云 99 元/年的 2 核 2G 突发性能实例（ecs.e-c1m1.large）上自建 OpenViking 作为 Agent 记忆底座，核心思路是**本地只做存储与检索，计算全部交给外部 API**，配合 Swap 兜底与容器内存限制，日常占用仅几百兆。

### 关键要点
- **服务器看续费**：记忆库是强状态资产，避开“首年低价、次年暴涨”的机型；作者选择承诺同价续费的 99 元款，避免跨云迁移。
- **向量模型一步到位**：换 embedding 需全库重建索引，应优先选多模态、大上下文模型。作者选火山方舟 doubao-embedding-vision（0.7 元/百万 tokens，128K 上下文），而非同价但仅 32K 的 qwen3-vl-embedding；纯文本场景可用 0.5 元的 qwen3.7-text-embedding。
- **意图分析是隐藏瓶颈**：未配置 `query_planner` 时会回退调用主 VLM，导致每次提问前置卡顿 6~7 秒。作者实测通义伶鹊（tongyi-xiaomi-analysis-flash）首字延迟 0.31 秒、整轮约 0.8 秒，且严格输出 `{"queries": [...]}` 裸 JSON；通用模型则常加围栏或吐裸数组。
- **VLM 设 `reasoning_effort: "low"`**：high 模式耗时 20~48 秒，抽取结果与 low 几乎无差别；VLM 异步归档不阻塞前端。
- **Rerank** 用硅基流动 Qwen3-Reranker-4B 轻量计费通道，4 条文档打分 0.26 秒。

### 评论补充
- 有用户指出 embedding 换代可不停机：新索引双写、限速后台回填、切读后删旧列，2G 机器也能扛。
- 2G 机器需注意 HNSW 索引常驻内存、swap 与云盘 IOPS 争抢，以及突发实例 CPU 积分限制；备份需做恢复演练。
- 作者补充 OpenViking 通过 Hook 关键函数保证记忆读写 100% 执行，而非依赖 MCP 触发。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253468" target="_blank" rel="noopener noreferrer">我在 2 核 2G 云主机上跑 OpenViking：一次关于云主机、模型选型与长期成本的真实复盘</a></span><span class="topic-stats">回复 14 · 收藏 13</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253511" markdown="1">
<summary>
<span class="topic-rank">2</span>
<span class="topic-title">ChatGPT 与 Codex 将共用额度：官方邮件要点与用户影响</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
OpenAI 邮件称，未来数周将向小范围用户测试 ChatGPT 中 Chat 与 Work 标签的合并体验，并让 ChatGPT 与 Codex 共用同一份额度。Codex 仍保留为桌面应用中的独立体验。官方称多数用户不会比现在更频繁地遇到额度重置；消耗取决于模型和任务，高级模型与复杂任务占用更多。Unlimited Instant 包含在套餐内，不占用额度。用户可在 `Settings → Usage` 查看合并后的剩余额度与重置时间；额度用尽后可等待重置、升级套餐或购买 credits。

### 关键要点
- 合并后 Chat 与 Codex 的用量从同一额度扣除，重度 Chat 用户可能更早触及上限。
- 官方强调多数用户重置频率不变，但未给出具体额度数值。
- 额度不足的三种处理方式：等待重置、升级、购买 credits。
- 有评论指出 Chat 中的联网搜索、数据分析、附件和 deep research 同样消耗较多 token。

### 评论补充
100 美元档用户认为合并后无需在 Chat 与 Codex 间来回切换，且 Chat 额度常有余量，理论上可用总量可能更划算；也有用户担心语音、图片、视频附件索引会挤占 Codex 额度。另有评论认为产品线（Chat、Work、Codex）入口过多，合并更清晰。关于额度是否叠加、是否翻倍，评论中仅有猜测，无官方依据。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253511" target="_blank" rel="noopener noreferrer">恶心了， ChatGPT 要跟 Codex 共用额度了</a></span><span class="topic-stats">回复 44 · 收藏 6</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253483" markdown="1">
<summary>
<span class="topic-rank">3</span>
<span class="topic-title">Loon 加密插件与 MITM 明文风险：如何防范</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

主帖引用一篇关于代理软件 MITM（HTTPS 解密）的文章，担心 Loon 等客户端开启加密插件后，用户密码等明文流量可被脚本读取。楼主在回复中把风险归纳为三点：**最高权限与零透明度矛盾**、**加密插件（如 `.lpxe`）防君子不防小人**、**自动更新放大供应链风险**。

### 关键要点

- 开启 HTTPS 解密并安装根证书后，MITM 脚本可读取明文流量（密码、Cookie、Token）、篡改响应，甚至外发数据。
- 加密插件在本地仍存解密逻辑，挡不住逆向，却让普通用户无法审查代码、排查恶意逻辑或迁移。
- 防范措施：不给加密/混淆插件授予解密权限；不用时关闭 MITM 总开关；在 iOS 证书信任设置中关闭根证书；检查插件 `hostname`，警惕 `*` 通配符，把银行、支付、邮箱等域名排除；审查后保存本地明文脚本，避免远程订阅自动更新；不分享含 `ca-p12`、`ca-passphrase` 的配置。

### 评论补充

多位回复者指出，MITM 本就是为查看明文而设计，风险来自是否信任脚本，而非 Loon 独有；任何 iOS 代理软件都支持 MITM。也有人质疑原文作者与 Clash 的立场关联，认为存在蹭流量和报复动机，并称 Loon 已在做加密插件风险提示与安全加固。另有建议用 AI/agent 审查或自写脚本，降低第三方脚本风险。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253483" target="_blank" rel="noopener noreferrer">我去，原来 Loon 的加密插件能明文直接看用户密码，怎么办啊 换哪个好</a></span><span class="topic-stats">回复 39 · 收藏 4</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253550" markdown="1">
<summary>
<span class="topic-rank">4</span>
<span class="topic-title">开源本地音频转写CLI：76个模型，16分钟视频49秒转完</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者开源了两个配套工具：Rust 编写的本地语音转写 CLI `handy-transcribe`，以及基于它、运行在开源 coding agent Pi 上的技能 `pi-media-transcribe`。前者解决模型管理、VAD 分块和长音频拼接，后者把转写结果整理成带摘要、分节和标签的 Markdown 笔记。两者均为 MIT 许可。

### 关键要点
- **完全本地**：macOS 走 Metal，其他平台走 CPU；不上传、不需要账号、不按分钟计费。
- **模型覆盖**：内置 76 个模型、21 个家族（Whisper、Parakeet、Canary、SenseVoice、Qwen3-ASR、Voxtral 等），`--list-models` 可查看缓存状态。
- **实测数据**：M1 Pro 上，16 分钟（972 秒）中文技术演讲用 Qwen3-ASR-0.6B Q8_0 转写耗时 49 秒，约 20 倍实时。
- **输入输出**：支持常见音频格式、MP4 音轨和 http(s) 媒体 URL；正文走 stdout，进度走 stderr，`--json` 输出 backend、设备、RTF 和语言。网页视频需先用 yt-dlp 抽音轨。
- **笔记技能三模式**：只转写、`--raw` 逐字落笔记（离线零成本）、默认 LLM 润色并自动选目录打标签。

### 评论补充
暂无回复。作者自述的已知限制值得注意：Windows 未测试；CLI 依赖 CMake 与 C++ 工具链；拉丁语系小节标题回退英文；润色模式消耗 token；首次运行会静默下载约 850 MB 默认模型；各模型许可证不同（Apache-2.0/MIT/CC-BY-4.0/非商用），商用前需核对。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253550" target="_blank" rel="noopener noreferrer">做了个本地音频转写工具：不花一分钱， 76 个模型随取随用， 16 分钟视频 49 秒转完</a></span><span class="topic-stats">回复 0 · 收藏 6</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253554" markdown="1">
<summary>
<span class="topic-rank">5</span>
<span class="topic-title">IP 质量检测站 ipx.al：评分可拆解、多源定位对照、风险库开源</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者因排查网络问题，发现多数 IP 检测站只给分数、不说明算法且广告多，于是自建了 ipx.al。其核心差异是**评分可解释**：扣分项与各项扣分额度逐条列出，计算公式放在 `/about`；多个定位源并排对照，偏离多数结果的源会被标出；风险库使用公开黑名单，数据与构建脚本开源于 `github.com/yehyakin/ipx-al-data`，误报可提 issue。

### 关键要点
- DNS/WebRTC 泄漏与分流检测在浏览器本地完成，不经过服务器；无需登录、不记录查询、无广告。
- 支持终端 `curl ipx.al` 查看结果。
- 技术栈为 Cloudflare Workers，加几台小机器做延迟探针，风险库由 GitHub Actions 每 6 小时更新一次。
- 作者自述项目“还很糙”，欢迎提交判断错误的 IP。

### 评论补充
多位用户反馈机房 IP 得分上限为 55 分，有人同一 IP 先得 100 分、过一会变成 55 分，说明评分可能随风险库或判定结果变化；也有用户报告非机房 IP 被误判为机房，准确性仍需验证。另有用户询问何种 IP 能得 100 分，帖内未给出答案。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253554" target="_blank" rel="noopener noreferrer">做了个 IP 质量检测站，每一分怎么扣的都写清楚了</a></span><span class="topic-stats">回复 7 · 收藏 9</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253485" markdown="1">
<summary>
<span class="topic-rank">6</span>
<span class="topic-title">SweepSA：把 PlutoSDR 变成半台频谱仪</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者发布免费软件 SweepSA，面向 PlutoSDR（AD936x 平台），并顺带支持 HackRF One，目标是在没有频谱仪时用 SDR 做扫频观测。

### 关键要点
- **扫频加速原理**：AD936x 的 fastlock 可缓存 VCO profile，切换几乎瞬时完成，但芯片只有 8 个槽位；SweepSA 用“滑动窗口”在当前频段扫描时预填后续频段的配置。
- **实测速度**：AntSDR E310 与 LibreSDR 上全频段（70 MHz–6 GHz）约 500–800 ms，几百 MHz 跨度约 10–60 ms；HackRF One 全频段约 730 ms，全频段速度接近，但 AD936x 每段 40–56 MHz 带宽可无缝快速扫描。
- **功能**：4 条迹线（CR、max hold、min hold、avg）、8 个标记点（差值、峰值搜索、跳峰、标记到中心频率/参考电平、噪声标记）、峰值/负峰值/采样/RMS 检波器、按实际 FFT 点数和窗函数计算的真实 RBW、瀑布图、zero span，以及迹线 CSV、截图 PNG、仪器状态 JSON 导出。
- **限制**：SDR 无法测绝对功率，电平单位为 dBFS，未加载幅度校正文件时界面持续显示“UNCAL”；存在谐波、杂散和拼接痕迹。
- **平台**：AD936x 板需跑 Pluto 风格固件并带 Zynq ARM；桌面端支持 Windows x86_64、Linux x86_64、macOS arm64。

下载与演示见 [GitHub Releases](https://github.com/zxkmm/sweepsa-releases) 和 [B 站视频](https://www.bilibili.com/video/BV1Penc6aEff)。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253485" target="_blank" rel="noopener noreferrer">买不起频谱仪怎么办：你的 PlutoSDR 可以变成半台频谱仪</a></span><span class="topic-stats">回复 0 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253475" markdown="1">
<summary>
<span class="topic-rank">7</span>
<span class="topic-title">移动APP资费专区自助找宽带套餐：按方案编号筛选</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
楼主给出了一条不打电话、不去营业厅，只在移动 APP 里自助找宽带套餐的路径：进入“资费专区”，全国资费约 20 项、省级资费约 60 项，宽带套餐混在其中，需要用价格筛选逐项排查。每个套餐都有唯一“方案编号”，可直接发给人工客服办理。

### 关键要点
- 湖北示例：自定义价格 38–38 元，可筛出“湖北家庭融合保底 38 元（300M 宽带）2025”，方案编号 `25HB200299`，38 元/月，要求主资费 18 元及以上，在网 24 个月，提前解约需缴 280 元。
- 另一示例：全家享 79 元套餐（300M 宽带），编号 `24HB200099`，用 79–79 元筛选。
- 评论补充：湖北“合家欢”方案编号 `25HB200718`，0 元/月送 300M，但仅限线下营业厅，覆盖黄石、宜昌等十余地市，不含武汉，2026 年 12 月 31 日下线，且需添加两名成员设短号。
- 评论普遍认为，便宜宽带多为融合套餐叠加低消，单宽带很难做到低价。

### 评论补充
有回复称官方营业厅可办 10 元/月 300M 甚至 1000M 的无合约套餐，并晒出账单；但楼主查证后表示在资费专区找不到对应方案，认为其已下架、参考性有限。另有回复指出各地政策差异大，官方营业厅也未必主动推荐低价单宽，最终仍可能转向第三方渠道。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253475" target="_blank" rel="noopener noreferrer">使用移动 APP 办宽带的方法，不使用电话咨询的方式</a></span><span class="topic-stats">回复 19 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253515" markdown="1">
<summary>
<span class="topic-rank">8</span>
<span class="topic-title">AI 能替代运维吗：责任归属与场景边界</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

讨论的共识是：AI 能接手大量远程、命令行式的运维工作，但“替代”卡在**责任归属**和**物理现场**两处。多数回复认为 AI 无法背责，人仍是最终兜底者；分歧在于替代程度——有人称顶级模型配好 prompt 已可替代，也有人强调幻觉风险与不可控性。

### 关键要点

- **责任是核心障碍**：出事故时没人认可机器担责，运维“人”的存在部分意义就是背锅。
- **场景决定可行性**：远程登录能解决的问题 AI 大多可做；断电、断网、换硬盘等现场操作仍须人工。
- **幻觉是硬伤**：一个比特出错即全错，例如误操作到另一个交换机端口。
- **组织影响**：有回复称裁四五人留一人仍富余；也有人反馈引入 AI 后活更多更累。
- **小规模场景更适用**：个人项目可全权交给 AI；有合规负担的公司仍倾向雇人。

### 评论补充

有回复给出可复用经验：面对日志写满导致停摆，与其删日志扯皮，不如要求甲方加/换硬盘，把责任留在甲方，且换盘目前只能人工。另有观点认为经专业运维训练的 AI 比多数运维靠谱，99% 情况可依赖，但需做好 routines 与权限边界。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253515" target="_blank" rel="noopener noreferrer">AI 能替代运维吗？</a></span><span class="topic-stats">回复 20 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253462" markdown="1">
<summary>
<span class="topic-rank">9</span>
<span class="topic-title">彩虹易支付 syskey 泄露后门：影响范围与修复步骤</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

彩虹易支付存在高危后门：攻击者只需发送带有 `＞= 70200` 的 PHP-Version 请求头的请求访问 `platform_check.php`，该值会被存入 `SERVER_PHP_VERSION`，并设置用于隐藏字段名的字符串常量 `SENTENCEIA`；`autoload_real.php` 按空格拆分句子拼出 `conf` 和 `syskey`，读取 `$GLOBALS'conf'`，最终把系统密钥写入 `Set-Cookie: PHPSESSID` 响应头返回给请求者。

拿到 syskey 后，攻击者可在已知订单号时伪造签名查询订单、发起订单退款，已知红包编号时领取红包，还可影响下单防刷、部分授权、实名认证、收款链接、邀请码等流程。

### 关键要点

- **影响范围**：最新版本受影响，2025 年某版本受影响；按文件时间戳，至少 2023 年 10 月版本起已受影响。
- **修复步骤**：将补丁文件放入 `includes/vendor/composer`，重载 PHP；在数据库 `pay_config` 表重新生成 32 位字母数字 syskey；删除 `pay_cache` 表中 `k=config` 的配置缓存；用作者脚本验证。
- **善后**：核实订单是否有异常退款；轮转后登录态失效，收款码、邀请码、红包链接等业务数据也会失效，需及时更新。
- 作者提示彩虹官网该后门仍可用，原文与补丁见其 Telegram 频道。

### 评论补充

有回复称不少灰产在使用此类系统；另一回复表示此前升级易支付时由 AI 扫描发现该问题并修复，说明常规升级与代码审计可暴露此类后门。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253462" target="_blank" rel="noopener noreferrer">彩虹易支付 syskey 泄露高危后门, 可被利用发起订单退款等操作</a></span><span class="topic-stats">回复 2 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253599" markdown="1">
<summary>
<span class="topic-rank">10</span>
<span class="topic-title">国内上架AI应用接入DeepSeek接口的备案路径</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

在国内应用商店上架调用 DeepSeek 等已备案模型的 App，备案可以拆成三层，官方备案本身不收费，几千元报价通常是代办整理材料的费用。

### 关键要点

- **App 备案（工信部）**：上架国内商店的硬性门槛，与网站 ICP 备案类似。在服务器所在云厂商（阿里云、腾讯云等）的备案系统免费提交主体信息、包名、签名证书指纹，平台初审后由管局审核，通常需几周到二十个工作日，通过后在 App 设置中展示备案号。
- **生成式 AI 应用/功能登记**：仅通过 API 调用已备案模型、不自行训练或改造时，向属地省级网信办提交应用主体、所调模型及备案号、双方服务协议、内容审核与投诉处置安排。普通提示词编排、RAG 不影响该路径；若对模型实质性微调或二次改造成自控服务，可能需走完整大模型备案。
- **算法备案**：面向公众的生成合成类功能需要，商店审核会查 `beian.cac.gov.cn` 的备案截图。实操中可用模型方的“生成合成类”算法备案加双方合作协议（写明算法名称与备案编号），不必自己再备一次，但需提前向商店确认是否认可。
- **应用商店是实际守门员**：华为、小米等 AI/深度合成类目通常要求生成内容显式标识、算法备案截图或合作方材料加协议，部分情况要安全评估报告，应以目标商店最新资质文档和客服答复为准。

### 评论补充

有回复指出，生成式 AI 应用/功能登记由各省自行管理，未找到线上入口，需致电网信办获取表格，且一般不受理个人登记。因此个人开发者可能需先注册企业主体，省钱路径是自行办理 App 备案、按属地清单自写登记材料，或先上不含 AI 对话的版本过审，登记完成后再更新 AI 模块。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253599" target="_blank" rel="noopener noreferrer">国内上架 APP,接入类似于 Deepseek 的接口,需要什么备案啊?</a></span><span class="topic-stats">回复 3 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253611" markdown="1">
<summary>
<span class="topic-rank">11</span>
<span class="topic-title">YT.NET香港VPS实测：Ping 40ms但SSH严重重传，退款扣10%</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者实测 YT.NET 香港 VPS：上海电信 Ping 平均 42ms、丢包 0%，但 SSH 交互严重卡顿。排查后确认问题出在 TCP 层，而非服务器资源。

### 关键要点
- **排除资源瓶颈**：`vmstat 1 5` 显示 CPU 空闲近 100%，I/O Wait 与 Steal 均为 0，内存充足。
- **TCP 重传异常**：`ss -ti` 显示 SSH 连接 `cwnd` 收缩到 2，`bytes_retrans` 达 7220/7548 字节，交付速率仅 91.1kbps 与 64.3kbps。
- **换算法无效**：由 BBR 改为 CUBIC 后重传依旧，说明不是拥塞控制算法能解决的问题。
- **大包测试暴露问题**：1500 字节包 100 次丢 11 个并出现连续超时；60/1420 字节包丢包率为 0%。
- **售后与退款**：客服等待一小时以上无回复；退款页面提示因支付平台手续费扣 10%，仅到账 90%。

### 评论补充
暂无回复。作者强调不能据此断言商家超售或欺诈，但提醒选购时不要只看 Ping 和线路名称（CN2、AS10099、CMI），应索取真实 TCP 双向重传测试与同型号评价，并提前确认退款去向与扣费规则。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253611" target="_blank" rel="noopener noreferrer">YT.NET 香港 VPS 避雷记录： Ping 40ms、SSH 严重重传，申请退款还要扣 10%</a></span><span class="topic-stats">回复 0 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253465" markdown="1">
<summary>
<span class="topic-rank">12</span>
<span class="topic-title">LZMA2、PAQ8PX、NNCP 实测对比与 zstd/ZIP Quine 构造</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者对 16MiB 数据做了多款压缩器的实测对比，并进一步构造了“压缩包内含自身副本”的 Quine 压缩包。结论是：极限压缩比选 PAQ8PX，日常使用 LZMA2（7-Zip）最稳，小文件想再挤一点可试 ZPAQ。

### 关键要点
- **ZPAQ**：约 1 分钟把 16MiB 压到约 3.5MiB，速度与压缩比平衡较好。
- **PAQ8PX**：压到约 3.1MiB，为本次最优，但耗时约 1.5 小时、占用约 30GiB 内存，解压同样痛苦。
- **NNCP**（Fabrice Bellard 的 Transformer 压缩算法）：RTX 4090 上跑约 1.5 小时，结果 4.1MiB，反而不如 LZMA2。
- **cmix**：测试中途崩溃，内存与耗时同样夸张。
- **Quine 压缩包**：zstd 版利用可跳过帧、RAW block 和 XXH64 校验值构造，做成 .tar.zst，Windows 资源管理器可直接打开；ZIP 版利用成员数据重叠绕过窗口限制，7-Zip 与 libarchive 可解压，但 Python zipfile 会因压缩数据越过后续局部头而报错；RAR 版原理可行，因非开源只放样例。

### 评论补充
有回复指出应直接压缩原始文件再比较才客观，作者解释其博客包本身不压缩、相当于 tar，因部分压缩程序不具备归档功能。另有回复提到 fitgirl 类高压包解压痛苦易卡死，以及 precomp、packjpg、WinZip zipx 可把 JPG 再压到约 80%，并给出 encode.su 社区。也有观点认为压缩已主要服务于打包，压缩率关注度下降。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253465" target="_blank" rel="noopener noreferrer">压缩的尽头是自指？从 LZMA2、PAQ8PX 到 zstd/ZIP/RAR Quine，我折腾了一遍“自包含压缩包”</a></span><span class="topic-stats">回复 10 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253568" markdown="1">
<summary>
<span class="topic-rank">13</span>
<span class="topic-title">不到2M的安卓直播源客户端：支持m3u导入与遥控器操作</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者为方便老家亲戚在安卓电视上看直播，用 GPT 快速开发了一个体积不到 2M 的直播源客户端。起因是 TVBox、OK 影视等空壳软件配置项过多，长辈难以使用。该客户端最低支持 Android 5，但 exoplayer 在低版本上解码问题较多，Android 7 以上基本正常。

### 关键要点
- 内置一个测试源，支持本地或在线标准 m3u 直播源导入，暂不支持 TVBox 类源格式。
- 针对手机手势和遥控器按键做了适配，并加入台标、快速定位等细节。
- 下载地址：https://wwbch.lanzouw.com/iWs1L4e9pztc ，密码 `6wst`。
- 作者另用 Agent 写了定时抓取和检测直播源健康度的小工具。

### 评论补充
有用户实测后指出两个问题：不能反向横屏；点击某个源会直接播放第一个或上次的频道，建议增加按钮先展示频道列表。作者回应反向横屏容易修复，自动播放是主流壳的常见做法，记住上次播放是特意设计。另有评论认为，看电视最麻烦的是稳定的直播源，客户端本身次要；作者也承认自己对源研究不多。该用户还提到配合 [LiveStreamGateway](https://github.com/Yafeiml/LiveStreamGateway) 使用。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253568" target="_blank" rel="noopener noreferrer">一个不到 2M 的安卓直播源客户端</a></span><span class="topic-stats">回复 4 · 收藏 5</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253558" markdown="1">
<summary>
<span class="topic-rank">14</span>
<span class="topic-title">开源中文释义 Anki 法语卡组：6900+ 词，覆盖 A1–C1</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者在备考 TCF 时发现，AnkiWeb 上现成的 5000 词卡组存在两个问题：一是用英语释义学法语容易产生理解偏差，二是缺少好用的中文法语卡组。于是作者自己制作了一个开源卡组，并发布在 GitHub 上，地址为 https://github.com/bonorca/the-only-french-deck 。

### 关键要点
- **规模与分级**：收录 6900+ 常用词，按 A1–C1 分为五个子卡组；每个词只保留中文常用义项，并配 1–2 句例句及中文翻译。
- **选词方法**：合并 Wiktionary 的 OpenSubtitles 法语词频表（词形归并成原形后取前 5000）、CLE 教材 A1–B2 词汇和 FLELex 分级词表（A1–B1 全部，加上 B2 常见词），去重后约 7800 词；再删掉俚语、粗俗用语、专有名词、专业术语和古雅文学词约 900 个，最后参考 FLELex 等级和 Lexique 3 词频，把每个词定到 A1–C1。
- **音频制作**：用 Gemini 3.8 flash TTS 生成 1.2 万多个单词和词形发音、1.28 万句例句发音；再用多个语音识别模型转写，与卡片文字、音标逐个比对，读错的重新生成，最后人工试听。
- **获取方式**：完整版（带例句发音）见 https://github.com/bonorca/the-only-french-deck/releases/latest 。

### 评论补充
该主题暂无回复，以上信息均来自主帖。作者称卡组经过多轮全库校对，但校对质量与 TTS 发音准确性尚无第三方验证，使用前建议自行抽查。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253558" target="_blank" rel="noopener noreferrer">备考 TCF 期间做了个啥都有的 Anki 法语卡组</a></span><span class="topic-stats">回复 0 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253569" markdown="1">
<summary>
<span class="topic-rank">15</span>
<span class="topic-title">百度网盘2T免费空间降至100G的规则与恢复办法</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
有用户发现百度网盘容量从 2T 降到 100G，询问能否恢复。评论给出的关键结论是：这属于长期未登录触发的免费空间回收，**只要在缓冲期内登录一次即可保留 2T**；若已被回收，普通用户没有免费恢复通道，客服通常不受理。

### 关键要点
- 规则（据评论转述）：自 2021 年 1 月 21 日起，超过 365 天未登录，2T 免费空间调整为 100G；超出 100G 的已存文件仍保留，可下载和访问，但不能存入新文件。
- 回收初期有 30 天缓冲期，即超过 395 天未登录才正式降容；缓冲期内登录一次即可继续享有 2T。
- 会员状态用户（含容量套餐在有效期内）不受该规则影响。
- 注意：有用户称仅登录网页版仍被回收，实际要求通过 App 登录，建议以 App 登录确认。

### 评论补充
- 有长期付费用户表示空间已达 30T；也有人挂载 OpenList 后容量未降。
- 非会员下载速度被指仅约 1Mbps，容量价值有限；对比之下夸克免费空间约 10G、限速 100k/s。
- 有用户认为付费会员每年一百多元属合理价格，活跃登录即可保住容量。

以上规则细节来自评论转述，建议以百度网盘官方公告为准。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253569" target="_blank" rel="noopener noreferrer">百度网盘容量从 2T 降到 100G</a></span><span class="topic-stats">回复 11 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1253578" markdown="1">
<summary>
<span class="topic-rank">16</span>
<span class="topic-title">容器化一键自建 GitHub Actions Runner，支持本地缓存加速</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者因 GitHub Pro 赠送的 3000 分钟构建额度不够用，开源了 `bestony/self-hosted-action-runner`，把 self-hosted runner 做成可直接复制升级的容器，解决官方 Runner 无法在用户级别共享、难以给多仓库分配实例的问题。

### 关键要点
- **DooD 模式**：挂载宿主机 `/var/run/docker.sock`，工作流中的 `docker build` 和 `container:` 可照常运行，宿主机只需装 Docker。
- **状态持久化**：凭据与配置存入独立卷，容器重启或升级重建无需重新申请 Token 注册。
- **本地缓存加速**：构建镜像时对 `Runner.Worker.dll` 打二进制补丁，绕过官方对第三方缓存环境变量的覆盖，无需改 YAML，`actions/cache` 自动走内网 Cache Server。
- **动态依赖注入**：在 `.env` 填 `RUNNER_EXTRA_APT_PACKAGES`（如 `libmysqlclient-dev`、`libpq-dev`），重启即自动补齐，无需重建镜像。
- **多实例脚本**：一行交互式安装脚本，单机可混配多个 Org/Repo，按目标分配实例数（即并发 Job 数）。

安装方式为 `curl -fsSL https://raw.githubusercontent.com/bestony/self-hosted-action-runner/main/install.sh | bash`，项目地址 https://github.com/bestony/self-hosted-action-runner 。

### 评论补充
有回复提出公共 GitHub 项目的 Action 是否不适用，但未展开，主帖也未说明公共仓库场景的适配情况，使用前需自行核实。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1253578" target="_blank" rel="noopener noreferrer">[分享创造] 受够了 GitHub Actions 的额度限制与手装 Runner，我写了个容器化的一键自建方案（支持本地缓存加速）</a></span><span class="topic-stats">回复 1 · 收藏 0</span></p>

</div>

</details>
