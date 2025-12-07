# 添加协作者指南

## 添加 neroisnice@gmail.com 作为协作者

### 方法 1: 通过 GitHub 网页界面（推荐）

1. 访问仓库设置页面：
   https://github.com/strong-to/CirculatingToken/settings/access

2. 在左侧菜单中找到 "Collaborators"（协作者）

3. 点击 "Add people"（添加人员）按钮

4. 在搜索框中输入：
   - 如果知道 GitHub 用户名：直接输入用户名
   - 如果只有邮箱：输入 `neroisnice@gmail.com`，GitHub 会尝试匹配对应的用户

5. 选择权限级别：
   - **Write**（写入）：可以推送代码、创建分支、合并 PR（推荐）
   - **Read**（只读）：只能查看代码
   - **Admin**（管理员）：完全控制权限

6. 点击 "Add [username] to this repository"（添加用户到仓库）

7. 被邀请的用户会收到邮件通知，需要接受邀请后才能访问仓库

### 方法 2: 使用 GitHub CLI（需要用户名）

如果你知道 `neroisnice@gmail.com` 对应的 GitHub 用户名，可以使用：

```bash
gh api repos/strong-to/CirculatingToken/collaborators/USERNAME -X PUT -f permission=push
```

将 `USERNAME` 替换为实际的 GitHub 用户名。

### 权限说明

- **Write（写入）**：推荐权限
  - 可以推送代码到仓库
  - 可以创建和合并 Pull Request
  - 可以创建和管理分支
  - 不能删除仓库或修改设置

- **Read（只读）**：
  - 只能查看和克隆代码
  - 不能推送代码

- **Admin（管理员）**：
  - 拥有所有权限，包括删除仓库

## 仓库链接

- 仓库地址：https://github.com/strong-to/CirculatingToken
- 设置页面：https://github.com/strong-to/CirculatingToken/settings/access








