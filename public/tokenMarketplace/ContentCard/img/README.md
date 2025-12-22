# ContentCard 组件图片资源说明

## 图片文件列表

### 共用图片

- `bg.png` - 卡片背景图片
  - 用途：所有30个内容卡片的背景图片
  - 使用位置：卡片的 `backgroundImage` 属性

- `icon2.png` - 点击状态图标
  - 用途：所有卡片点击后显示的图标
  - 使用位置：卡片的 `clicked.icon` 属性

### 卡片图标

- `icon/icon_1.png` 到 `icon/icon_30.png` - 30个卡片的独立图标
  - 用途：每个卡片在初始状态和 hover 状态显示的图标
  - 使用位置：卡片的 `initial.icon` 和 `hover.icon` 属性
  - 说明：
    - `icon_1.png` - TENSOR GRID (DBAI0000002)
    - `icon_2.png` - EDU FORM (DBAI0000012)
    - `icon_3.png` - ECONOSET (DBAI0000011)
    - `icon_4.png` - TRANSIT FLOW (DBAI0000008)
    - `icon_5.png` - RES LAB (DBAI0000014)
    - `icon_6.png` - FRAME FLOW (DBAI0000017)
    - `icon_7.png` - QUANT LOOP (DBAI0000021)
    - `icon_8.png` - ART REFER (DBAI0000013)
    - `icon_9.png` - INDUS DRAFT (DBAI0000018)
    - `icon_10.png` - SPECTRA (DBAI0000004)
    - `icon_11.png` - PIXEL STREAM (DBAI0000016)
    - `icon_12.png` - VERBA (DBAI0000003)
    - `icon_13.png` - ATMO SET (DBAI0000009)
    - `icon_14.png` - CODE WEAVER (DBAI0000020)
    - `icon_15.png` - PRIME CORE (DBAI0000001)
    - `icon_16.png` - COMPANIO (DBAI0000027)
    - `icon_17.png` - ARCHI PILOT (DBAI0000019)
    - `icon_18.png` - ECHO MIND (DBAI0000005)
    - `icon_19.png` - TRIP MATE (DBAI0000024)
    - `icon_20.png` - KID LEARN (DBAI0000030)
    - `icon_21.png` - PET BOT (DBAI0000029)
    - `icon_22.png` - ART REFER (DBAI0000013) - 重复项
    - `icon_23.png` - STYLE CRAFT (DBAI0000028)
    - `icon_24.png` - STAR SAGE (DBAI0000022)
    - `icon_25.png` - VOCA BBRIDGE (DBAI0000023)
    - `icon_26.png` - SOUND FORGE (DBAI0000015)
    - `icon_27.png` - SPORT CUE (DBAI0000010)
    - `icon_28.png` - FIN PILOT (DBAI0000026)
    - `icon_29.png` - MEDI PROMPT (DBAI0000007)
    - `icon_30.png` - LEX GUIDE (DBAI0000006)

## 使用说明

- 背景图片 `bg.png` 在所有卡片的初始状态显示
- 每个卡片有独立的图标，在初始和 hover 状态显示
- 点击后所有卡片都显示相同的 `icon2.png`

## 图片规格

- 图标尺寸：60px × 60px
- 背景图片：根据卡片尺寸自适应
- 格式：PNG（支持透明背景）








