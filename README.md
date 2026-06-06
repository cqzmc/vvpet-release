# vvPet

![vvPet hero](docs/readme/vvPet-poster.png)

vvPet 是一个面向 Windows 桌面的 AI 办公萌宠。它把常驻桌宠、主聊天框、截图识别、搜索、离线语音、会议记录、番茄钟和办公提醒放进同一个轻量工作流里，目标是让 AI 随时可用，但不打断当前工作。

发布版下载：<https://github.com/cqzmc/vvpet-release/releases>

## Highlights

- 桌面常驻：透明宠物窗口和独立聊天窗口分离，桌宠负责陪伴、提醒和状态反馈。
- AI 办公助手：支持多模型配置、企业默认模式、深度思考、联网搜索和历史会话恢复。
- 快捷工具：上传文件、截图识别、翻译、桌面搜索、会议记录和番茄钟都在主聊天框内完成。
- 离线能力：支持 Whisper / Vosk 离线语音模型管理，支持 Piper 文字转语音运行时和模型下载。
- 办公提醒：支持 Outlook 未读提醒、系统托盘、开机启动、启动时检查更新和 GitHub Releases 更新检查。
- 隐私边界清晰：API Key / Forvia Token 写入 Windows 凭据管理器，本地搜索目录需要显式授权。

![vvPet workflow](docs/readme/vvPet-poster.png)

## Product Surface

### 主聊天框

主聊天框是工具入口：聊天、截图、上传、搜索、语音、会议和番茄钟集中在一个小窗口里。聊天字号可调，历史会话可搜索、恢复和彻底删除。

### 桌面宠物

桌宠默认常驻桌面。聊天、翻译、截图、会议、番茄钟、更新和通知会触发对应表情或浮动胶囊消息。长胶囊消息会横向滚动，避免内容被截断。

### 宠物选择

当前主线宠物是 Pixel Cat；Hoop Chick 已作为展示和接口预留，后续可接入完整动作与行为。

![vvPet pets](docs/readme/vvPet-poster.png)

## Features

| 模块 | 能力 |
| --- | --- |
| AI 对话 | 多模型配置、企业账号、深度思考、联网模式、历史会话 |
| 文件和截图 | 文件上传、区域截图、本地 OCR / PDF 文本提取 |
| 搜索 | 授权目录后进行本地搜索，避免静默扫描 |
| 语音 | Whisper / Vosk 离线语音模型，Piper TTS，系统语音回退 |
| 会议 | 会议录音、离线转写、会议文本整理入口 |
| 番茄钟 | 专注计时、待办状态、持久化保存 |
| 办公提醒 | Outlook 未读、托盘通知、桌宠浮动提醒 |
| 系统 | 开机启动、启动时检查更新、下载代理、GitHub Release 更新 |

## Tech Stack

- Frontend: Vue 3 + TypeScript + Vite
- Desktop: Tauri 2
- Backend: Rust
- Icons: lucide-vue-next
- Documents: pdfjs-dist + Rust local processing
- Release: GitHub Releases + NSIS installer

## Repository Layout

```text
vvpet/
├─ docs/                   需求、方案、README 配图
├─ vv/                     主应用目录
│  ├─ src/                 Vue 前端
│  ├─ src-tauri/           Rust / Tauri 后端
│  ├─ scripts/             构建与版本脚本
│  └─ build-dist/          前端构建输出
├─ AGENTS.md               仓库协作说明
└─ README.md
```

## Requirements

- Windows 10 / 11
- Node.js 18+
- Rust stable
- Visual Studio C++ Build Tools
- Microsoft Edge（微信文件传输助手外部窗口方案需要）

## Quick Start

```powershell
cd vv
npm install
npm run dev
```

前端预览：

```powershell
cd vv
npm run dev:frontend
```

默认地址：<http://127.0.0.1:1988>

## Common Commands

```powershell
# 前端类型检查
cd vv
npm run check

# 仅构建前端产物
cd vv
npm run build:frontend

# Rust 测试
cd vv
npm run test:rust

# Release 构建：会递增 patch 版本号并生成安装包
cd vv
npm run build
```

## Release Build

`npm run build` 只用于发布构建。它会先递增 patch 版本号，再同步：

- `vv/package.json`
- `vv/package-lock.json`
- `vv/src-tauri/tauri.conf.json`
- `vv/src-tauri/Cargo.toml`

NSIS 安装包输出位置：

```text
vv/src-tauri/target/release/bundle/nsis/vv_<version>_x64-setup.exe
```

上传目标仓库：

```text
https://github.com/cqzmc/vvpet-release/releases
```

## Data And Privacy

- API 请求默认直连你配置的模型服务。
- API Key / Forvia Token 写入 Windows 凭据管理器。
- 历史会话、模型状态、番茄钟和偏好设置保存在应用数据目录。
- 本地搜索必须先显式授权目录。
- Outlook 提醒通过本机 Outlook COM 读取，不走中转服务。

## License

MIT
