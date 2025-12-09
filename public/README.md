# Public 资源目录结构说明

## 目录组织规则

本项目的 `public` 目录按照以下规则组织：

```
public/
├── {页面名称}/              # 页面文件夹（如 home, tokenMarketplace, launchpad）
│   ├── {组件名称}/          # 组件文件夹
│   │   ├── img/            # 该组件使用的图片资源
│   │   │   ├── image1.png  # 图片文件（文件名需有注释说明用途）
│   │   │   └── ...
│   │   └── text/           # 该组件的文案资源
│   │       ├── title.txt   # 文案文件（文件名需有注释说明用途）
│   │       └── ...
│   └── ...
├── text/                    # 全局文案（如果需要）
└── fonts/                   # 字体文件
```

## 命名规范

1. **页面文件夹**：使用小写，多个单词用驼峰命名（如 `tokenMarketplace`）
2. **组件文件夹**：使用 PascalCase（如 `FooterLogo`, `ContentCard`）
3. **图片文件**：使用小写，多个单词用下划线（如 `icon_1.png`, `background_image.png`）
4. **文案文件**：使用小写，多个单词用下划线（如 `main_title.txt`, `button_text.txt`）

## 注释规范

每个文件夹和文件都应该有清晰的注释说明：

1. **组件文件夹**：在文件夹内创建 `README.md` 说明该组件的用途和资源说明
2. **图片文件**：在文件名或注释中说明图片的用途
3. **文案文件**：在文件名或注释中说明文案的用途

## 示例结构

### 完整目录结构（包含所有图片和文案详细说明）

```
public/
├── header/                 # Header 组件（全局导航栏）
│   └── img/               # Header 图标资源
│       ├── search.png     # 搜索图标（右上角搜索按钮）
│       ├── language.png   # 语言切换图标（国际化功能）
│       ├── Group.png      # 菜单图标（移动端菜单按钮）
│       └── user.png       # 用户图标（用户登录/个人中心）
│
├── home/                   # Home 页面资源
│   ├── icons/             # Home 页面通用图标
│   │   └── img/          # 通用图标资源
│   │       ├── sword.png      # 剑形图标（用于卡片装饰）
│   │       ├── umbrella.png   # 雨伞图标（用于卡片装饰）
│   │       ├── arr.png        # 箭头图标（用于卡片导航）
│   │       ├── games.png      # 游戏图标（用于卡片装饰）
│   │       ├── star1.png      # 星星图标1（用于评分/装饰）
│   │       └── star2.png      # 星星图标2（用于评分/装饰）
│   │
│   ├── FooterLogo/        # FooterLogo 组件（页脚合作伙伴 Logo）
│   │   └── img/          # 合作伙伴 Logo 图片
│   │       ├── asterisk.png  # Asterisk 平台 Logo
│   │       ├── books.png     # Books 平台 Logo
│   │       ├── dune.png      # Dune Analytics 平台 Logo
│   │       ├── oas.png       # OAS 平台 Logo
│   │       └── opal.png      # Opal 平台 Logo
│   │
│   ├── InstitutionalGrade/  # InstitutionalGrade 组件（机构级金融）
│   │   ├── img/            # 图片资源
│   │   │   └── DEEPBLUE/   # DEEP BLUE COVENANT 相关图片
│   │   │       ├── DEEPBLUE.png  # DEEP BLUE 主 Logo
│   │   │       ├── foot.png     # DEEP BLUE 页脚图片
│   │   │       ├── Frame.png    # DEEP BLUE 框架图片
│   │   │       └── PROJECTS.png # DEEP BLUE 项目图片
│   │   └── text/           # 文案资源
│   │       ├── main_title.txt          # 主标题："Institutional-Grade Finance, Reimagined for Everyone"
│   │       ├── deep_blue_covenant.txt  # DEEP BLUE COVENANT 标题文案
│   │       └── texts.json              # 文案 JSON 文件（包含主标题和 DEEP BLUE 标题）
│   │
│   ├── YourNextWorld/      # YourNextWorld 组件（你的下一个世界）
│   │   ├── img/            # 卡片背景图片（5张）
│   │   │   ├── img_datasets.png            # Datasets（数据集）卡片背景图
│   │   │   ├── img_compute_paool.png       # Compute Pool（计算池）卡片背景图
│   │   │   ├── img_foundational_models.png  # Foundational Models（基础模型）卡片背景图
│   │   │   ├── img_workflows.png           # Workflows（工作流）卡片背景图
│   │   │   └── img_ai_agents.png           # AI Agents（AI 代理）卡片背景图
│   │   └── text/           # 文案资源
│   │       ├── main_title.txt              # 主标题："Your Next World-Changing Idea Starts Here"
│   │       ├── button_view_more.txt       # "View More" 按钮文案
│   │       ├── button_launch_project.txt  # "Launch Your AI Project and Earn" 按钮文案
│   │       ├── card_datasets.txt          # "Datasets" 卡片标题
│   │       ├── card_compute_pool.txt      # "Compute Pool" 卡片标题
│   │       ├── card_foundational_models.txt # "Foundational Models" 卡片标题
│   │       ├── card_workflows.txt         # "Workflows" 卡片标题
│   │       ├── card_ai_agents.txt         # "AI Agents" 卡片标题
│   │       └── texts.json                 # 所有文案的 JSON 文件
│   │
│   ├── BuildWithThe/       # BuildWithThe 组件（与全球最聪明的人一起构建）
│   │   ├── img/            # 图片资源
│   │   │   ├── Investing1.png  # 投资卡片1（轮播图第一张）
│   │   │   ├── Investing2.png  # 投资卡片2（轮播图第二张）
│   │   │   ├── Investing3.png  # 投资卡片3（轮播图第三张）
│   │   │   ├── Investing4.png  # 投资卡片4（轮播图第四张）
│   │   │   ├── Investing5.png  # 投资卡片5（轮播图第五张）
│   │   │   ├── Earth.png       # 地球装饰图标
│   │   │   ├── games.png       # 游戏装饰图标
│   │   │   └── GREENMatrix.png # 绿色矩阵装饰图标
│   │   └── text/           # 文案资源
│   │       ├── main_title.txt        # 主标题："Build With The Brightest Minds Worldwide"
│   │       ├── button_contribute.txt # "Contribute AI Projects and Earn" 按钮文案
│   │       ├── link_learn_more.txt   # "Learn more details" 链接文案
│   │       └── texts.json            # 所有文案的 JSON 文件
│   │
│   ├── LetEveryShare/      # LetEveryShare 组件（让每一份分享都带来快乐）
│   │   ├── img/            # 图片资源（5张投资卡片）
│   │   │   ├── Investing1.png  # 投资卡片1（轮播图）
│   │   │   ├── Investing2.png  # 投资卡片2（轮播图）
│   │   │   ├── Investing3.png  # 投资卡片3（轮播图）
│   │   │   ├── Investing4.png  # 投资卡片4（轮播图）
│   │   │   └── Investing5.png  # 投资卡片5（轮播图）
│   │   └── text/           # 文案资源
│   │       ├── main_title.txt      # 主标题："Let Every Share Come With Joy"
│   │       ├── button_use_apps.txt # "Use AI Apps and Earn" 按钮文案
│   │       ├── link_learn_more.txt # "Learn more details" 链接文案
│   │       └── texts.json         # 所有文案的 JSON 文件
│   │
│   ├── WhereUsingBecomes/  # WhereUsingBecomes 组件（使用即投资）
│   │   ├── img/            # 图片资源
│   │   │   ├── Investing1.png  # 投资卡片1（轮播图）
│   │   │   ├── Investing2.png  # 投资卡片2（轮播图）
│   │   │   ├── Investing3.png  # 投资卡片3（轮播图）
│   │   │   ├── Investing4.png  # 投资卡片4（轮播图）
│   │   │   ├── Investing5.png  # 投资卡片5（轮播图）
│   │   │   ├── Vector1.png     # 矢量装饰图标1
│   │   │   ├── Vector2.png     # 矢量装饰图标2
│   │   │   ├── Vector3.png     # 矢量装饰图标3
│   │   │   ├── Vector4.png     # 矢量装饰图标4
│   │   │   ├── WALL-E.png      # WALL-E 机器人装饰图标
│   │   │   ├── arr.png         # 箭头装饰图标
│   │   │   ├── games.png       # 游戏装饰图标
│   │   │   └── waitingEarth.png # 等待地球装饰图标
│   │   └── text/           # 文案资源
│   │       ├── main_title.txt      # 主标题："Where Using Becomes Investing"
│   │       ├── button_use_apps.txt # "Use AI Apps and Earn" 按钮文案
│   │       ├── link_learn_more.txt # "Learn more details" 链接文案
│   │       └── texts.json         # 所有文案的 JSON 文件
│   │
│   ├── GovernTogether/     # GovernTogether 组件（共同治理）
│   │   ├── img/            # 图片资源
│   │   │   └── bgc.png     # 背景图片
│   │   └── text/           # 文案资源（待添加）
│   │
│   ├── FreedomToEnter/     # FreedomToEnter 组件（自由进入）
│   │   ├── img/            # 图片资源
│   │   │   └── bgc.png     # 背景图片
│   │   └── text/           # 文案资源（待添加）
│   │
│   └── LiquidityThat/      # LiquidityThat 组件（流动性）
│       ├── img/            # 图片资源
│       │   └── bgc.png     # 背景图片
│       └── text/           # 文案资源（待添加）
│
├── launchpad/              # Launchpad 页面资源（项目启动台）
│   ├── TemplateSelection/  # TemplateSelection 组件（模板选择）
│   │   └── img/           # 模板预览图片（12张）
│   │       ├── Mask1.png   # 模板1预览图
│   │       ├── Mask2.png   # 模板2预览图
│   │       ├── Mask3.png   # 模板3预览图
│   │       ├── Mask4.png   # 模板4预览图
│   │       ├── Mask5.png   # 模板5预览图
│   │       ├── Mask6.png   # 模板6预览图
│   │       ├── Mask7.png   # 模板7预览图
│   │       ├── Mask8.png   # 模板8预览图
│   │       ├── Mask9.png   # 模板9预览图
│   │       ├── Mask10.png  # 模板10预览图
│   │       ├── Mask11.png  # 模板11预览图
│   │       └── Mask12.png  # 模板12预览图
│   │
│   ├── LogoPromotionalMaterials/  # LogoPromotionalMaterials 组件（Logo 和宣传材料）
│   │   └── img/           # Logo 和宣传图片
│   │       ├── logo.png   # 项目 Logo
│   │       ├── Mask1.png  # 宣传图片1
│   │       ├── Mask2.png  # 宣传图片2
│   │       ├── Mask3.png  # 宣传图片3
│   │       ├── Mask4.png  # 宣传图片4
│   │       └── Mask5.png  # 宣传图片5
│   │
│   └── ProjectHomepagePreview/  # ProjectHomepagePreview 组件（项目首页预览）
│       └── img/           # 项目首页预览图片（5张）
│           ├── img_13.png  # 预览图1
│           ├── img_14.png  # 预览图2
│           ├── img_15.png  # 预览图3
│           ├── img_16.png  # 预览图4
│           └── img_17.png  # 预览图5
│
└── tokenMarketplace/       # TokenMarketplace 页面资源（代币市场）
    ├── TokenImages/        # TokenImages 组件（顶部展示图片）
    │   └── img/           # 顶部展示图片（3张）
    │       ├── Mask1.png  # 第一张展示图片
    │       ├── Mask2.png  # 第二张展示图片
    │       └── Mask3.png  # 第三张展示图片
    │
    └── ContentCard/        # ContentCard 组件（内容卡片）
        ├── img/           # 图片资源
        │   ├── bg.png     # 卡片背景图（所有30个卡片共用）
        │   ├── icon2.png  # 点击状态图标（所有卡片点击后显示）
        │   └── icon/      # 卡片图标文件夹（30个卡片图标）
        │       ├── icon_1.png   # 第1个卡片图标（TENSOR GRID）
        │       ├── icon_2.png   # 第2个卡片图标（EDU FORM）
        │       ├── icon_3.png   # 第3个卡片图标（ECONOSET）
        │       ├── icon_4.png   # 第4个卡片图标（TRANSIT FLOW）
        │       ├── icon_5.png   # 第5个卡片图标（RES LAB）
        │       ├── icon_6.png   # 第6个卡片图标（FRAME FLOW）
        │       ├── icon_7.png   # 第7个卡片图标（QUANT LOOP）
        │       ├── icon_8.png   # 第8个卡片图标（ART REFER）
        │       ├── icon_9.png   # 第9个卡片图标（INDUS DRAFT）
        │       ├── icon_10.png  # 第10个卡片图标（SPECTRA）
        │       ├── icon_11.png  # 第11个卡片图标（PIXEL STREAM）
        │       ├── icon_12.png  # 第12个卡片图标（VERBA）
        │       ├── icon_13.png  # 第13个卡片图标（ATMO SET）
        │       ├── icon_14.png  # 第14个卡片图标（CODE WEAVER）
        │       ├── icon_15.png  # 第15个卡片图标（PRIME CORE）
        │       ├── icon_16.png  # 第16个卡片图标（COMPANIO）
        │       ├── icon_17.png  # 第17个卡片图标（ARCHI PILOT）
        │       ├── icon_18.png  # 第18个卡片图标（ECHO MIND）
        │       ├── icon_19.png  # 第19个卡片图标（TRIP MATE）
        │       ├── icon_20.png  # 第20个卡片图标（KID LEARN）
        │       ├── icon_21.png  # 第21个卡片图标（PET BOT）
        │       ├── icon_22.png  # 第22个卡片图标（ART REFER 重复项）
        │       ├── icon_23.png  # 第23个卡片图标（STYLE CRAFT）
        │       ├── icon_24.png  # 第24个卡片图标（STAR SAGE）
        │       ├── icon_25.png  # 第25个卡片图标（VOCA BBRIDGE）
        │       ├── icon_26.png  # 第26个卡片图标（SOUND FORGE）
        │       ├── icon_27.png  # 第27个卡片图标（SPORT CUE）
        │       ├── icon_28.png  # 第28个卡片图标（FIN PILOT）
        │       ├── icon_29.png  # 第29个卡片图标（MEDI PROMPT）
        │       └── icon_30.png  # 第30个卡片图标（LEX GUIDE）
        └── text/          # 文案资源
            └── texts.json # 数据卡片标签和按钮文案 JSON 文件
                          # 包含：24h Revenue, Market cap, Total Users, User Rating
                          # 以及：Details, Share, Market, Favorites 按钮文案
```

