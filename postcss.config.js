module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      // 根字体大小，1rem = 16px（基于 1920px 设计稿）
      rootValue: 16,
      // 需要转换的属性列表
      // * 表示所有属性，也可以指定具体属性如 ['font-size', 'margin', 'padding']
      propList: ['*'],
      // 不需要转换的选择器（可以使用正则表达式）
      // 例如：['body'] 表示 body 选择器下的 px 不转换
      selectorBlackList: [],
      // 最小转换值，小于这个值的 px 不会被转换
      // 设置为 1 表示 1px 不转换（常用于边框），0 表示所有值都转换
      minPixelValue: 1,
      // 排除某些文件或目录
      exclude: /node_modules/i,
      // 是否替换而不是添加
      replace: true,
      // 是否在媒体查询中转换 px
      mediaQuery: false,
      // rem 的小数位数
      unitPrecision: 5,
    },
  },
}


