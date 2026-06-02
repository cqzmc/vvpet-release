# vvPet

让 AI 住进你的桌面。

vvPet 是一个基于 Tauri 2、Vue 3 和 Rust 的 Windows 桌面宠物助手。它把常驻桌宠、AI 对话、截图识别、离线语音、办公提醒和轻量工具整合到同一个桌面工作流里，重点是“不打断当前工作”的低摩擦交互。

## 当前版本能做什么

- 双窗口桌宠架构：透明宠物窗口 + 独立聊天窗口
- AI 对话与快捷工具：上传、截图、语音、翻译、搜索、会议记录
- 番茄钟与待办：支持状态切换、排序、持久化保存到应用数据目录
- Outlook 提醒：Windows 下通过 PowerShell COM 轮询未读邮件
- 微信文件传输助手：Windows 下通过系统 Edge app 窗口打开，避免 WebView2 白屏
- 离线语音能力：Vosk / Whisper 语音识别模型管理，Piper 文本转语音运行时与模型下载
- TTS 诊断：最近一次朗读会显示是否使用了 Piper、识别到的语言以及是否回退到系统语音
- 系统能力：开机启动、启动时检查更新、GitHub Releases 版本检查

## 技术栈

- 前端：Vue 3 + TypeScript + Vite
- 桌面壳：Tauri 2
- 后端：Rust
- 图标：lucide-vue-next
- 文档 / 截图处理：pdfjs-dist + Rust 本地处理

## 目录结构

```text
vvpet/
├─ docs/                   需求、方案与实现记录
├─ vv/                     主应用目录
│  ├─ src/                 Vue 前端
│  ├─ src-tauri/           Rust / Tauri 后端
│  ├─ scripts/             构建脚本
│  └─ build-dist/          前端构建输出
├─ AGENTS.md               仓库协作说明
└─ README.md
```

## 环境要求

- Windows 10 / 11
- Node.js 18+
- Rust stable
- Visual Studio C++ Build Tools（Tauri / Rust Windows 构建常见依赖）
- Microsoft Edge（用于微信文件传输助手外部窗口方案）

## 快速开始

### 1. 安装依赖

```powershell
cd vv
npm install
```

### 2. 启动前端预览

```powershell
cd vv
npm run dev:frontend
```

默认地址：http://127.0.0.1:1988

### 3. 启动桌面应用开发模式

```powershell
cd vv
npm run dev
```

## 常用命令

```powershell
# 前端类型检查
cd vv
npm run check

# 仅构建前端产物
cd vv
npm run build:frontend

# Rust 编译校验
cd vv/src-tauri
cargo test --no-run

# 生成 Windows 安装包
cd vv
npm run build
```

## 安装包输出位置

完整打包后，NSIS 安装包默认输出到：

```text
vv/src-tauri/target/release/bundle/nsis/vv_0.1.0_x64-setup.exe
```

## 关键实现说明

### 微信文件传输助手

- Windows 下不再依赖 Tauri 内嵌 WebView2 侧栏
- 当前实现通过 Edge app 模式打开微信文件传输助手网页
- 聊天窗口移动或缩放时，会同步外部微信窗口位置
- 当前目标窗口尺寸为 540 × 480

### 番茄钟待办持久化

- 待办列表不再只保存在运行时内存里
- 当前通过应用数据目录中的本地偏好文件持久化
- 重启应用后会恢复待办与“启动时检查更新”设置

### 语音与离线模型

- 语音输入：优先本地能力，支持离线识别模型管理
- 文本转语音：优先 Piper，失败时在 Windows 下回退到系统语音
- 中英混合文本会做分段识别，最近一次朗读状态会显示在设置面板中

### 更新检查

- 当前检查源为 GitHub Releases：
    https://github.com/cqzmc/vvpet/releases
- 支持手动检查
- 支持应用启动时自动检查

## 数据与隐私

- API 请求默认直连你配置的模型服务
- 本地搜索必须先显式授权目录
- 番茄钟待办、模型状态等本地偏好保存在应用数据目录
- Outlook 提醒通过本机 Outlook COM 读取，不走中转服务

## 当前适用场景

- 日常办公中的随手问答、截图识别、邮件提醒
- 本地文件辅助搜索与轻量会议记录
- 桌面常驻 AI 助手与宠物式反馈交互

## 已验证构建流程

当前仓库已验证以下命令可通过：

```powershell
cd vv
npm run check

cd vv/src-tauri
cargo test --no-run

cd vv
npm run build
```

## 相关文档

- Git / GitHub 代理设置：docs/git-github-proxy-setup.md
- 产品需求：docs/AI桌面宠物助手_Tauri2_Vue3_Rust_PRD.md
- Windows MVP 规划：docs/windows-mvp.md

## License

MIT
