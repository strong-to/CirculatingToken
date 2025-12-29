# Change: 改进 Launchpad 表单持久化与预览体验

## Why
- 当前在步骤之间跳转会清空已填写内容，回到前一步时所有输入框都是空的，导致用户无法继续提案。
- 第三步上传文档经常报错且缺少成功提示，面板会变成空白，没有默认展示内容。
- 第七步“预览”其实是重新渲染一份空表单，没有读取前面步骤的数据，用户不得不再次输入。

## What Changes
- 为 Launchpad 每个步骤建立统一的状态持久化逻辑，保证前后跳转或刷新后都能看到已填内容。
- 重构第三步上传区域，上传完成后显示文件名、成功提示以及默认文案，即使解析失败也不会空白。
- 将第七步改造成只读的整体验证视图，聚合展示第一到第六步的最新数据，不再提供可编辑输入。

## Impact
- 影响的规格：launchpad-flow
- 影响的代码：`components/Launchpad/Launchpad.tsx`、`components/Launchpad/com/StepThree/*`、`components/Launchpad/com/StepSeven.tsx`、共享上传工具以及新增的预览辅助逻辑。
