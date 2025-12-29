# 字体文件目录

请将你的字体文件放在这个目录下。

## 字体文件命名建议

根据项目中使用的 "ITC Avant Garde Gothic Pro" 字体，建议使用以下命名：

- `ITCAvantGardeGothicPro-Regular.woff2` (Regular 字重)
- `ITCAvantGardeGothicPro-Regular.woff` (Regular 字重，备用)
- `ITCAvantGardeGothicPro-Regular.ttf` (Regular 字重，备用)
- `ITCAvantGardeGothicPro-Light.woff2` (Light 字重)
- `ITCAvantGardeGothicPro-Light.woff` (Light 字重，备用)
- `ITCAvantGardeGothicPro-Light.ttf` (Light 字重，备用)
- `ITCAvantGardeGothicPro-Bold.woff2` (Bold 字重)
- `ITCAvantGardeGothicPro-Bold.woff` (Bold 字重，备用)
- `ITCAvantGardeGothicPro-Bold.ttf` (Bold 字重，备用)

## 支持的字体格式

- **woff2** (推荐) - 最佳压缩率和浏览器支持
- **woff** - 备用格式
- **ttf** - 备用格式

## 使用方法

字体已经在 `app/globals.css` 中通过 `@font-face` 引入，可以直接在代码中使用：

```css
font-family: 'ITC Avant Garde Gothic Pro', sans-serif;
```

## 注意事项

1. 如果字体文件名不同，需要修改 `app/globals.css` 中的 `@font-face` 路径
2. 确保字体文件路径正确（相对于 `public` 目录）
3. 建议使用 woff2 格式以获得最佳性能















