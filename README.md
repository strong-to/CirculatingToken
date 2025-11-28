# Circulating Token

基于 Next.js、TypeScript、Tailwind CSS、Axios 和 Jotai 构建的现代化 Web 应用。

## 技术栈

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Axios** - HTTP 客户端
- **Jotai** - 原子化状态管理

## 开始使用

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
npm run start
```

## 项目结构

```
.
├── app/              # Next.js App Router 目录
│   ├── layout.tsx   # 根布局
│   ├── page.tsx     # 首页
│   └── globals.css  # 全局样式
├── components/       # React 组件
├── lib/             # 工具函数和配置
│   └── api.ts       # Axios 配置和 API 方法
├── store/           # Jotai 状态管理
│   └── atoms.ts     # 状态原子
└── public/          # 静态资源
```

## 功能特性

- ✅ Next.js 14 App Router
- ✅ TypeScript 支持
- ✅ Tailwind CSS 配置
- ✅ Axios HTTP 客户端配置
- ✅ Jotai 状态管理示例
- ✅ ESLint 代码检查

## 环境变量

创建 `.env.local` 文件来配置环境变量：

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 许可证

MIT



