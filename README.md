<div align="center">

<p>
  <b>中文</b> · <a href="README.en.md">English</a>
</p>

<p>
  <a href="https://github.com/cqzmc/vvpet-release/releases"><img src="https://img.shields.io/github/v/release/cqzmc/vvpet-release?style=for-the-badge&logo=github&color=22d3ee&labelColor=111827" alt="Latest release" /></a>
  <a href="https://github.com/cqzmc/vvpet-release/stargazers"><img src="https://img.shields.io/github/stars/cqzmc/vvpet-release?style=for-the-badge&logo=github&color=facc15&labelColor=111827" alt="GitHub stars" /></a>
  <a href="https://github.com/cqzmc/vvpet-release/releases"><img src="https://img.shields.io/github/downloads/cqzmc/vvpet-release/total?style=for-the-badge&logo=github&color=14b8a6&labelColor=111827" alt="GitHub downloads" /></a>
  <img src="https://img.shields.io/badge/Windows-10%20%2F%2011-0078D6?style=for-the-badge&logo=windows&logoColor=white&labelColor=111827" alt="Windows 10 / 11" />
  <img src="https://img.shields.io/badge/Tauri-2-24C8D8?style=for-the-badge&logo=tauri&logoColor=white&labelColor=111827" alt="Tauri 2" />
  <img src="https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white&labelColor=111827" alt="Vue 3" />
  <img src="https://img.shields.io/badge/Rust-stable-dea584?style=for-the-badge&logo=rust&logoColor=white&labelColor=111827" alt="Rust" />
</p>

<h3>让 AI 住进桌面，在不打断工作的前提下完成问答、提醒、翻译、截图、会议和本地检索。</h3>

<p>
  <b>🐳 Whale girl 桌宠 · 🤖 Agent 助手 · 🎙️ 离线语音 · 🗣️ 在线/离线 TTS · 🍅 番茄钟 · 📝 会议记录 · 🔤 划词翻译 · 📄 文档 OCR · 🧠 本地大模型 · 📧 邮件蒸馏 · 🏝️ 灵动岛 · 📸 全能截图 · 🌍 多语言</b>
</p>

<p>
  <a href="https://github.com/cqzmc/vvpet-release/releases"><img src="https://img.shields.io/badge/Download%20for%20Windows-111827?style=for-the-badge&logo=github&logoColor=white" alt="Download for Windows" /></a>
  <a href="#快速开始"><img src="https://img.shields.io/badge/Quick%20Start-14b8a6?style=for-the-badge&logo=rocket&logoColor=white" alt="Quick Start" /></a>
</p>

</div>
<br>

![vvPet 海报](images/poster-cn-16x9.jpg)

<p align="center">
  <a href="images/poster-cn-16x9-4k.png">下载 4K 高清原图（5472×3072）</a>
</p>

<br>
## 为什么是 vvPet

vvPet 是一个 Windows 桌面 AI 办公萌宠。它把 **常驻桌宠、Agent 助手、灵动岛、截图、翻译、会议记录、番茄钟和本地模型管理** 放进同一个轻量桌面应用，默认用本地能力处理隐私数据，只在你明确需要时调用远程服务。

它不是大而全的工作台，而是一个低打扰的桌面搭子：平时缩在桌面角落或灵动岛里，需要时一键展开主聊天框。

## 最近重点更新

- **Whale girl 成为默认桌宠**：新配置和旧版 Pixel Cat 默认配置都会迁移到 Whale girl；Pixel Cat 仍可在设置中切换。
- **Kokoro ONNX 中英双语离线朗读**：接入 `kokoro-onnx`，中文 `zf_001`、英文 `af_maple`，模型和 Python 运行时按需安装。
- **TTS 多级回退**：在线优先 Edge TTS（中文晓晓 / 英文 Aria），不可用时走在线备用，再回退 Piper 离线，最后使用 Windows 系统语音。
- **Agent 成为默认模式**：首次启动即 Agent；仍可一键切回 Chat。首次进入智能体页不再自动做网络能力探测，避免卡顿。
- **恢复“陪伴”入口**：左侧导航、`Ctrl+4`、`Ctrl+Shift+M` 均可进入陪伴舞台；左侧桌宠头像浮层保持移除。
- **翻译体验重做**：输入框旁新增“翻译”按钮，点击直接发送；翻译结果卡改为固定浮层，修复左侧竖排/直角错乱。
- **浅色模式适配**：Quick Tools、番茄钟、关于页、Quick Studio、系统设置等区域不再残留深色块。
- **截图工具增强**：窄窗口工具栏横向滚动、紧凑颜色选择器、`Ctrl+C` 复制、`Ctrl+S` 保存。
- **模型源兜底**：HuggingFace ↔ hf-mirror，GitHub ↔ ghfast / gh-proxy，Python ↔ 清华镜像 / python.org。

## 功能亮点

| 能力 | 你可以做什么 |
| --- | --- |
| 🐳 常驻桌宠 | Whale girl 默认桌宠，Pixel Cat 兼容；右键快捷菜单、状态表情、浮动提醒、陪伴舞台互动 |
| 🤖 Agent 助手 | 默认 Agent 模式，多模型配置、企业网关、OpenAI 兼容 API、深度思考、联网搜索、历史会话 |
| 🧠 本地大模型 | 本地 GGUF / llama.cpp 运行时与模型管理，适合离线和隐私优先场景 |
| 🎙️ 离线语音识别 | Whisper / SenseVoice 离线识别，运行时与模型可在引擎设置中管理 |
| 🗣️ 文字转语音 | Edge TTS 在线优先；Piper 离线兜底；可选 Kokoro ONNX 中英双语；Windows 系统语音最终回退 |
| 🍅 番茄钟 | 专注计时、待办、优先级、事件大小、推迟/完成/删除，和桌宠状态联动 |
| 📝 会议记录 | 会议录音、本地保存、离线转写、会议纪要生成和附件回填 |
| 🔤 划词翻译 | 选中文本后弹出轻量浮窗，可翻译、总结、加入待办、复制或继续带入聊天 |
| 📸 全能截图 | 区域截图、标注、马赛克、文字、形状、本地 OCR、复制或作为聊天附件 |
| 📄 文档 OCR | PDF 文本提取、图片文字识别、本地预览和上下文注入；PPTX 只读取文本 |
| 📧 邮件蒸馏 | Outlook 本机 COM 读取未读邮件，生成低打扰提醒和摘要入口 |
| 🏝️ 灵动岛 | 顶部轻量状态岛，承接截图、提醒、搜索、番茄钟、待办和下载状态 |
| 📂 工作区 | 授权目录内浏览、新建、重命名、删除、文本预览/编辑，支持交给 Agent 处理 |
| 🌍 多语言 | 中文、English、Français，主窗、设置、灵动岛、桌宠菜单和翻译窗口同步切换 |

## 语音与模型

### 朗读链路

```text
在线 Edge TTS（晓晓 / Aria）
      ↓ 不可用
在线备用语音
      ↓ 不可用
Piper 离线（en_US-lessac-medium / zh_CN-huayan-medium）
      ↓ 不可用
Windows 系统语音
```

选择 **Kokoro** 时：

```text
Kokoro ONNX（v1.1-zh int8，中英双语）
      ↓ 不可用
Piper 离线
      ↓ 不可用
Windows 系统语音
```

> Kokoro 首次使用需要安装 Python 运行时依赖（`kokoro-onnx` 等）并下载约 168MB 模型；安装完成后可离线合成。CPU 合成通常需要数秒。

### 模型与运行时

| 模型 / 运行时 | 用途 | 来源与兜底 |
| --- | --- | --- |
| Whisper / SenseVoice | 离线语音识别 | HuggingFace ↔ hf-mirror |
| Kokoro v1.1-zh int8 | 中英双语离线 TTS | GitHub Release ↔ ghfast / gh-proxy |
| Piper lessac / huayan | 离线 TTS 兜底 | HuggingFace ↔ hf-mirror |
| bge-small-zh-v1.5 | 本地向量检索 | HuggingFace ↔ hf-mirror |
| Qwen2.5 0.5B GGUF | 本地聊天 | HuggingFace ↔ hf-mirror |
| llama.cpp / sherpa-onnx | 本地运行时 | GitHub ↔ ghfast / gh-proxy |
| RapidOCR | 本地 OCR | HuggingFace ↔ hf-mirror |
| Python 3.12 | 文档 / OCR / 技能 / Kokoro | 清华镜像 ↔ python.org |

## 使用场景

- **快速问答**：桌宠右键或快捷键唤起主聊天框，直接问 AI。
- **会议结束即整理**：录音保存到本地，离线转写后生成纪要并回到聊天上下文。
- **读文档不离开桌面**：上传 PDF / 图片 / 文档，先本地提取，再交给模型总结或翻译。
- **截图即处理**：截图、标注、OCR、翻译、复制、发送给 AI 一次完成。
- **专注但不断联**：番茄钟进入专注，重要邮件和提醒通过桌宠或灵动岛低打扰出现。
- **离线也能说话**：安装 Piper 或 Kokoro 后，断网仍可朗读消息。

## 窗口与架构

vvPet 由多个 Tauri 窗口组成，按工作状态协同：

| 窗口 | 作用 |
| --- | --- |
| `chat` | 主聊天框、工具、设置、工作区、资料库和历史 |
| `pet` | 透明桌宠窗口，常驻桌面并提供右键快捷入口 |
| `island` | 灵动岛，展示即时状态和快捷操作 |
| `capture` | 区域截图与标注 |
| `selection-translate` | 划词翻译浮窗 |

## 技术栈

| 层级 | 技术 |
| --- | --- |
| Desktop | Tauri 2, Rust, NSIS |
| Frontend | Vue 3, TypeScript, Vite, vue-i18n |
| Local capability | SQLite FTS5, Windows Credential Manager, Windows COM, WebView2 |
| AI / Voice | OpenAI-compatible APIs, enterprise gateway, llama.cpp / GGUF, Whisper, SenseVoice, Edge TTS, Piper, Kokoro ONNX |

## 快速开始

### 下载安装

从 [GitHub Releases](https://github.com/cqzmc/vvpet-release/releases) 下载 Windows 安装包。

构建产物输出到：

```text
vv/src-tauri/target/release/bundle/nsis/vvPet_<version>_x64-setup.exe
```

### 本地开发

环境要求：

- Windows 10 / 11
- Node.js 18+
- Rust stable
- Visual Studio C++ Build Tools
- Microsoft Edge WebView2

```bash
cd vv
npm install
npm run dev
```

常用命令：

```bash
npm run check            # Vue / TypeScript 类型检查
npm run build:frontend   # 构建前端资源
npm run build:app        # 构建前端 + Tauri / NSIS 安装包
npm run test:rust        # Rust 测试
```

前端契约测试：

```bash
node --experimental-strip-types --test src/*.test.mjs tests/*.test.ts
```

## 模型下载与网络

vvPet 的模型下载默认优先官方源，并提供可达的镜像兜底：

- HuggingFace ↔ `hf-mirror.com`
- GitHub Release ↔ `ghfast.top` / `gh-proxy.com`
- Python ↔ 清华镜像 / `python.org`
- FFmpeg ↔ npmmirror / gyan.dev / GitHub

模型、运行时和 Python 包都保存在本机应用数据目录，升级应用不会清空。

## 隐私与本地优先

| 数据 | 处理方式 |
| --- | --- |
| API Key / Token | 写入 Windows Credential Manager，不以明文配置文件保存 |
| 本地搜索 | 用户显式授权目录后才建立索引 |
| 文档与截图 | 默认本地解析；是否进入模型上下文由用户操作触发 |
| 会议音频 | 本地保存，本地转写优先 |
| Outlook 邮件 | 通过本机 COM 读取，不经过中转服务 |
| 离线语音模型 | 模型和运行时保存在本机应用数据目录 |
| 在线 TTS / 翻译 | 仅在你触发朗读/翻译时发送文本；可改用 Piper / Kokoro 离线 |

## 仓库结构

```text
vvpet/
├─ docs/                 产品文档与方案
├─ vv/                   主应用
│  ├─ src/               Vue 前端源码
│  ├─ src/i18n/          多语言资源
│  ├─ src-tauri/         Rust / Tauri 后端
│  ├─ public/            桌宠与静态资源
│  └─ scripts/           构建与发布脚本
├─ build-dist/           对外物料与构建产物
├─ AGENTS.md             仓库协作说明
├─ README.md             中文说明
└─ README.en.md          English README
```

## 多语言

当前内置：

- 中文
- English
- Français

<div align="center">

如果 vvPet 对你有帮助，欢迎在发布仓库点 Star。

</div>

## 项目热度

<div align="center">

<a href="https://star-history.com/#cqzmc/vvpet-release&Date">
  <img src="https://api.star-history.com/svg?repos=cqzmc/vvpet-release&type=Date" alt="vvPet Star History" />
</a>

<br>

<a href="https://github.com/cqzmc/vvpet-release/stargazers">
  <img src="https://img.shields.io/github/stars/cqzmc/vvpet-release?style=flat-square&logo=github&label=Stars" alt="GitHub stars" />
</a>
<a href="https://github.com/cqzmc/vvpet-release/releases">
  <img src="https://img.shields.io/github/downloads/cqzmc/vvpet-release/total?style=flat-square&logo=github&label=Downloads" alt="GitHub downloads" />
</a>
<a href="https://github.com/cqzmc/vvpet-release/releases/latest">
  <img src="https://img.shields.io/github/v/release/cqzmc/vvpet-release?style=flat-square&logo=github&label=Latest" alt="Latest release" />
</a>

</div>

## License

MIT
