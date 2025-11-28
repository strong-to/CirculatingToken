# 部署说明

## ✅ 当前状态

- ✅ 代码已推送到 GitHub: https://github.com/strong-to/CirculatingToken
- ✅ 项目已部署到 Vercel: https://circulating-token-1yp8zieb7-srtongs-projects.vercel.app

## 🔄 设置自动部署

要实现每次 `git push` 后自动部署，需要连接 GitHub 仓库到 Vercel：

### 方法 1: 通过 Vercel 网站（推荐）

1. 访问 https://vercel.com/dashboard
2. 找到项目 `circulating-token`
3. 进入项目设置 (Settings)
4. 点击 "Git" 标签
5. 点击 "Connect Git Repository"
6. 选择 `strong-to/CirculatingToken` 仓库
7. 确认连接

连接后，每次推送到 `main` 分支都会自动触发部署。

### 方法 2: 通过 Vercel CLI

```bash
vercel link
```

然后按照提示操作。

## 📝 部署流程

设置完成后，你的工作流程将是：

1. 修改代码
2. `git add .`
3. `git commit -m "你的提交信息"`
4. `git push`
5. Vercel 自动检测推送并开始部署
6. 几分钟后，新版本自动上线

## 🔗 相关链接

- GitHub 仓库: https://github.com/strong-to/CirculatingToken
- Vercel 项目: https://vercel.com/srtongs-projects/circulating-token
- 生产环境: https://circulating-token-1yp8zieb7-srtongs-projects.vercel.app



