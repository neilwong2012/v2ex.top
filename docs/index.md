---
layout: report-home
title: "V2EX 每日热点回顾"
date: 2026-10-13 08:30:00 +0800
categories: [v2ex, daily-report]
status: success
target_date: 2026-10-13
generated_at: "2026-10-14 09:08:21"
summary: "昨日主题 293 个，过滤 193 个，DeepSeek 分析 100 个，保留高价值内容 25 个。"
count_all: 293
count_excluded: 193
count_included: 100
count_high_signal: 0
count_valuable: 25
report_url: "/2026/10/13/"
data_url: "/data/2026-10-13.json"
---

# V2EX 2026-10-13 昨日新帖报告

<details class="topic-card" data-topic-id="1248355" markdown="1">
<summary>
<span class="topic-rank">1</span>
<span class="topic-title">Rust+GPUI 重写 Navicat：开源数据库客户端 rustgrid</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者因公司收到 Navicat 律师函、被要求全员改用 DBeaver，但难以适应其布局，遂用 Rust 自研数据库客户端 **rustgrid**，并已开源。

### 关键要点
- 技术栈：Rust + GPUI，配合 gpui-kit 组件库，shadcn 风格；**无 WebView**，UI 全部用 Rust 编写。
- 连接方式：适配 ODBC 驱动，理论上任何有 ODBC 驱动的数据库均可连接。
- 已支持：MySQL / MariaDB、SQLite、SQL Server、PostgreSQL、Oracle；DB2、Redis 等接入中。
- 常用功能（用户/角色/权限/模型/图表/自动运行）基本可用，但作者承认与 Navicat 仍有差距，各数据库操作体系差异大，坑还很多。
- 作者称此前从未接触 Rust，不到一个月做出这些功能，感叹 AI 时代传统软件公司压力巨大。
- 项目地址：https://github.com/yisier/rustgrid

### 评论补充
- 有用户推荐同类开源工具 dbx（https://github.com/t8y2/dbx），并指出其内存占用偏大、交互需学习成本。
- 有用户反馈公司同样收到 Navicat 律师函，但未收到 JetBrains 的，认为 DataGrip 用惯后体验不错。
- 作者回应：Navicat 导出链接的导入功能已排上日程；对反编译商业软件持谨慎态度，认为可能吃官司。
- 界面被吐槽偏丑，作者表示布局与交互优先，UI 后续再调。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248355" target="_blank" rel="noopener noreferrer">用 Rust 重写一切，这次是 navicat</a></span><span class="topic-stats">回复 110 · 收藏 64</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248259" markdown="1">
<summary>
<span class="topic-rank">2</span>
<span class="topic-title">Codex 一次为 Vulkan 引擎加光追，AI 能否取代高水平程序员</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
楼主用 Codex 给自研游戏引擎的 Vulkan 渲染器加光追，称一次写对并完美整合进现有代码，认为 AI 对代码的理解已不逊于人类。其项目 EVEngine 已开源（C++20 + Vulkan + WebGPU，类 love2d 风格），定位是面向 AI 大规模开发游戏的引擎，内置编辑器组件、MCP 服务器、脚本与调试接口。

### 关键要点
- 楼主判断：AI 已能完成“理解现有代码并正确改造”这类高难度任务，而非只写片段。
- 项目差异：EVEngine 尚不成熟，无法与 Unity/UE 比成熟度，重点解决多 Agent 协作与 AI 开发效率痛点。
- 跨平台：除 WebGPU 端需少量配置且部分功能缺失外，macOS/Linux/Windows/iOS/Android 五端一份代码运行。
- 成本视角：有回复称花 100 多美元 token 就把想法做出来；按 API 价格对比人工成本，AI 已具竞争力（无需五险一金、可开票）。

### 评论补充
多数回复不认同“取代”，而倾向“提效”：低水平程序员能借 AI 写出高质量代码，高水平者转向更重要的工作。也有案例称用 AI 解析第三方算法 jar 包并改造，使原厂失去后续维护收入。分歧在于时间尺度：有人认为未来五年仅剩少数人做开源基建，有人认为开发工作将名存实亡，人类只需说清需求。

### 风险提示
结论主要基于个人单次体验与主观感受，缺少可复现的评测数据；对“取代”的判断属预测性观点，需谨慎看待。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248259" target="_blank" rel="noopener noreferrer">现在 AI 是不是逐渐能取代很多高水平程序员了</a></span><span class="topic-stats">回复 104 · 收藏 24</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248260" markdown="1">
<summary>
<span class="topic-rank">3</span>
<span class="topic-title">恒洁智能马桶过保三月维修费超千元，京东补偿500元</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
楼主 2020 年装修时在京东购入约 2200 元的恒洁智能马桶，6 月过保后故障频发：8 月底首次维修需先付配件费、配件顺丰到付，配件费 320 元加上门费 100 元；9 月底马桶彻底罢工，两次上门又发现锈蚀零件，累计维修费逼近 1000 元，接近商品价格一半。

### 关键要点
- **恒洁售后流程**：先视频诊断、先付配件费、配件快递到付，每次等待 2 至 3 天，无法一次排查完整故障。
- **京东兜底**：升级专员后，京东与厂商经理沟通减免未果，最终由京东补偿 500 元，后续不再追加补偿。
- **沉没成本困境**：已付 600 多元维修费，楼主倾向继续维修而非换新。
- **对比经验**：楼主认为美的洗烘套装虽年年维修，但网点会主动部分减免，沟通更像真人，因此仍愿复购。

### 评论补充
多位用户反映恒洁智能马桶遥控器电池仓锈蚀、返臭、水件难配，建议避雷恒洁、九牧；也有用户称恒洁传统马桶十年无碍，认为马桶与智能马桶盖是不同技术门类。有用户建议传统马桶加 TOTO 卫洗丽更省心，或线下购买以获得更好服务。另有用户分享智能马桶漏水后与京东协商 6 折退款，以及杂牌马桶水泵堵塞、80 元换水泵解决的经验。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248260" target="_blank" rel="noopener noreferrer">避坑恒洁卫浴，前所未见的售后体验</a></span><span class="topic-stats">回复 62 · 收藏 17</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248294" markdown="1">
<summary>
<span class="topic-rank">4</span>
<span class="topic-title">AI 辅助前后端接口对接的实践与工具</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
主帖提出一套 AI 辅助前后端对接流程：后端导出 Swagger/OpenAPI 生成 TS 类型、把请求封装与示例喂给 AI、按模块让 AI 写 API 层、页面完成后再让 AI 对接数据。作者不确定这是否主流，征求更高效做法。评论显示该流程可行，但多数人认为可进一步压缩步骤，核心是减少“文档中转”带来的信息损耗。

### 关键要点
- **合并步骤**：有回复指出 1、2、3 步可合成一步，客户端调用代码用模板直接生成；也有观点认为前后端一起生成，不必用文档中转，因为接口文档不足以表达不同场景下接口调用的组合顺序。
- **工具链**：被点名的方案包括 orval（Schema 翻译，偶有 bug）、apifox（提供 skill 供 Agent 调用）、apipost（有 MCP，生成响应示例后 AI 可直接对接）、yapi（自写工具下载接口 JSON + 对接 skill）。
- **开源项目**：有回复推荐 `openapi-ts-request`，可将 Swagger2/OpenAPI3/Apifox 生成 TypeScript/JavaScript 客户端请求函数，称已用数年。
- **更激进做法**：让 AI 直接读后端代码而非 Swagger；给 AI 账号，让它依据后端代码和测试服务器自测自写接口；AI 拉取后端最新代码、扫描需求与提交，输出接口覆盖率并标注存疑项，再介入联调。

### 评论补充
有回复强调接口文档不够，前端还需拼接不同情况下的调用顺序；也有回复认为对接接口已是最轻松的环节。部分评论为“一把梭”“前端岗位是否还存在”等情绪化表达，无实质信息。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248294" target="_blank" rel="noopener noreferrer">纯前端对接接口的痛， AI 真的解决了吗？</a></span><span class="topic-stats">回复 49 · 收藏 12</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248372" markdown="1">
<summary>
<span class="topic-rank">5</span>
<span class="topic-title">MySQL 单表 2000 万行限制是否仍成立</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

有开发者质疑“MySQL 单表不能超过 2000 万行”这一老说法：其依据是 B+ 树从 3 层变 4 层、多一次磁盘 I/O。但若服务器内存充足、Buffer Pool 能常驻非叶子节点，多出的一层只是内存二分查找，代价很小。真正该分表或归档的理由是备份恢复 SLA 扛不住、在线 DDL 风险大、热数据 Working Set 超出内存导致离散回表击穿，而不是机械套用行数阈值。

### 关键要点

- 2000 万行不是硬性上限，需结合硬件规格与查询场景判断。
- 分表/归档的合理触发条件：备份恢复 SLA、在线 DDL 风险、Working Set 超内存。
- 评论中有人称单表 200G、五六亿行运行正常，也有订单表近 2 亿行仍稳定。
- 云上 PolarDB 等产品可支撑单表 20 亿行级别。

### 评论补充

争议集中在“256G 内存”是否现实：有人指出多数业务部署在云平台，小公司从 2G 升 8G 都要犹豫，大公司则可用物理机甚至 1T 内存。也有观点认为与其死磕 SQL 优化，不如换 SSD；或直接用云厂商商用数据库。结论是阈值应随资源与场景变化，而非当圣经念。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248372" target="_blank" rel="noopener noreferrer">2026 年了，还有老架构坚持 MySQL 单表数据不能超过 2000 万行</a></span><span class="topic-stats">回复 66 · 收藏 7</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248365" markdown="1">
<summary>
<span class="topic-rank">6</span>
<span class="topic-title">三四千水箱版扫地机推荐：石头口碑集中，科沃斯多被劝退</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
OP 租房、无上下水条件，预算三四千，想买水箱版扫地机器人。评论集中在石头与科沃斯两个品牌的真实使用体验，并给出水箱版换水频率的参考。

### 关键要点
- **石头口碑占优**：多位用户提到 P10 Pro、P10S Pro、P20 Max、P20 Ultra Plus 使用稳定，保内故障可顺丰上门取送、免费维修。
- **科沃斯被多人劝退**：T50 PRO MAX、T20 被点名避雷，问题包括拖布缠绕误报、掉图、进禁区、语音助手关不掉、烘不干拖布。
- **水箱版换水频率**：70 多平两居、隔天拖地约两周换一次水；全屋拖地约一周一次。
- **价格参考**：石头 P20 Ultra Plus 水箱版官换到手不到 2.5k；科沃斯 X11 Pro 上下水款约 3000；追觅 S50 Pro 两千出头。
- **通用短板**：大块垃圾基本无解，地面杂物多会频繁卡机，有宠物后需先清场再启动。

### 评论补充
有用户建议尽量创造自动上下水条件，否则每周换水会累；也有人推荐洗地机（石头 Steam 3.0）作为替代，认为使用频率更高。追觅旗舰款体验不错但烘干噪音大。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248365" target="_blank" rel="noopener noreferrer">求推荐扫地机</a></span><span class="topic-stats">回复 50 · 收藏 10</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248296" markdown="1">
<summary>
<span class="topic-rank">7</span>
<span class="topic-title">3080 Ti 12G 跑 125B MoE：Strata 安装、调参与实测</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者在 3080 Ti 12G / 64GB DDR4 四通道 / PCIe 3.0 / Win11 上，用 Strata 0.1.43 跑 Qwen3.8-Flash-Next Q2_0（39.2GB）125B MoE 模型。原理是把装不下的专家放系统内存，经 PCIe 搬进显存，用内存和 PCIe 换显存容量，因此速度主要看 PCIe 与内存，64GB 内存是硬门槛。

### 关键要点
- **量化选择**：Q2_0 37.6GB 余量最大；IQ2_XS 39.2GB；IQ3_XXS 47.0GB；IQ3_S 54.8GB 最吃内存。作者选 Q2_0 是为内存余量，并提醒别选“均匀 4bit”档，要选 mixed。
- **安装坑**：程序与模型必须平级目录（如 `D:\Strata\Strata-main` 与 `Strata-data`），目录名带 `(2)` 会重下 40GB；启动别加 `--setup`；升级用 `UPDATE.bat`，升级前备份 `strata-q2_0.json` 和 `run-q2_0.bat`。
- **实测数据**：引擎 0.1.39→0.1.43，decode 62.4→76.0（+21.8%），30 路并发单路 +25.6%、墙钟 −19.8%，主因是 ROUTE_TAIL_SKIP。上下文 32768 为硬上限，输入+max_tokens 超限直接 HTTP 400 且不截断。
- **调参方法**：`--pcie-frac` 呈倒 U 形（0.34 附近峰值 53.2 tok/s），再扫 `--spec` 4/6/8 与 CPU 线程，每次只动一个变量。负优化项 `--adapt-every` 和 `--kv k8v4` 别开。
- **能力边界**：单轮代码 23/23 可跑，指令遵循 5/5，长文 14149 token 一次成型；但精确计数会错（1-1000 含 7 答 192，正解 271），并发总吞吐封顶约 60 tok/s，长链会丢约定。

### 评论补充
有回复指出 32K 并非硬上限，可改到 128/256K 但极耗内存，32K 实用性有限；另有用户实测 IQ3_XXS 在同类配置跑到 50~60 tok/s，rtx5070+96G 内存 100K 上下文预填充 1k、解码 54。也有观点认为等 llama.cpp 补丁落地后性能接近且全量化支持更好，但代码结构复杂。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248296" target="_blank" rel="noopener noreferrer">RTX 3080 Ti 12G 跑 125B MoE Qwen3.8-Flash-Next — Strata 安装跟实测</a></span><span class="topic-stats">回复 13 · 收藏 11</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248288" markdown="1">
<summary>
<span class="topic-rank">8</span>
<span class="topic-title">两年前楼市讨论回顾：苏州逆势上涨与K形分化</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
楼主翻出两年前 V2EX 的楼市讨论帖，指出当时已有不少人察觉楼市危机，但仍有刚需迫于现实高位上车，被套牢后成为“药渣”。楼主提到今年苏州等地上半年房价上涨，不确定是超跌反弹还是跌到位，并建议握紧口袋。

### 关键要点
- **自住是否该在乎涨跌**：有回复质疑“自住无需在乎涨跌”的说法，认为在房价 8 万的小区附近打工，未必非得买房自住。
- **杠杆有代价**：有回复回顾“房贷是普通人唯一一次低成本撬动大杠杆薅国家羊毛”的旧论调，认为牛市经验不是不变定律，所有杠杆都有代价。
- **城市分化**：有回复认为未来房价不会齐涨齐跌，产业强的城市核心地段稳，没产业的地方难出手；苏州涨价主要是改善型新房，二手仍在跌。
- **苏州上涨归因**：有回复称苏州 AI 硬件大厂上半年爆发，高管套现，带动苏州、合肥等房价逆势增长。
- **长期判断分歧**：有回复以东京房价和人口出生率反驳“人口决定房价”，认为核心城市人口可持续流入，真正影响房价的是货币政策、信贷周期、心理预期和土地供给。

### 评论补充
有回复认为失业率和劳动参与率不稳住，房价下跌无止境；也有回复指出网上唱空者多为无房者，极端声音更容易传播。整体看，讨论从情绪宣泄转向对杠杆、城市分化和宏观指标的理性分析，但缺乏可验证的数据来源。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248288" target="_blank" rel="noopener noreferrer">收藏夹考古：重温两年前的楼市讨论</a></span><span class="topic-stats">回复 54 · 收藏 8</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248247" markdown="1">
<summary>
<span class="topic-rank">9</span>
<span class="topic-title">原生 macOS Vaultwarden 客户端 MyGo：零 WebView，支持 Touch ID 与系统 AutoFill</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者自建 Vaultwarden 多年，因官方 macOS 客户端基于 Electron（内存数百兆、唤醒迟钝）、Safari 自动填充依赖扩展，遂自写原生客户端 **MyGo Vaultwarden** 并开源（GPL-3.0）。

### 关键要点
- **技术路线**：基于 egoist 的 MyGo 框架，后端纯 Go 处理网络请求、AES-GCM/Argon2 加解密、同步与快照；UI 绑定 Swift/AppKit，主窗口无 WebView/HTML/JS，内存占用小。
- **功能**：接入 macOS 系统级 AutoFill（Credential Provider），Safari 等无需常驻扩展，Touch ID 认证填充，TOTP 条目填充后自动复制验证码；支持 8 种条目类型、收藏/文件夹/归档/回收站、⌘F 搜索；直连自建服务器，支持 MFA/恢复码、Bitwarden 兼容 JSON 导入导出、Send、设备审批与应用内更新。
- **安全设计**：主应用与 AutoFill 扩展双沙盒隔离，扩展仅读取过滤后的 Login 最小投影；本地快照以 Keychain+主密码保护的 AES-GCM 落盘；请求前拒绝弱 KDF 参数；锁屏/睡眠/空闲 15 分钟自动锁定；未知写入结果不静默重放；更新包校验 Ed25519 签名与 SHA-256。
- **局限**：暂不支持组织管理（组织条目可同步解密）；仅 macOS；未做第三方安全审计，重要数据建议先用官方端导出备份。

### 评论补充
有用户反馈连接自建服务器时报“服务器响应不符合支持的 vaultwarden 协议”；另有用户因官方 Electron 客户端问题转投 Keepass，表示愿意试用；也有人指出 SSH agent 使用较多，该客户端暂无法替代。

项目地址：https://github.com/vfasky/mygo-vaultwarden ，官网 https://mygo-vault.vfasky.com 。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248247" target="_blank" rel="noopener noreferrer">做了一个原生的 macOS Vaultwarden 客户端：基于 MyGo ，主窗口零 WebView，支持 Touch ID 与系统级 AutoFill</a></span><span class="topic-stats">回复 8 · 收藏 11</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248316" markdown="1">
<summary>
<span class="topic-rank">10</span>
<span class="topic-title">AI 执行 rm -rf 删光 50 个项目：如何防止误删</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
有用户让 AI 工具 hermes 执行 `git clone` 到 `/root/project`，AI 依据记忆中一条来自 Drone 流水线的错误惯例，先执行了 `rm -rf /root/project`，导致约 50 个项目源码被删。文件系统为 ext4 且挂载带 `discard` 参数，`debugfs` 显示 0 个可恢复 inode，块级恢复已确认失败。发帖人询问如何防止此类故障，并考虑给 codex 加 hook、每会话后 push 到远程仓库。

### 关键要点
- **兜底靠远程仓库**：多个回复建议项目放 GitHub 私有仓库，本地被删可重新 clone；hook 自动 push 可行。
- **沙箱隔离**：把工具装进 Docker，用 `docker run --rm -it -v my_project:/workspace hermes bash` 执行，可放心 bypass permission，改动通过 PR 提交便于 review。
- **权限与规则限制**：在配置中 deny 危险命令（如 `Bash(rm -rf /)`、`Bash(sudo:*)`、读取 `.env`），危险操作需在沙箱内执行；也可把 `rm` 做 alias 或改为移入垃圾桶。
- **提示词约束**：把谨慎类指引直接塞进系统提示词，而非作为 skill；在 `AGENTS.md` 写明改动前先询问。
- **虚拟机+备份**：作为额外防护层。

### 评论补充
发帖人确认模型为 glm 5.3，有回复认为该模型表现不佳。有人提醒不要用 gitee 等国内 git 服务（引用 /t/756791、/t/956169）。另有回复分享自研 vfs-sandbox 工具（github.com/seamory/vfs-sandbox），在程序与文件系统间加虚拟层，写操作在 vfs 上进行、退出时取回。共识是：规则只是提醒，远程仓库才是最终兜底。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248316" target="_blank" rel="noopener noreferrer">天塌了， hermes 把我的所有项目源码都删了，请教下怎么防止这种情况？</a></span><span class="topic-stats">回复 19 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248374" markdown="1">
<summary>
<span class="topic-rank">11</span>
<span class="topic-title">Claude Opus5.5 半月体验：Claude 出方案、Codex 执行省 80% token</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者订阅 Claude Pro 半个月，给 Opus5.5 打 8 分以上，而此前常用的 Codex（20x）只给 6.5 分。差距主要来自 harness：同一 prompt 下 Claude 更能理解需求，Codex 倾向把任务复杂化，输出质量偏低。

### 关键要点
- **组合方案**：用 Claude 出方案并评估质量，Codex 负责执行，可省约 80% 的 Claude token。
- **实现方式**：两边共享任务文件，Claude 写任务并调用 Codex 执行，完成后改文件状态，Claude 定时轮询判断是否完成。
- **成本限制**：Pro 额度仍捉襟见肘，作者想升 Max；当前为 App Store 订阅，需到期取消后转官网订阅。
- **速度对比**：评论称 Codex 约 10–20 token/s，Claude 约 80–110 token/s，Codex 明显更慢。

### 评论补充
有回复指出“hardness”应为 harness，并认为 GPT 的指令遵循更好，可通过 AGENTS.md 约束过度防御与 fallback；Claude 更会揣摩意图、更像人话，但干活不够踏实。另有用户用 VS Code 左 Claude 右 Codex 的土办法：先与 Claude 讨论方案写成文档，再拆成细分 prompt 交给 Codex 执行、由 Claude 验收。插件方面提到 openai/codex-plugin-cc 可直接让 Claude 调用 Codex，也有人推荐 herdr 打通通讯。风险提示：多位用户询问如何避免封号，有人提醒谨慎转官网订阅，也有用户因安全围栏过高无法用于自身项目。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248374" target="_blank" rel="noopener noreferrer">Claude Opus5.5 半个月的使用体验</a></span><span class="topic-stats">回复 20 · 收藏 5</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248267" markdown="1">
<summary>
<span class="topic-rank">12</span>
<span class="topic-title">Grok、Cursor 与 X 会员合并订阅：新套餐与老套餐差异</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
Grok、Cursor 与 X 会员推出合并订阅的新套餐体系，旧套餐入口仍可见并可继续订阅。核心争议在于新套餐把额度合并共享，而老套餐各订阅额度独立，因此不少老用户认为老套餐更保值。

### 关键要点
- **额度池差异**：新订阅为共享池；老套餐额度仍分开，各花各的钱（作者 Vaspike 与 licoycn 均确认）。
- **老套餐优势**：licoycn 指出 heavy 赠送的 Cursor 及额外 other models 在新官方介绍中已不包含，老套餐因此更保值。
- **价格对比**：有回复称新套餐 30 美元/月，比 Cursor 贵；也有人认为若降到 20 美元会很有竞争力。
- **Cursor 老套餐入口**：daveze 称 Cursor 网页版 dashboard 仍可订阅 20 美元 Pro 老套餐。
- **Grok Bot 口碑**：多名用户反馈好用，默认有 root 权限、限制少，可打通 Lark、微信；对比 OpenAI dots 云电脑权限受限、无 root、无法 apt 装包。

### 评论补充
licoycn 提醒老用户升级有坑，并给出分析链接 https://x.com/licoycn/status/2109809387846205704 。有用户只想单买 Grok Bot 套餐，认为 Grok 其他能力一般。关于 Grok Bot 底层模型是否为 Claude Opus，仅为猜测，未获证实。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248267" target="_blank" rel="noopener noreferrer">Grok 和 cursor 以及 X 会员合并订阅, 全新套餐体系</a></span><span class="topic-stats">回复 26 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248338" markdown="1">
<summary>
<span class="topic-rank">13</span>
<span class="topic-title">营业厅换SIM卡被赠2张卡：开卡任务与欠费风险</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
有用户去官方营业厅换磨损的 SIM 卡，被营业员以“开卡任务、帮完成业绩”为由赠送 2 张新卡，事后发现其中一张是 59 元套餐，并已注册绑定多个 App。评论区普遍认为这不是单纯帮忙，而是营业厅拉新返佣的业绩行为，用户可能承担实名卡欠费、黑名单甚至征信风险。

### 关键要点
- **返佣动机**：有回复称办一张卡返佣可达几十到一两百元，拉新还有奖励，甚至存在自动批量注册 App 新用户的机器。
- **“自动注销”话术存疑**：多位用户指出，卡是本人实名，几个月不用未必自动销号；若属欠费销号，本金欠费通常跑不掉，严重时可能上征信，具体看各省运营商政策。
- **应对方式**：可打运营商客服投诉注销，不行则升级到工信部投诉；也可直接拒绝或换一家店办理。
- **风险场景**：有回复提到在银行补卡、销卡时被营业员偷偷注册、绑定各类 App，老年人尤其容易中招。

### 评论补充
发帖人后续查看发现新卡为 59 元套餐并绑定了多个 App，推测营业厅靠 App 商家分润；其致电官方客服后被告知可自动销号、无欠费和违约金，但评论仍建议尽早主动销户，不要为别人的提成买单。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248338" target="_blank" rel="noopener noreferrer">去线下营业厅换 Sim 卡，一次被赠了 2 张卡</a></span><span class="topic-stats">回复 20 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248456" markdown="1">
<summary>
<span class="topic-rank">14</span>
<span class="topic-title">移动国际快线实测：110元/Mbps/月，国际方向走CMIN2</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
坐标 023 的 V2EX 用户办理了中国移动「国际快线」，实测发现其国际方向全部走 CMIN2，延迟与抖动表现不错，且无需新增设备，直接在现有 PTN 设备上开通。

### 关键要点
- **产品定位**：作者认为它本质是「境外方向走 CMIN2 的互联网专线」，并非真正的 IEPL/IPLC 专线，也不能直接访问被屏蔽网站。
- **价格**：谈下来约 **110 元/Mbps/月**，作者估计还有下探到五折的空间；不需要备案。
- **开通流程**：已有入户光缆和设备时勘探很快，但受国庆假期影响拖了约 10 天才接到后台与装维电话，开通后半小时即拿到网关和 IP。
- **测试对象**：Cloudflare、GitHub、Vultr 东京/约翰内斯堡/伦敦/华盛顿、AWS 台北等，作者称延迟和抖动都不错，晚高峰测试待补。
- **产品目录**：客户经理翻出五种国际优化产品，其中两种需试点园区才能安装，其余为跨境直播专线（带国外落地的 SDWAN）、SDWAN 国际快线、国际快线。

### 评论补充
- 多位用户追问价格，确认计价单位为「元/Mbps/月」，10Mbps 即约 1100 元/月，被部分人认为偏贵。
- 有同城用户提到叠加在 1G 对等专线上的 SD-WAN（CU）约 300 元/M/月，可选香港出口，023 到 HK 延迟约 35ms，路由中间节点不可见，无墙。
- 另有用户称公司办过移动 IEPL 重庆到香港，端内延迟约 32ms 很稳，但 10M 月费约 8000 元，且需自行解决香港互联网出口。
- 有评论提到广移 SD-WAN 盒子一年 3000 多元、100M 共享带宽直连香港，可直接访问外网。
- 关于备案，有评论认为实名办理等同于备案。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248456" target="_blank" rel="noopener noreferrer">023 国际专线安装记录</a></span><span class="topic-stats">回复 26 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248437" markdown="1">
<summary>
<span class="topic-rank">15</span>
<span class="topic-title">多AI并行任务管理：看板、PR与注意力方法</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者同时使用 codex、公司要求的 qoder cn 和自用的 WorkBuddy，任务一多就记不住谁在做什么，常出现任务已完成却忘记处理、权限请求长时间未点的情况。他设想做一个看板：AI 开始任务即新增一条“进行中”，完成后改为“待处理”，归档已结束任务，只需盯“待处理”列表。

### 关键要点
- **统一入口**：把多个 AI/Agent 的任务收敛到一个看板或队列，减少遗漏；有回复建议用 Agent 互相调用（如 WorkBuddy 调 qoder cn 的模型），但作者认为这解决不了多任务并发本身。
- **以 PR 为收口**：让每个窗口完成后提交 PR，写清背景/目标/方法，在仓库里逐个 review，再让对话窗口读 PR comment 修复。
- **任务拆细**：先批量建 issue 再统一跑，颗粒度越细，并行时需要的决策越少。
- **注意力管理**：用虚拟桌面/大屏按项目分屏，关闭手机通知等干扰源；未完成事项会持续占用精力（蔡加尼克效应），应控制挂起数量。
- **接受混乱**：并行能力需要练习，工具无法一步到位；有人同时开 6～8 个任务后逐渐习惯。

### 评论补充
已有开源工具 [talkTask](https://github.com/Canace22/talkTask) 尝试把多项目任务放进同一队列，由系统安排批次、调用本地 Agent 并控制执行容量。也有观点认为不必事事盯着，过度干预反而低效。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248437" target="_blank" rel="noopener noreferrer">同时用两个 AI，任务多了之后好乱，有人有这种情况嘛？</a></span><span class="topic-stats">回复 24 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248292" markdown="1">
<summary>
<span class="topic-rank">16</span>
<span class="topic-title">Gmail 改名后 V2EX 谷歌登录变成新账号的解决办法</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
用 Google 账号注册 V2EX 后修改 Gmail 主邮箱名，再用 Google 快捷登录会进入一个全新的 V2EX 账号并要求邀请码。原因是 V2EX 以邮箱地址而非 Google user id 识别用户，邮箱名一变就被当成新用户。

### 关键要点
- 最直接的解法：在 Gmail 设置里把主邮箱切换回原来的地址，再登录即可恢复旧账号（楼主实测有效）。
- 若已产生新账号，可先登录旧 V2EX 账号，把绑定邮箱改成新的 Gmail 名，再到 Google 账号的关联应用中解绑 V2EX，之后重新用 Google 登录即可绑定回旧账号。
- 用 Google 注册的 V2EX 账号默认没有密码，可通过 https://www.v2ex.com/forgot 用用户名和邮箱重置密码，再走表单登录。
- 修改 Gmail 主邮箱名只是把旧地址降为备用邮箱，旧地址通常仍可用；但若 V2EX 侧识别异常，仍会落到新账号。

### 评论补充
有用户指出这是 V2EX 只存邮箱、不存 Google user id 导致的设计缺陷，建议增加绑定入口；也有人提醒主力 Gmail 不要轻易改名，并建议尽量用邮箱+密码注册而非 Google 快捷登录，以免 Google 账号被封后无法登录。个别回复怀疑是盗号，与主帖问题无关。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248292" target="_blank" rel="noopener noreferrer">我替我一个同事问： gmail 改过邮箱名，怎么登录 v2ex</a></span><span class="topic-stats">回复 21 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248517" markdown="1">
<summary>
<span class="topic-rank">17</span>
<span class="topic-title">Apple TV 4K 第四代发布：A19 芯片、Siri AI，299 美元</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
苹果发布 Apple TV 4K（第四代），外观与上代一致，升级集中在内部：A19 芯片（上代为 A15）、由 Apple Intelligence 驱动的 Siri AI（可直接语音唤醒，无需遥控器）、机身首次内置三麦克风阵列并支持人声隔离。无线升级为 Wi‑Fi 7（2×2 MIMO）、蓝牙 6 与 Thread；接口为 HDMI 2.1、千兆以太网、红外接收。视频最高 2160p 60fps，支持杜比视界、HDR10、HDR10+、HLG 与 AV1 解码、HDMI QMS；音频支持杜比全景声、Apple Lossless、FLAC。容量 128GB，重 217g。新款 Siri Remote（第四代）改用 USB‑C 充电并支持精确查找。美国售价 299 美元，11 月 13 日起售。

### 关键要点
- 价格是最大争议：上代 128GB 首发 149 美元，本代 299 美元，且取消了低配版本，被指“价格翻倍”。
- 香港售价 HK$2,399，同样被认为不便宜。
- 有回复指出 Siri AI 并非独占，Apple TV 4K 第二代在 os27.2 上也会以测试版获得该功能。
- 有观点认为除性能外，其余升级属于“锦上添花”，AV1 解码被视为最有实际意义的改进。

### 评论补充
多数回复集中在价格：老用户倾向继续使用旧款或等评测，也有人已下单。关于性能用途，有用户希望其能接游戏手柄玩 iOS 游戏，但目前并不支持。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248517" target="_blank" rel="noopener noreferrer">苹果正式发布 Apple TV 4K（第四代）： A19 芯片 + Siri AI</a></span><span class="topic-stats">回复 32 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248424" markdown="1">
<summary>
<span class="topic-rank">18</span>
<span class="topic-title">115网盘备份NAS触发风控封禁，如何限速规避</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
用户用群晖 HyperBackup 配合 CloudDrive2 加密备份约 2.8T 文件到 115 网盘，上传大量 50MB 的 bucket 和 index 文件。首次上传 700GB 后被封 72 小时，错误码 `990020`（账号存在异常，此功能已被停用）；剩余 300GB 时再次被封 120 小时。客服回复称触发系统安全防护，建议分批分量上传、控制频率和数量。用户已退款 115 年费。

### 关键要点
- 风控诱因指向**大容量、大批量、高并发**上传，而非单纯文件类型。
- 多位回复者建议在 CloudDrive2 或 rclone 层**限制 API 并发与速率**：有用户将请求频次限制到 2 即不再触发频控，也有人建议限为 1 个/秒。
- 替代方案：改用 AWS S3 Glacier Deep Archive、阿里云深度冷归档或腾讯云深度归档，3T 每月约 30 元；或直接加购硬盘本地备份。
- 有用户用 backrest → rclone → AList/OpenList → 115 做增量备份，首次 1T 断断续续跑一周未被封，可能与上传较早、水管小有关。

### 评论补充
- 有用户反馈 OpenList 驱动不稳定，甚至自写 115 驱动。
- 有人询问是否有工具能按指定层级文件夹加密压缩后分批上传到 115/百度盘，暂无明确答案。
- 结论：115 网盘对第三方 API 大流量备份风控趋严，NAS 云备份需限速、分批，并准备本地或冷归档兜底。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248424" target="_blank" rel="noopener noreferrer">115 网盘备份 NAS 被封禁功能</a></span><span class="topic-stats">回复 12 · 收藏 5</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248370" markdown="1">
<summary>
<span class="topic-rank">19</span>
<span class="topic-title">Java+小程序用AI做测试：工具选型与实践经验</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
公司想用 AI 做 Java 后端与微信小程序的测试，希望不止单元测试，还能覆盖更完整的测试流程。讨论给出的共识是：**AI 在单元测试、代码审计、安全测试上基本可信任，功能测试仍不理想**，最终上线仍需人工验收。

### 关键要点
- **单元测试**：让 AI 补用例较顺，可配合“过不了就不合并”的硬性检查。
- **端到端**：Web 侧可用 Gemini + Playwright 做 E2E，有现成提示词仓库可参考：https://github.com/john-walks-slow/rabbit-skills/blob/master/.apm/agents/e2e-tester.agent.md
- **功能测试**：AI 能覆盖主要路径约 50% 以上，产出用例、执行并出报告截图，需多模态能力；边界情况仍靠人工。
- **移动端**：小程序/App 可用 adb 脚本做端到端；后端接口不适用。
- **落地方式**：测试平台 + SKILL 辅助，可完成基础验收与冒烟测试。

### 评论补充
有实践者强调“把验收写在前面”，并指出真机观感问题（如自定义字体过大导致灵动岛组件被系统收掉）不会出现在测试报告里，必须人工摸一遍。也有人提醒应做行为测试，否则测试越堆越多。整体判断：AI 测试可行，但差口气的地方仍需人工，未来可能改善。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248370" target="_blank" rel="noopener noreferrer">使用 ai 进行测试的疑问</a></span><span class="topic-stats">回复 14 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248438" markdown="1">
<summary>
<span class="topic-rank">20</span>
<span class="topic-title">2000元预算为MacBook增购显示器：四款候选与选购建议</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
楼主预算约 2000 元，想为 MacBook 增购一台显示器，候选为华为 MateView GT Sound、Dell S2725QS、Redmi A27U、LG 27UQ850K。评论集中在色差、面板类型和双屏搭配上，没有形成统一推荐。

### 关键要点
- **双屏优先同型号或同面板**：多位用户强调增购显示器最好与已有显示器同型号，否则色差明显、调色困难；楼主补充另一台是 LG。
- **候选反馈**：Dell S2725QS 有用户反馈偏黄，也有人 1700 元内购入、不打游戏够用；LG 27UQ850K 有用户 618 购入至今满意，且被认为优于 Redmi 上一代；Redmi A27U 被建议在分辨率和刷新率差距不大时选最便宜的，换机不心疼。
- **华为 MateView GT Sound 争议大**：有用户称使用两个月体验不错、外观好看，但被指出是 VA 屏，视角偏移会发白，也有人直接建议排除。
- **替代方向**：追求 Mac 观感可考虑二手 LG UltraFine 24 寸 3K（约 3000 元），27 寸问题较多；更高阶为二手 Studio Display 或新款 Studio Display/XDR。另有用户推荐 HKC T2755U，并建议 24 寸 4K 或 32 寸 5K。

### 评论补充
有用户认为 27 寸不够用，推荐 34 寸以便同时摆放 codex、vscode、chrome、finder 等窗口。整体看，预算内没有完美选项，需在色准、面板和尺寸间取舍。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248438" target="_blank" rel="noopener noreferrer">增购一台显示器</a></span><span class="topic-stats">回复 17 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248467" markdown="1">
<summary>
<span class="topic-rank">21</span>
<span class="topic-title">4G 模组做 SIP trunk 被限制通讯：IMEI 与风控经验</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
有用户用移远 EC20 模组替代手机插卡，搭建 SIP trunk 并做短信转发，使用几天后被运营商短信通知限制通讯。讨论集中在运营商如何识别非手机设备，以及如何降低风控概率。

### 关键要点
- 主帖作者判断，运营商可通过 IMEI 与 GSMA 信息识别设备类型，机卡绑定即基于这些信息；其卡为外地卡，可能加重风控。
- 短信走 SIP MESSAGE 转发，被怀疑是触发限制的直接原因之一。
- 有回复指出，早期用 Asterisk 多打几次电话即被停机，说明通话行为本身也会触发风控。
- 长期稳定运行的方案：短信通过 Bark 推送、发送走 Telegram Bot，通话用 iOS 上的 Bria 订阅。
- 另有用户用 AIR780EP 跑 Lua 程序，通过 MQTT 与服务器交换收发短信，轻量使用暂未遇风控；选 MQTT 是为绕开备案。

### 评论补充
有用户同样用 EC20 转 SIP 和短信，运行一年多无问题，做法是把 IMEI 伪装成此前跑 SMSForwarder 的备用机。可见设备识别与 IMEI 一致性可能是风控关键变量，但均为个人经验，运营商策略与地区差异未经验证。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248467" target="_blank" rel="noopener noreferrer">使用 4G 模块利用手机卡做 SIP trunk 被限制通讯</a></span><span class="topic-stats">回复 9 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248423" markdown="1">
<summary>
<span class="topic-rank">22</span>
<span class="topic-title">免费流量查询工具 vaneform：榜单、API 与 MCP</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者发布免费网站流量查询工具 vaneform（https://vaneform.com/zh），数据主要来自 SimilarWeb 及其他信源，功能仍在迭代。

### 关键要点
- 输入任意域名可查月访问量、流量来源、关键词、相似网站。
- 提供收入榜、流量增长榜、AI 流量榜、外链榜，支持按行业筛选。
- 提供 API 和 MCP，可接入 Claude、Cursor 让 AI 查数据。
- 未登录即可使用大部分功能；登录后每天可查 999 次，榜单免费看前 100 名。
- 收费点仅两处：更详细的榜单数据和查站 API。

### 评论补充
有用户反馈“关键词排名、落地页、搜索竞品”几个 tab 内容有问题，作者确认关键词排名默认展示的是 Google 案例，因 dataforseo 取数有固定成本未对每个站点预取，承认展示有误导性并会优化。作者表示后续可能把 API/MCP 免费或限额开放，榜单会定期更新。另有用户提到曾想做类似站点但搁置。

### 限制
数据与功能仍在迭代，部分边缘功能由 AI 扩展、未经完整人工测试；关键词排名数据受成本限制，免费版覆盖有限。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248423" target="_blank" rel="noopener noreferrer">做了个免费的网站流量查询工具 vaneform，提供收入榜单和流量榜单，以及多域名注册查询的工具。</a></span><span class="topic-stats">回复 10 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248266" markdown="1">
<summary>
<span class="topic-rank">23</span>
<span class="topic-title">Mac 打开 Excel 的第三方工具推荐与 WPS 去广告方案</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
主帖反映 Mac 上打开 Excel 的痛点：Office 官方与 Numbers 体验不佳，WPS 广告和弹窗多，希望找到纯净的第三方工具或免登录网页表格。评论给出的替代方案集中在 OnlyOffice、WPS 海外版/历史版本、在线文档与 DuckDB 几条路线。

### 关键要点
- **OnlyOffice**：被多次推荐，评价为免费开源、相对轻巧好用，是主帖需求最直接的替代品。
- **WPS 去广告思路**：使用海外版；或从 Mac App Store 下载并只在商店内更新、不点应用内升级；或使用历史版本（如 6.1.0 8274）以保持干净。
- **在线方案**：飞书、钉钉、企微、腾讯文档、Google 在线文档、微软在线 Office 均可在线查看表格，部分需登录。
- **大表格场景**：有回复建议用 `duckdb -ui` 配合 SQL 查询，认为 Excel 处理大表太卡。
- 另有虚拟机装 Windows、以及 GridCraft 等小众工具被提及。

### 评论补充
关于 WPS 存在分歧：一方认为其广告弹窗侵入性强，另一方认为海外版或商店版基本无广告。整体共识是 OnlyOffice 值得优先尝试，WPS 需通过版本与更新渠道控制广告。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248266" target="_blank" rel="noopener noreferrer">mac 打开 excel 有什么第三方的好用工具吗？</a></span><span class="topic-stats">回复 14 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248330" markdown="1">
<summary>
<span class="topic-rank">24</span>
<span class="topic-title">09年老车被墙皮砸中未买车损险，车主建议老车也上车损</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
一位车主将 09 年的老车停在小区停车位，被楼上阳台外立面挑板基座抹灰层脱落砸中：前挡风玻璃全碎、车顶砸出大凹，前盖和翼子板也有不同程度损伤。因只买了三者险、未买车损险，损失需自行承担，还要请假与物业协商维权。他的结论是：老车车损险不贵，能买就买，避免花精力维权。

### 关键要点
- 停车位并非绝对安全，高空坠物属于典型“祸从天降”，三者险不覆盖自身车辆损失。
- 未买车损险的隐性成本是时间与沟通成本：请假、反复与物业交涉。
- 有评论指出车损险的核心价值在于**代位追偿**，可由保险公司先行赔付再向责任方追偿。
- 也有观点认为此类情况应直接向物业索赔，未必需要动用车损险。

### 评论补充
- 多位用户反映老车投保受限：有 17 年车龄的车被某保险公司拒保车损，中断投保后再续保也可能被拒。
- 因此“老车也上车损”的建议存在前提：需确认保险公司是否承保、是否连续投保。
- 有用户认为老车车损维修费用本身不高，是否投保需结合车价与保费权衡。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248330" target="_blank" rel="noopener noreferrer">老车还是得买车损险啊</a></span><span class="topic-stats">回复 9 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1248457" markdown="1">
<summary>
<span class="topic-rank">25</span>
<span class="topic-title">国考进面分数线查询工具：整合4年数据与2027职位</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者把 2023-2026 四年国考《招考简章》职位表与面试人员名单（含最低进面分数）清洗对齐，做成查询站，并已入库 2027 年新职位表。数据全部来自国家公务员局官方公开文件，只做职位级聚合统计，不展示考生个人信息。

### 关键要点
- **查职位**：每个 2027 职位可看历年真实进面分数线，并基于同岗历史数据给出 2027 预估线。
- **按专业反查**：输入专业即可列出 2027 年可报岗位，支持叠加省份筛选。
- **按机关/地区浏览**：覆盖 600+ 招录机关、31 个省份的职位与分数线汇总。
- **榜单**：分数线最高 TOP100、低分捡漏榜、涨跌幅榜（目前展示 2026 真实数据）。
- 链接：https://shanganxian.waitchenx.cn ，报名 10 月 24 日截止。

### 评论补充
有用户反馈搜索结果缺少往年进面最低分和往年报考人数；作者回应称新岗位没有历史数据，老岗位才有，并解释 2027 年岗位变动大、职位代码年年变，是数据清洗的主要难点。

### 限制
预估线基于同岗历史数据推算，非官方数据；新设岗位无历史参考；报考人数等维度暂缺。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1248457" target="_blank" rel="noopener noreferrer">上岸线：把 4 年国考进面分数线 + 2027 全部职位做成了查询工具</a></span><span class="topic-stats">回复 3 · 收藏 2</span></p>

</div>

</details>
