<div align="center">
<img src="https://capsule-render.vercel.app/api?type=venom&height=360&color=gradient&customColorList=12,14,15,16,18,20&text=vvPet&fontColor=fff&fontSize=40&desc=AI%20%E5%8A%9E%E5%85%AC%E8%90%8C%E5%AE%A0&descSize=20&descAlign=72&descAlignY=65&animation=twinkling" />
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
  <b>🐱 常驻桌宠 · 🤖 AI 助手 · 🎙️ 离线语音 · 🍅 番茄钟 · 📝 会议记录 · 🔤 划词翻译 · 📄 文档 OCR · 🧠 本地大模型 · 📧 邮件蒸馏 · 🏝️ 灵动岛 · 📸 全能截图 · 🌍 多语言支持</b>
</p>

<p>
  <a href="https://github.com/cqzmc/vvpet-release/releases"><img src="https://img.shields.io/badge/Download%20for%20Windows-111827?style=for-the-badge&logo=github&logoColor=white" alt="Download for Windows" /></a>
  <a href="#快速开始"><img src="https://img.shields.io/badge/Quick%20Start-14b8a6?style=for-the-badge&logo=rocket&logoColor=white" alt="Quick Start" /></a>
</p>

</div>

## 为什么是 vvPet

vvPet 是一个 Windows 桌面 AI 办公萌宠。它把聊天窗口、桌宠、灵动岛、截图、翻译、会议记录、番茄钟和本地模型管理放在同一个轻量桌面应用里，尽量用本地处理保护隐私，只在你明确需要时调用远程模型。

它不是一个大而全的工作台，而是一个常驻桌面的低打扰助手：平时缩在桌面角落或灵动岛里，需要时一键展开主聊天框。


## 功能亮点

| 能力  | 你可以做什么 |
| --- | --- |
| 🐱 常驻桌宠 | Pixel Cat / Hoop Chick / Crayfish 等桌宠常驻桌面，支持右键快捷菜单、状态表情和浮动提醒 |
| 🤖 AI 助手 | 多模型配置、企业默认网关、自定义 OpenAI 兼容 API、深度思考、联网搜索、历史会话恢复 |
| 🧠 本地大模型 | 支持本地 GGUF / llama.cpp 运行时与模型管理，用于离线或隐私优先场景 |
| 🎙️ 离线语音 | Whisper / Vosk 离线识别，Piper / Kokoro 文字转语音，运行时和模型可在设置中管理 |
| 🍅 番茄钟 | 专注计时、待办、优先级、事件大小、推迟/完成/删除，和桌宠状态联动 |
| 📝 会议记录 | 会议录音、本地保存、离线转写、会议纪要生成和附件回填 |
| 🔤 划词翻译 | 全局选中文本后弹出轻量翻译浮窗，可复制、朗读或继续带入主聊天框 |
| 📸 全能截图 | 区域截图、标注、马赛克、文字、形状、本地 OCR、复制或作为聊天附件 |
| 📄 文档 OCR | 文件上传、PDF 文本提取、图片文字识别、本地预览和上下文注入 |
| 📧 邮件蒸馏 | Outlook 本机 COM 读取未读邮件，生成低打扰提醒和摘要入口 |
| 🏝️ 灵动岛 | 顶部轻量状态岛，承接截图、提醒、搜索、番茄钟和待办状态 |
| 🌍 多语言支持 | 中文、English、Français，主聊天框、设置、灵动岛、桌宠菜单和独立翻译窗口同步切换 |

## 使用场景

- **快速问答**：桌宠右键或快捷键唤起主聊天框，直接问 AI。
- **会议结束即整理**：录音保存到本地，离线转写后生成纪要并回到聊天上下文。
- **读文档不离开桌面**：上传 PDF / 图片 / 文档，先本地提取，再交给模型总结或翻译。
- **截图即处理**：截图、标注、OCR、翻译、复制、发送给 AI 一次完成。
- **专注但不断联**：番茄钟进入专注，重要邮件和提醒通过桌宠或灵动岛低打扰出现。

## 界面与交互

vvPet 由多个独立窗口组成，按工作状态自动协同：

| 窗口  | 作用  |
| --- | --- |
| `chat` | 主聊天框，承载模型对话、工具面板、设置和历史 |
| `pet` | 透明桌宠窗口，常驻桌面并提供右键快捷入口 |
| `island` | 灵动岛窗口，展示即时状态和快捷操作 |
| `capture` | 区域截图与标注窗口 |
| `selection-translate` | 划词翻译浮窗 |

## 技术栈

| 层级  | 技术  |
| --- | --- |
| Desktop | Tauri 2, Rust, NSIS |
| Frontend | Vue 3, TypeScript, Vite, vue-i18n |
| Local capability | SQLite FTS5, Windows Credential Manager, Windows COM, WebView2 |
| AI / Voice | OpenAI-compatible APIs, enterprise gateway, llama.cpp / GGUF, Whisper, Vosk, Piper, Kokoro |

## 快速开始

### 下载安装

从 [GitHub Releases](https://github.com/cqzmc/vvpet-release/releases) 下载 Windows 安装包。

构建产物默认输出到：

```text
vv/src-tauri/target/release/bundle/nsis/vv_<version>_x64-setup.exe
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
npm run check
npm run build:frontend
npm run test:summary
npm run test:rust
npm run build
```

## 仓库结构

```text
vvpet/
├─ docs/                 产品文档、方案与 README 图片
├─ vv/                   主应用
│  ├─ src/               Vue 前端源码
│  ├─ src/i18n/          多语言资源
│  ├─ src-tauri/         Rust / Tauri 后端
│  └─ scripts/           构建与发布脚本
├─ build-dist/           对外物料与构建产物
├─ AGENTS.md             仓库协作说明
├─ README.md             中文说明
└─ README.en.md          English README
```

## 隐私与本地优先

| 数据  | 处理方式 |
| --- | --- |
| API Key / Token | 写入 Windows Credential Manager，不以明文配置文件保存 |
| 本地搜索 | 用户显式授权目录后才建立索引 |
| 文档与截图 | 默认本地解析；是否进入模型上下文由用户操作触发 |
| 会议音频 | 本地保存，本地转写优先 |
| Outlook 邮件 | 通过本机 COM 读取，不经过中转服务 |
| 离线语音模型 | 模型和运行时保存在本机应用数据目录 |

## 多语言

当前内置：

- 中文
- English
- Français

语言切换会同步主聊天框、设置页、灵动岛、桌宠快捷菜单、划词翻译窗口和托盘菜单。英文/法文模式下主聊天框默认使用更宽的 `480 x 480`，中文模式保持 `360 x 480`。

## 路线图

- [x] 主聊天框、设置页和工具面板多语言
- [x] 灵动岛、桌宠快捷菜单、划词翻译窗口多语言同步
- [x] 离线语音、TTS、本地模型管理
- [x] 会议录音、离线转写和纪要生成
- [x] 截图标注、OCR、翻译和附件回填
- [ ] 补充更多真实界面截图和演示 GIF
- [ ] 扩展更多语言与社区译文流程
- [ ] 完善 CI、发布说明和安装包签名流程

## License

MIT. 发布前建议补齐根目录 `LICENSE` 文件，避免许可证链接缺失。

---

<div align="center">

如果 vvPet 对你有帮助，欢迎在发布仓库点 Star。

<a href="https://github.com/cqzmc/vvpet-release/stargazers">
  <img src="https://img.shields.io/github/stars/cqzmc/vvpet-release?style=social&logo=github" alt="Star vvPet" />
</a>

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
