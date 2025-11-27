/**
 * 设计系统配置
 * 统一管理项目的字体大小、颜色、间距等设计规范
 */

export const designTokens = {
  // 颜色系统
  colors: {
    // 背景色
    background: {
      primary: '#ffffff',
      secondary: '#f5f5f5',
      tertiary: '#fafafa',
    },
    // 文字颜色
    text: {
      primary: '#171717',
      secondary: '#666666',
      tertiary: '#999999',
      disabled: '#cccccc',
    },
    // 主题色（可根据需要扩展）
    primary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
    },
    // 功能色
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
    info: '#1890ff',
    // 分隔线颜色
    divider: '#251814',
  },

  // 字体大小系统
  fontSize: {
    // 统一字体大小命名：f12 = 12px, f14 = 14px, 以此类推
    f12: '12px',
    f14: '14px',
    f16: '16px',
    f18: '18px',
    f20: '20px',
    f24: '24px',
    f32: '32px',
    // 保留原有命名以便兼容
    title: '20px',
    h1: '32px',
    h2: '24px',
    h3: '20px', // 与 title 相同
    h4: '18px',
    h5: '16px',
    h6: '14px',
    body: '16px',
    small: '14px',
    tiny: '12px',
  },

  // 字体粗细
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // 行高
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // 间距系统（基于 4px 或 8px 的倍数）
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },

  // 圆角
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },

  // 阴影
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },

  // 布局系统
  layout: {
    // 容器最大宽度
    containerMaxWidth: '1920px',
    // 标题高度
    titleHeight: '89px',
    // 容器左右内边距（整个项目统一使用）
    containerPadding: '65px',
    // 响应式断点
    breakpoints: {
      sm: '640px',   // 移动端
      md: '768px',   // 平板
      lg: '1024px',  // 桌面
      xl: '1280px',  // 大桌面
      '2xl': '1920px', // 超大桌面
    },
  },
} as const

// 导出类型
export type DesignTokens = typeof designTokens

