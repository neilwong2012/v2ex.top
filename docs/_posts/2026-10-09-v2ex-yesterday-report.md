---
layout: report-post
title: "V2EX 每日热点回顾 · 2026-10-09"
date: 2026-10-09 08:30:00 +0800
categories: [v2ex, daily-report]
status: success
target_date: 2026-10-09
generated_at: "2026-10-10 09:42:35"
summary: "昨日主题 274 个，过滤 174 个，DeepSeek 分析 100 个，保留高价值内容 27 个。"
count_all: 274
count_excluded: 174
count_included: 100
count_high_signal: 0
count_valuable: 27
report_url: "/2026/10/09/"
data_url: "/data/2026-10-09.json"
---

# V2EX 2026-10-09 昨日新帖报告

<details class="topic-card" data-topic-id="1247300" markdown="1">
<summary>
<span class="topic-rank">1</span>
<span class="topic-title">国庆美东独行不自驾：18天花费约1.88万元明细</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者一人不自驾、全程公共交通完成国庆美东行程（上海—首尔—波士顿—纽约—费城—巴尔的摩—华盛顿—波士顿—首尔—上海），共约 18 天，总花费约 **18,824 元**（美元按 1:6.7、韩元按 1000:5 估算）。因波士顿暴风导致火车停运，损失一晚不可取消住宿（Stamford Amsterdam Hotel 655 元），并临时高价补订青旅，纽约少玩一天。

### 关键要点
- **费用结构**：机票与城际交通 7,362 元（39.1%）、住宿 6,510 元（34.6%）、景点通票 2,801 元（14.9%）、餐饮 1,170 元（6.2%）、市内交通 785 元（4.2%）、通信 132 元、行李寄存 84 元。
- **省钱手段**：多晚住青旅（HI Boston、Apple Hostels 等）与机场过夜；餐饮以麦当劳约 23 笔共 699 元为主；用 Go City 纽约/波士顿通票和美国博物馆联盟会员覆盖景点。
- **城际交通**：大韩航空上海—首尔—波士顿往返 6,761 元；AA 华盛顿 DCA—波士顿 340 元；Amtrak 三段城际火车合计仅 261 元，波士顿—Stamford 段免费改签后转 Metro-North 进纽约。
- **行程节奏**：纽约 2 天、费城与巴尔的摩各约 1 天、华盛顿约 2 天，城市间靠晚间 Amtrak 衔接，白天游览。

### 评论补充
多数评论认为该花费在美东并不算贵，属于精打细算的穷游：纽约酒店普遍 1000 元起步，稍好要 300 美元以上。作者回应称一人住酒店极不划算，美国不少酒店允许 4 人同住一间，多人分摊体验和成本都会更好。也有评论提醒，这种一天两顿快餐、睡青旅和机场的玩法更适合年轻体力好时体验。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247300" target="_blank" rel="noopener noreferrer">分享一下国庆美国东海岸的行程和花费</a></span><span class="topic-stats">回复 109 · 收藏 109</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247269" markdown="1">
<summary>
<span class="topic-rank">2</span>
<span class="topic-title">浏览器端 Office 2003 风格办公套件，支持无损编辑 docx/xlsx/pptx</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者发布了一个在浏览器端侧运行的 Office 2003 风格办公三件套，支持编辑 docx/xlsx/pptx/markdown，开源且可自行部署，不依赖云服务。项目地址为 https://vibeoffice.work ，GitHub 为 https://github.com/tcchen2026/VibeOffice ，只需一个静态 http server 托管 public 目录即可部署，也可作为 PWA 安装。

### 关键要点
- 已实现内嵌表格、艺术字、半透明蒙版、PPT 动画/SmartArt/图表、英文拼写检查，以及 markdown 与 docx 互转（带图片附件的 md 自动打包 zip）。
- 尚缺 PPT 内嵌视频、第三方字体、旧版 DOC 格式支持。
- 核心卖点是「无损编辑」：尽量在原始 docx/pptx 文档树上操作，只改需编辑处并保留非预期属性，避免 LibreOffice 式转换导出导致特性丢失。
- 作者称在 2800 个 docx、800 个 pptx 测试集上约 90% 文档可实现无损编辑，VBA 宏等不支持特性编辑后不丢失。
- 实测 36MB 含动画图表渐变的 pptx 可正常播放编辑，500 多页 docx 几秒内打开。

### 评论补充
有用户反馈 xlsx 打开后只能向右下移动、左上方向划不动，作者已复现并修复，预计次日更新。作者回应行业标准为 OOXML，但符合标准且能通过验证器的文件未必能被 Office 正常打开，Office 检查更严格。多语言支持正在开发中。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247269" target="_blank" rel="noopener noreferrer">在浏览器端侧运行的 Office 2003 风格办公三件套，支持编辑 docx/xlsx/pptx/markdown，开源、可自行部署</a></span><span class="topic-stats">回复 43 · 收藏 31</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247274" markdown="1">
<summary>
<span class="topic-rank">3</span>
<span class="topic-title">租车压到路人脚：报警报保险与私了流程记录</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者国庆在一嗨租车自驾山西古城，误入被商贩和游客占据的街道，龟速行驶时压到一名女士的脚。报警后警察、交警因拥堵迟迟未到，对方主动要求私了。最终在保险工作人员现场指导下手写私了协议、拍照留档，转账 500 元并备注赔付款，事后保险已赔付到账。

### 关键要点
- **事故后应先留证**：作者自认最大失误是没拍现场照片/视频就挪车，正确顺序是停车、拍照录像、报警，再听警察指令决定是否挪车。
- **报警报保险是备案**：即便最终私了，报警记录、通话录音、付款凭证都能加固自身立场；作者全程录音并备份现场照片。
- **私了协议的法律效力**：评论引用分析称，写明一次性终结赔偿、对方签字按手印、注明收到 500 元，原则上有效；但若事后查出隐匿骨折、韧带断裂等重大误解，或实际花费远超 500 元构成显失公平，对方仍可能申请撤销协议再索赔。
- **保险赔付前提**：作者表示私了是在保险工作人员现场指导下进行，保险最终赔付到账。
- **陌生古城用车建议**：评论建议把车停酒店，再打车或公交进城游玩，避免不熟悉路况误入步行街。

### 评论补充
多数回复认同“别主动私了，公事公办有保险兜底”，但也承认对方坚持且交警不到场时，500 元私了算省时省力。有回复质疑对方急于私了是否真受伤，作者称看到鞋上脏印、对方离开时仍一拐一拐。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247274" target="_blank" rel="noopener noreferrer">国庆事故处理记录：开车压到路人的脚。愿大家都平平安安</a></span><span class="topic-stats">回复 78 · 收藏 12</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247211" markdown="1">
<summary>
<span class="topic-rank">4</span>
<span class="topic-title">AI 改完代码后要不要逐行看 diff？85 条回复的实践分歧</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

主帖问的是：让 AI 改完代码后，是逐行看 diff，还是功能测通就提交？一次改十几个文件时，全看费劲，不看又怕它顺手改了不该改的地方。85 条回复显示，这个问题没有统一答案，分歧集中在**代码重要性和责任归属**上。

### 关键要点

- **按项目分级**：公司/生产代码要看，玩具项目、挂了无所谓的代码不看（ZxBing0066、miaotianxiao97）。生产代码“一点点改都要 review”，POC 能跑就行（fredweili）。
- **按时间与交付压力**：不忙才看代码，忙着交付就只看测试结果（txican）。
- **看什么**：重点看代码结构、使用方案和大方向，因为 AI 常不用最优/最新方案，会推高未来扩展成本（zackkk、miaotianxiao97）。
- **替代方案**：让 AI 按文档做 review，列出逻辑实现与风险，再配合多测试（ptstone）；也有人把测试一并交给 AI 自洽（sleek7671）。
- **责任视角**：把 AI 当手下的人，但 AI 出错时无法让它背锅，所以不能照搬“不看下属代码”的逻辑（txican、connor123）。

### 评论补充

多数人承认“以前会看，现在看不过来了”（ZRS、justwkj07），甚至“看不懂，哪部分都不是我写的”（XTTX、malusama）。yidinghe 的观点较有代表性：看是因为有问题自己能看出来，不看是因为有问题也看不出来，不必攀比。

### 结论

可复用的做法是：生产代码至少过一遍结构与方案，重点盯 AI 容易偏离最优解的部分；低风险代码用测试和 AI 自审兜底。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247211" target="_blank" rel="noopener noreferrer">你们用 AI 写代码，会每次都看它改了什么吗？</a></span><span class="topic-stats">回复 85 · 收藏 8</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247227" markdown="1">
<summary>
<span class="topic-rank">5</span>
<span class="topic-title">自用 .net 域名注册：选 Cloudflare 还是阿里云</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
用户打算长期持有 .net 域名用于自建邮箱服务（不商用），在阿里云与 Cloudflare 之间犹豫。评论共识是：**不接国内服务器、不打算备案，优先选 Cloudflare 等国外注册商**；若未来可能备案或接入国内服务器，则国内注册商更省事。

### 关键要点
- **续费价格**：Cloudflare 可逐年购买且续费价不变；阿里云、腾讯云只买一年后续费偏贵，通常要一次性买多年才划算。
- **备案与注册商无关**：备案取决于服务器/接入商所在地，域名在哪注册不影响；但国内备案通常要求域名完成国内实名认证，whois 信息需与备案主体一致，且后缀须在可备案范围内。
- **邮箱用途**：用国内注册商可能被要求先做网站备案，因此自建邮箱更倾向国外服务商。
- **后缀与注册局**：长期持有应避开冷门后缀，注意后缀背后的注册局运营方，有踩坑先例（见 https://v2ex.com/t/1241515）。
- **比价工具**：可参考 https://www.nazhumi.com/ ，重点看续费价而非首年价。

### 评论补充
- Cloudflare 注册的域名只能用其 DNS 解析，但可通过 API 改 NS 用别家解析，实际影响不大。
- 不想实名可选 Spaceship 等国外注册商，价格相对便宜。
- 有用户 .net 持有十年以上，续费从 69 涨到 98 元，认为自用不必纠结一二十元差价。
- 争议点：有观点认为域名在 CF 无法通过国内备案，也有观点认为备案与注册商无关，仅需实名与接入商一致。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247227" target="_blank" rel="noopener noreferrer">想注册域名有什么需要注意的吗？</a></span><span class="topic-stats">回复 38 · 收藏 17</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247264" markdown="1">
<summary>
<span class="topic-rank">6</span>
<span class="topic-title">婚宴酒店因政府文旅临时停业，如何索赔与换店</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
楼主提前订好的户外婚礼酒店突然通知：因配合区政府文旅项目不再营业，只能改到同品牌另一家不能办户外的店，或自行换店。原店每桌 2100 起、可办户外；备选店每桌 2300–2400 起、湖景包间但室内典礼场地差；另一家可办户外的酒店每桌 2699 起，环境更好但每桌贵 600。酒店称政府回收土地，但无红头文件，正式文件要等 11 月中旬，而婚期是大日子，不敢耗。

### 关键要点
- **先看合同**：已交定金，若合同有违约条款，按合同主张退款与赔偿；政府原因可能被认定为不可抗力，未必构成违约。
- **沉没成本不参与决策**：原户外方案已无法实现，不应再拿它作比较基准，只在现有备选里选最优。
- **优先保婚期**：大日子的酒店和四大金刚需提前一年以上预订，应尽快锁定新酒店，避免心仪场地被订走。
- **差价可算账**：每桌贵 600，按 30 桌约多 1.8 万，换来更好的户外场地，多数回复认为值得。

### 评论补充
多数回复建议：按合同退款索赔，另找能办户外的酒店，别因酒店失误耽误大事；有回复提醒户外婚礼夏天暴晒、冬天受冻，需权衡；也有回复认为酒店补差价、免场地费已算有诚意。楼主确认定金已交，正在重新找酒店。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247264" target="_blank" rel="noopener noreferrer">明年结婚订的酒店，昨天突然给我打电话说他们要配合区政府搞文旅不开店了，问我们愿不愿意挪到他们家另外一家店（不可办户外婚礼），但是我们一开始选中他们家原本的店就是看中他们家可以办户外婚礼的场地，求大家支招。</a></span><span class="topic-stats">回复 69 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247378" markdown="1">
<summary>
<span class="topic-rank">7</span>
<span class="topic-title">Google Photos 迁移 NAS 的低成本方案与元数据坑</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

主帖诉求是把 Google Photos 中数百 GB 至 TB 级照片视频迁到 NAS，同时满足四点：不烧机场流量、保留拍摄时间/地理位置/相册等元数据、成本可控、可校验完整性。评论给出的可行路径集中在“借道免费或低价出口”和“云端中转”两类。

### 关键要点

- **免费出口方案**：用 `1.1.1.1` / `warp-cli` 把出口切到 Cloudflare，可直接从 Google Photos 下载且免费，无需 VPS；部分机场带 0x 节点也不计流量。
- **VPS 中转**：开一台国外服务器先落地再拉回，Scaleway 有无限流量机型；Vultr 2.5 美元（仅美国区）含 2.5T 流量；搬瓦工约 1T/月、不限带宽。
- **云端中转**：用 OneDrive 网页版“导入 Google Photos”入口，导入在远端完成不耗本地流量；再用群晖 Cloud Sync 等套件把 OneDrive 同步到 NAS，走直连同样不耗流量。
- **元数据是最大坑**：Google Takeout 把元数据存成独立 JSON，合并痛苦且易错乱，有脚本可处理，也可让 AI 写一个；有回复直言整理时间往往超过下载本身。
- **成本参考**：临时买大流量机场几十元可拿 1T；也有 2 元 500G/月、几元数 T 的机场。

### 评论补充

有用户提醒真正瓶颈可能是本地硬盘容量而非流量；`rclone copy` 被提及为搬运工具，`syncthing`（https://github.com/syncthing/syncthing）可用于多设备同步。导出链接需要 Google 认证，可让 AI 操作浏览器完成。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247378" target="_blank" rel="noopener noreferrer">Google Photos 大量照片迁移到 NAS，有什么低成本的方案？</a></span><span class="topic-stats">回复 24 · 收藏 12</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247390" markdown="1">
<summary>
<span class="topic-rank">8</span>
<span class="topic-title">开源剪贴板工具 OpenPaste：Paste 的免费平替</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者因 Paste 与电脑不兼容、频繁弹窗，用 Codex 和 Claude 重写了一个开源免费的 macOS 剪贴板管理工具 **OpenPaste**，定位为 Paste 的平替。仓库地址：https://github.com/SwallOwDili/OpenPaste ，可直接下载安装包、fork 二次开发或本地构建。

### 关键要点
- **免费开源**：个人和公司内部使用全免费，仅去掉版权与署名需收费。
- **体验对齐 Paste**：视觉与操作一致，支持文本选中翻译，可从 Paste 无缝迁移。
- **Swift 原生开发**：安装包低于 10M。
- 作者称 Paste 的优势在于复制/粘贴万物、未来可搜索，操作是 `Ctrl+C`、`Ctrl+V` 外加“选择和回车”。

### 评论补充
- 多位用户期待 Windows 版本；也有 Maccy、Raycast 用户表示更偏好极简交互，认为 Paste 类工具偏“重量级”。
- 有评论认为订阅制小工具在 vibe coding 时代价值被挤压，买断制尚可尝试。
- 评论区出现其他同类开源项目（OneClip、CopyPort），以及曾下架的 Paste 平替 CCboard 的回忆。
- 作者回应开源初衷：自己一人用不划算，希望社区共同迭代，做出超越 Paste 的工具。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247390" target="_blank" rel="noopener noreferrer">Paste 不想续了，写了个开源版 OpenPaste 体验接近🫡</a></span><span class="topic-stats">回复 16 · 收藏 11</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247253" markdown="1">
<summary>
<span class="topic-rank">9</span>
<span class="topic-title">安卓转iOS后照片时间全乱：用Mac相册导入可保留EXIF时间</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
用官方“转移到 iOS”App 迁移近万张照片视频后，时间全部变成导入时间，且部分文件丢失拍摄时间和相机信息。多位用户确认：网页版 iCloud 上传、Windows iCloud 客户端同步同样会丢时间，问题出在导入通道而非排序设置。

### 关键要点
- **可行方案**：把原图从安卓导出到 Mac，用 Mac“照片”App 直接导入，等待同步到 iCloud，再让 iPhone 下载，时间与拍摄时间一致。有用户用此法迁移 100G+ 照片视频，空间不足可分批导入。
- **批量修复**：用 ExifTool 扫描 EXIF，或按文件名识别正确时间，批量修正后再上传 iCloud。
- **先验证再动手**：先确认导出文件的 EXIF 时间正确，再导入；可先拿几张照片试。
- **排查方向**：在 iPhone 中查看单张照片 EXIF，若时间正确则只是相册排序选了“添加日期”；若 EXIF 已丢失，则需走上述重导流程。

### 评论补充
有回复提醒，可能导入的是预览小图而非原图，正规相机拍摄的原始文件通常带 EXIF 时间。小米用户可用 MiCloud 客户端一键下载全部图片视频到电脑。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247253" target="_blank" rel="noopener noreferrer">求助大佬们：安卓转到 ios 了 图库的照片时间全乱了</a></span><span class="topic-stats">回复 25 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247283" markdown="1">
<summary>
<span class="topic-rank">10</span>
<span class="topic-title">小模型训练蒸馏门槛与端侧推理障碍讨论</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
主题讨论小模型训练、蒸馏、微调及端侧推理的门槛，以及业务团队能否无专业沉淀快速上手。多数回复认为门槛主要在算力与效果验证，而非单纯技术栈。

### 关键要点
- **训练资源远高于推理**：训练包含前向、反向算子与分布式通信，算子数是推理的 3 倍以上；同规模模型训练 GPU 需求可达推理的十几倍，因为推理常用量化模型而训练需维持 BF16 精度。
- **蒸馏本质是数据后训练**：工程落地中很多蒸馏方案就是遍历高质量领先模型的问答数据，对基模做后训练；即便走 API 做 SFT，token 费用个人也难负担。
- **端侧障碍**：有回复指出端侧最大障碍是内存和发热，而非 GPU 算力；也有观点认为端侧参数少、智能有限，垂直场景未必成立。
- **效果才是买单前提**：小模型微调训练本身不难，但难以超过现有模型效果，客户难买单；简单业务可用小模型，复杂业务仍不行。

### 评论补充
有回复质疑“GPU 够用”的判断，建议先看显卡价格；也有观点认为不必端侧，租服务器走云端更实际。另有讨论提出上下文变长后，垂直知识放系统提示词或许可替代微调。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247283" target="_blank" rel="noopener noreferrer">做模型训练、蒸馏门槛高吗</a></span><span class="topic-stats">回复 26 · 收藏 5</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247278" markdown="1">
<summary>
<span class="topic-rank">11</span>
<span class="topic-title">Codex 上下文窗口该设多大：272K、372K 还是 1M</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

围绕 Codex（GPT-6 Astra）上下文窗口设置，社区实践分歧明显：有人保持默认，有人开到 828K/1M，也有人主张用上下文管理特性替代盲目扩窗。

### 关键要点

- **推荐配置**：有回复建议 `model_context_window = 272000`，并开启 `[features.context_management] experimental_mode = true`（称目前仅订阅账号支持），通过跨窗口笔记与历史检索找回需求、决策和工具结果，减少反复压缩导致的信息丢失。
- **常用档位**：日常任务可设 372K（称早期 GPT-5.6 Sol 默认值），长程任务设 872K/1M。
- **压缩策略**：用 `/status` 查看剩余上下文，低于 20% 时执行 `/compact`；或在 272K 前压缩并移交上下文总结。
- **会话管理**：不同开发任务开新 session；开新线程前先保存并读取“线程交接信息”确认后再继续。

### 评论补充

关于超 272K 是否加价存在争议：一方引用官方说明称 Codex 内 GPT-6 Astra 超 272K 不产生额外费用，并给出 [官方链接](https://help.openai.com/en/articles/20001415-chatgpt-rate-card-enterprise-token-based-pricing#gpt-6-astra-codex-long-context-exception)；另一方指出该页为 Enterprise 定价，个人用户规则不明，且 Reddit 有人实测额度消耗明显增加，长上下文本身也会推高每次输入 token。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247278" target="_blank" rel="noopener noreferrer">各位 codex 的上下文窗口都设置的多少？</a></span><span class="topic-stats">回复 15 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247469" markdown="1">
<summary>
<span class="topic-rank">12</span>
<span class="topic-title">开源 Mac App Sideboard：用 adb 管理安卓电视与手机</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者开源了一款 Mac App **Sideboard**，通过 adb 连接安卓电视、盒子、手机和平板，把原本藏在命令行里的设备信息可视化，并提供常用操作。项目地址：https://github.com/zhaoweijia1997/Sideboard ，MIT 开源，界面支持 7 种语言，当前版本 0.6。

### 关键要点
- **可查看**：屏幕状态、前台 App、播放内容、开机时长、CPU/内存/存储/网络/温度/音量；最近 24 小时开关机与亮屏记录；按周/月的长期亮屏统计与热力图；各 App 流量、崩溃与唤醒情况；型号、系统版本、芯片、分辨率刷新率等。
- **可操作**（仅手动触发）：实时画面与触控、遥控器、截屏录屏、卸载/停用预装 App、导出 APK、文件管理与安装、缓存清理、从 Safari 拖链接到设备打开、菜单栏常驻通知。
- **设计原则**：不改设备设置、设备上不留文件、数据不离开 Mac、无需账号与联网上传；设备端无需安装，可选配套 App 约 120 KB，可多出 90 天记录与中文输入。
- **使用方式**：`brew install --cask android-platform-tools` 安装 adb，设备开启 USB/网络调试，从 Releases 下载 dmg；需 macOS 14 及以上，未公证，首次需右键打开。

### 评论补充
有用户询问安卓版本限制，作者回复为 **Android 10**。另有用户表示会结合自建电视消息推送功能，用于了解孩子观看内容。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247469" target="_blank" rel="noopener noreferrer">做了个开源 Mac App：用 adb 在 Mac 上看清、管好家里的安卓电视、盒子和手机</a></span><span class="topic-stats">回复 3 · 收藏 5</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247305" markdown="1">
<summary>
<span class="topic-rank">13</span>
<span class="topic-title">Apple Watch 电池低于80%可官方809元换整机</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
Apple Watch 电池不耐用时，官方渠道可以换电池，但实际做法通常是**换整机**而非单独换电芯。有用户实测：Apple Watch 电池健康度低于 80%，可预约 Apple 官方直营店更换电池，价格一般为 **809 元**。

### 关键要点
- 到店检测通过后，一般直接换整机；没库存会调货，小概率换到更新款（如 S8/S9）。
- 换回的是官方翻新机，并非全新零售机；电池、外壳和屏幕一般是新的，内部可能含部分翻新零件。
- 更换后享有 **90 天保修**。
- 有 S7 用户国庆节前刚换，花费 809 元；换回机器不含表带、为简单包装。
- 第三方也能换电池：有 S5 首发用户换后继续用了两年，去年换 S10，旧表还卖了 100 多元。

### 评论补充
有回复建议对比二手出售加国补买新款的方案，认为可能更划算。另有用户询问带 ECG 的最便宜机型，但未获解答。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247305" target="_blank" rel="noopener noreferrer">求一家能换手表电池的店</a></span><span class="topic-stats">回复 10 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247325" markdown="1">
<summary>
<span class="topic-rank">14</span>
<span class="topic-title">国内特斯拉车主FSD使用现状与AP替代体验</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
国内特斯拉车主对 FSD（完全自动驾驶）的购买与使用意愿普遍偏低，多数人认为标配的 AP（自动辅助驾驶）已能满足高速场景，城市路况仍倾向自己开。

### 关键要点
- **价格是主要门槛**：FSD 选装约 6.4 万元，多位车主表示“太贵”“无法理解花 6.4 万买智驾”。
- **AP 覆盖高频需求**：多数回复称高速用 AP 足够，城市路况自己开；也有车主指出 AP 曾出现“猛冲到前车屁股才急刹”，但有人反馈某次版本更新后已明显改善。
- **FSD 国内版本受限**：有回复称大陆 FSD 为“风味版”，进口版 3/S 车主买的旧版 FSD“没那么好用”；另有消息称 FSD 13 已在大陆上市但面对中国路况表现不佳，FSD 14 最迟明年五六月份推送、已在测试标定（该时间点未经证实）。
- **评测争议**：有回复提到懂车帝直播城市智驾评测中华为吊打 FSD，后续 AEB 单项评测结论相反，双方对评测条件存在分歧。

### 评论补充
有车主称用 ESP32 芯片可破解启用 FSD，体验“除部分国内交规外比我开得好”，但该说法涉及非官方改装，风险与合法性待核验。整体共识是：不买 FSD、高速用 AP、城市自己开。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247325" target="_blank" rel="noopener noreferrer">纯属好奇：国内的特斯拉车主们，在用智驾吗？</a></span><span class="topic-stats">回复 32 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247348" markdown="1">
<summary>
<span class="topic-rank">15</span>
<span class="topic-title">纯离线微信小程序54页：2MB主包与审核踩坑实录</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者发布纯离线微信小程序「口袋百宝集」，54 个页面、零网络请求、免费无广告。主帖价值不在产品本身，而在小程序工程约束下的一手踩坑记录，可复用于任何做小程序工具集的人。

### 关键要点
- **离线可验证**：运行时源文件 331 个，扫描 `wx.request`、`wx.uploadFile`、`wx.downloadFile`、`wx.connectSocket`、`wx.cloud`、`wx.serviceMarket` 及 `wx.login`、`wx.getUserProfile`、`wx.checkSession` 全部 0 命中；数据只写 `wx.storage`。
- **2MB 主包坑**：首次上传报 `main package source size 11183KB exceed max limit 2048KB`，原因是 `packOptions.ignore` 里的 `*.png` 只匹配根目录、不递归，子目录设计稿被全量打包。
- **分包不能互相 require**：公共模块（rng、音效）只能上提主包，旧路径留一行 `require` 转出口。数据型分包（解梦、农历）合计 2.2MB，占全包七成，主包压到 169,235 B。
- **可复现随机**：禁用 `Math.random()`，统一注入 xorshift32，使转盘、骰子、硬币在测试中可用固定种子回放。
- **零资源音效**：WebAudio 振荡器加包络现场合成，转盘刻度声用与 wxss 相同的缓动曲线反解边界跨越时刻，间隔不取整以避免误差累积。
- **审核风险**：两次因运营规范 3.2 条 UGC 内容安全被驳回，最终整体下线图片工具箱，image 分包从 111,044 B 降至 93,924 B。

### 评论补充
作者确认代码由 AI（workbuddy）生成。评论指出农历库疑似未压缩的 lunar.js，体积问题或可通过压缩缓解；另有评论认为小程序限制多，不适合做大杂烩工具集。作者称个人开发者小程序上限约 5 个。

### 局限
仅限微信内使用；数据只存本机，换机或清缓存即丢失；不联网导致内容无法热更新；房贷、个税等计算仅为估算并附免责声明。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247348" target="_blank" rel="noopener noreferrer">写了个纯离线的微信小程序， 54 个页面，零网络请求 V1.6</a></span><span class="topic-stats">回复 9 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247299" markdown="1">
<summary>
<span class="topic-rank">16</span>
<span class="topic-title">SQLite 能否上云：Turso、rqlite、D1 与 HTTP API 方案</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

本地脚本使用 SQLite，想把数据库放到云端访问。核心结论是：SQLite 是文件级数据库，没有原生网络协议，直接共享文件访问会带来性能与并发问题，更现实的做法是换用兼容 SQLite 的云服务或自建访问层。

### 关键要点

- **兼容 SQLite 的云方案**：Turso 兼容 SQLite；rqlite 是自托管的 SQLite 方案；Cloudflare D1 底层也是 SQLite。
- **自建访问层**：封装一层 HTTP API 或 connect 层，由服务端统一读写 SQLite，客户端通过接口访问。
- **同步/备份思路**：用云盘同步文件，或使用 litestream 做复制；但文件级同步在并发写入时容易冲突，且不能长期独占文件。
- **替代方案**：若改造成本高，不如把数据访问层用 PostgreSQL 重构，或直接导出到云数据库。

### 评论补充

有回复指出，用 WebDAV 等协议走云会非常慢，SQLite 也没有原生协议支持这种用法；另有观点认为 SQLite 上云意义不大，方向应是开放 API 而非共享文件。Turso 的国内访问延迟问题在帖中未得到回答，需自行验证。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247299" target="_blank" rel="noopener noreferrer">sqlite 能上云吗</a></span><span class="topic-stats">回复 25 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247442" markdown="1">
<summary>
<span class="topic-rank">17</span>
<span class="topic-title">开源 P2P 传输/通话/协作站点 ZestSend 可部署于 Cloudflare</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者开源了一个可部署在 Cloudflare 上的 P2P 站点 ZestSend，提供端到端加密的匿名实时聊天、文件互传、语音/视频通话、屏幕共享、同播共享、文本协作与画板功能。参与者输入相同的四位房间号即可连接，支持点对点直连或经 Cloudflare TURN 中转。

### 关键要点
- 无账号体系、无服务器存储，完全匿名。
- 部署方式：直接使用 Cloudflare 部署即可建立点对点直连。
- 配置 Cloudflare TURN 后，每月可免费获得 1000GB 中转流量。
- 体验地址 `send.ravelloh.com`，源码见 GitHub 仓库 `RavelloH/ZestSend`。

### 评论补充
有回复指出，在 Cloudflare Dashboard 的 Realtime → TURN 创建凭证可能需要绑定银行卡，这是部署前需确认的限制。另有回复认为该方案具备扩展为群聊的潜力，但主帖未说明是否支持多人。

整体属于可自部署的实用工具，适合需要匿名点对点传输与协作、且希望控制成本的读者参考。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247442" target="_blank" rel="noopener noreferrer">分享一个可在 Cloudflare 上部署的开源 P2P 文件传输/视频通话/文本协作/画板/同播共享站点</a></span><span class="topic-stats">回复 3 · 收藏 4</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247388" markdown="1">
<summary>
<span class="topic-rank">18</span>
<span class="topic-title">港版iPhone 17 Pro国内使用与Siri AI实测</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
有用户计划购买港版 iPhone 17 Pro，主要想体验 AI 功能，询问国内使用限制及天猫渠道是否全新。多位实际持有港版 17 Pro/17 Pro Max 的用户给出了使用反馈。

### 关键要点
- **Siri AI 可用但需英文**：港版可开启 Siri AI，目前无地理锁，但最新 Siri AI 不支持中文，需将系统语言和 Siri 语言都切换为英文，语音对话仅支持英文；文字对话（键入 Siri）可用中文。
- **附带功能正常**：照片消除、重构图、AirPods 翻译等可正常使用。
- **eSIM 限制**：港版不支持大陆运营商 eSIM，但可存多张外区 eSIM，有用户称见过存 20 多张，并非只能存 8 张。
- **AI 体验评价分化**：有用户认为苹果 AI 接近玩具，Siri AI 调用 GPT，付费 GPT 账号体验更好；也有用户认为港版 AI 完整未被阉割。
- **单卡问题**：港版为单实体卡，介意者需注意。

### 评论补充
有用户提到港版可通过香港卫讯刷微信集邮活动，256G 约 7900 元。另有用户期待未来支持自定义第三方大模型。关于天猫渠道是否全新，评论中未给出明确验证。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247388" target="_blank" rel="noopener noreferrer">有人买过港版的 iPhone 么，在国内使用情况如何，主要想体验体验 AI</a></span><span class="topic-stats">回复 17 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247312" markdown="1">
<summary>
<span class="topic-rank">19</span>
<span class="topic-title">Meta 机柜内置 BBU 替代集中 UPS：损耗从 21–27% 降至 7.5%</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
Meta 数据中心把电池从集中 UPS 搬进机柜，用机柜级 BBU（电池备份单元）替代传统集中式 UPS，核心动机是减少交直流反复变换带来的损耗。

### 关键要点
- **损耗对比**：Facebook 2011 年普赖恩维尔机房数据显示，传统机房市电到服务器损耗 **21%–27%**，其中集中 UPS 占 6%–12%；改为市电直供机柜、电池旁置待命后，损耗降至 **7.5%**。
- **Open Rack V3 电池层规格**：一层 6 块电池（5+1），每块 3 kW，一层 15–18 kW；48 V 母排，电压低于 48.5 V 持续 2 ms 即开始放电，2 ms 内接管，可撑 **240 秒**，用于发现断电、保存数据、切换业务，而非长时间续航。
- **电芯与维护**：采用 18650 锂电，每块 66 节；支持热插拔，坏一块拉出更换，机柜不停机。
- **代际变化**：2011 年为机柜旁独立电池柜、20 节铅酸、撑 45 秒；现为机柜内锂电、约 4 分钟。

### 评论补充
- 18650 圆柱电芯自带泄压阀和过压断开（CID），单颗相对可控；但成组后风险在于热失控传导，需 BMS 监控温度电压，并配合电芯间隔热与熔断。
- 有评论认为该思路参考了特斯拉早期 18650 电池组与开源电源管理系统。

### 待核验与限制
照片对应的电池代际与机房位置 Meta 未说明，规格依据公开的 Open Rack V3 规范；电池健康巡检方式、4 分钟续航是否够用、国内 IDC 与消防过审做法均无定论。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247312" target="_blank" rel="noopener noreferrer">Meta 机柜里自带一排电池，把集中 UPS 拆了：从市电到服务器损耗 21–27% 降到 7.5%</a></span><span class="topic-stats">回复 3 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247373" markdown="1">
<summary>
<span class="topic-rank">20</span>
<span class="topic-title">用 Claude 做的本地抠图工具：浏览器内跑 ormbg 模型</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者用 Claude 以 vibe coding 方式做出在线抠图工具 imgcutout.com，主打**图片不上传服务器**：模型下载到浏览器本地推理，处理全程在用户设备完成。

### 关键要点
- 模型为开源分割模型 **ormbg**，通过 WebAssembly 在 CPU 上运行，设置中可开启 WebGPU 加速。
- 首次打开需下载模型并缓存，之后速度明显提升；模型加载完成后**断网也能继续抠图**。
- 支持 PNG / JPG / WEBP，单张最大 20MB，电脑端按原图分辨率导出；支持 Ctrl/⌘+V 粘贴截图。
- 可换纯色背景（预设证件照蓝、红、白底），导出 PNG / JPG / WEBP；识别不准可用画笔指定保留物体。
- 批量抠图一次最多 100 张，打包 ZIP 下载，适合电商商品图；另有 GIF 制作与视频转 GIF。
- 免费、免注册、无水印、无次数限制，作者称因无服务器成本不打算收费。

### 评论补充
本主题暂无回复。作者自述的不足值得注意：手机或内存 ≤4GB 设备上，超过约 400 万像素的图片会先被缩小以防内存溢出；发丝、宠物毛发、玻璃等半透明边缘效果不如专门的 matting 模型；界面目前仅英文。作者建议用 DevTools 的 Network 面板自行验证图片未被上传。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247373" target="_blank" rel="noopener noreferrer">我用 Claude vibe coding 了一个去除图片背景的在线小工具</a></span><span class="topic-stats">回复 0 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247477" markdown="1">
<summary>
<span class="topic-rank">21</span>
<span class="topic-title">澳洲新西兰15天自由行：交通、门票与行程经验</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者在 9.19–10.3 用 15 天走完澳洲与新西兰，凭澳洲签证在澳洲转机免签进入新西兰。路线为南京—新加坡—悉尼—乌鲁鲁—墨尔本/悉尼—皇后镇—瓦纳卡—库克山/蒂卡波湖—基督城—奥克兰—汉密尔顿—怀托摩—珀斯。核心经验是：热门项目与巴士票必须提前订，非自驾地区交通极其受限。

### 关键要点
- **乌鲁鲁**：不自驾建议尽早买 hop on hop off 巴士票，否则可能被迫参团；中秋前后月亮太亮，银河只能看到淡轮廓。
- **皇后镇**：跳伞当天天气好可成行，但米尔福德峡湾的旅行团、巴士、观光飞机票需提前买，否则全部售罄。
- **瓦纳卡**：RealGuns 射击场地距镇十几公里且无公共交通，非自驾只能步行约两小时，返程可搭团车花 50 纽币回镇。
- **库克山**：直升机冰川徒步提前一个月也抢不到，且当天大雪会被取消；胡克步道、福克斯冰川湖徒步可替代。
- **怀托摩**：交通最麻烦，intercity 班次隔几天才有一班，汉密尔顿到奥托罗昂格的公交仅工作日、每天往返各一班，当地打不到 Uber。

### 评论补充
有回复询问当地是否冷，作者答复：有太阳时不冷甚至偏热，没太阳时需穿薄羽绒服。

整体看，这是一份以交通与门票踩坑为主的一手行程记录，适合计划南半球自由行、尤其是不自驾的读者参考。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247477" target="_blank" rel="noopener noreferrer">再游南半球 [澳洲、新西兰 15 天游]</a></span><span class="topic-stats">回复 3 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247404" markdown="1">
<summary>
<span class="topic-rank">22</span>
<span class="topic-title">常州 Agent 开发工程师招聘：15-25k，全栈要求</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
江苏常州一家公司（投递邮箱 hua.wang@minum.ai）招聘 Agent 开发工程师（全栈），薪资 15～25k。岗位面向制造、审计等垂直行业，核心工作是 Agent 功能模块设计开发、执行流程调优（工具调用、上下文管理、结果校验、异常兜底）、客户一线业务调研与交付，并参与 Agent Infra 扩展与效果评估。

### 关键要点
- **技术栈**：后端 Rust/Go/Java/Python 至少一种，熟悉 Redis/MySQL/MQ；前端 TypeScript + React/Vue；了解 Git 工作流、CI/CD、Linux、Docker。
- **加分项**：个人项目或开源贡献；有 Pi、OpenCode、DeepSeek Harness 等 Agent Runtime/Framework 使用或研究经验；写技术博客。
- **软素质**：独立排查问题、抗压、主动学习。
- **学历**：本科及以上，计算机或软件工程相关专业。

### 评论补充
- 招聘方回复：工作经验最好 8 年以内，不接受远程；应届生可以投递。
- 有读者对“Agent 流行才一两年却要求 8 年经验”提出疑问，招聘方澄清是“8 年以内”而非“8 年以上”。
- 有杭州求职者询问能否远程并阶段性出差，被明确拒绝。

对求职者的可复用信息：该岗位明确要求全栈能力与 Agent 工程落地经验，且工作地点固定常州、不支持远程，投递前需确认地点与经验区间。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247404" target="_blank" rel="noopener noreferrer">招聘: Agent 开发工程师(全栈)</a></span><span class="topic-stats">回复 7 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247454" markdown="1">
<summary>
<span class="topic-rank">23</span>
<span class="topic-title">Mac 键盘手汗油污的清理方法与防油方案</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
针对 Mac 键盘因手汗导致键帽发油、发黏的问题，讨论集中在低成本日常清洁与从源头减少油污两类做法，多数人认为不必过度讲究。

### 关键要点
- **日常清洁**：用酒精湿巾擦一遍，再用纸巾擦干；或把酒精喷雾喷在无尘布上擦拭。无尘布约十几元 100 张，成本低。
- **频率与习惯**：每隔几天擦一次即可；桌面常备一张微湿纸巾，随时擦手，可显著延缓键帽打油。
- **键缝处理**：有回复提到用力拍键盘背面抖出碎屑，但未给出压缩空气的明确结论。
- **防油方案**：超薄键盘膜可直接用洗洁精清洗；磨砂按键贴纸逐个粘贴，手感好且可单独更换，但费耐心；外接机械键盘或外接键盘可从根本避免本子键帽打油。

### 评论补充
有用户担心磨砂贴纸会蹭花屏幕，未获解答。另有回复称试过 meel O2 键盘但不习惯，说明外接方案存在适应成本。整体共识是：酒精湿巾加纸巾的简单擦拭已足够，无需复杂流程。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247454" target="_blank" rel="noopener noreferrer">Mac 键盘老是被手汗弄脏，有没有快速又省事的定期清理方法？</a></span><span class="topic-stats">回复 11 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247229" markdown="1">
<summary>
<span class="topic-rank">24</span>
<span class="topic-title">京东PLUS 9积分保养抢不到：黑号风控与代抢风险</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
京东 PLUS 9 积分保养活动被多名用户反馈“根本抢不到”，提示“活动太火爆”。发帖人蹲了十几天无果，回帖中有人连抢 30 天失败后放弃，也有人直接建议“别浪费时间”。

### 关键要点
- **可能不是手速问题**：有用户认为京东活动看账号权重，“号不行蹲再久也是白搭”，并提到京东存在“黑号”机制，风控严格且分级细致，用户难以感知。
- **代抢有风险**：发帖人提到闲鱼代抢 25 元，但未验证是否靠谱；另有用户称 618 花 40 元在闲鱼下单，结果对方是在限时积分过期后使用其本人积分完成。
- **抢到也未必省心**：门店可能排队数小时，有用户称附近门店全爆满，跑到偏远门店仍要等一个半小时；机油无法指定品牌，可能发京安途等自有品牌，质量存疑。
- **选油需看规格**：有用户提醒不要只看品牌，要确认机油适用范围，例如老车未必适合 5W-30。

### 评论补充
黑猫投诉上相关投诉较多但“没卵用”；小红书吐槽也不少。整体共识是：该活动对普通账号可抢性极低，代抢与到店体验均存在不确定性，投入时间前应权衡成本。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247229" target="_blank" rel="noopener noreferrer">京东 PLUS 9 积分保养看着很香，但是根本抢不到，求大佬分享经验</a></span><span class="topic-stats">回复 14 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247258" markdown="1">
<summary>
<span class="topic-rank">25</span>
<span class="topic-title">AI 开发的 NAS 桌面助手：支持 Unraid/PVE/DSM 多服务器管理</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者用 AI 开发了一款 NAS 桌面控制端，用于免登录 Web 页面直接查看状态、控制容器与虚拟机。软件通过 Unraid API 通信，需在 Web 设置中创建 API 并以 HTTPS 访问；作者声明不含升级与敏感信息收集，数据全部保存在本地。

### 关键要点
- 功能：Docker 容器启停、虚拟机开关、CPU/RAM/磁盘状态查看、网络状态查看。
- 获取方式：夸克网盘 `https://pan.quark.cn/s/1bbede34d30c?pwd=9D4w`，提取码 `9D4w`。
- 后续更新：软件已改名“NAS 桌面助手”，新增 PVE、DSM 支持与多服务器管理，可切换不同服务器。
- 认证差异：Unraid 与 PVE 需在 Web 管理页开启 API；DSM 使用账号密码认证，作者称理论上支持两步验证但未实测。
- 资源占用：作者回复占用不大。

### 评论补充
有用户反馈“挺好用”，也有人计划当晚尝试；有评论询问 GitHub 地址，作者表示仍在迭代、完善后再开源，因此目前仅有网盘分发渠道，来源可核验性有限。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247258" target="_blank" rel="noopener noreferrer">用 AI 开发了一个 Unraid 桌面助手，欢迎使用</a></span><span class="topic-stats">回复 7 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247275" markdown="1">
<summary>
<span class="topic-rank">26</span>
<span class="topic-title">ChatGPT $200 套餐缩水后的替代方案与用量实测</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
ChatGPT 老版 $200 Pro（20x）月底变更为 10x 后，重度用户面临额度腰斩。发帖人原本靠两个 20x 号撑满一个月，变更后合计只剩 10x+10x，正在考虑换 Grok 或 Claude，但因封号传闻对 Claude 有顾虑。

### 关键要点
- **Claude Pro 定方案 + GPT 干活**：多位用户采用该组合，Claude Pro 用 Opus 5.5 只负责定方案、写文档和评审，不写代码，额度完全够用；GPT 负责执行。有用户称 GPT 单独出方案写代码效果差，Claude 介入后一轮就修正回来。
- **Codex 6.1 sol 额度更耐用**：有用户反馈 Plus 号用 6.1 sol 周额度约 2.2 亿，敢开 xhigh；此前 5.6 sol 周额度仅约 1 亿。另有 20x 用户称 6.1 sol 全程开 fast 日均只掉约 3%，而 5.6 sol 日均约 18%。
- **降级或换便宜模型**：有用户表示 $200 到期后不再续订或降级，主力转向 Claude；也有人建议改用 DeepSeek 等更便宜的模型。

### 评论补充
关于 OpenAI 额度，有用户认为其从未撑到自然重置日，都是提前重置或发卡，实际用量可能给到 60x。Claude 的封号与 KYC 问题被提出但未获解答，属于待核验风险。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247275" target="_blank" rel="noopener noreferrer">ChatGPT 新 $200 套餐月底生效，有没有好的替代方案？</a></span><span class="topic-stats">回复 12 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1247422" markdown="1">
<summary>
<span class="topic-rank">27</span>
<span class="topic-title">个人开发者 AI 月度开销：从 150 元到 800 元</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

楼主原本认为 ChatGPT Pro 200 美元已是个人开发者上限，但一天内用掉两张 Pro 200 重置卡，说明重度使用下额度仍可能不够。评论区的实际开销从每月约 150 元到 800 元不等，跨度较大。

### 关键要点

- **低档**：Claude Pro 约 150 元/月；GPT+Claude 基础套餐加中转约 200 元/月。
- **中档**：200 美元 ChatGPT Pro 订阅是常见选择，有人因产生收益而不在意成本，也有人表示无收益就停付。
- **高档**：有用户自费 800 多元/月，或组合 grok heavy、codex×5、claude 999 中转，并靠投资收益支撑。
- **公司报销**：部分人由单位承担 200 美元或额外配 codex20。

### 评论补充

有回复指出额度消耗快可能与使用习惯有关：开启 1M 上下文、不做上下文管理、一个项目只用一个会话且不压缩，会显著增加消耗。另有用户反映 Claude 在国内使用免费额度即被封号，想从 codex 转 Claude 需考虑封号风险。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1247422" target="_blank" rel="noopener noreferrer">你们现在花在 AI 上的月度开销是多少？</a></span><span class="topic-stats">回复 11 · 收藏 0</span></p>

</div>

</details>
