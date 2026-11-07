---
layout: report-home
title: "V2EX 每日热点回顾"
permalink: /latest/
status: success
target_date: 2026-11-06
generated_at: "2026-11-07 09:49:41"
summary: "昨日主题 261 个，过滤 161 个，DeepSeek 分析 100 个，保留高价值内容 22 个。"
count_all: 261
count_excluded: 161
count_included: 100
count_high_signal: 0
count_valuable: 22
report_url: "/2026/11/06/"
data_url: "/data/2026-11-06.json"
---

# V2EX 2026-11-06 昨日新帖报告

<details class="topic-card" data-topic-id="1254940" markdown="1">
<summary>
<span class="topic-rank">1</span>
<span class="topic-title">V2EX Polish 2.5.6 扩展致 Chrome/Edge 卡死，禁用可恢复</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

V2EX Polish 扩展（ID `onnepejgdiojhiflfoemillegpgpabdm`）在自动升级到 **2.5.6** 后出现后台 Service Worker 死循环，占满一个 CPU 核心，并拖累浏览器主进程，导致标签页卡顿、界面掉帧、发烫甚至假死。作者实测 Chrome 156.0.8078.80 下该扩展进程 CPU 达 106.3%，主进程达 148.5%；**禁用扩展后恢复正常**。

### 关键要点

- 排查入口：浏览器任务管理器（Chrome/Edge 均可）查看“服务工作进程”，确认扩展 ID 前缀 `onn` 的进程是否持续高 CPU。
- 机制判断：该进程网络流量为 0，说明不是轮询请求，而是纯计算型死循环（疑似 MutationObserver/定时器反复触发）。
- 临时处置：禁用或卸载 V2EX Polish；有用户反馈升级到 2.5.6 后反而正常，也有人 2.5.5 就卡，版本表现不一致。
- 影响范围：不止 Chrome，Edge 与 Firefox 版也有用户报告高 CPU、持续读写磁盘。

### 评论补充

多位用户最初误判为浏览器或电脑问题并重启机器，说明该故障容易被误诊。有用户推荐自写替代脚本 [V2EX-Pro](https://github.com/git710/V2EX-Pro)，但作者承认楼中楼回复存在问题；另有用户建议只用轻量插件做内容屏蔽与发布增强。也有观点认为非官方扩展长期存在维护与安全风险。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254940" target="_blank" rel="noopener noreferrer">V2EX Polish 2.5.6 版本导致谷歌浏览器卡死</a></span><span class="topic-stats">回复 47 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1254922" markdown="1">
<summary>
<span class="topic-rank">2</span>
<span class="topic-title">开源实体地球仪玩具：转动收听当地电台</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者把多年前 Radio Garden 的构想做成了实体玩具“环宇寻声”：转动真实地球仪，系统感知球顶朝向，播放对应地区的电台，或让语音角色给孩子讲世界故事。项目已开源，仓库为 https://github.com/iamsk/globesound 。

### 关键要点
- **硬件组成**：实体万向地球仪 + 维特智能 BWT901BLECL 蓝牙姿态传感器，预留充电孔和触控开关，整体无外接连线。
- **软件组成**：Python Web 服务与微信小程序，通过姿态传感器判断球顶朝向并映射到地理位置。
- **制作门槛**：作者称 AI 让这类“许愿式硬件开发”降到零门槛，适合有编程基础、想带孩子做互动玩具的人参考。
- **地球仪选型**：作者回复称多数地球仪都可以，最新同款为 https://item.taobao.com/item.htm?abbucket=13&id=944577855485 。

### 评论补充
多位回复者表示想等孩子大一点再做，说明项目对亲子场景有吸引力；也有人反馈在 Google 搜索“实体万向地球仪”能搜到本帖。评论未涉及具体实现细节或踩坑经验，动手前仍需自行阅读开源仓库。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254922" target="_blank" rel="noopener noreferrer">给女儿做的小玩具：环宇寻声</a></span><span class="topic-stats">回复 9 · 收藏 18</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1254921" markdown="1">
<summary>
<span class="topic-rank">3</span>
<span class="topic-title">用Claude为GPT写自定义指令，改善低信息密度文风</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者让 Claude 分析 GPT 回复中“不说人话”的问题，并把 Claude 给出的诊断和提示词直接用于 GPT 的自定义指令，回测历史对话后认为回答风格明显精炼。

### 关键要点
Claude 对成因的推测（原文明确为猜测）：
- 训练奖励偏爱“看起来严谨”的回答，“不等于”“并非”“不能仅凭”等句式显得周全，因而被强化；
- 模型对“被误解”过度防御，习惯先否定一个没人提出的观点再给结论；
- “不是 A，而是 B”这类对比句式本身像有洞见，且模型生成文本又被用于训练，腔调不断累积；
- 上下文自我强化，前几句出现该句式后越写越极端。

可直接复用的提示词要点：
- 第一句直接给结论或可执行答案，不复述用户已给的信息；
- 默认不用标题和表格，用短段落，仅命令和代码用代码块；
- 已验证事实与猜测分开写，猜测最多列一个最可能的并说明验证方式；
- 排查类问题一次给出完整下一步，含命令及“看到什么结果意味着什么”；
- 不写总结段和“最终判断”“我想强调”等收尾；
- 判断改变时直接说明“之前判断错了，原因是…”，不悄悄改口；
- 篇幅控制在必要的最小长度。

### 评论补充
多位回复者认同 GPT 防御性增强、信息密度下降，并表示要试用；有人正在改系统提示词让 Codex 模仿 Claude 的说话和写代码风格。作者补充：网页端在“个性化—自定义指令”中添加。

注意：成因分析是 Claude 的推测，效果仅为作者个人回测，缺少系统性对比数据。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254921" target="_blank" rel="noopener noreferrer">找 claude 给 gpt 写了段自定义指令（提示词），不说人话的问题主观上好了不少</a></span><span class="topic-stats">回复 7 · 收藏 13</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255048" markdown="1">
<summary>
<span class="topic-rank">4</span>
<span class="topic-title">被裁7个月只赔1个月，还少算6天工资合理吗</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
楼主工作 7 个月后被以“效益不好”为由通知离职，公司提出赔偿 1 个月工资，离职协议截止日期写 11 月 6 日，但工资只结算到 10 月 30 日。楼主提出少算 6 天工资后，领导称“太让他心寒了”。评论区几乎一致认为：楼主的质疑合理，问题在于赔偿本身可能给少了。

### 关键要点
- **赔偿标准**：多位回复指出，工作满 6 个月不满 1 年，经济补偿 N 按 1 个月计；若公司未提前 30 天通知，还应额外支付 1 个月代通知金，即 **N+1=2 个月**，而非 1 个月。
- **工资结算**：协议截止到 11 月 6 日、工资却只算到 10 月 30 日，属于少发 6 天工资，应当据理提出。
- **“心寒”是话术**：评论认为领导的说法带有 PUA 色彩，被裁的是员工，不必因正常主张权利而产生羞耻感。
- **可执行做法**：先核对 N、代通知金和工资结算日期；协商不成可考虑劳动仲裁。

### 评论补充
有回复提醒，楼主误把“1 个月”当成仗义，实际应按 N+1 主张；也有人用“砍价—卖家抱怨”作比喻，但被反驳：本案是被离职（裁员），并非双方协商离职，比喻不成立。

＞ 以上为评论中的经验判断，具体赔偿应以劳动合同、当地法规和实际通知情况为准。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255048" target="_blank" rel="noopener noreferrer">今天离职谈话领导说他心寒了</a></span><span class="topic-stats">回复 39 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1254935" markdown="1">
<summary>
<span class="topic-rank">5</span>
<span class="topic-title">V2EX Polish 2.5.5 自动签到死循环致高 CPU，2.5.6/2.5.7 已修复</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
V2EX Polish 2.5.5 被多名用户确认会导致浏览器 CPU 异常占用，禁用插件后恢复正常。根因是自动签到逻辑陷入死循环，而非普通性能问题。

### 关键要点
- **触发机制**：`background` 的 `reconcileCheckInAlarm` 中，存储里的 `daily` 缺少 `memberName` 时，`normalizeCheckInState` 每次生成带随机 jitter 的新对象，`targetAt` 不断变化；用 `state !== storage.daily` 判断永远不相等，于是反复写入 `daily`，触发 `chrome.storage.onChanged` 再调度，形成无限循环。
- **实测数据**：有用户观察到主进程约 147% CPU，各 profile 的 Service Worker 约 37%，`chrome.storage.local` 的 `daily` 每秒被写约 2500 次。
- **触发条件**：升级到 2.5.5 后尚未打开过 V2EX 页面（content script 未上报用户名），或未登录。关闭自动签到无效，因为写入发生在判断 `autoCheckIn.enabled` 之前。
- **临时处理**：登录状态下打开一次 v2ex.com 任意页面，让 `memberName` 写入即可停止循环；未登录的 profile 先停用插件。
- **修复版本**：评论反馈 2.5.6 已修复，Firefox 用户称 2.5.7 后正常；可卸载重装或更新后重启浏览器。

### 评论补充
有用户贴出 GitHub issue #158 作为同一问题记录。站长 Livid 指出，这种大量异常访问会触发 Cloudflare 的 403，相当于借用户电脑发起 DDoS；使用代理环境的用户已遇到 403。另有用户分享自写签到脚本和替代项目 V2EX-Pro。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254935" target="_blank" rel="noopener noreferrer">V2EX Polish 2.5.5 异常占用</a></span><span class="topic-stats">回复 22 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255024" markdown="1">
<summary>
<span class="topic-rank">6</span>
<span class="topic-title">开源 iPhone-control：用 Rust 在 Linux 上让 AI 操作真机 iPhone</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者用 Rust 重写了此前由 go-ios、pymobiledevice3、WDA 拼装的方案，解决每个组件都要单独安装和签名、隧道容易断、需要自己写脚本监控的问题。项目名为 iphone-control，采用 MIT 协议，底层依赖 idevice、Impactor 和 WebDriverAgent，编译为单个 Rust 二进制，不需要 Xcode、付费开发者账号或越狱。

### 关键要点
- 提供 15 个 MCP 工具，覆盖截图、点击、滑动、长按、输入中文、按实体键、开关 App、打开链接。
- 能读取界面元素，AI 可直接说“点设置”而不必猜坐标；读不到元素的游戏、地图界面则退回截图点坐标。
- 每个操作可带回操作后的界面，多步操作能一次发完；作者称三个日常任务总耗时减少 44%（如算 12×34 从 58 秒降到 35 秒）。
- 支持无人值守：拔插数据线、手机重启、WDA 崩溃会自动恢复，免费 Apple ID 的 7 天签名自动续，异常经 Bark 或 Telegram 提醒；可选自动输入锁屏密码解锁。
- 已在 iPhone 15 Pro Max + iOS 27、iPhone 12 mini 上测试，其他机型待反馈。

### 评论补充
作者说明通过 USB 连接手机与机器，延迟很低，耗时主要来自 AI 思考时间；黑屏状态下也能自动解锁执行。有用户询问能否用于支付宝收能量等自动化任务，作者未给出明确结论，实际可行性待验证。

项目地址：https://github.com/Derrors/iphone-control ，文档：https://derrors.github.io/iphone-control/

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255024" target="_blank" rel="noopener noreferrer">[开源] iPhone -control: 基于 Rust 构建，在 Linux 上让 AI 操作真机 iPhone</a></span><span class="topic-stats">回复 10 · 收藏 7</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1254876" markdown="1">
<summary>
<span class="topic-rank">7</span>
<span class="topic-title">开源英语学习工具 piclex-web：Docker 部署与 digest 报错修复</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者开源了基于经典电影台词学英语的 Web 工具 piclex-web，提供在线体验地址和 GitHub 仓库，支持 Docker 部署、即开即用。主帖信息以链接为主，具体功能细节主要来自评论区。

### 关键要点
- **部署报错已修复**：有用户 Docker 部署后遇到 `Cannot read properties of undefined (reading 'digest')`。作者说明原因是局域网 HTTP 访问时浏览器不提供 `crypto.subtle`，新版已兼容并保留卡组校验，Docker Hub 的 `latest` 镜像已更新（修复版本 sha-b3e185b）。
- **更新命令**：已部署过的用户可执行 `docker pull zhaoolee/piclex-web:latest`，再 `docker stop`/`docker rm` 旧容器，最后用 `docker run -d --name piclex-web --restart unless-stopped -p 127.0.0.1:18120:8080 zhaoolee/piclex-web:latest` 启动；首次部署只需 pull 和 run。
- **局域网访问**：把端口映射改为 `-p 18120:8080`，访问 `http://服务器IP:18120`；相机等浏览器功能仍需 HTTPS。
- **数据存储**：照片和学习进度保存在浏览器，更新后刷新原页面即可，无需清除站点数据。

### 评论补充
用户反馈修复后已可正常使用，并提出希望记录“不认识”的单词以便反复练习。作者指出个性化设置中的“快拼”功能可只练未拼对的单词，但需练习几十个单词后解锁。

仓库：https://github.com/zhaoolee/piclex-web/

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254876" target="_blank" rel="noopener noreferrer">经典电影台词，学英语， WEB 版已开源， docker 部署，即开即用！</a></span><span class="topic-stats">回复 5 · 收藏 9</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1254858" markdown="1">
<summary>
<span class="topic-rank">8</span>
<span class="topic-title">6年打造去中心化社交网络Peers-Touch：80万行代码与联邦架构</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者用约 6 年时间开发去中心化社交网络 Peers-Touch，目标是让个人掌握自己的社交关系与数据，而非交给大厂。方案采用联邦式架构：每人运行自己的 Home Station（可部署在 NAS、树莓派或云主机），身份、关系、消息保存在本地，节点间像邮件一样联邦互连，并规划端到端加密。作者称已用三个独立节点跑通首次联邦对话。

### 关键要点
- **技术栈与规模**：Go / Rust / TS / Kotlin / Swift 五栈，约 80 多万行代码；前几年传统开发，后期借助 Trae 完成。
- **架构预留**：Agent、小程序、区块链均规划跑在个人 Station 上；区块链目前只用到密码、寻址、哈希链，未引入账本与共识。
- **冷启动**：计划由社区提供 boot 种子节点和轻量 relay，短期先打磨 IPv6 公网等常见网络环境。
- **作者观点**：AI 时代更值钱的是想出新东西、快速学习、端到端落地交付。

### 评论补充
有评论指出同类项目已很多（Lemmy、Mastodon/ActivityPub、Bluesky、nostr、Matrix），并引用 xkcd 927 质疑差异化与用户来源；作者回应不追求竞争，想做以家庭为单位、可选择性共享的信息港湾。另有评论质疑文案 AI 味重，作者承认并致歉。项目代码见 https://github.com/peers-labs/peers-touch 。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254858" target="_blank" rel="noopener noreferrer">花了 6 年搭了一个去中心化的社交网络作品</a></span><span class="topic-stats">回复 16 · 收藏 7</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1254944" markdown="1">
<summary>
<span class="topic-rank">9</span>
<span class="topic-title">无固定期限合同与2N赔偿的关系辨析</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

主帖认为，无固定期限合同在法律上只规定同等条件下优先留用，公司可通过工资偏高、产出偏低等理由主张“非同等条件”；能否拿到 2N 主要取决于是否愿意耗仲裁，与合同类型关系不大。评论对此有补充也有反驳。

### 关键要点

- **2N 的法定前提是违法解除**，与合同是否无固定期限无直接关系；普通合同若被违法解除，同样可主张 2N。
- 固定期限合同到期终止，公司通常支付 N 即可合法走人；无固定期限合同没有“到期终止”路径，公司主动让员工走人需走经济性裁员等程序，合法性门槛更高。
- 无固定期限的签订条件看**连续订立二次固定期限合同后第三次续订**或**连续工作满十年**，并非“至少 6 年工龄”。
- 仲裁与诉讼排期长，但实际参与时间短，可委托律师代理，通常不影响找工作；若主张恢复劳动关系，则与赔偿金二选一。

### 评论补充

有回复指出，法院看的是可量化的证据，公司口头主张“非同等条件”未必被采信；也有从业者表示，工龄长的无固定期限员工更倾向选择 2N 而非恢复劳动关系。小公司支付能力有限，N 都难拿，2N 更需争取。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254944" target="_blank" rel="noopener noreferrer">为什么这里这么多法盲觉得无固定期限被开就是 2n 的赔偿？</a></span><span class="topic-stats">回复 27 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255035" markdown="1">
<summary>
<span class="topic-rank">10</span>
<span class="topic-title">C++/Qt 原生 Markdown 编辑器 Muffin：支持百兆文件与 Mermaid</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者发布了一款名为 Muffin 的桌面 Markdown 编辑器，采用 C++20 + Qt 6 纯原生实现，不捆绑 Chromium、不依赖 Node，MIT 开源，提供 Windows / macOS / Linux 安装包（github.com/jstzwj/Muffin）。

### 关键要点
- **性能取向**：作者称主流编辑器（Typora、Obsidian、MarkText）多为网页内核或 Electron 套壳，启动慢、内存高、大文件易卡；Muffin 以原生实现换取冷启动快、内存占用低。
- **大文件能力**：懒加载视口布局，25MiB 文档首屏 7.6s，百兆文件可流畅编辑，1G Markdown 也能打开。
- **编辑体验**：真·所见即所得，直接在渲染页面上书写，底层 Markdown 自动同步；原生渲染 Mermaid 全部 38 种图表、KaTeX 数学公式，无浏览器运行时；支持 tree-sitter 高亮、可编辑表格、CSS 主题。
- **只读模式**：作者回复称可用 F12 锁定编辑。

### 评论补充
- 有用户试用后反馈“还不错”，也有人关心是否长期维护。
- macOS 用户报告 v0.7.13 arm64 包在 Sequoia 15.8.1 / M3 上无法运行，DMG 显示不兼容，去除隔离属性后提示版本不匹配，怀疑编译时未覆盖该系统版本；作者先怀疑是未签名问题，但该解释未获确认。
- 关于用 Rust 重写，作者认为可行，但 Rust GUI 生态尚不完善，C++/Qt 已写一年，Rust 估计需两三年。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255035" target="_blank" rel="noopener noreferrer">桌面 Markdown 编辑器几乎全是网页套壳，我们用 C++/Qt 写了个纯原生的： Muffin</a></span><span class="topic-stats">回复 11 · 收藏 7</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1254893" markdown="1">
<summary>
<span class="topic-rank">11</span>
<span class="topic-title">外地车牌平移换牌刷进京证：费用与保费实操经验</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

有外地车牌燃油车、通勤在五环外，想通过“平移换牌”刷新进京证次数，同时担心续保保费上涨。多位实操过的用户给出的结论是：**平移本身费用低、流程简单，对保费基本没有影响**，但个别情况下会失去续保优惠。

### 关键要点

- **费用**：平移一次约 200 元，主要是换牌费用；不免费拆车牌时，车管所旁有黄牛提供有偿服务。
- **流程**：提前在 12123 预约，审核通过后到车管所或交易站线下办理；工作日去更稳妥，部分车管所周六上午可办，去得早半天能完成。
- **保费**：多位用户实操两年以上，称保费无变化；也有人表示一年不出险但没有续保优惠。有回复指出，保费差异主要来自保险的地区保护，同一辆车北京报价可能比河北贵一千多元。
- **黄牛**：门口黄牛常夸大流程复杂，可礼貌拒绝，直接问工作人员。

### 评论补充

有用户质疑平移成本是否够租京牌，回复称远不够，平移只是换牌费用。另有回复提到排队时间长、办理费劲，建议预留时间。关于绕开摄像头，发帖人表示已无法绕行。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254893" target="_blank" rel="noopener noreferrer">进京证平移刷 CD 会有啥问题</a></span><span class="topic-stats">回复 19 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255058" markdown="1">
<summary>
<span class="topic-rank">12</span>
<span class="topic-title">小程序亏1659.71元：CDN、推广与Claude成本拆解</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者公开了自己小程序的收支明细：流量主收入 **+485.29 元**，总亏损 **1659.71 元**。亏损主要来自四块：服务器与 CDN 等资源 **805 元**（接入 3D 模型且前期未优化，流量消耗大，其中 43.52 元用于扩容硬盘）；活动支持 140 元；小红书、B 站、抖音等推广约 400 元；Claude Pro 账户消耗至少 800 元。作者未计入小程序认证费（30 元）和人工成本，并坦言人工才是最大成本。

### 关键要点
- 广告只放开屏位，其他广告 eCPM 太低；开屏 eCPM 从 4.x 降到 1.x，收入承压。
- 资源成本是亏损主因之一，3D 模型与未优化的流量消耗值得警惕。
- 推广与 AI 工具订阅属于隐性支出，容易在核算时被忽略。
- 作者心态平和，认为亏钱可接受，但数据说明“小体量小程序靠广告难覆盖成本”。

### 评论补充
有回复建议用腾讯 EdgeOne 承接 CDN 流量以降低成本，称每月数 T 流量仍免费；另一回复指出其个人版及加速包实际收费，免费版可能已关闭，需自行核实。也有回复认为花千元跑通小程序全流程不算亏，并提到 eCPM 与小程序类目强相关（如车类偏高）。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255058" target="_blank" rel="noopener noreferrer">分析了下我小程序的盈利情况,亏了￥ 1659.71</a></span><span class="topic-stats">回复 10 · 收藏 5</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255053" markdown="1">
<summary>
<span class="topic-rank">13</span>
<span class="topic-title">giffgaff 封号后可通过在线客服申请余额退款</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

有用户被封禁大半年的 giffgaff 号码，通过在线客服申诉后未获解封，但成功拿到原路退款。官方邮件明确：SIM 仍保持断开状态，仅退还用户本人直接购买的剩余余额，3–5 个工作日到账；若想保留号码，需生成 PAC 码转往其他英国网络，或用 STAC 码不带号转网。

### 关键要点

- **申请方式**：走在线客服反馈，可借助 AI 撰写申诉文案，提交后等待数日邮件回复。
- **退款范围**：只退本人直接充值的余额，第三方充值或已捐赠的余额不在其列。
- **号码处理**：退款不等于解封，保留号码需 PAC 码，放弃号码可用 STAC 码。
- **结果不稳定**：有人首次申诉被拒、再次申诉才退；也有人开机不足七天仍被拒。

### 评论补充

多位用户反馈收到封号邮件后实际并未被封，甚至获赠 10 欧话费；也有人提前把余额捐出，事后认为捐早了。有第三方充值用户称退款已到银行卡，但汇率波动导致小额亏损。替代方案方面，有评论推荐 KiteSIM（https://blog.xiaoz.org/archives/22641）用于注册海外服务和上网。整体共识是：即便号码仍可用，信任已受损。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255053" target="_blank" rel="noopener noreferrer">giffgaff 退款了兄弟们，被封了大半年试着去投诉，没解封但是退款了</a></span><span class="topic-stats">回复 17 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255006" markdown="1">
<summary>
<span class="topic-rank">14</span>
<span class="topic-title">开源墨水屏本地阅读器「墨案」：EPUB/漫画秒开、完全离线</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者针对墨案 Pantone 6 彩墨屏（RK3568 全小核芯片）上自带及常见第三方阅读器启动慢、翻页残影的问题，自写了一个本地阅读器「墨案」，主打速度与墨水屏适配，完全离线、开源，需 Android 11 及以上。

### 关键要点
- **性能实测（release 包）**：冷启动到书架约 0.8 秒且只刷一次屏；文字书白屏到出字约 0.6 秒，二次打开 0.2–0.4 秒；漫画点开到出图约 0.25 秒，翻页 CPU 约 85ms，停留时 CPU 近 0。
- **技术取舍**：不用 WebView，排版引擎自写、基于 StaticLayout；无后台服务与 WakeLock。
- **墨水屏设计**：全 app 无动画、渐变和分割线，操作一帧瞬切；书架 4×3 网格按最近阅读排序；封面缩略图针对 Kaleido 屏调饱和度与中间调。
- **阅读功能**：文字/原版（Readium 还原出版商排版，适合竖排复杂版式）/漫画三种模式按书记忆；左右点按下一页、右滑上一页、音量键翻页；字号行距边距粗细分档可调，可导入字体；划线支持 4 种荧光色并自动导出为书库根目录 `Marginalia.txt`。
- **书库与权限**：通过系统文件授权选书库文件夹，不需「所有文件访问」权限、不改动原文件；子文件夹自动归为一套，适合整套漫画。

源码与下载：https://github.com/zhenlonghe/shuchao

### 评论补充
该主题暂无回复，以上信息均来自主帖自述，性能数据为作者单机实测，且仅在墨案 Pantone 6 上验证，其他设备表现待核验。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255006" target="_blank" rel="noopener noreferrer">给自己的墨水屏写了个本地阅读器「墨案」： EPUB / 漫画秒开，不联网，开源</a></span><span class="topic-stats">回复 0 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1254980" markdown="1">
<summary>
<span class="topic-rank">15</span>
<span class="topic-title">小火箭跨区更新无需切换 Apple ID 的机制与例外</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

多位用户反馈，小火箭（Shadowrocket）等非国区 App 的跨区更新并不需要来回切换 Apple ID，这一能力已存在较长时间，并非近期新增。主帖作者此前以为必须切换，实际是设备上长期同时使用两个账号后，系统会自动允许直接更新。

### 关键要点

- **触发条件**：设备曾登录过该外区账号，并被认定为常用设备（会触发双重验证），之后更新列表即可直接显示并更新。
- **更主动的做法**：在“设置 → 邮件”中登录其他区账号，即可跨区更新；有用户称该方法已使用多年。
- **并非全部适用**：有用户指出长桥等部分 App 无法在国区 ID 下更新，说明存在例外。
- **偶发验证**：更新时可能要求输入密码或重新验证，属于正常现象。
- **版本问题**：有用户提到 iOS 18 某版本曾刷不出非当前 Apple ID 的 App，可通过切换商店地区让其显示，仍无需切换账号。

### 评论补充

关于“邮件里添加账号”能否用于跨区**新下载**，评论中有人提问但未获明确答复，该点仍待验证。整体共识是：跨区更新早已可行，能否直接更新取决于账号与设备的绑定状态及具体 App。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254980" target="_blank" rel="noopener noreferrer">最近发现更新小火箭不需要切换美区苹果 ID 了</a></span><span class="topic-stats">回复 22 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1254912" markdown="1">
<summary>
<span class="topic-rank">16</span>
<span class="topic-title">Claude被KYC封号后，iOS年付订阅如何申请退款</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
有用户因 Claude 触发 KYC 而被封号，其订阅为 iOS App Store 年付、约 200 美元，剩余大半年。评论区的共识是：**退款应通过 Apple 发起，而不是在 Claude 内申诉**；能否退款、退多少，取决于 Apple 的审核结果和订阅类型。

### 关键要点
- 退款入口：通过 Apple 的“报告问题”页面提交申请（评论给出链接 https://support.apple.com/zh-cn/118223），理由可写“账号被封，无法使用”。
- 有月付用户称，用护照完成 KYC 后立即被封，随后向 Apple 申请退款并已到账；但该用户是月付，年付能否退尚不确定。
- 多位用户反馈退款按剩余比例计算，也有人称只能退到余额；另有月付用户称临近用满一个月仍获全额退款。
- 有用户称因违反使用规则，年费剩余部分不予退款（亲测）；也有人称申请被拒、复审失败。结果并不一致。
- 申诉等待期可能造成损失：有用户申诉约 10 天失败，退款按比例计算时未计入这段时间。

### 评论补充
是否先用护照尝试通过 KYC，存在分歧：有人建议直接试，失败再退款；也有人提醒国内护照可能很快导致封号。多位用户提醒，长期年付且无备用方案风险较大。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254912" target="_blank" rel="noopener noreferrer">被 kyc 了， ios 订的年付， 能上传自己护照封号走退款吗？</a></span><span class="topic-stats">回复 19 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1254931" markdown="1">
<summary>
<span class="topic-rank">17</span>
<span class="topic-title">V2EX Polish 2.5.5 自动签到死循环致浏览器高 CPU</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
有用户发现浏览器冻结、无法拖动，任务管理器显示 CPU 占用异常，逐一开关扩展后确认问题来自 V2EX Polish 插件，且该插件当天刚更新。多名用户复现了相同现象，一度怀疑插件被投毒。

### 关键要点
- 已定位为 **BUG 而非投毒**：GitHub issue 指出 2.5.5 版本的自动签到逻辑陷入死循环，导致持续高 CPU 占用（https://github.com/coolpace/V2EX_Polish/issues/159）。
- 受影响表现包括浏览器卡死、风扇狂转、扩展后台占满一个 CPU 核心；结束进程后会自动重启并再次高占用。
- 临时处置：停用或卸载该插件可让占用回落；也可关闭自动签到功能规避。
- 替代签到方案：有用户改用 https://github.com/v2hot/v2ex.rep ，打开即可完成签到。

### 评论补充
多位用户确认可复现，并反馈卸载后 CPU 恢复正常。有用户提到在 macOS 上未发现该问题，Windows 用户反馈较多，平台差异尚待核实。另有用户记录了借助 AI 助手排查扩展 CPU 占用的过程，可作为定位浏览器扩展问题的通用思路：用 Chrome 任务管理器按 CPU 排序，锁定高占用扩展后再停用验证。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254931" target="_blank" rel="noopener noreferrer">V2EX Polish 插件今天更新是不是被投毒了，浏览器高 cpu 占用</a></span><span class="topic-stats">回复 8 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1254898" markdown="1">
<summary>
<span class="topic-rank">18</span>
<span class="topic-title">开源自动日记 Beayy：后台记录电脑手机手表并生成日总结</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者开源了自动日记工具 **Beayy**，解决“晚上想不起今天干了啥”的问题。它会在后台记录电脑、手机、手表上的活动，由用户自配的模型生成每小时摘要、每晚日总结，并汇总成周报、月报。作者称从 10 月中起每天使用。

### 关键要点
- **记录范围**：电脑（Mac/Windows）记录前台 app 与窗口、打字、屏幕文字、是否在电脑前；密码框不记录，可排除 app、暂停或删除近期记录。手机端 iPhone 读取屏幕使用时间，安卓读取各 app 使用时长；位置只记停留点与时段，不记轨迹；可选 Apple Watch 录音转文字。
- **产出**：每小时摘要、每晚日总结（一句话、点评、做成了什么、偏离、明天），再汇成周、月总结；可用自己的话写规则（如“22:00 以后不开电脑”）并在总结中对照。
- **本机 MCP**：可在 Claude Code、Cursor 中直接查询历史，如“上周三下午我在忙什么”。
- **数据与模型**：数据全在本机；同步可选 iCloud、WebDAV、官方服务器或 Docker 自部署，均为本机加密后传输。摘要使用任意 OpenAI 兼容接口，或官方模型（新账号每月送 5 万 token）。
- **技术栈**：Rust + Tauri 2，iPhone 为 Swift 外壳、安卓为 Kotlin 外壳，界面一套网页，MIT 协议。

### 限制
不支持 Linux；Windows 版未签名，首次运行需点“仍要运行”。iPhone 与手表版通过 TestFlight 分发。

仓库：https://github.com/hengfengliya/beayy
下载：https://github.com/hengfengliya/beayy/releases/latest
TestFlight：https://testflight.apple.com/join/Ptzqu4q8

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254898" target="_blank" rel="noopener noreferrer">做了个开源的「自动日记」： Beayy 在后台记下电脑、手机、手表上的一天，每晚写日总结</a></span><span class="topic-stats">回复 0 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1254859" markdown="1">
<summary>
<span class="topic-rank">19</span>
<span class="topic-title">新西兰房产拍卖实录：现场竞价如何被情绪推高至106.4万</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者在新西兰参加房产拍卖，记录了一次因家人情绪失控而险些高价接盘的现场经历，并给出可复用的拍卖纪律建议。

### 关键要点
- **房源估值**：官方评估区间 90–102 万外币，相似房源成交 96.8 万；作者心理底价 102 万。
- **隐藏成本**：产证 743 平，扣除 8 家共享车道 96 平后实际可用约 646 平；另有 139 平共享地仅能各停一辆车。
- **拍卖节奏**：华人买家提前出价 98 万触发提前拍卖，压缩其他买家的贷款、保险、律师审查准备时间；现场三组买家全为华人。
- **失控过程**：作者在 103 万停手，妻子胜负欲被激发，与对手以 2000–5000 的幅度快速加价，逼近 106 万，作者三次阻止才在 106.4 万叫停。
- **事后判断**：对手疑似中介代喊、志在必得；作者认为 106 万已明显偏离价值，损失律师费但不后悔。

### 评论补充
有回复分享京东、淘宝法拍房经验：事先咬定价格、暗许上浮 10%，线上拍卖缺少现场气氛，最终理性放弃。作者回应称，应与家人提前把价格区间和“买不到也不埋怨”讲清楚，否则容易埋雷；并强调底价必须在拍卖前定死，多一分不加。另有回复询问具体拍卖模型，作者仅建议参考 AI 与相关理论，未给出实际使用的模型。

### 可复用结论
参与现场拍卖前书面锁定最高价，最好由情绪稳定者举牌；对共享车道、共享地等面积折损单独计价；提前完成贷款、保险、律师审查，避免被提前拍卖挤出局。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254859" target="_blank" rel="noopener noreferrer">你家媳妇有时候会上头吗？记录一下海外参加拍卖经历</a></span><span class="topic-stats">回复 12 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255039" markdown="1">
<summary>
<span class="topic-rank">20</span>
<span class="topic-title">Studio Display XDR 2026 二手 19500 元使用体验与购买建议</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者以 19500 元线下二手自提购入 Studio Display XDR 2026，交易时让卖家退掉 AppleCare，并获赠纳米布。主帖从优缺点两方面给出真实使用感受，评论补充了翻新机价格与关屏命令等可操作信息。

### 关键要点
- **优点**：2000 尼特亮度可刺眼，支持键盘亮度调节；显色与 PPI 优秀，修图可切换自带颜色描述文件；内置音响好，已替代外置音响；做工与底座质感佳；HDR/SDR 协同显示无明显割裂；120Hz 对独立游戏够用；二手保值率较高。
- **缺点**：无实体按键，关屏只能锁屏、调低亮度或用脚本；大黑边框；无 HDMI，接主机游戏需采集卡且 Type-C 有轻微按键延迟。
- **购买参考**：评论称全新约 2.3 万至 2.5 万，官网翻新约 2.1 万，叠加折扣后接近作者二手价；作者认为 2026 款翻新不会太快出现，但评论者实际已见到翻新上架。
- **关屏方法**：评论给出 `pmset displaysleepnow` 命令，可替代脚本。

### 评论补充
有评论认为 miniLED 无法彻底解决光晕，更期待双层 OLED；也有人指出与普通 Studio Display 2026 的显著差异在 HDR 支持。作者推测未来 32 寸 Pro Display XDR 会采用该规格，属个人猜测。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255039" target="_blank" rel="noopener noreferrer">Studio Display XDR 2026 二手使用体验</a></span><span class="topic-stats">回复 12 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1254977" markdown="1">
<summary>
<span class="topic-rank">21</span>
<span class="topic-title">Xcode 27.1 模拟器缺失：原因与恢复方法</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
升级到 Xcode 27.1 后，模拟器列表里只剩 iPhone Duo，其他机型都不可选。发帖者推测，这是因为在下载队列中取消了 27.0 模拟器的下载；但用 `xcrun simctl delete all` 清空模拟器、卸载并重装 Xcode，都没有恢复。最终可行的做法是：另外下载一个 Xcode 27.0，打开它并让它下载 27.0 模拟器，再切回 Xcode 27.1，就能添加 27.0 模拟器。

### 关键要点
- 在 Xcode 27.1 的设置里添加模拟器时，只能选低于 iOS 27 的版本，没有 27.0 可选。
- 清空模拟器和重装 Xcode 都无效，说明问题不在本地模拟器缓存。
- 恢复路径依赖同时保留 27.0 与 27.1 两个 Xcode 版本。

### 评论补充
多位回复者指出，问题根源可能是 27.1 本身：有人称 27.1 是 iPhone Duo 专供版本，升级到 27.2 后问题消失；也有人建议在 Xcode 设置的 Components 中手动更新或删除、重新添加模拟器，但发帖者表示当时试过仍无法添加。另有回复提醒，27.2 模拟器体积很大，可达十几个 G，需要预留磁盘空间。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1254977" target="_blank" rel="noopener noreferrer">智障的 Xcode 模拟器</a></span><span class="topic-stats">回复 8 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255096" markdown="1">
<summary>
<span class="topic-rank">22</span>
<span class="topic-title">V2Peek：V2EX 站内图片放大镜 Chrome 插件</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者针对 V2EX 帖子中截图字小、需跳转原图才能看清的问题，开发了 Chrome 插件 **V2Peek - V2EX 图片放大镜**，目标是在不离开帖子的情况下放大图片、查看细节。

### 关键要点
- 点击正文或回复中的图片，直接弹出大图查看器。
- 支持滚轮缩放，以鼠标位置为中心；按住左键拖拽移动查看区域。
- 支持一键适应窗口，按 `Esc` 关闭。
- 当图片外层链接指向原图时，直接打开查看器，避免跳转；其他链接保留原有行为。
- 安装后刷新 V2EX 页面即可使用；作者声明免费、无广告、无需注册、不收集个人数据，且与 V2EX 官方无关联。
- 安装地址：https://chromewebstore.google.com/detail/mjmpfkffeofcncgkfbckhdbghfnichdp?utm_source=item-share-cb

### 评论补充
有回复表示“方便”，认可其使用价值，但未提供功能验证或问题反馈。插件实际稳定性、兼容性尚缺更多使用反馈，建议按作者提示，遇到问题时附上具体页面和复现步骤。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255096" target="_blank" rel="noopener noreferrer">做了个 V2EX 看图插件，截图里的小字终于不用新开标签页看了</a></span><span class="topic-stats">回复 1 · 收藏 2</span></p>

</div>

</details>
