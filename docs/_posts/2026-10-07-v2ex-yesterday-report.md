---
layout: report-post
title: "V2EX 每日热点回顾 · 2026-10-07"
date: 2026-10-07 08:30:00 +0800
categories: [v2ex, daily-report]
status: success
target_date: 2026-10-07
generated_at: "2026-10-08 09:48:31"
summary: "昨日主题 155 个，过滤 55 个，DeepSeek 分析 100 个，保留高价值内容 16 个。"
count_all: 155
count_excluded: 55
count_included: 100
count_high_signal: 0
count_valuable: 16
report_url: "/2026/10/07/"
data_url: "/data/2026-10-07.json"
---

# V2EX 2026-10-07 昨日新帖报告

<details class="topic-card" data-topic-id="1246711" markdown="1">
<summary>
<span class="topic-rank">1</span>
<span class="topic-title">32岁程序员转行做女鞋：三年Shopify仅一单的教训</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
一位 32 岁程序员因静脉炎失去编程工作性价比，又受 AI 浪潮冲击，转行自创女鞋品牌 MAITELAINI，最终失败。他复盘出两条关键教训：产品创新要打在真实痛点上，以及没有流量渠道的独立站等于孤岛。

### 关键要点
- **技术优势不等于商业优势**：他用“时尚工程学”做不对称尖头（缓解拇指外翻）和斜拉桥式三角支撑细跟（防崴脚），但评论指出女鞋首要卖点是时髦好看，创新未命中痛点。
- **流量是获客前提**：Shopify 独立站经营三年只成交一单，关店后才意识到没有外部流量就是孤岛；后续想靠做网红引流也失败。
- **成本与链条**：投入约几万元；女鞋链条长、退换货多、流程重，实体行业并不轻松。
- **心态落差**：程序员工作可掌控、有尊重感，创业则高度不确定，这是他反复强调的核心矛盾。

### 评论补充
有回复分享 2022 年做 JK 女装投入 20 万、收回 15 万加一仓库尾货的经历，同期一对情侣靠小红书押中爆款月销过万件，印证“流量比产品更关键”。另有建议先找圈子、多找 N 个圈子再谈赚钱，以及劝其回归 vibe coding 的声音。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246711" target="_blank" rel="noopener noreferrer">从转行到失败： 32 岁程序员跨界做女鞋的经历</a></span><span class="topic-stats">回复 80 · 收藏 14</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246762" markdown="1">
<summary>
<span class="topic-rank">2</span>
<span class="topic-title">湿疹反复多年：北上广深皮肤科医院与用药经验汇总</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
楼主右手食指、中指及虎口背面湿疹反复三四年，激素药膏无效，当地医院排除真菌感染，寻求北上广深优质皮肤科。评论围绕医院推荐、用药方案和病因展开，多数人认为湿疹难以速效根治，需长期管理。

### 关键要点
- **医院推荐**：复旦大学附属华山医院、北京大学第一医院、北京协和医院、上海瑞金医院、中日友好医院、上海市皮肤病医院、南方医科大学皮肤病医院（广东省皮肤病医院）、北京大学人民医院、上海新华医院；另有空军总医院、杭州第三人民医院。
- **用药经验**：糠酸莫米松乳膏+尿素乳膏（上海仁济南院）；尿素乳膏+联苯苄唑乳膏（深圳社康）；曲咪新乳膏+口服药；地奈德；炉甘石洗剂；他克莫司效果不佳；抗组胺药如盐酸奥洛他定片。
- **病因共识**：多位回复认为与免疫力、熬夜、饮食、湿热环境相关，运动健身可改善，无法速效除根。
- **AI 辅助**：有回复称拍照给 ChatGPT 分析为真菌感染并用药半月好转，认为 AI 可辅助判断。

### 评论补充
有回复提醒阿咖酚散是止痛药，对偏方存疑；也有回复强调医院诊断仍不可替代，AI 建议仅供参考。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246762" target="_blank" rel="noopener noreferrer">北上广深哪里有好的皮肤病科室吗，湿疹感觉严重了</a></span><span class="topic-stats">回复 37 · 收藏 25</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246719" markdown="1">
<summary>
<span class="topic-rank">3</span>
<span class="topic-title">iOS 银行政务 App 如何检测代理与 VPN</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
农业银行、鄂汇办等 iOS 银行与政务 App 会在检测到系统代理或 VPN 时限制使用，用户需关闭代理才能正常访问。讨论确认这并非玄学，而是调用了系统公开接口。

### 关键要点
- **标准检测方式**：iOS 通过 `CFNetworkCopySystemProxySettings()` 读取系统代理设置，属于官方 API，没有奇技淫巧（回复 18151294 给出 Apple 文档链接）。
- **VPN 接口检测**：iOS 也向 App 开放了检测 VPN 服务的接口，常规检测即可识别 TUN 类代理。
- **绕过思路**：使用软路由或透明代理等非 TUN 方案，App 检测不到系统代理，实测可解决（回复 18151237、18151238、18151253）。小火箭关闭系统代理后，部分 App 也不再强制退出（回复 18151243）。
- **地域限制是另一回事**：部分政务 App 在境外或省外无法访问，更可能是服务端 IP 白名单限制，而非本地代理检测（回复 18151292、18151313、18151317）。

### 评论补充
有用户指出人在国外时部分政务 App 即使不开 VPN 也打不开，交管 12123 在境外看不了违章，只能改用支付宝（回复 18151292）。也有观点认为这类限制是配合监管要求（回复 18151602）。安卓可按 App 路由，iOS 方案不通用（回复 18151249）。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246719" target="_blank" rel="noopener noreferrer">iOS 上，银行内和政务类 app，是如何实现检测到网络环境异常的</a></span><span class="topic-stats">回复 41 · 收藏 15</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246731" markdown="1">
<summary>
<span class="topic-rank">4</span>
<span class="topic-title">catbus：统一操作小红书、抖音、B站等10平台的CLI</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者开源了命令行工具 catbus（猫巴士），把小红书、抖音、TikTok、B 站、快手、微博、闲鱼、淘宝、京东、X 共 10 个平台的 web 端能力封装进同一套命令，MIT 协议。

### 关键要点
- 安装：`npm i -g catbus-cli`；示例：`catbus xhs item search 露营 --sort latest`，换平台只换一个词。
- 统一抽象：笔记、作品、稿件、推文一律叫 `item`，搜索叫 `search`，点赞叫 `like`，输出为同结构 JSON。
- 功能覆盖搜索、详情、评论、用户、推荐流、下载、发布、私信、直播弹幕等，具体见能力矩阵。
- 仅需 Node，无需 Python 和编译器；Windows/macOS/Linux 的 x64、arm64 均在 CI 测试。
- stdout 只有 JSON，错误带错误码和下一步命令，便于脚本或 AI Agent 调用；自带 Agent 技能 `npx skills add cv-cat/catbus`。
- 登录态仅存本地 `~/.catbus/`，按平台×账号隔离，无遥测；能力移植自作者 10 个开源仓库并用 TypeScript 重写。
- 仓库：https://github.com/cv-cat/catbus

### 评论补充
有用户反馈此前用 xhs-cli 容易被踢下线；作者称 X 平台登录正在整合，Reddit 等更多平台在 todo 中。另有用户询问能否一键导出收藏夹、是否支持知乎，作者尚未给出明确答复。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246731" target="_blank" rel="noopener noreferrer">[开源] catbus：用一套命令操作小红书、抖音、B 站、X 等 10 个平台的 CLI</a></span><span class="topic-stats">回复 10 · 收藏 18</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246778" markdown="1">
<summary>
<span class="topic-rank">5</span>
<span class="topic-title">AirPods 5 真实反馈：降噪、佩戴与音质取舍</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
楼主想从 AirPods 2 换到 AirPods 5，但线下门店普遍没有试戴款，社区评价两极分化，于是征集真实使用反馈。评论集中在降噪、佩戴舒适度、音质和做工四点，结论是：AirPods 5 的开放式降噪在同类中属第一梯队，但音质和做工是主要短板。

### 关键要点
- **降噪**：多位用户认为在非入耳式耳机里属第一梯队，嘈杂环境能明显削弱噪音，通勤听播客够用；但与 AirPods Pro 3 的入耳降噪差距明显。
- **佩戴**：整体接近 AirPods 2 的无感体验，但不如 1、2 代模具舒适；有用户反馈只开降噪不放音乐时耳内有压迫感。
- **音质**：被多位用户评价为“白开水”“听个响”，有音频博主认为调音不如 AirPods 4；也有用户认为苹果调音属监听风格，无线耳机不必纠结音质上限。
- **做工与价格**：有用户反映塑料感强、盒盖开合单薄；无线充电盒版国补后约 900 元，性价比尚可。

### 评论补充
- 建议官网下单试用，不合适可退货，避免线下无试戴的尴尬。
- iPhone 用户综合体验优于安卓耳机，建议选带无线充电的版本，电池更大更耐用。
- 安卓端（如 ColorOS）对 AirPods 的功能支持有限，部分功能不可用，需提前确认。
- 对降噪耳压敏感者，可优先考虑开放式或半入耳型号，降噪够用即可。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246778" target="_blank" rel="noopener noreferrer">AirPods 5 收集反馈</a></span><span class="topic-stats">回复 36 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246740" markdown="1">
<summary>
<span class="topic-rank">6</span>
<span class="topic-title">Safari 沉浸式翻译替代：BYOK 原生翻译 App 支持 iOS/macOS</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者发布一款原生翻译客户端「纯粹翻译」，定位为 iOS 与 macOS 的完整文本翻译方案，并配套 Safari 浏览器扩展，用于替代 Safari 上无法自填 API Key 的沉浸式翻译。软件无服务端，全部使用用户自己的 API Key，可接入传统翻译与大模型，也支持 Apple 智能翻译。目前处于 TestFlight 阶段，正式版定价 12 元买断，含 iOS 与 macOS 客户端。

### 关键要点
- **BYOK 模式**：不绑定官方额度，用户自备 API Key，可接传统翻译与大模型。
- **Safari 扩展**：iOS 与 macOS 均可用，目前仅实现网页翻译，作者称部分网页效果优于沉浸式翻译。
- **付费策略**：12 元买断；不付费也可使用全部功能，仅限制同时启动多个翻译服务。
- **macOS 定位**：用法与 Bob 一致，作者称界面更好看。
- **体验入口**：TestFlight 链接见正文 https://testflight.apple.com/join/sPY8644g

### 评论补充
- 有用户反馈 TestFlight 环境下 App Store 地区判断异常，导致 OpenAI 服务消失；作者称已修复 iOS 版，macOS 待审核，但该用户表示 build 32 仍未修复。
- 有用户指出 Safari 右键菜单未加入，作者承认该版本为初步可用版，细节待完善。
- 关于 BYOK 为何收费，作者回应：Safari 扩展需开发者证书，iOS 上尤其必须；定价仅为回血 Apple 开发者年费，不追求盈利。
- 有评论质疑该产品长期商业价值，认为大模型时代翻译市场萎缩；作者表示功能均源于个人需求，未考虑盈利。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246740" target="_blank" rel="noopener noreferrer">Safari 用户苦沉浸式翻译久矣，所以我开发了一个代替它的软件，支持 iOS 和 macOS，正在 TestFlight 中，欢迎使用</a></span><span class="topic-stats">回复 30 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246737" markdown="1">
<summary>
<span class="topic-rank">7</span>
<span class="topic-title">枕芯该洗还是该换？不同材质的处理方式</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
楼主把 2024 年淘宝 24 元购入的枕芯拿去清洗，用了漂白水、两桶水浸泡、洗衣机洗、柔顺剂再浸泡加脱水，事后算账发现直接买新的更划算，并自嘲仍停留在物质匮乏、舍不得扔东西的状态。

### 关键要点
- **成本对比**：24 元的枕芯，清洗消耗一瓶漂白水、两桶水、多次机洗与脱水，加上时间精力，不如换新。
- **材质决定处理方式**：荞麦皮类只能晒不能洗；乳胶枕本身会老化，通常几年换一次；纤维芯可机洗，有回复称晒后发痒、机洗后恢复。
- **主流做法是勤换枕套**：每周换 1 到 2 次枕套，枕芯发黄就直接换新，周期约 2 到 5 年。
- **发黄原因**：有回复指出男性因雄激素导致的皮脂分泌和出汗，枕头更容易发黄。

### 评论补充
多数回复认为枕芯一洗就废，且内部不易晾干，建议加防水枕套或枕巾、只洗外层。也有观点认为几十元的东西不必纠结，定期更换即可。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246737" target="_blank" rel="noopener noreferrer">你会洗枕头吗？</a></span><span class="topic-stats">回复 36 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246710" markdown="1">
<summary>
<span class="topic-rank">8</span>
<span class="topic-title">2026年8月读6本书：娼妓史、女性研究与随笔</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者记录 2026 年 8 月读完的 6 本书，主题围绕娼妓问题、女性研究与生活随笔，并给出每本评分与阅读脉络。

### 关键要点
- **娼妓问题三书**：贺萧《危险的愉悦》梳理 20 世纪上海百年娼妓史，豆瓣 8.7，作者评 8 分；《呈现与标定》基于东北三城与广东三村访谈，指出从业者多为自愿、目的主要是钱，人身依附与自由雇佣并存，真正被限制自由的“奴隶制”少见；赵军《惩罚的边界》从法学与警察访谈切入，认为现行禁娼消耗警力大、收效有限，且滋生腐败。
- **女性研究**：《Women on the River of Life》追踪 Mills 女校群体数十年，发现儿童期对想象与探索活动的偏好可预测中年创造性职业成功；婚姻满意度从 43、52 到 61 岁持续上升，空巢是主因。
- **小说与随笔**：《解忧杂货店》评 8 分，借“白纸提问”谈命运；《我和琉璃的山居四季》评 6 分，作者认为其满足的是都市人对农村的浪漫幻想。
- **可复用视角**：作者提醒史料自带滤镜，回忆、庭审自述与出版文本都会避重就轻，真相多面甚至冲突。

### 评论补充
有回复认为读这类书浪费时间、性别不应视为差异；也有回复反驳称“男女不谈差异”过于偷懒傲慢，并指出现代社会相关行业有其完整存在逻辑。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246710" target="_blank" rel="noopener noreferrer">2026 年八月 读女性研究，小说，随笔 6 本</a></span><span class="topic-stats">回复 10 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246841" markdown="1">
<summary>
<span class="topic-rank">9</span>
<span class="topic-title">Cordis 内核剖析：effect 栈机制、五个事件方法的坑与两张账单</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

作者以 DeepSeek Harness（DSH）采用 Cordis（Koishi 内核）为底座为背景，逐层拆解其机制、坑与长期成本。Cordis 是插件元框架，本身无业务能力，只管插件装卸、依赖与卸载；Koishi 社区插件 4000+，DSH 第三方索引 6000+。

### 关键要点

- **核心机制只有一个栈**：`ctx.effect(acquire, release)` 把资源与清理函数成对入栈，卸载时 LIFO 弹出。它不分析依赖，只是复用“先定义后使用”的注册顺序逆序；倒序注册会静默给出错误顺序。
- **四条边界**：栈只管经 effect 注册的东西（裸 `setInterval` 静默泄漏）；顺序只沿用注册先后；可逆仅对成对注册成立；异步清理不保证逆序完成，存在“半卸载窗口”，官方建议合并清理链。
- **五个派发方法属“铺开”而非“收窄”**：`emit/parallel/serial/bail/waterfall` 中 `parallel` 与其余不可比，`serial` 与 `bail` 只差一个 await。地基 `emit` 丢弃返回值，导致黑名单插件 `return true` 拦截静默失效，且异步 reject 无人接收。
- **判据**：最底层不能是它自己某个用法；API 一旦发布就收不回（Hyrum's Law），4000+ 插件使 4.0 想收敛也难。
- **两张账单**：用 Cordis 需承担 API 不可收回、rc 迁移、单进程故障、术语误解、退出成本；自组合（tool-func/tool-rpc/tool-event/events-ex）则缺框架强制纪律与嵌套作用域。

### 评论补充

有回复认为多数人只需大厂开源轮子一键起用，底层瑕疵“瑕不掩瑜”；作者回应正是想直接用 DSH 的 Cordis 插件体系，才踩到坑。另有回复称 Cordis 作者已进 DS 团队。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246841" target="_blank" rel="noopener noreferrer">Cordis 的坑与账-DeepSeek Harness 运行时拿它当底座</a></span><span class="topic-stats">回复 4 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246837" markdown="1">
<summary>
<span class="topic-rank">10</span>
<span class="topic-title">iFAST 检测到 Sukisu Ultra：HMA-OSS 隐藏应用列表可绕过</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
有用户反馈：Android root 后国内银行应用均未检测到，但 iFAST GB 一启动就识别出 Sukisu Ultra，且未授予应用列表权限。评论区给出了可复现的原因与解法。

### 关键要点
- 检测并非依赖应用列表权限，而是通过**组件名称并尝试启动 Activity** 来枚举已安装应用，因此能绕过系统自带的应用列表权限管理。
- 可用模块 [HMA-OSS](https://github.com/frknkrc44/HMA-OSS) 对指定应用隐藏其他应用；其“Activity 启动保护”默认启用，可阻止目标应用访问这些 Activity，从而避免应用列表被检测。
- 有回复实测：iFAST 检测到的只是**包名**，临时卸载管理器后即检测不到，理论上更改管理器包名也可行。
- 发帖人确认安装该模块后 iFAST 可正常使用。

### 评论补充
- 有用户指出，隐藏 root 方案只能欺骗普通应用，稍加用心的检测仍可快速识别。
- 另有用户未 root、仅开启调试（Shizuku）也被 iFAST 检测，不卸载不给用，说明检测面不限于 root。
- 系统自带的应用列表权限管理能力有限，需专门插件拦截。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246837" target="_blank" rel="noopener noreferrer">Android root 之后怎么反检测，没给应用列表权限怎么检测到 SukisU Ultra 的？</a></span><span class="topic-stats">回复 6 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246718" markdown="1">
<summary>
<span class="topic-rank">11</span>
<span class="topic-title">开源 agc-cli：用 Go 把鸿蒙 AppGallery Connect 管理搬进终端</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者受 App Store Connect CLI（asc-cli）启发，开源了面向华为 AppGallery Connect 的命令行工具 **agc-cli**，用 Go 编写，MIT 许可证，命令名为 `agc`。目标是把应用资料查询、测试用户管理、评论报表等重复操作变成可保存、可复用、可组合的命令，并接入脚本与 AI Agent。

### 关键要点
- 按场景组织命令：`agc publishing`（资料/多语言/发布）、`agc testing`、`agc pms`（商品订阅）、`agc provisioning`（证书/Profile/设备）、`agc comments`/`agc reports`、`agc projects`/`agc domains`。
- 注册表含 **13 个 API 家族、156 个接口条目**，每条附官方参考链接；作者明确说明接口数量仅代表注册范围，不代表全部完成生产验证，字段与权限仍以华为文档为准。
- 安装：macOS 用 Homebrew（`brew tap createitv/tap && brew install agc-cli`），Windows 用 Scoop，Linux 下载 Release 包，二进制无需 Go 环境。
- 凭据流程：`agc auth login --service-account-file ... --name production` 保存 Service Account，`agc init --app-id ... --default-profile ...` 写入 `.agc/project.json`；多账号用 `--profile` 切换。
- 默认 **dry-run**：先显示 HTTP 方法与目标 URL，确认后加 `--dry-run=false` 才真正请求；`--out` 可保存原始响应体，便于脚本二次处理。
- 输出支持 JSON（默认）、table、markdown；`agc capabilities`、`agc publishing endpoints` 无需登录即可查看接口定义，`agc web-server` 提供本地 REST API，`agc openapi` 导出契约。

### 评论补充
唯一回复为“1000 万以内最好的终端”，属情绪化调侃，无实质信息。

### 限制
完整二进制/multipart 上传编排与本地 Hvigor 构建执行器尚未完成；命令模板仅用于导航，不替代业务状态检查或审核判断。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246718" target="_blank" rel="noopener noreferrer">把鸿蒙应用管理带回终端：我开源了 agc-cli</a></span><span class="topic-stats">回复 1 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246792" markdown="1">
<summary>
<span class="topic-rank">12</span>
<span class="topic-title">云南电信IPv6被收回：NAS远程访问失效与应对</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
云南电信用户使用近两年 IPv6 正常，NAS 通过 DDNS 走 v6 访问。某日突然无法连接，重启光猫无效。客服称线路正常，上门人员只测速、不处理 IPv6，并称无权限。发帖者怀疑运营商有意收回 IPv6。

### 关键要点
- 排查方向：先确认是否被改为 NAT4；测上行速度是否被降（建议用非 Speedtest 白名单的测速点）。发帖者实测上行未变，判断是单纯不给 IPv6。
- 沟通与投诉：有回复建议以国家推进 IPv6 部署政策为由沟通，或直接投诉，参考 china-ipv6.cn。
- 替代方案：换联通（有回复称联通仍给公网 v4）；用手机流量也有 IPv6。
- 风险规避：直接用 HTTP(S) 访问 NAS 可能被运营商判定为开放互联网服务，建议先套 VPN 再访问，有用户称此方式 6 年无事。

### 评论补充
有回复指出这不是个例，近期已有其他用户遇到；云南电信虽可多拨，但可能只有一个 /64 地址、无 PD 前缀。另有观点认为 IPv6 在国内相当于另一套网，过滤和管控成本高，运营商在降本背景下可能收缩。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246792" target="_blank" rel="noopener noreferrer">IPv6 地址被收回了</a></span><span class="topic-stats">回复 16 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246847" markdown="1">
<summary>
<span class="topic-rank">13</span>
<span class="topic-title">SmsPop：Rust 写的 Windows 短信验证码自动填入工具</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者因厌烦手动输入短信验证码，开发了 Windows 小工具 **SmsPop**：通过蓝牙接收手机通知/短信，在电脑右下角弹通知，自动识别验证码并复制，在输入框附近显示候选条，点击即可填入，省去拿手机的操作。项目基于 Rust，体积仅 3.46 MB，已开源并提供 Releases 下载。

### 关键要点
- **安卓**：只能走 HTTP 接入，可配合 SmsForwarder 等第三方工具转发短信和通知。
- **iPhone**：无需额外 App，但要求电脑蓝牙适配器支持 BLE 外设角色，并在 iPhone 蓝牙设置中开启“共享系统通知”；并非所有适配器都支持。
- 项目处于早期开发阶段，不同适配器、驱动和 iOS 版本表现可能有差异，作者欢迎反馈兼容性。
- 项目地址：https://github.com/fxaxg/sms-pop-rs ，演示视频：https://vimeo.com/1233745344

### 评论补充
有用户表示自己常用手机复制后经输入法同步到 PC 再粘贴，说明该工具并非唯一方案；另有用户称自研版本可直接自动填入验证码输入框，无需点击，提示 SmsPop 的“点击填入”仍有优化空间。整体适合愿意折腾蓝牙/HTTP 转发、追求少拿一次手机的 Windows 用户尝试。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246847" target="_blank" rel="noopener noreferrer">我讨厌输入验证码...于是我开发了这个小工具： SmsPop</a></span><span class="topic-stats">回复 4 · 收藏 4</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246806" markdown="1">
<summary>
<span class="topic-rank">14</span>
<span class="topic-title">Android HDR 看图 App：支持 RAW、JXR 与 SMB/WebDAV</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者发布了一款 Android 看图 App（LocalViewer），核心是在 Android 上实现 FP16 位图的 HDR 显示，并配合色彩管理，覆盖广色域、高色深与 HDR 图片格式。

### 关键要点
- **独家能力**：支持 RAW 照片与 Win11 JXR 游戏截图等非标格式的色彩管理和 HDR 预览。
- **三种 HDR 显示模式**：普通格式走系统解码；高级格式走 lib 解码直出；用 libultrahdr 转 UHDR JPEG gain map 以保留高光。
- **格式覆盖**：JXL/JXR/JPG/AVIF/HEIC 等；RAW 支持 dng、cr2、cr3、nef、nrw、arw、raf、orf、rw2、pef、srw、raw；兼容 Oppo/OnePlus ProXDR HEIC。
- **文件与网络**：多文件夹窗口管理，支持 SMB 和 WebDAV，适合浏览 NAS 文件；也可看电子书、漫画，调用其他播放器看视频，并可隐藏某文件夹浏览记录。
- 下载地址：https://github.com/zmz125000/LocalViewer

### 评论补充
有用户询问安卓截屏是否支持 HDR，作者回复支持，并称前两张截图即为 UHDR JPEG 截图，在 Chrome 中查看呈 HDR 效果。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246806" target="_blank" rel="noopener noreferrer">可以在手机屏幕上 HDR 显示 Raw 照片的看图 App， 支持 SMB 和 JXR 游戏截图</a></span><span class="topic-stats">回复 2 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246738" markdown="1">
<summary>
<span class="topic-rank">15</span>
<span class="topic-title">Sub2API 0.2.14 修复 EasyPay 回调伪造漏洞</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
使用 Sub2API 搭建中转站的站长需尽快升级到 **0.2.14**。该版本修复两处安全问题：全新安装不再使用可猜测的默认管理员账号；封堵 EasyPay 支付回调伪造漏洞。发帖者称凌晨被“白嫖”大量额度，已临时暂停新用户注册。

### 关键要点
- 受影响版本：Sub2API 0.2.14 之前的部署，尤其是仍在使用默认管理员账号的实例。
- 风险点一：默认管理员账号可被猜测，存在被直接接管后台的可能。
- 风险点二：EasyPay 支付回调可被伪造，攻击者无需真实付款即可完成充值。
- 处置建议：升级到 0.2.14；检查并更换默认管理员凭据；核对支付回调来源与订单记录，排查异常充值。

### 评论补充
有回复者表示同样中招，称攻击者“充了 2 个亿”，说明该漏洞可能已被批量利用，而非个例。

### 限制
主帖未给出漏洞细节、影响版本范围或官方公告链接，具体修复效果与排查方法需以项目更新说明为准。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246738" target="_blank" rel="noopener noreferrer">用 sub2api 程序的站长们，抓紧更新了。封堵 EasyPay 支付回调伪造漏洞</a></span><span class="topic-stats">回复 1 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1246813" markdown="1">
<summary>
<span class="topic-rank">16</span>
<span class="topic-title">开源：Cloudflare Workers + R2 自部署轻量 WebDAV</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者开源了一个基于 Cloudflare Workers + 私有 R2 bucket 的轻量 WebDAV 服务，面向个人自部署，用于手机与电脑间同步文件及小工具配置（如 cc-switch、clash）。目标是免去单独维护服务器，并利用 Cloudflare 免费额度降低低频访问成本。项目地址：https://github.com/CallMeKingsley97/cf-free-webdav

### 关键要点
- 支持 Basic Auth，以及 GET、HEAD、PUT、PROPFIND、MKCOL、DELETE、COPY、MOVE 等常用文件与目录操作。
- 支持空目录和文件字节范围读取。
- 部署方式：可连接已有 GitHub 仓库部署到 Workers，也可用 Wrangler 本地部署；配置 `WEBDAV_PASSWORD` Secret 后，用任意 WebDAV 客户端连接 `/dav/` 路径。
- 已知限制：暂不支持 LOCK/UNLOCK，自定义 WebDAV 属性不会持久化，单次上传受 Cloudflare 请求体大小限制。
- 成本提醒：免费额度适合个人低频使用，但额度与计费规则可能变化，超出后可能产生费用。

### 评论补充
有用户质疑 WebDAV 读写能否持久。作者回应：Worker 本身无状态，不长期保存文件，实际文件写入 R2，PUT 上传、GET 读取，因此 Worker 重启或重新部署不会清空文件。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1246813" target="_blank" rel="noopener noreferrer">[分享创造] [开源] 用 Cloudflare Workers + R2 做了个轻量 WebDAV，支持个人自部署</a></span><span class="topic-stats">回复 2 · 收藏 0</span></p>

</div>

</details>
