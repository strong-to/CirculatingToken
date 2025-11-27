import type { Config } from 'tailwindcss'
// 注意：tailwind 在 Node 环境运行，不会解析 `@` 别名，这里必须使用相对路径
import { designTokens } from './config/design'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 背景色
        background: {
          primary: designTokens.colors.background.primary,
          secondary: designTokens.colors.background.secondary,
          tertiary: designTokens.colors.background.tertiary,
        },
        // 文字颜色
        text: {
          primary: designTokens.colors.text.primary,
          secondary: designTokens.colors.text.secondary,
          tertiary: designTokens.colors.text.tertiary,
          disabled: designTokens.colors.text.disabled,
        },
        // 主题色
        primary: {
          main: designTokens.colors.primary.main,
          light: designTokens.colors.primary.light,
          dark: designTokens.colors.primary.dark,
        },
        // 功能色
        success: designTokens.colors.success,
        warning: designTokens.colors.warning,
        error: designTokens.colors.error,
        info: designTokens.colors.info,
        // 分隔线颜色
        divider: designTokens.colors.divider,
      },
      fontSize: {
        // 统一字体大小命名
        f12: designTokens.fontSize.f12,
        f14: designTokens.fontSize.f14,
        f16: designTokens.fontSize.f16,
        f18: designTokens.fontSize.f18,
        f20: designTokens.fontSize.f20,
        f24: designTokens.fontSize.f24,
        f32: designTokens.fontSize.f32,
        // 保留原有命名以便兼容
        title: designTokens.fontSize.title,
        h1: designTokens.fontSize.h1,
        h2: designTokens.fontSize.h2,
        h3: designTokens.fontSize.h3,
        h4: designTokens.fontSize.h4,
        h5: designTokens.fontSize.h5,
        h6: designTokens.fontSize.h6,
        body: designTokens.fontSize.body,
        small: designTokens.fontSize.small,
        tiny: designTokens.fontSize.tiny,
      },
      fontWeight: {
        light: String(designTokens.fontWeight.light),
        normal: String(designTokens.fontWeight.normal),
        medium: String(designTokens.fontWeight.medium),
        semibold: String(designTokens.fontWeight.semibold),
        bold: String(designTokens.fontWeight.bold),
      },
      lineHeight: {
        tight: String(designTokens.lineHeight.tight),
        normal: String(designTokens.lineHeight.normal),
        relaxed: String(designTokens.lineHeight.relaxed),
        loose: String(designTokens.lineHeight.loose),
      },
      spacing: {
        xs: designTokens.spacing.xs,
        sm: designTokens.spacing.sm,
        md: designTokens.spacing.md,
        lg: designTokens.spacing.lg,
        xl: designTokens.spacing.xl,
        '2xl': designTokens.spacing['2xl'],
        '3xl': designTokens.spacing['3xl'],
      },
      borderRadius: {
        sm: designTokens.borderRadius.sm,
        md: designTokens.borderRadius.md,
        lg: designTokens.borderRadius.lg,
        xl: designTokens.borderRadius.xl,
        full: designTokens.borderRadius.full,
      },
      boxShadow: {
        sm: designTokens.boxShadow.sm,
        md: designTokens.boxShadow.md,
        lg: designTokens.boxShadow.lg,
        xl: designTokens.boxShadow.xl,
      },
      // 布局相关
      maxWidth: {
        container: designTokens.layout.containerMaxWidth,
      },
      height: {
        title: designTokens.layout.titleHeight,
      },
      screens: {
        sm: designTokens.layout.breakpoints.sm,
        md: designTokens.layout.breakpoints.md,
        lg: designTokens.layout.breakpoints.lg,
        xl: designTokens.layout.breakpoints.xl,
        '2xl': designTokens.layout.breakpoints['2xl'],
      },
    },
  },
  // 容器配置 - 响应式容器，最大宽度 1920px
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      sm: '1.5rem',
      md: '2rem',
      lg: '2.5rem',
      xl: '3rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1920px',
    },
  },
  plugins: [],
}
export default config

