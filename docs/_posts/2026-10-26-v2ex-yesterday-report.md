---
layout: report-post
title: "V2EX 每日热点回顾 · 2026-10-26"
date: 2026-10-26 08:30:00 +0800
categories: [v2ex, daily-report]
status: success
target_date: 2026-10-26
generated_at: "2026-10-27 09:27:05"
summary: "昨日主题 342 个，过滤 242 个，DeepSeek 分析 100 个，保留高价值内容 20 个。"
count_all: 342
count_excluded: 242
count_included: 100
count_high_signal: 0
count_valuable: 20
report_url: "/2026/10/26/"
data_url: "/data/2026-10-26.json"
---

# V2EX 2026-10-26 昨日新帖报告

<details class="topic-card" data-topic-id="1251768" markdown="1">
<summary>
<span class="topic-rank">1</span>
<span class="topic-title">亚马逊创业一年：投入14万、销售额76万的真实复盘</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者复盘了做亚马逊墨西哥站一年多的真实经营数据与踩坑经历，结论是项目尚未真正盈利，每月利润基本只够发工资。

### 关键要点
- **经营数据**：2025 年 8 月开售，至今 14 个月；实际投入 14w（旧店 12w、新店 2w），累计支出 49w，累计销量 6k+，销售额 76w，综合毛利率约 20%，粗算利润约 15w。
- **流程清单**：注册公司 → 注册店铺 → 市场调研 → 选品 → 利润核算 → 找供应商 → 打样 → 创建 Listing → 采购生产 → 物流发货 → 开售 → 广告推广 → 日常运营。作者强调每个环节都可能踩坑，首批货曾被货代拖了三个月。
- **当前问题**：旧店税号验证被抽查（处理不好要扣 36% 税）、销量下滑、一条链接违规申诉无效、选品效率低、墨西哥汇率暴跌不敢结汇。
- **给新人的建议**：有不错的工作别辞职去做；有懂行的朋友可合伙或带做；没做好折腾一年还赔本的觉悟就不要做。

### 评论补充
有回复询问多店铺执照如何办理，作者答复是找同学的财税公司，一个店铺用挂靠地址，不触发二审一般没事，部分银行开公户需要真实地址。另有回复指出情侣合伙股份三七开意义不大，作者回应今年已结婚。

＞ 作者也提到，Listing 图片和文案可借助 AI 降低成本，但需注意图片真实性与平台合规。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251768" target="_blank" rel="noopener noreferrer">创业一年了，还活着</a></span><span class="topic-stats">回复 176 · 收藏 191</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251882" markdown="1">
<summary>
<span class="topic-rank">2</span>
<span class="topic-title">IDE 皮肤版 V2EX 阅读器：快捷键与分区映射</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者发布了一个把 V2EX 阅读页做成 IDE 界面的网页工具（https://v2ex.riverjam.club/），目的是在办公环境中隐蔽地浏览论坛。左侧文件名与站内分区一一对应，例如 `tech.ts`、`creative.ts`、`play.ts`、`apple.ts`、`jobs.ts`、`deals.ts`、`city.ts`、`qna.ts`、`hot.ts`、`all.ts`、`r2.ts`。

### 关键要点
- **快捷键**：`k` 跳到下一条帖子；`Enter` 打开正文和几条评论，再按一次展开剩余评论；`v` 完整预览；`c` 复制原帖链接；`b` 是老板键，可切到普通代码文件。
- **图片默认不显示**，可在 `settings.json` 中设置是否展示 Images。
- 作者回应称目前 API 基本够用，后续接入账号体系时可能缺少账户余额、每日签到类 API；并反馈 `/api/replies/show.json` 有概率对已有回复的帖子返回空数组。
- 日间模式作者表示“这两天会加上”。

### 评论补充
有用户反馈在 macOS + Chrome 下，鼠标点选帖子后按回车，页面可能滚动到别处而非展开目标帖，需要上滑回看。也有人建议老板键不要来回切换，避免紧张时多按一次露馅。关于终端方案，作者认为大量中文在裸露终端里隐蔽性差，不如 IDE 界面适合摸鱼。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251882" target="_blank" rel="noopener noreferrer">IDE 皮肤 V2EX 阅读页，让你可以摸鱼刷 V2EX</a></span><span class="topic-stats">回复 48 · 收藏 44</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251785" markdown="1">
<summary>
<span class="topic-rank">3</span>
<span class="topic-title">Vibe Coding 工程化约束：AGENTS.md、分段提交与多模型互审</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者基于数月在公司上线项目中使用 AI 辅助开发的实践，提出核心矛盾：AI 快速推进开发带来的代码不可控性与线上稳定性之间的冲突。由于大模型内部过程是黑盒，只能从输入端和流程上做工程化控制。

### 关键要点
- **维护 AGENTS.md**：把项目结构、既有调用规范写进 Agent 默认上下文，可避免 AI 另造一套实现；作者参考了 DeepSeek Harness 的 AGENTS.md 实践。
- **开发者要理解代码**：从需求中筛出易出问题的核心逻辑记在脑中，再交给 AI 实现；坚持分段提交，以审核员视角先自想、再读 AI 实现，借此熟悉代码。
- **流程化拆分**：针对注释混乱、规范失效、修改范围外溢等问题，把开发阶段拆成节点并在节点内细分检查，每项检查单独写规范，避免全塞进 AGENTS.md；思路接近 Loop 式多轮循环检查，受 token 成本约束。
- **单元测试成标配**：作者基本不看测试代码，其价值在于约束 AI 产出；但测试全过仍可能出问题。
- **多模型互审**：在 Codex 与 Claude Code 间人工转述结论，对竞态、线程安全类问题有独特优势；未自动化主要因成本，阅读发现的问题本身也是学习。

### 评论补充
- 多 Agent 通信可用文件（如审核意见.md）作载体，免去复制粘贴；作者称大任务才用文档，小任务仍复制。有回复提到自建多 Agent 工作台 https://github.com/flyhero/antumi 。
- 有回复质疑 AI 写的单元测试既当裁判又当运动员；另一回复认为多轮修改时 UT 是稳定锚点。作者承认不看测试，作用偏“心理按摩”。
- 有观点认为目标偏离本质是上下文管理问题，并推荐 https://www.dbreunig.com/2026/10/24/the-state-of-context-engineering.html 。
- 分歧：部分人认为未来可不看代码、只为结果负责；作者认为仍受领导认知与背锅责任限制。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251785" target="_blank" rel="noopener noreferrer">Vibe Coding 的工程化约束</a></span><span class="topic-stats">回复 18 · 收藏 33</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251827" markdown="1">
<summary>
<span class="topic-rank">4</span>
<span class="topic-title">AI 编码后程序员的三重焦虑与应对方法</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

主帖提出 AI 编码普及后的三个真实困扰：自己越来越不会手写代码、AI 生成的代码啰嗦不优雅、对项目把控变弱且担心隐藏问题。评论区的共识是：**问题不在“要不要写代码”，而在工程师角色从编码者转向判断者与审查者**。

### 关键要点

- **接受不手写**：有回复类比“写 Java 不必关心汇编”，产出与结果比手写过程更重要；但需刻意练习，否则编码能力会退化。
- **用规则约束 AI**：通过加 rule、管理上下文、Spec 驱动（SDD）等方式，让生成代码符合团队的优雅标准。
- **建立验证与回滚机制**：把控项目改为从架构层判断“哪部分可能出问题”，具体核实与优化仍交给 AI，同时保证出问题能快速识别和回滚。
- **判断力是核心**：复杂需求完全甩手，AI 会产生与业务无关的多余发挥；对业务的理解程度仍决定产品质量。

### 评论补充

有回复指出，需求文本到方案再到代码经历两次转换，偏移概率远大于代码到汇编，长期会积累成难维护的“AI slop”，改一个问题引出两个问题。另有观点认为，近期大厂 C 端产品 bug 频出，说明完全放手尚不可行；对老手 AI 是解放，对新手则抬高了刻意练习的门槛。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251827" target="_blank" rel="noopener noreferrer">虽然 AI 编码很厉害，但是这些问题怎么办呢？</a></span><span class="topic-stats">回复 50 · 收藏 9</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251970" markdown="1">
<summary>
<span class="topic-rank">5</span>
<span class="topic-title">女婿与岳父母相处：蹭饭尴尬与应对经验</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
主帖描述的是女婿常见的尴尬处境：岳父母住得近，妻子常想回去吃饭，但作者既怕蹭吃蹭喝，又不擅长陪酒、听不懂家乡话，坐着等吃又觉得不自在。评论普遍认为，女婿既不是客人也不是血缘亲戚，位置天然尴尬，不必强求融入。

### 关键要点
- **降低预期**：有回复建议由妻子在父母面前多夸丈夫、夯实“不善言辞”的形象，自己只需打招呼、安静吃饭，需要掌勺时再发挥。
- **礼数到位即可**：不必每次大包小包，逢年过节多买些好东西，或给大哥家孩子带点吃的，比频繁送礼更自然。
- **减少非必要往来**：若确实难受，可与妻子商量，只在必要节日和特殊场合回去，不必指望通过学习相处技巧改变关系。
- **先确认是否添乱**：岳父母在帮大哥带孩子，回去前应确认哥嫂是否介意，避免打扰。

### 评论补充
有回复指出，已知对方听不懂仍一直说家乡话并不礼貌，妻子应帮忙解释；也有人建议脸皮厚一点、少内耗，把蹭饭当成正常家庭往来。另有回复提到，若岳父母同住帮忙带娃，分工明确反而更自在。整体共识是：关键在夫妻先统一边界，而非单方面讨好。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251970" target="_blank" rel="noopener noreferrer">你们是如何和岳父岳母相处的</a></span><span class="topic-stats">回复 63 · 收藏 4</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251728" markdown="1">
<summary>
<span class="topic-rank">6</span>
<span class="topic-title">iPhone Duo 三天使用体验：内屏使用率低、Touch ID 与屏幕显示问题</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
一位 17 Pro Max 用户首发购入 iPhone Duo，使用三天后给出偏负面评价，核心结论是：折叠形态牺牲了太多直板机体验，更像“原型机”。

### 关键要点
- **内屏使用率低**：通勤拥挤时展开后单手握持困难，打字需双手捧持；实际多在家或咖啡店看视频。
- **纳米纹理屏观感差**：作者认为高光被压制、画面发灰，HDR 视频效果明显下降。
- **外屏信息密度低**：未适配 App 等距缩小尚可，已适配 App 字号不变导致 UI 拥挤，被形容为“老年机”。
- **Touch ID 拖慢体验**：解锁需按指纹再上划；Apple Pay 贴 NFC 后常需二次放手指，内屏使用时甚至找不到指纹键方向。
- **影像与续航**：主摄主观不如 Pro Max，外屏看照片偏糊、内屏偏灰；开箱即明显掉电，作者推测与重建索引有关。
- **适配不足**：连 Apple Store 等第一方 App 也未适配。

### 评论补充
多位用户印证外屏信息密度低、缺少 Face ID 是主要痛点；有人称撕掉磨砂膜后显示明显改善，但提醒自行撕膜可能影响内屏保修，建议配 AC+ 后再考虑。也有用户认为双手操作是折叠屏基本逻辑，需调整直板机习惯；另有用户因不成熟已退单或转手。关于后续加回 Face ID，评论存在分歧：有人认为内外屏需两套点阵投影，成本与空间都是问题。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251728" target="_blank" rel="noopener noreferrer">使用了三天 iPhone Duo 的感想</a></span><span class="topic-stats">回复 57 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251810" markdown="1">
<summary>
<span class="topic-rank">7</span>
<span class="topic-title">自建代码仓库方案对比：Gitea、Forgejo、GitLab 与 Gogs</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
有用户计划把 GitHub 上的代码迁回本地，询问各公司规模下自建代码仓库的选型，以及是否包含 CI/CD。评论给出的主流方案集中在 Gitea、Forgejo、GitLab，另有 Gogs、腾讯 Coding 和自建 SSH 加 hook 脚本等做法。

### 关键要点
- **轻量自用**：Gitea 被多人提及，理由是轻量；Gogs 用 Docker 运行，比 Gitea 更轻，有用户称已稳定使用多年。
- **兼容 GitHub Actions**：Forgejo 被指对 GitHub Actions 兼容性更好，且更偏社区化；有用户已从 Gitea 迁到 Forgejo。
- **企业级**：GitLab 是公司场景的常见选择。有用户称用 Docker omnibus 方案运维并不复杂，`4c8g` 可跑，约 10 人团队无明显性能问题。
- **选型顺序**：有评论建议先选 Gitea，不满足需求再上 GitLab。
- **风险提醒**：有用户提到 Gitea 曾出现较严重 CVE（附 issue 链接），正考虑禁止公网访问；另有评论强调必须做好备份和监控。

### 评论补充
主帖作者实测 Gitea `28.2.0`，在 PR、issue、comment 较多的仓库上略吃力，迁移失败。关于 Forgejo 与 Gitea 的关系，有用户指出 Forgejo 是 Gitea 的分支，也有人反驳“更开源自由”的说法，认为差别只是公司化与社区化。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251810" target="_blank" rel="noopener noreferrer">self-host 代码仓库，各位老哥公司里都是什么方案？</a></span><span class="topic-stats">回复 51 · 收藏 7</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251873" markdown="1">
<summary>
<span class="topic-rank">8</span>
<span class="topic-title">Vibe Coding 跑不起来：会话、项目与上下文管理方法</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

主帖的困惑不是“不会用 Agent”，而是缺少目标与组织方式：打开 Agent 不知道做什么、session 和项目越积越多、每次都要重新交代 context，最终产生抵触。评论区的共识是：**先定目标，再让 Agent 承担整理与执行，token 消耗量本身不是目标。**

### 关键要点

- **先有目标再迭代**：把 Agent 当员工，自己只负责设目标、看结果、给意见；先跑通小规模 MVP，验证方向后再扩展。
- **让 AI 管理 AI 的混乱**：让 Agent 分析历史会话、整理 session 与项目列表、生成汇总和排序，把“管理成本”交回给模型。
- **控制上下文**：先在首个会话中让 AI 了解项目，再分叉执行具体任务，完成后及时归档，避免上下文超限。
- **规范驱动开发**：有回复提到 `@fission-ai/openspec`、`github/spec-kit` 等 Spec-Driven Development 框架，但也有人认为这类方案偏重。
- **需求澄清工具**：可用 `mattpocock/skills` 中的 `/grill-me` 让 AI 反向采访、问清需求再动手。

### 评论补充

有回复指出，上亿 token 往往是多个子代理并行、多项目或多模块协作的结果，前提是骨架和模块边界已经定好；无效的 token 消耗不等于产出。也有回复提醒，用量多少不重要，能否带来收益才重要。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251873" target="_blank" rel="noopener noreferrer">各位的 Vibe Coding 究竟是怎么跑起来的？</a></span><span class="topic-stats">回复 36 · 收藏 9</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251757" markdown="1">
<summary>
<span class="topic-rank">9</span>
<span class="topic-title">主干道噪音下静音耳塞推荐与长期佩戴风险</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
楼主因主干道夜间车流噪音影响睡眠，想找不闷耳、佩戴舒适的耳塞过渡到换房。评论给出的方案集中在三类：一次性泡棉耳塞、硅胶/硅胶泥耳塞、降噪耳机或白噪音设备，并反复提醒长期戴耳塞可能引发中耳炎。

### 关键要点
- **泡棉类**：多人提到 3M Earsoft、3M 1250（回弹慢、易一次塞到位，约一元多一对）、3M 1100、霍尼韦尔小号（被认为比 3M 舒服）、Moldex（有用户称隔音强于 AirPods Pro 降噪）。
- **硅胶类**：安耳悠被多次推荐，有京东链接 https://item.jd.com/1683181.html ；另有硅胶泥小圆粒耳塞，属消耗品，一对约用 2–3 天。
- **替代方案**：白噪音生成器盖过噪音；3M 大头戴隔音耳罩隔音更好，但评论指出不便侧躺；索尼 1000XM 系列降噪耳机也被提及。
- **风险提示**：多位用户称长期戴耳塞易致中耳炎或耳道胀痛，建议仅作应急并尽早换房；油耳用户未得到明确方案。

### 评论补充
Loop Dream 被一位用户称为睡眠体验好、不易掉出；也有人用剪掉线头的入耳式耳机当耳塞。整体共识是耳塞只能缓解，不能替代改善居住噪音环境。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251757" target="_blank" rel="noopener noreferrer">求推荐静音耳塞</a></span><span class="topic-stats">回复 25 · 收藏 12</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251739" markdown="1">
<summary>
<span class="topic-rank">10</span>
<span class="topic-title">选择困难症怎么破：按场景筛选、先买低配试错</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
楼主在买灯、儿童白板、桨板等物品时反复纠结，担心评价真假、怕花钱又怕折腾。评论区的共识是：选择困难多源于完美主义，可用“先明确场景、再缩小范围、最后低成本试错”的方法缓解。

### 关键要点
- **按使用场景过滤选项**：先想清楚用途，再列必要条件。例如卧室夜灯可锁定暖色、可调亮度、USB-C 充电，附加的音响、装饰外观在低价位往往两头都做不好。
- **用退货机制试错**：有回复建议直接下单，靠 7 天无理由退换货“解毒”，拿到实物后很快就有判断；楼主则认为退换货本身也折腾。
- **接受不完美**：多位回复者认为，纠结的根源是完美主义，不必追求最优解。
- **桨板的具体建议**：几百元的休闲板适合纯新手，常玩再升级；千元以上质量明显更好，两三千元可按大品牌热门型号买；新手别选长板或圆边板，难爬且易翻。
- **电饭煲的困境**：有回复花一个月研究无涂层内胆，发现便宜、快煮、耐用、易修难以兼得，传统电饭煲加定期换内胆是折中方案。

### 评论补充
有人建议直接问 AI 只选一个，或去山姆等渠道减少挑选成本；也有人提到桌面音箱挑两年后放弃购买。这些经验说明，明确需求比无限比较更有效。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251739" target="_blank" rel="noopener noreferrer">很严重的选择困难症</a></span><span class="topic-stats">回复 32 · 收藏 6</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251951" markdown="1">
<summary>
<span class="topic-rank">11</span>
<span class="topic-title">阿里云服务器过期释放后，旧IP被黑产接管并冒用备案</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

客户服务器忘记续费，于 10 月 10 日凌晨被释放；重新采购部署后访问，发现页面是黑产网站，底部还挂着客户域名的备案号。排查后确认并非网站被入侵，而是域名解析仍指向旧服务器 IP `8.148.182.232`，该 IP 已被他人占用。作者查到相关 SSL 证书签发时间为 2026-10-22T09:47:59Z，认为这次利用“太精准”。

### 关键要点

- **风险成因**：域名解析未随服务器释放同步清理，旧 IP 被重新分配后，残留解析把流量导向了他人服务器。
- **黑产可能路径**（评论推测，未证实）：申请云服务器并开放 80/443 端口，从访问日志中收集指向该 IP 的域名，再查备案、签证书、上线站点；也有人认为是在批量扫描公开 DNS 记录中的悬空解析。
- **可执行动作**：服务器下线或到期前，先删除或改掉所有 A 记录、子域名解析；定期检查是否有解析指向已不持有的 IP。
- **连带风险**：他人域名解析到你的服务器 IP 时，也可能借机入侵服务器，需注意服务安全。

### 评论补充

多位用户称遇到过类似情况：过期域名被抢注后挂上色情或钓鱼网站，甚至因备案信息未同步而在微信内可直接打开。关于黑产如何“精准”拿到同一 IP，评论存在分歧：有人怀疑云厂商内部配合或可指定 IP，也有人认为只是申请后观察访问日志筛选，或扫描公开 DNS 记录。作者已改完解析，并认为云厂商风控值得完善。

＞ 注：主帖证书时间写作 2026 年，与叙述时间线不一致，事实待核验。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251951" target="_blank" rel="noopener noreferrer">阿里服务器过期，被黑产精准创建并盗用</a></span><span class="topic-stats">回复 32 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251754" markdown="1">
<summary>
<span class="topic-rank">12</span>
<span class="topic-title">4万入股二手电动车回收：借款合同与分成风险</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
楼主被二手电动车老板邀请“合伙”：签一年期借款合同出资 4 万用于囤货，另有一名只出资 5 万的合伙人，卖出一台车三人分利润；楼主下班也可自行收车、收废品，废品货源主要靠老板提供。评论几乎一致看空，核心问题不是“能不能赚”，而是**资金风险由出资人承担、收益与流转信息完全不透明**。

### 关键要点
- **合同性质存疑**：律师已提示该合作模式可能不适用借款合同，扯皮时法院未必支持，钱难追回。
- **收益不透明**：收车价、卖价、库存都由老板掌握，评论举例“500 收说成 600 收、1000 卖说成 800 卖”，出资人无法对账。
- **分成模式不合理**：自己收的车也要三人分，缺乏收车动力；按一台赚 200 算，要卖约 200 台才回本 4 万。
- **合规风险**：可能收到赃车/赃电池；出售超标、不上牌的改装车存在被追责风险，评论提到广州已有实际案例。
- **流动性风险**：卖不出去就压资金，市场跌价、车辆被盗均自负亏损。

### 评论补充
多位回复指出“好生意不会拉陌生人合伙”，4 万并非难借的金额，老板更可能是在融资；也有人怀疑所谓另一位 5 万出资人并不存在，或资金已不够周转。二手行业本质是重资产吃周转，资金量太小难以支撑利润。结论：信息不对称叠加合同瑕疵，风险远大于预期收益，不建议参与。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251754" target="_blank" rel="noopener noreferrer">大家看看我这个二手电动车回收副业评估一下</a></span><span class="topic-stats">回复 22 · 收藏 2</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251748" markdown="1">
<summary>
<span class="topic-rank">13</span>
<span class="topic-title">Instagram 数据 API 上架 RapidAPI：千次约 $0.1，按次计费</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者把自用达人营销工具中的 Instagram 数据抓取能力拆成独立 API，挂在 RapidAPI 上按次售卖，提供完整文档和网页 Playground，只需 RapidAPI key 即可试用。

### 关键要点
- **能力范围**：达人资料（精确粉丝/关注数、认证标、简介外链、1080×1080 头像、Threads 关联、用户名与数字 id 互转）；帖子/Reels 列表（精确点赞评论数、真实播放量，12 条一页游标翻页）；单帖详情（正文、话题、@、合作作者、地点、背景音乐、置顶状态）；可下载直链（原图、最高 1080p 视频、纯音频）；评论、精选、按关键词/话题搜 Reels。
- **数据严谨性**：拿不到的数不返回 0，而是省略字段；约数会标 `counts_approximate`；错误码稳定，仅 429/408 建议重试；参数传错返回 400 并说明正确用法；降级数据带 `X-Cache: STALE` 和 `stale.as_of` 时间戳。
- **明确不提供**：点赞者列表、被标记帖子、24 小时内 Story、私密账号内容、地点/音频下的帖子。
- **价格**：Basic 免费 35 次/月；Pro $13.99/月 10 万次（约 $0.14/千次）；Ultra $35.99/月 30 万次（约 $0.12/千次）；Mega $89.99/月 90 万次（约 $0.10/千次）。

### 评论补充
有用户指出文案有明显 AI 文风；作者确认 RapidAPI 抽成为 25%；关于 24 小时内 Story，作者建议改用 `listUserHighlights` 接口；粉丝账号搜索功能暂未提供。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251748" target="_blank" rel="noopener noreferrer">做了个 Instagram 数据 API（千次 $0.1）, 挂在 RapidAPI 上按次卖,</a></span><span class="topic-stats">回复 13 · 收藏 5</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251867" markdown="1">
<summary>
<span class="topic-rank">14</span>
<span class="topic-title">iPhone Duo 上手体验后取消预订：折痕、重量与15999元定价</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者双持 iPhone 17 Pro 与 OPPO Find N6，周末体验 iPhone Duo 后取消了预订单。结论是：展开状态体验出色，但首发价 15999 元起、第一代品控未知、外屏过小、拍照一般，让他选择观望。

### 关键要点
- **优点**：磨砂屏观感接近纸质书，适合阅读电子书；折叠动画过渡流畅；状态栏信号图标合并；展开后可用面积接近 iPad mini 7，与 Find N6 展开尺寸相差无几。
- **缺点**：非展开状态外屏太小，实用性差；演示机开售次日折痕已较明显，而使用近 5 个月的 Find N6 亮屏时几乎无感知；折叠机拍照/视频普遍偏弱；软件适配仍需时间。
- **取消预订的原因**：价格过高；第一代品控存疑，网上有同位置屏裂反馈；等待适配完善后价格可能回落。
- **折叠机使用经验**：最大价值在展开态，比平板便携，分屏适合查攻略；看英文书时同时开微信读书、词典和 ChatGPT 交互体验好。主要短板是重，戴壳后握持累，配支架可改善，放口袋会拽裤子。

### 评论补充
多位用户到店体验后同样放弃：有人反馈机身发烫、折痕尚可接受；有人认为第一代不值得这个价，更期待后续机型；有用户指出折叠屏不适合只持有一台手机的人，外屏小、拍照下滑、重、壳膜牺牲体验且维修涉及 eSIM 麻烦。也有用户认为屏幕清晰度好于网上评价，并提到三星 Fold 系列更轻、国内定价更低。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251867" target="_blank" rel="noopener noreferrer">体验了 iPhone Duo，回来就取消了预订单</a></span><span class="topic-stats">回复 18 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251840" markdown="1">
<summary>
<span class="topic-rank">15</span>
<span class="topic-title">用AI两周重构Hexo主题Icarus：241次提交与$650用量复盘</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者用 AI 编程工具重构了长期停更的 Hexo 主题 Icarus 及其组件库，两个仓库共 **241 个提交**，大部分集中在最近两周；代码净增约两万行，含测试与文档约四万行。新版本已发布到 npm，并支持 Hexo 8。

### 关键要点
- **功能更新**：新增 Material 3 Expressive 主题、重做 Cyberpunk 主题；加入固定导航栏、悬停预加载、文章过期提示、阅读进度条、代码块折叠预览、深浅色切换、GitHub 贡献日历、系统分享。
- **依赖与服务治理**：升级 Waline、Artalk、Twikoo、Gitalk、lightGallery、MathJax 4、KaTeX 等；将 AddThis、Gitment、Valine、FeedBurner、百度分享等已停运服务标记为废弃；统计脚本改为用户同意后加载，并新增 Umami、Matomo。
- **工具与成本**：本地用 OpenCode + OpenChamber，另用 Claude Code Desktop 和 Claude Cloud Environment；模型为 GPT-6.1 Sol（high）与 Claude Opus 5.5（high）。一周 2.3B token、98% 为缓存，按 API 价折算约 $650（含赠送 credit，未实际购买）。
- **使用感受**：Opus 5.5 前端审美更好、返工少；Sol 爱过度防御、堆兜底和免责说明。Claude Code Desktop 会自行盯 CI 并修复，OpenCode 需手动配置。API 按 Coding Plan 用量计费很贵；Claude Cloud Environment 限制多，不推荐。

### 评论补充
有用户表示曾因主题停更而换用其他主题，看到“复活”愿意回归；也有人打算用 AI 优化自己停更的主题。

作者的核心判断是：AI 让依赖升级、兼容修复这类体力活变便宜，但评论/统计/分享服务的接入经验、迁移方案和踩坑积累仍难被替代，品味、经验与社区反而更值钱。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251840" target="_blank" rel="noopener noreferrer">我花了$650（等价）重构了我的老开源项目</a></span><span class="topic-stats">回复 2 · 收藏 3</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251819" markdown="1">
<summary>
<span class="topic-rank">16</span>
<span class="topic-title">开源跨平台抓包调试工具 sniffy：支持 HTTPS、WebSocket 与 Headless</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
作者开源了跨平台抓包与接口调试工具 **sniffy**，支持 Windows、macOS、Linux，采用 Apache 2.0 协议，技术栈为 Go + Wails v3 + React。项目处于早期阶段，作者称前端界面参考了 Reqable。

### 关键要点
- **流量查看**：捕获 HTTP/HTTPS 请求，查看请求头、消息体、状态码与耗时，并支持按条件过滤。
- **流式会话**：可查看 WebSocket、SSE、gRPC 的流式通信内容。
- **请求构造与重发**：编辑并重发抓到的请求，或导入 cURL 命令发送。
- **改写与 Mock**：按匹配条件自动改写请求或响应，支持增加延迟、重定向、阻断。
- **断点拦截与脚本**：在请求发出或响应返回时暂停并手动修改；支持 JavaScript 脚本插件处理自定义逻辑。
- **Headless 模式**：可通过 REST API 管理、用 WebSocket 订阅事件。

### 评论补充
- 有用户反馈 **winhttp 发起的请求抓不到**。作者解释目前仅支持系统代理形式，部分软件不遵循系统代理，需手动指定代理；后续会加入 TUN（虚拟网卡）模式。
- 关于自定义根证书，作者建议使用软件内的导入证书功能。
- 有用户建议 Linux 增加 AppImage 包，作者表示下个版本加上。
- 作者承认浅色主题配色欠佳，正在重新设计界面。

### 使用限制
解析 HTTPS 需先在目标设备安装并信任根证书；macOS 安装包尚未经 Apple 公证，首次打开需到「系统设置 - 隐私与安全性」点击仍要运行。

代码仓库：https://github.com/mintfog/sniffy ；下载：https://gosniffy.com/download/ ；文档：https://gosniffy.com/docs/

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251819" target="_blank" rel="noopener noreferrer">[开源] 做了个跨平台抓包调试工具 sniffy</a></span><span class="topic-stats">回复 8 · 收藏 6</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251989" markdown="1">
<summary>
<span class="topic-rank">17</span>
<span class="topic-title">MacBook 无法开机送修：数据丢失风险与备份建议</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

MacBook Air M5 深度放电后无法开机，MagSafe 灯不亮、机身无温度，用户担心送修会丢失刚转入的数百 G 家庭视频。评论共识是：官方售后不承诺数据安全，送修前应主动备份或先做数据恢复。

### 关键要点

- **官方维修不保数据**：多位用户指出，天才吧送修前会明确建议备份，并声明不保证数据安全；维修协议通常仍需签署。
- **换主板风险最高**：若故障涉及主板供电电路，苹果官方通常整块更换主板，而 SSD 集成在主板上，数据可能随之丢失。
- **普通部件维修影响小**：换电池、键盘、屏幕等不动主板的维修，多位用户表示未遇到数据丢失。
- **优先保数据再维修**：有回复建议先去 Apple Store 询问能否先用工具备份数据再修；也有用户建议直接找数据恢复或第三方维修，先导出数据。
- **第三方维修是备选**：有用户提到，过保 MBP 的供电电路问题在电脑城花几十元换小芯片解决，但明确提示有风险。

### 评论补充

有用户分享，自己的 Mac 充电时损坏，天才吧直接重置，数据被清空，但因有备份未受影响；也有人送修多次数据仍在。结论是数据是否丢失取决于故障部位和维修方式，不能一概而论。

＞ 重要数据应至少保留两份异地副本，例如手机、NAS、冷备份和网盘各一份，不要等故障发生才补救。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251989" target="_blank" rel="noopener noreferrer">Macbook 维修导致硬盘数据丢失的可能性有多大？</a></span><span class="topic-stats">回复 22 · 收藏 0</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1252037" markdown="1">
<summary>
<span class="topic-rank">18</span>
<span class="topic-title">I人约羽毛球：地域性小程序与新手找搭子渠道</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
一位居家办公的 I 人想约羽毛球，但不敢直接去球馆问人加入。评论给出的共识是：约球渠道有明显地域性，新手不宜直接报名水平不明的局，先找“新手局”体验更好。

### 关键要点
- **综合找搭子**：多位回复提到小红书，可找不同水平、不同地区的球友和接龙群。
- **约球小程序**：`趣活动`、`哇有趣`、`闪动`（Flash）被点名；`闪动`有人专门组织群活动。
- **地域差异**：据一位混迹多地球场的回复，深圳用`哇友聚`，广州、上海以`中羽联`和`趣运动`为主，杭州用`闪动`，浙江部分地区用`羽小蜜`。
- **线下入口**：找自己方便去的球馆，问馆内的人有没有约球群，拉进群即可。
- **新手提醒**：除非标题写明“新手局”，否则小程序报名者水平普遍较高，直接去体验可能很差；水平一般也可先和同事打。

### 评论补充
有人分享程序员自搓台球约球小程序、从社群收集需求并做到 3000 多用户的案例，但属于旁证，不构成羽毛球约球工具推荐。小城市是否有活跃用户，原帖未给出验证。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1252037" target="_blank" rel="noopener noreferrer">I 人，喜欢羽毛球，有没有可以约球的小程序或者 APP 呢？</a></span><span class="topic-stats">回复 8 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251729" markdown="1">
<summary>
<span class="topic-rank">19</span>
<span class="topic-title">dsh 能否成为新一代 agent 标准：开箱即用与积木化的分歧</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容
主帖把 pi（提供浏览器内核）与 dsh（DeepSeek harness，直接做浏览器）视为新一代 agent 雏形，认为“插件即网页”的模式比 Workbuddy、豆包工作、千问办公等封闭方案更有创造力：用户可通过对话访问并定制插件。评论普遍不认同它会成为“标准”，核心分歧在于开箱即用与积木化。

### 关键要点
- **开箱即用是刚需**：多位回复者认为普通人要的是 PDF、办公三件套、浏览器、IM 推送、搜索等一站式能力，并持续更新；dsh 需自行找插件、评估适配度，插件下载量高也可能不适配。
- **标准化之争**：有回复指出 dsh 的直接竞品是 pi agent harness，其上可接任意 LLM；真正的问题是插件能否跨 dsh、pi、Workbuddy 通用，而非外观是否像 .exe。
- **安全是硬约束**：运行第三方插件等于开放本机，审查 1.0.9 版本也无法保证下一版本；建议优先官方来源、本地沙盒或断网执行，必要时自写。
- **入口形态**：有观点认为 web agent 交互普及率会高于客户端，受渲染复杂度和审查逃逸率影响。

### 评论补充
楼主回应称 Workbuddy 的局限是业务前端全在对话外，下一代应把业务定义、skill 可视化、computer use 与 RPA 纳入 agent，并具备类似 dify 的可靠性；基础插件宜官方提供，垂直业务插件则千人千面。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251729" target="_blank" rel="noopener noreferrer">dsh 是否会成为新的一代 agent 标准?</a></span><span class="topic-stats">回复 12 · 收藏 1</span></p>

</div>

</details>

<details class="topic-card" data-topic-id="1251929" markdown="1">
<summary>
<span class="topic-rank">20</span>
<span class="topic-title">雅迪电动车换磷酸铁锂电池与解速的真实花费</span>
</summary>

<div class="topic-content" markdown="1">

<div class="topic-article" markdown="1">

### 核心内容

一位深圳用户给使用四年的雅迪电动车做了电池、轮胎更换和解速，总花费 1521 元，接近 2800 元购车价的一半。主帖给出了具体价格和实测结果，可作为电动车维护的参考。

### 关键要点

- **电池**：原 48V12Ah 铅酸（四块 12V 串联）充满仅跑约 20km，换成 60V30Ah 磷酸铁锂，小品牌嘉佰达 BMS，抖音团购价 1356.1 元；同尺寸 BYD 轻型车电池约 2200 元。商家称质保五年、循环 1500+。旧铅酸回收 200 元（每块 50）。
- **轮胎**：后轮磨到花纹和 TWI 标记消失，前轮正常；雅迪售后原厂真空胎 140 元。拼多多同款约 50 元，但自行安装困难。
- **解速**：原极速表显 25 码、地图实测 22 码；花 50 元解速后表显约 40 码、地图实测约 37 码，仍是“欢乐表”。轮胎加解速砍价后共 170 元。
- 换锂电后骑行明显更顺滑，但磷酸铁锂成本远高于铅酸（后者换新约 500 元）。

### 评论补充

- 电动二轮车锂电池比车身贵已属常见；若无长续航和轻量化需求，未必非要上锂电。
- 真空胎自行更换需要撬胎棒等工具，且换后难充气，多数人宁愿付 20–30 元手工费。
- 有用户反映星恒 60V24Ah 锂电约 1600 元，一年后衰减，且锂电耗尽会直接保护断电，不像铅酸还能低速撑一段。

</div>

<p class="topic-source"><span class="topic-source-link">原链接：<a href="https://www.v2ex.com/t/1251929" target="_blank" rel="noopener noreferrer">最近给雅迪调试了一下，感觉电动车这行业赚钱也不少啊</a></span><span class="topic-stats">回复 4 · 收藏 2</span></p>

</div>

</details>
