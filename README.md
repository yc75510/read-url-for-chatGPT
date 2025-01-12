# 网页内容提取助手

## 简介
这是一个浏览器插件，用于提取网页内容并将其转换为 Markdown 格式，方便粘贴到 ChatGPT 的输入框中。插件使用 [@mozilla/readability](https://github.com/mozilla/readability) 提取网页内容，并通过 [turndown](https://github.com/mixmark-io/turndown) 将其转换为 Markdown 格式。

## 安装
1. 克隆此仓库到本地：
   ```bash
   git clone https://github.com/yourusername/copy-url-content-for-chatgpt.git
   ```
2. 进入项目目录并安装依赖：
   ```bash
   cd copy-url-content-for-chatgpt
   pnpm install
   ```
3. 构建项目：
   ```bash
   pnpm run build
   ```
4. 在浏览器中加载插件：
   - 打开浏览器的扩展程序管理页面
   - 选择“加载已解压的扩展程序”
   - 选择项目的 `.output` 目录

## 使用
1. 打开需要提取内容的网页。
2. 点击浏览器工具栏中的插件图标。
3. 插件将自动提取网页内容并转换为 Markdown 格式。
4. 复制转换后的内容并粘贴到 ChatGPT 的输入框中。
