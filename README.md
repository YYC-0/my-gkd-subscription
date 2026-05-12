# My GKD Subscription

自定义 GKD 订阅规则

## 使用

1. 安装依赖：`pnpm install`
2. 编辑 `src/apps/` 下的规则文件
3. 构建：`pnpm build`
4. 产物在 `dist/` 目录，将 `gkd.json5` 的链接添加到 GKD App

## 目录结构

```
src/
├── subscription.ts   # 订阅详情
├── globalGroups.ts   # 全局规则
├── categories.ts     # 规则分类
└── apps/             # 应用规则（在此目录下新建 .ts 文件）
```
