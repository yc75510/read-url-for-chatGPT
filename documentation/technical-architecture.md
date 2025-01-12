# 技术架构文档

## 架构概述
- 前端框架: Vue 3 + TypeScript
- 构建工具: WXT (基于 Vite)
- CSS 框架: UnoCSS
- 核心功能库: Readability, Turndown

## 模块职责
1. 内容脚本 (entrypoints/content.ts)
   - 页面内容提取
   - DOM 操作处理

2. 后台脚本 (entrypoints/background.ts)
   - 状态管理
   - 数据持久化

3. 弹出窗口 (entrypoints/popup)
   - 用户界面
   - 操作控制 
