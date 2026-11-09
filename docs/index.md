---
layout: report-home
title: "V2EX 每日热点回顾"
date: 2026-11-08 08:30:00 +0800
categories: [v2ex, daily-report]
status: success
target_date: 2026-11-08
generated_at: "2026-11-09 09:39:12"
summary: "昨日主题 129 个，过滤 44 个，DeepSeek 分析 85 个，保留高价值内容 12 个。"
count_all: 129
count_excluded: 44
count_included: 85
count_high_signal: 0
count_valuable: 12
report_url: "/2026/11/08/"
data_url: "/data/2026-11-08.json"
---

# V2EX 2026-11-08 昨日新帖报告

<details class="topic-card" data-topic-id="1255360" markdown="1">
<summary>
<span class="topic-rank">1</span>
<span class="topic-title">网页摄像头体感游戏合集：100+款儿童游戏免费玩</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者为生病在家、无法出门活动的幼儿园女儿开发了「动动乐园」：打开网页、站到摄像头前即可玩的体感小游戏合集，无需手柄、安装或额外设备，笔记本或台式机自带摄像头配合 Chrome / Edge 即可。目前有 100 多个游戏，覆盖 3～18 岁，每个学段三档难度，中文语音引导，不识字的孩子也能听懂。免费，不登录可试玩，登录后不限次数。

### 关键要点
- **隔空操作**：结算页举手出现跟随手的光点，停在按钮上即可“隔空点”，孩子不用跑回电脑前。
- **运动计数**：跳绳、深蹲、开合跳、高抬腿可由摄像头自动计数，支持两人并排各数各的，适合体育家庭作业打卡。
- **班级模式**：孩子用小名，一局结束点“下一位小朋友”换人，可投屏到教室大屏，并一键生成班级运动小报。
- **其他功能**：两人比赛与合作游戏、打卡与奖牌、好友挑战链接、每局自动录像、装到桌面后离线可玩，另有体感游戏教案和体测评分标准查询。
- **隐私说明**：摄像头画面只在本地处理不上传，录像只存本机；登录同步的仅成绩、名单等数据，不含画面。

### 评论补充
有回复指出同类产品常捆绑硬件、售价可达两千元甚至以 w 开头，认为该项目的趣味性不逊色；作者回应“不收费都对不起贵司”。关于电视使用，作者确认小米电视外接摄像头也能玩，可先走设备检测流程：https://dongdongpark.com/check 。多位用户认可“举手隔空点”的设计。作者也承认仍有识别不准、难度不合适的问题，欢迎反馈。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255360" target="_blank" rel="noopener noreferrer">女儿生病出不了门，给她做了 100+体感小游戏：打开网页，站到摄像头前就能玩</a></span><span class="topic-stats">回复 25 · 收藏 51</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255317" markdown="1">
<summary>
<span class="topic-rank">2</span>
<span class="topic-title">PhotosMove：局域网浏览器直传手机照片到PC的开源工具</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者开源了 PhotosMove，解决手机照片、视频无损搬到电脑的痛点：手机端启动 HTTP 服务，电脑浏览器打开地址并输入 6 位 PIN 即可下载，PC 端零安装、无需账号，数据不出局域网。项目采用 GPL-3.0，代码可审计。

### 关键要点
- **技术实现**：Go 服务跑在 Android 前台服务中；流式 ZIP + ZIP64 边打包边下载，20G+ 相册不占内存，单文件超 4GB 不炸。
- **无损与校验**：JPG/HEIC/RAW/DNG/MP4/Live Photo 原始字节直出，保留 EXIF、GPS、时间戳；下载后可在浏览器本地跑 SHA-256 逐文件比对，校验逻辑纯前端。
- **目录结构**：落盘保留 DCIM/Pictures 原始布局，便于接续归档。
- **边界**：仅 Android→电脑单向；需同一局域网；默认语言随手机系统自适应。
- **获取**：GitHub `malatomato1989/photosmove`、官网 photosmove.com、Google Play 搜 PhotosMove。

### 评论补充
- 有用户指出 QQ 发文件到电脑在局域网内也走直连、传源文件，作者回应久未使用 QQ。
- 关于 LocalSend 的 HTTP 模式，作者认为其逐个传文件 IO 占用高，流式 ZIP 更稳定。
- 同类替代：xiaolifaa.com 支持浏览器管理、删除、批量下载及电脑传手机；另有 immich、小米文件管理 FTP、Windows SMB、Termux+rclone 等方案。
- 用户提出反向还原、蓝牙等需求，作者表示视需要再增加。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255317" target="_blank" rel="noopener noreferrer">写了个开源工具：手机照片视频无损搬到电脑，局域网直传， PC 不装任何客户端</a></span><span class="topic-stats">回复 41 · 收藏 30</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255327" markdown="1">
<summary>
<span class="topic-rank">3</span>
<span class="topic-title">AI 让人人能造 App，卖软件还是伪命题吗</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

主帖引用孟岩的观点：AI 能力增强后，人人都能靠“嘴炮”做出覆盖个人需求的 App，通用软件的市场和收益空间会被压缩，产品经理、程序员、设计师等传统角色可能弱化。评论区的共识是：**AI 降低的是开发门槛，不是分发、信任和维护门槛**，因此“卖软件”不会消失，但形态会变。

### 关键要点

- **门槛转移到分发**：普通 App 的难点不在写代码，而在让用户发现你；渠道、广告投放、KOL 引流仍是壁垒。
- **付费买的是省时间**：用户付费买成熟稳定、售后维护，以及“比自己动手更省精力”；卖软件本质是卖时间与服务。
- **合规与平台成本仍在**：小程序需备案并年费，iOS 开发者账号年费与限制，安卓相对宽松但权限收紧是趋势，这些会把大多数人挡在门外。
- **专业产品仍有优势**：垂直领域由专业团队做深做全，稳定性与体验优于个人手搓；游戏等重内容产品更明显。
- **可能的新形态**：定制化、一次性交付的“按需造软件”服务增多，价格可能低至百元级，但需靠复用规律提升效率。

### 评论补充

有回复指出，多数人没有折腾意愿和动手能力，“人人 Vibe”仍是小众；也有人认为 AI 只是提升效率，未改变软件需要渠道与积累的本质。少数观点认为该命题本身是伪命题，属于传播焦虑。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255327" target="_blank" rel="noopener noreferrer">卖软件这个事情在未来可能是伪命题了</a></span><span class="topic-stats">回复 65 · 收藏 15</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255305" markdown="1">
<summary>
<span class="topic-rank">4</span>
<span class="topic-title">AI 时代还要不要花大量时间学编程？</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
主帖追问：AI 写代码越来越强，数据结构、算法、计算机原理这类基础知识还值不值得投入大量时间。评论没有形成统一结论，但多数人倾向于“不必深挖，但必须保留基础”，理由集中在沟通、判断和掌控力三点。

### 关键要点
- **基础是沟通前提**：有回复指出，至少要能清晰描述需求、掌握关键词和专有名词，否则连与 AI 对话都困难。
- **不懂就难辨对错**：把 AI 比作员工、自己比作老板，若完全不懂，AI 出错或“画蛇添足”时无法识别。有回复举例，有人连打包替换都不会，转交 AI 后反复失败。
- **代码量上升会失去掌控**：有观点认为，项目变大后心智负担加重，没有基础会难以维护。
- **学习方式要变**：不必像过去花半年一年打底，可先学“道”（带宽、磁盘 IO 等物理限制）和基础识别能力，协议、语言等“术”浅尝即可。
- **功利性性价比下降**：若只为就业回报，深度学习的性价比被认为不高；若理解知识本身带来愉悦，则另当别论。

### 评论补充
有回复用“学车要不要学手动挡”“有车还要不要学走路”作类比，强调基础是思维锻炼而非单纯技能。也有少数回复直接给出“没有”“完全不用”的否定答案，但未展开论证。

**结论**：共识偏向“基础要留、深度可减”，核心价值在于能描述需求、审查 AI 产出并维持对项目的掌控。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255305" target="_blank" rel="noopener noreferrer">现在还有必要花大量时间学习编程吗？</a></span><span class="topic-stats">回复 73 · 收藏 13</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255297" markdown="1">
<summary>
<span class="topic-rank">5</span>
<span class="topic-title">开源插件 VictorLoad：下载 YouTube/X/B 站视频与图片</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者发布了一款名为 **VictorLoad** 的 Chrome/Edge 扩展，用于下载 YouTube、X、B 站的视频与图片，采用 MIT 开源、无后端、无需注册，也不向作者服务器发送数据。安装方式为从 GitHub Releases 下载 zip，解压后在扩展管理页开启开发者模式并“加载已解压的扩展程序”，安装后需刷新已打开的页面。

### 关键要点
- **X**：列出推文视频各档清晰度，图片下载原图。
- **B 站**：列出可获取的 MP4 清晰度，具体档位取决于登录状态。
- **YouTube**：默认 H.264，最高 1080p，音视频合成为单个 MP4；原理是记录播放器已加载的分片，缺失部分自动跳转补齐，因此下载时画面会快速跳动，需要等待。
- **其他网站**：可嗅探 MP4、WebM 和部分 m3u8，不支持带 DRM 的内容。
- 附带功能：按站点记忆图片选择偏好、已下载内容显示绿色对勾、提供下载记录。
- 因需识别网页内容，扩展申请读取所有网站的权限，作者称隐私政策已在仓库说明。

### 评论补充
有用户指出同类产品数量众多，真正的难点是持续适配网站变化；另一用户认为“嗅探+分类”方案多年无需更新。有用户反馈下载一小时以上的视频只得到几分钟内容，作者表示未能复现，并推测最新版可能已修复。仓库与安装包见正文链接：https://github.com/Victor-Go/VictorLoad 。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255297" target="_blank" rel="noopener noreferrer">动手做了个下载 YouTube/X/B 站的 Chrome/Edge 插件</a></span><span class="topic-stats">回复 13 · 收藏 23</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255308" markdown="1">
<summary>
<span class="topic-rank">6</span>
<span class="topic-title">上海联通宽带上行被限速至5Mbps的申诉与解封经验</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
上海联通千兆宽带用户购买了 200Mbps 上行加速包，测速网站显示正常，但外网访问 NAS 实际只有约 600KB/s，怀疑被后台判定为 PCDN 而限速。多位回复者确认：此类限速通常需装维上门拍照留底，再由运营商申请解封，是当前较常见的处理路径。

### 关键要点
- **解封流程**：投诉后由装维上门拍照留底，再提交申请解封；有用户称签保证书后即恢复。
- **触发原因**：后台可能检测到 PCDN 特征。有用户仅远程桌面、群晖同步、PS5 跨网访问或上传约 100GB 运动相机备份，就被限速到 200KB/s 左右。
- **跨网因素**：跨运营商访问可能受影响；有回复提到跨省结算中上传方付费给下载方，建议多跑下行、控制上下行比例。
- **争议点**：部分回复认为被限速者“不无辜”，但也有用户强调正常远程访问同样中招，不能一概而论。

### 评论补充
有用户建议先统计近期上传流量，确认是否触发阈值；也有人指出低价提速包可能待遇更差。是否所有限速都因 PCDN，评论中并无定论，需以运营商后台判定为准。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255308" target="_blank" rel="noopener noreferrer">踏马的，上海联通宽带上行被限速到 5mbps，何解？</a></span><span class="topic-stats">回复 25 · 收藏 4</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255351" markdown="1">
<summary>
<span class="topic-rank">7</span>
<span class="topic-title">开源网站：用AI给嘉靖、雍正写文言奏折并获朱批</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者因观看《大明王朝1566》《雍正王朝》，做了一个模拟上奏的静态网站：用户选择嘉靖、康熙或雍正，用白话写下要奏的事，由 AI 改写成文言奏折，再等待“皇帝”批红。项目代码开源在 [GitHub](https://github.com/fengyiqicoder/shangzou)，站点为 https://shangzou.000ooo.ooo/，纯静态页面托管于 GitHub Pages，AI 通过一行 script 接入 OneTag AI。

### 关键要点
- **史实细节**：竖排、自右向左、经折装；“皇上”“聖恩”抬头另起一行高出两格，自称“臣”“奴才”用小字偏右。
- **流程还原**：嘉靖本章走通政司→内阁票拟（首辅按年份换严嵩、徐阶等）→西苑→司礼监批红，皇帝可留中不发。
- **时间线**：雍正七年以后奏折才经军机处；雍正会夹批、圈点甚至骂人；皇帝只知当年及以前之事，如嘉靖四十五年海瑞刚上疏。

### 评论补充
多位用户实测反馈：奏请造反、弹劾徐阶、提“七个会写代码的漂亮老婆”等荒诞内容会被严厉批斥甚至“下诏狱”；向雍正报告“发现穿越者”则触发抓人批示，并附史注解释雍正八年曾静案后的敏感背景。也有用户指出清代奏折应使用满语，以及上朝官员凌晨三点出门、多数只能站立广场等史实细节。整体看，项目把历史制度细节与 AI 角色扮演结合，适合作为提示词与前端小项目的参考。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255351" target="_blank" rel="noopener noreferrer">最近迷《大明王朝 1566》《雍正王朝》，写了个给嘉靖、雍正上奏的网站</a></span><span class="topic-stats">回复 18 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255394" markdown="1">
<summary>
<span class="topic-rank">8</span>
<span class="topic-title">AI 无限速度下，人月神话为何依旧存在</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
主帖提出一个推理链：AI 再快，也无法终结人月神话。理由有三层：个人注意力容量有限，因此单人速度有上限；人处在社会权责体系中，必须对成品负责，关键环节需人工审批；AI 存在“意图耗散”，难以完全符合使用者期待。后两点叠加，人必须审查 AI 产出，而审查消耗时间精力，于是单人能并行的 AI 工作有限，多人协作则回到人月神话原规律。

### 关键要点
- **瓶颈从编码转向审查**：AI 提升产出速度，但人工审核成为新的时间成本。
- **沟通成本不因 Agent 消失**：评论指出，人月神话中的沟通成本在 Agent 与 Agent 之间同样适用。
- **需求明确度决定上限**：需求明确时 AI 已把编码效率推到语言边界；需求不明确时，核心仍是人、现实与业务的复杂度。
- **复杂度守恒视角**：有评论引用信息论观点，认为描述越短系统不确定性越高，存在柯氏复杂度下界，AI Coding 也无法违背。

### 评论补充
评论补充了两条延伸：信息交换会失真且误差累积放大；技术复杂度不会消失只会转移。整体共识是 AI 改变交付路径与分工，但审查、沟通与需求拆解仍需人承担，效率最大化的具体路径主帖未展开，属于待讨论议题。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255394" target="_blank" rel="noopener noreferrer">人月神话依旧存在</a></span><span class="topic-stats">回复 7 · 收藏 9</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255398" markdown="1">
<summary>
<span class="topic-rank">9</span>
<span class="topic-title">中国城市历史时间轴：32座城可拖动查看</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者做了一个可交互的中国城市历史时间轴，覆盖 32 座城市。用户选择城市后，拖动下方画轴或点击播放，即可从远古浏览到今天：左侧全国图随朝代变化疆域，右侧城市图随年份变化辖区与古河道，旁边列出对应年份的城市事件。

### 关键要点
- 站点地址为 `fangzhi.defiabell.com`，提供几个特色入口：苏州 1500 年并对比同期其他城市、大运河从春秋邗沟到今天的线路、苏轼一生足迹。
- 内容约四千多条，作者称由 AI 协助查资料整理，并对照原文核验；正史可链接原文的已加链接，对不上的降级或删除，仍可能有错，页面底部可直接提交纠错。
- 技术栈为 Vite + TypeScript，地图用 `d3-geo` 绘制，纯静态部署在 Cloudflare Pages；电脑端体验最佳，手机可用。

### 评论补充
评论普遍认可观感与创意，有用户认为当前筛选/过滤交互不够直观易懂；另有用户表示自己也在做历史知识可视化，认为仅靠时间轴还不够，暗示可增加更多维度的呈现。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255398" target="_blank" rel="noopener noreferrer">做了个中国城市历史时间轴， 32 座城，拖着看</a></span><span class="topic-stats">回复 3 · 收藏 5</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255329" markdown="1">
<summary>
<span class="topic-rank">10</span>
<span class="topic-title">自托管 omp-web：浏览器内使用 Claude Code、Codex 与 Pi</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者开源了自托管项目 omp-web，目标是把 Claude Code、Codex、OMP/Pi 三类 Agent CLI 与项目文件、终端集中到一个网页里。典型用法是把这些工具装在常开的 Linux 机器上，出门用电脑或手机浏览器访问，替代手机 SSH 下看长回复、复制内容、翻 diff、传截图不便的体验。

### 关键要点
- **会话管理**：按项目组织会话，可选用 OMP、Pi、Claude Code 或 Codex；各 Agent 沿用自身的登录、模型配置、skills 与项目指令。
- **交互能力**：支持 Markdown 回复与工具调用展开，运行中可继续发消息、附截图或文件，后续消息可排队。
- **文件与终端**：文件树预览、Git diff、上传下载，同页提供独立多标签终端；可从用户消息 fork 会话，Git 项目可选或创建 worktree。
- **范围克制**：不做多 Agent 编排，访问设备无需另装客户端；各 Agent 的网页支持程度不同，原生 TUI 功能可在内置终端运行。
- **部署要求**：Linux、Node.js 22.19.0+、npm、Git，以及至少一个已登录的 Agent CLI；模型在云端运行，主机无需跑大模型，但 CLI、构建和网页服务仍需资源。

### 安全边界
网页强制登录，默认只监听 `127.0.0.1`。远程访问建议用 Tailscale / EasyTier 私网或正确配置的 HTTPS 反向代理，不要把明文 HTTP 暴露到公网。进入网页即拥有服务账号权限，内置终端不是沙箱，建议使用最小权限账号；远程访问不改变模型服务商的账号资格、地区限制或使用条款。

项目基于 17380936778/omp-web 的 fork，上游又基于 agegr/pi-web，采用 MIT 协议并保留版权说明。仓库与介绍见 https://github.com/leafiy/omp-web 和 https://leafiy.github.io/omp-web/ 。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255329" target="_blank" rel="noopener noreferrer">分享一个自托管的 omp-web：在浏览器里用 Claude Code、Codex、Pi，终端和文件也在同一页</a></span><span class="topic-stats">回复 0 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255355" markdown="1">
<summary>
<span class="topic-rank">11</span>
<span class="topic-title">Setem：macOS 原生语音输入法，支持豆包/微信/千问与离线模型</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者开源了一款 macOS 菜单栏语音输入法 **Setem**（MIT 协议，仓库：https://github.com/zcyoung2000/Setem）。操作方式为按住右 Option（可改）说话，松开后在浮窗查看定稿，确认后一次性输入到光标处；也支持点按开始、再点按结束，适合长段口述。

### 关键要点
- **识别渠道**：豆包、微信、千问三个云端接口，外加本机离线模型（Apple 芯片，断网可用）。
- **技术实现**：Swift 原生，安装包 6.1 MB，无 Electron 依赖，常驻内存占用小；云端走 WebSocket + protobuf 流式识别，音频按 20ms 一帧 Opus 编码上传；全局快捷键用 CGEventTap 监听。
- **已知限制**：基于 VoiceKey fork 改造；各家输入法协议不公开，需自行逆向客户端协议，接口随时可能变化（README 已声明）。安装包为 ad-hoc 签名，首次运行需先去除隔离属性。

### 评论补充
有回复询问是否支持 streaming；另一条回复列出语音输入的核心痛点：快捷键方式、离线识别、准确率、延迟、热词替换、正则替换、录音与记录保存、LLM 润色，并推荐 Windows 端同类项目 CapsWriter-Offline（https://github.com/HaujetZhao/CapsWriter-Offline），建议作者复刻这些特性，尤其热词替换。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255355" target="_blank" rel="noopener noreferrer">[分享创造] Setem： macOS 原生语音输入法，支持豆包/微信/千问 + 离线模型</a></span><span class="topic-stats">回复 2 · 收藏 4</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1255381" markdown="1">
<summary>
<span class="topic-rank">12</span>
<span class="topic-title">macOS 菜单栏工具 Autopause：听写时自动静音音乐</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者在 macOS 上使用豆包输入法听写时，音乐不会自动停止，于是开发了菜单栏工具 **Autopause**：检测到麦克风被占用时，自动静音或暂停正在播放的音乐，说完后恢复。

### 关键要点
- **两种模式**：静音模式让歌曲继续播放，只把系统音量淡出再淡入；暂停模式会停掉 Music、Spotify 及当前播放内容，且只恢复由它自己暂停的内容。
- **避免误操作**：默认延迟 1.5 秒恢复，避免两句话之间音乐反复切换；若用户中途手动播放，工具不再干预。
- **可限定触发 App**：只让指定应用触发，开会、打电话时不会误停音乐。
- **隐私与分发**：不录音、不打开麦克风、不申请麦克风权限、无账号；要求 macOS 14 及以上，Developer ID 签名并公证，未上架 App Store。
- 提供官网、GitHub Releases 下载和说明文档链接。

### 评论补充
有回复认为这相当于把语音输入法的相关功能单独拆出来，肯定作者自己动手做工具；另一位用户贴出同类项目 quietcue，同样是在快捷键语音输入时自动关闭媒体音乐、输入结束后恢复，说明该需求存在多个实现。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1255381" target="_blank" rel="noopener noreferrer">做了个菜单栏小工具：听写的时候把音乐静音</a></span><span class="topic-stats">回复 2 · 收藏 1</span></p>

</div>

</details>
