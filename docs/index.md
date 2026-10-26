---
layout: report-home
title: "V2EX 每日热点回顾"
date: 2026-10-25 08:30:00 +0800
categories: [v2ex, daily-report]
status: success
target_date: 2026-10-25
generated_at: "2026-10-26 08:06:08"
summary: "昨日主题 132 个，过滤 61 个，DeepSeek 分析 71 个，保留高价值内容 9 个。"
count_all: 132
count_excluded: 61
count_included: 71
count_high_signal: 0
count_valuable: 9
report_url: "/2026/10/25/"
data_url: "/data/2026-10-25.json"
---

# V2EX 2026-10-25 昨日新帖报告

<details class="topic-card" data-topic-id="1251592" markdown="1">
<summary>
<span class="topic-rank">1</span>
<span class="topic-title">用AI学习字帖生成书法作品：在线体验与开源项目</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者用一篇真实字帖训练 AI 学习文字结构，目标是输入任意文字即可生成书法作品。项目采用三层动态书法异形引擎（同字异形 PUA 轮换、部件级错落微变、弹性笔势场与蘸墨呼吸）和随字赋形不等距纵向排版（True Bounding-Box Vertical Kerning），以消除电脑排字的机械感。作者自评效果约达原字帖 90% 水平，并提供了在线体验页与 GitHub 仓库：
- https://dvbs2000.github.io/liuchunlin-shufa/
- https://github.com/dvbs2000/liuchunlin-shufa

### 关键要点
- 训练样本仅一篇文章，作者称先验证可行性，扩充样本后可迭代到可用水平。
- 字库覆盖：繁体 12,959 字、简体 11,345 字，已 100% 覆盖 GB2312（6,763 字）与《通用规范汉字表》（8,105 字）。
- 已知缺口：约 500 个先秦生僻字（如「樛」「藟」）不在覆盖范围，作者称后续补齐，并已回复修复漏字问题。

### 评论补充
- 有用户反馈生成结果仍有字体痕迹、与原帖差距大，认为不如直接用现成字体；也有人质疑该需求是否必须用 AI。
- 有用户建议改称「规范字」而非「书法」，并指出缺乏书法审美时混入名家笔意并不美观。
- 有用户报告服务器无法连接，说明在线体验的可用性尚不稳定。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251592" target="_blank" rel="noopener noreferrer">用 ai 实现书法作品自动生成</a></span><span class="topic-stats">回复 18 · 收藏 19</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251691" markdown="1">
<summary>
<span class="topic-rank">2</span>
<span class="topic-title">免费开源的雅思背词网站：7298词配插画与配音</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者发布了一个自建雅思背词网站，主打完全免费、无需注册、打开即用，并公开了代码与词库。站点收录 **7,298 个雅思词**，每个词配一幅原创插画，英音、美音和例句均有接近真人的配音；学习进度以“词汇星图”点亮星星的方式呈现。作者称高质量配音与图片投入了不少成本，并希望借此帮助更多人备考雅思。

### 关键要点
- 入口：`http://0xlei.tech/words`；开源地址：`http://github.com/designfuchen/word-atlas`
- 无需注册，代码和词库可自行取用
- 评论反馈审美与配图友好，词云可视化被认为有意思

### 评论补充
使用者提出了若干可改进点：B2 及以上词汇可补充词源信息，并支持按词根索引同源词；增加“隐藏中文释义”按钮，便于先猜词再核对；常用搭配增加朗读功能；有用户反馈特定分辨率下字体中的字母 e 横线不显示、易被误认为 c，作者回应会马上修改。另有用户表示自测词汇量约在 B1，B2 已出现不少生词。

### 限制
以上功能与数据均来自作者自述和评论，未独立核验；站点长期可用性、词库准确性及开源协议细节需读者自行确认。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251691" target="_blank" rel="noopener noreferrer">我做了一个我自认为全世界最好的雅思背词网站，完全免费，完全开源。🔥🔥🔥🔥🔥</a></span><span class="topic-stats">回复 14 · 收藏 17</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251604" markdown="1">
<summary>
<span class="topic-rank">3</span>
<span class="topic-title">Reelay：自动监听TG影视BOT并转存115整理媒体库</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
Reelay 是一个开源工具，用个人 Telegram 账号监听指定频道或 Bot，把影视资源自动转存到 115 网盘，并按 Emby 规范改名归类，减少“复制链接→转存→改名→等刮削”的手工流程。项目不提供也不索引资源，只处理自己账号可见的消息，目前仅支持 115。

### 关键要点
- **识别流程**：AI 提取片名、季集、分辨率和片源，再用 TMDB 校正，并与分享中的真实文件核对；AI 只给建议，转存、改名、去重由固定代码执行并读回核验，AI 不可用时回退规则识别。
- **防重复**：调用接口前先记录进度，结果不确定时只核验、不重发。
- **操作入口**：Web 管理台、Telegram Bot 和 MCP（可供 Claude 等 Agent 查询与审批）；识别错误可发“片名 繁花 第 2 季”修正，同一来源下次会参考。
- **追剧与洗版**：订阅后新集自动转存，缺集每日提醒，播完且全部入库后自动结束；库中已有时可选转人工、跳过、两版都留或洗版。
- **AI 接入**：使用 OpenAI 兼容接口，也支持本地模型。

### 评论补充
有用户提出部署后缺少 Telegram 代理设置，作者已确认并补充该功能；作者还给出自己使用的影视 Bot `@QukanMovie`。另有用户分享替代思路：把频道消息转成 RSS，再由自动化工具监控并转存。

GitHub：https://github.com/Derrors/reelay

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251604" target="_blank" rel="noopener noreferrer">[开源] Reelay：自动监听 TG 里影视资源 BOT 转存到 115，并整理成个人媒体库</a></span><span class="topic-stats">回复 12 · 收藏 11</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251598" markdown="1">
<summary>
<span class="topic-rank">4</span>
<span class="topic-title">Bing 中国大陆版为何不优先展示可访问的国外官网</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

有用户实测发现，在中国大陆使用 Bing 搜索 `themoviedb`、`google`、`youtube`、`telegram`、`x.com`、`openai` 等关键词时，官网往往不出现在前几页，取而代之的是第三方项目、域名近似的站点、教程或镜像站。以 TMDB 为例，搜索结果首条是部署在 Vercel 的第三方项目，第二条是域名高度相似的 `themoviesdb.org`，而可正常访问的官网 `themoviedb.org` 未出现；同样关键词在 Google 首条即为官网。

### 关键要点

- 主帖强调 TMDB 在国内可正常访问、并非被墙站点，因此“官网消失”不能简单归因于访问限制。
- 评论普遍认为这是国内版的合规与本地化结果，而非单纯的算法失误。
- 有回复指出 `cn.bing.com` 搜索框附近提供“国内版/国际版”切换，可尝试切换后再比较结果。
- 有回复推测国内版索引服务器位于大陆，无法访问的站点会因用户点击后打不开而逐步降权；此说法未获证实。
- 风险提示：有回复称同事搜索 DeepSeek 时点进非官方网站并下载到病毒，说明结果中的仿冒站点存在实际安全风险。

### 评论补充

关于原因，评论存在分歧：一方认为是刻意“优化”与合规要求，另一方认为是索引与点击反馈导致的自然降权，也有人建议直接使用 Google 或参考曾泄漏的 Bing 源码验证。可复用的做法是：优先核对域名、避免点击名称相近的第三方站，并在需要时切换国际版或改用其他搜索引擎交叉验证。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251598" target="_blank" rel="noopener noreferrer">Bing 中国大陆搜索是否存在对部分国外网站的刻意降权或隐藏？</a></span><span class="topic-stats">回复 31 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251596" markdown="1">
<summary>
<span class="topic-rank">5</span>
<span class="topic-title">ShellReady：一条命令配好 Linux 终端与 BBR 的开源工具</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者针对“每台新 VPS 都要重复配置终端环境”的痛点，开源了 ShellReady：登录服务器后执行一条命令，即可安装并管理 6 项常用组件，避免逐条敲命令。

### 关键要点
- **集成组件**：BBR（默认启用当前内核，可选升级 BBRv3）、trzsz-go（`trz`/`tsz` 拖拽传文件）、Starship 提示符、zsh-autosuggestions、Atuin（接管 `Ctrl+R` 历史搜索）、zoxide（`z` 跳转）。
- **安装方式**：执行 `bash   注意：脚本通过 `curl | bash` 方式执行，使用前建议先审阅源码，并在测试机验证。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251596" target="_blank" rel="noopener noreferrer">[开源] 每次买新 VPS 都要重配一遍环境太烦了，写了个一条命令配好 Linux 终端的工具 ShellReady（集成 BBR / trzsz / Starship / Atuin / zoxide）</a></span><span class="topic-stats">回复 11 · 收藏 8</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251624" markdown="1">
<summary>
<span class="topic-rank">6</span>
<span class="topic-title">微信为何检测并退出 Codex 操作：原因与绕行思路</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

在 Mac 上用 Codex 的 Computer Use 操作微信时，微信会检测到非人类操作并强制退出、要求重新登录。评论中有人实测后给出较具体的判断：微信能通过事件来源进程识别出操作来自 `Codex Computer Use.app` 内的 `SkyComputerUseService`，因此这不是单纯的“模仿人类点击”就能绕过的问题。

### 关键要点

- **检测机制**：程序化点击可被识别，来源进程是重要线索；微信本身也常申请较高权限。
- **可行思路**：有回复建议改用 RPA，或让 Codex 自行开发一个操作电脑的 App，而不是直接使用 Codex Computer Use；也有人提出关闭微信的截图等权限后 Computer Use 可正常使用。
- **硬件隔离方案**：用 ESP32 HID 模拟鼠标键盘，再配合 AI 识图操作；或通过 iPhone 镜像、物理外挂等方式间接控制。
- **旁证**：有用户用 Sunshine/Moonlight 远程控制台式机上的微信，同样触发退出，说明风控不只针对 Codex。

### 评论补充

多位用户确认遇到过类似问题，并认为国内 App 普遍存在此类风控，手机端 AI 助理短期内难以发挥太大作用。上述绕行方案多为个人经验，效果和合规性需自行验证。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251624" target="_blank" rel="noopener noreferrer">微信是怎么屏蔽 codex 的</a></span><span class="topic-stats">回复 16 · 收藏 5</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251701" markdown="1">
<summary>
<span class="topic-rank">7</span>
<span class="topic-title">自建安卓远程对比RustDesk：实测延迟与放弃理由</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者为局域网安卓控制工具 UnitCtrl 评估是否加外网远程，设定“比 RustDesk 好才做”的规则，并用同一套方法实测后决定放弃。

### 关键要点
- **测量方法可复用**：远端安卓与本地浏览器同开一个毫秒时钟页面，把毫秒数编成黑白条码（第二排取反自检），每 0.5 秒截屏读两个条码相减，得到“屏幕到屏幕”真实延迟；两机时钟差约 33ms 已扣除。
- **测试条件**：同一电脑、同一远端设备（无硬件编码器，最高 15fps）、同一网络（RTT 约 240ms，带宽 1–3Mbit/s，夜间抖动），每组 25 张截图。
- **结果**：日常点看场景 RustDesk 中位约 0.55s、最慢 10% 约 0.86s，UnitCtrl 为 0.84s/1.41s；整屏运动时 RustDesk 掉到 2–3fps、延迟累积 20 多秒，UnitCtrl 稳定约 1.4s（但测试页占满 CPU，对软件编码不利）；清晰度上 UnitCtrl 笔画锐度约为 RustDesk 的 2.5 倍；带宽降到约 1Mbit/s 时 RustDesk 仍约 0.5s，UnitCtrl 最多落后 37 秒。
- **原因**：RustDesk 用 VP9 把码率压到约 0.2Mbit/s，并按 RTT 主动降帧降质；UnitCtrl 用硬件编码、码率约 1.2Mbit/s，为局域网设计，不会随网络降码率。
- **源码发现**：RustDesk 界面“质量监测”的延迟只是测试消息往返时间，不含编码、排队、解码，显示 255ms 时实际延迟已超半秒。

### 评论补充
评论未讨论技术细节，主要质疑用 AI 代写发帖，作者回应是头疼不想码字；另有回复提到局域网可用 adb 自带方案。

结论：外网远程继续用 RustDesk 并保持更新，UnitCtrl 只做局域网；延迟测量页作者表示可按需贴出。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251701" target="_blank" rel="noopener noreferrer">想给自己做的安卓控制工具加个外网远程，和 RustDesk 认真比了一次，结论是：不做了</a></span><span class="topic-stats">回复 6 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251702" markdown="1">
<summary>
<span class="topic-rank">8</span>
<span class="topic-title">pgvector 语义降噪与防重推送的四个工程坑</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者基于开源底座二次开发了一套垂直情报过滤管道，单机部署在 Linux VPS 上，每天只推送 2~3 条高信噪比卡片。运行半个月后，他复盘了四个工程层面的坑，对自建信息流、做数据清洗或向量搜索的读者有参考价值。

### 关键要点
- **语义去重的阈值陷阱**：直接用文本 embedding 做 pgvector 去重时，余弦相似度阈值设 0.85 会误杀同赛道不同技术方案的独立项目，放宽到 0.92 又会漏掉换标题的通稿。作者改为先做实体与依赖层提取（GitHub Repo 归一化、顶级域名折叠），实体命中直接折叠；不命中才走落地可行性、商业闭环、代码成熟度等 5 轴语义打分，把公关稿在打分层过滤掉。
- **异步双写导致重复推送**：异步队列消费时，外部消息发送成功，但数据库记账因连续拼接两段 SQL 触发 Prepared Statement 解析报错，事务回滚后队列误判任务未完成，指数退避重试造成同一条消息向外部端点死循环狂推。教训是跨外部网络调用的副作用必须与本地数据库状态做原子防重，外部调用前显式插入 pending 占位锁。
- **克制的推送纪律**：单日封顶 ≤4 条，两次推送硬间隔 ≥2.5 小时，23:00–08:30 绝对静默，任务推迟到次日早晨。
- **归档**：每晚自动抓取 Top 信号并生成 Markdown 归档，推送到 GitHub 仓库 https://github.com/louis-cai/daily-indie-radar 。

### 评论补充
评论仅有“收徒”类闲聊，作者回应不收徒，未提供额外技术信息。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251702" target="_blank" rel="noopener noreferrer">二开信源管道跑了半个月，聊聊用 pgvector 语义降噪和防重推送踩的几个深坑</a></span><span class="topic-stats">回复 2 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251577" markdown="1">
<summary>
<span class="topic-rank">9</span>
<span class="topic-title">Chrome 与 Firefox 支持 JXL HDR，LocalViewer 可转换样图</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
Chrome 和 Firefox 近期都加入了对 JXL 图片的支持，网页因此可以直接显示采用 HDR PQ transfer 的图片。发帖者用 LocalViewer（https://github.com/zmz125000/LocalViewer）把 JXR 和相机 RAW 转成多种 HDR 格式做测试，并给出各格式的输出参数：

### 关键要点
- **JXL HDR**：16-bit float，Linear 加亮度元数据；**JXL HDR PQ**：16-bit integer，PQ。
- **JPEG HDR**：8-bit base 加 gain map，sRGB base 做 HDR 重建。
- **AVIF HDR**：10-bit，无损时 12-bit，sRGB base 加 ISO gain map；**AVIF HDR PQ**：10-bit，无损时 12-bit，PQ。
- **AVIF ULTRA HDR**：遵循 ISO 21496-1。
- 非 HDR 显示器上，白色过曝区域属于 HDR 亮度范围，属预期现象。

### 评论补充
有用户在小新 Pro GT 上确认样图可正常显示。发帖者补充：一张 AVIF 4K 截图约 1MB，兼容安卓、苹果及 SDR/HDR，认为互联网 HDR 时代到来；另有用户认为 AVIF 更好。发帖者还发现 Chrome 会针对 SDR 显示器做 tone mapping，高光细节保留完整，但整体观感张力下降，与 gain map 格式对 SDR base 做动态范围压缩不同。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251577" target="_blank" rel="noopener noreferrer">测试一下 Chrome 最新支持的 JXL HDR 图片格式</a></span><span class="topic-stats">回复 4 · 收藏 1</span></p>

</div>

</details>
