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
  <b>🐳 Whale girl 桌宠 · 🤖 Agent 工作台 · 🎙️ 离线语音 · 🗣️ 在线/离线 TTS · 🍅 番茄钟 · 📝 录制工作台 · 🔤 划词翻译 · 📄 文档 OCR · 🧠 本地大模型 · 📧 邮件蒸馏 · 🏝️ 灵动岛 · 📸 全能截图 · 🌍 多语言</b>
</p>

<p>
  <a href="https://github.com/cqzmc/vvpet-release/releases"><img src="https://img.shields.io/badge/Download%20for%20Windows-111827?style=for-the-badge&logo=github&logoColor=white" alt="Download for Windows" /></a>
  <a href="#快速开始"><img src="https://img.shields.io/badge/Quick%20Start-14b8a6?style=for-the-badge&logo=rocket&logoColor=white" alt="Quick Start" /></a>
</p>

</div>

![vvPet](images/vvpet-poster-cn-v0.1.33.jpg)

## 为什么是 vvPet

vvPet 是一个 Windows 桌面 AI 办公萌宠。它把 **常驻桌宠、Agent 工作台、灵动岛、截图、翻译、录制与会议记录、番茄钟和本地模型管理** 放进同一个轻量桌面应用，默认用本地能力处理隐私数据，只在你明确需要时调用远程服务。

它把低打扰桌宠和可执行的 Agent 工作台结合起来：平时留在桌面角落，需要时快聊、查看提醒，或者进入工作区，把文档和代码真的做完。

## 最近重点更新 · v0.1.35

- **国内邮箱接入**：QQ/163 通过本机加密 IMAP 只读接入，授权码保存在 Windows 凭据管理器；左侧独立“邮箱”页集中配置账号、测试连接、同步与查看原文，已启用账号每两分钟增量同步。
- **每日简报整理**：“加入所选、打开待办、更新简报”合并到同一操作栏；建议行动只来自真实邮件证据，并可加入同一份待办清单而不重复创建。
- **163 同步兼容**：服务端不返回 UIDNEXT 时，改为只读查询最后一封邮件的真实 UID 建立基线，不再因“邮箱未提供有效的同步游标”卡住账号保存。
- **陪伴页第一阶段**：独立 AI 对话、可查看与编辑的记忆、真实待办上下文，以及默认关闭的受控关心；回复同步到桌宠气泡，不混入办公会话与工具执行权限。

### v0.1.33

- **Agent 工作台**：请求批准、智能授权、始终授权三档控制；目录信任独立检查，智能体与工具设置合并到引擎。
- **工作区真正扩展**：信任、新建或添加本地文件夹，浏览和编辑文件；新增变更与产物、备份恢复及任务执行记录。
- **代码与文档执行**：精确补丁、写后核对、有界 Python/Node/npm/Cargo/Git 执行、真实退出结果和 Windows 子进程取消。
- **录制工作台**：录音录屏直接开始，共享计时与电平浮条；录音落盘后自动转写并生成纪要，剪辑支持转 MP4、字幕与断点续转。
- **桌宠轻交互**：白色短点贴近宠物，悬停展开书写、截图和提醒入口；浅色单行输入框失焦收起并保留草稿，只保留重要提醒与助手回复。
- **截图与灵动岛**：截图支持窗口/原生控件吸附、上方标注与下方操作，默认 PNG 保存到系统“下载”目录；另存为和附加聊天独立选择。天气图标区分天气类型，灵动岛提供圆形加载与重试状态。
- **模型连接重构**：服务商与自定义连接独立保存，API Key 按地址存储，模型自动发现；输入栏可直接切换模型、上下文和推理参数。
- **聊天更紧凑**：气泡自适应内容，悬停显示操作，复制反馈、编辑重发、上下文计数与压缩快捷命令。
- **办公低打扰**：办公、混合、陪伴三种行为策略；灵动岛长提醒滚动播放、正文白色，会议与工具页面统一扩展布局。
- **文件传输与细节**：微信传文件内嵌主窗口；调整动作库卡片与引擎独立滚动，保留原有语音、截图、会议和离线模型能力。

- **每日简报**：启用后打开主窗自动展示当天简报，无当天记录时使用当前模型生成；已生成内容直接复用，建议行动可加入待办。远程模型会处理汇总所需的邮件、日历、聊天与待办内容，可在系统设置关闭简报，或选择本地模型。
- **引擎与办公入口**：引擎统一扩展、运行时、技能与智能体工具，OCR 并入运行时；下载最多 3 文件并行并复用校验缓存；今天页可生成每日简报，把建议行动加入同一份待办清单，避免重复创建。
- **离线引擎修复**：OCR、Kokoro 与 Python 依赖改为固定版本、多源校验安装，安装后实际调用验证；修复本地 Qwen 等待输入和嵌入模型残缺误报。邮件判断直接使用当前配置的大模型，点击后发起请求，保留人工复核。
- **发布前审计**：修复连接测试/密钥加载的过期结果、长任务提醒丢失、录制删除失败时的共享文稿保护。

完整说明见 [更新日志](CHANGELOG.md)。

## 功能亮点

| 能力 | 你可以做什么 |
| --- | --- |
| 🐳 常驻桌宠 | Whale girl 默认桌宠，Pixel Cat 兼容；右键快捷菜单、状态表情、浮动提醒、陪伴舞台互动 |
| 🤖 Agent 助手 | 三档授权、多模型与企业网关、工具执行、步骤预算、任务记录与显式恢复 |
| 📂 工作区 | 授权目录内浏览、新建、重命名、删除、文本预览/编辑，交给 Agent 处理 |
| 🧑‍💻 代码与文档执行 | 精确文本补丁、写后核对、有界 Python/Node/npm/Cargo/Git 运行、真实退出码 |
| 🎙️ 录制工作台 | 录音录屏、共享计时与电平浮条、离线转写、纪要生成、剪辑转 MP4 与字幕 |
| 🧠 本地大模型 | 本地 GGUF / llama.cpp 运行时与模型管理，适合离线和隐私优先场景 |
| 🎙️ 离线语音识别 | Whisper / SenseVoice 离线识别，运行时与模型可在引擎设置中管理 |
| 🗣️ 文字转语音 | Edge TTS 在线优先；Piper 离线兜底；可选 Kokoro ONNX 中英双语；Windows 系统语音最终回退 |
| 🍅 番茄钟 | 专注计时、待办、优先级、事件大小、推迟/完成/删除，和桌宠状态联动 |
| 📝 会议记录 | 会议录音、本地保存、离线转写、会议纪要生成和附件回填 |
| 🔤 划词翻译 | 选中文本后弹出轻量浮窗，可翻译、总结、加入待办、复制或继续带入聊天 |
| 📸 全能截图 | 区域截图、窗口吸附、标注、马赛克、文字、形状、本地 OCR、复制或作为聊天附件 |
| 📄 文档 OCR | PDF 文本提取、图片文字识别、本地预览和上下文注入；PPTX 只读取文本 |
| 📧 邮件蒸馏 | Outlook 本机 COM 与 QQ/163 只读 IMAP，提供收件提醒、简报与邮件待办入口 |
| 🏝️ 灵动岛 | 顶部轻量状态岛，承接截图、提醒、搜索、番茄钟、录制、剪辑与下载状态 |
| 📨 传文件 | 微信文件传输助手直接内嵌主窗口，收发不再离开当前工作 |
| 🌍 多语言 | 中文、English、Français，主窗、设置、灵动岛、桌宠菜单和翻译窗口同步切换 |

## 三档授权

Agent 的每一次改文件、跑程序和联网，都在输入框左侧的授权档位里决定：

| 档位 | 行为 |
| --- | --- |
| 请求批准 | 改文件、运行程序和联网前询问 |
| 智能授权 | 自动新建与补丁，覆盖和执行需批准 |
| 始终授权 | 受信任范围自动执行；不可撤销操作另批 |

作用范围为「应用与受信任目录」，与目录信任检查相互独立。

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
- **把活交给 Agent**：在受信任目录里让它改文档、跑脚本、改完写后核对，出问题还能恢复备份。
- **会议结束即整理**：录音保存到本地，离线转写后生成纪要并回到聊天上下文。
- **读文档不离开桌面**：上传 PDF / 图片 / 文档，先本地提取，再交给模型总结或翻译。
- **截图即处理**：截图、标注、OCR、翻译、复制、发送给 AI 一次完成。
- **专注但不断联**：番茄钟进入专注，重要邮件和提醒通过桌宠或灵动岛低打扰出现。
- **离线也能说话**：安装 Piper 或 Kokoro 后，断网仍可朗读消息。

## 窗口与架构

vvPet 由多个 Tauri 窗口组成，按工作状态协同：

| 窗口 | 作用 |
| --- | --- |
| `chat` | 主聊天框、工具、设置、工作区、资料库、邮箱、陪伴和历史 |
| `pet` | 透明桌宠窗口，常驻桌面并提供右键快捷入口 |
| `pet-quick` | 桌宠下方轻交互，文字快聊、截图与最近提醒 |
| `island` | 灵动岛，展示即时状态和快捷操作 |
| `rec-bar` | 录制浮条，共享计时、电平与暂停/停止 |
| `rec-editor` | 剪辑工作台，转码、字幕与导出 |
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
| QQ/163 邮件 | 本机加密 IMAP 连接，授权码保存在 Windows 凭据管理器；左侧“邮箱”页配置并查看来信，内置官方配置指引，首版每两分钟同步 |
| 离线语音模型 | 模型和运行时保存在本机应用数据目录 |
| 在线 TTS / 翻译 | 仅在你触发朗读/翻译时发送文本；可改用 Piper / Kokoro 离线 |
| 程序执行 | 按当前 Windows 账号权限执行，固定工作目录不等于操作系统沙箱 |

## 仓库结构

```text
vvpet/
├─ docs/                 产品文档、方案与验收记录
├─ vv/                   主应用
│  ├─ src/               Vue 前端源码
│  ├─ src/i18n/          多语言资源
│  ├─ src-tauri/         Rust / Tauri 后端
│  ├─ public/            桌宠与静态资源
│  └─ scripts/           构建与发布脚本
├─ build-dist/           对外物料与构建产物
├─ showcase/             展示站点
├─ images/               README 与文档配图
├─ AGENTS.md             仓库协作说明
├─ CHANGELOG.md          更新日志
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
