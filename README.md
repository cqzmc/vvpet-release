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

## 最近重点更新 · v0.1.41

- **窗口从 8 个收敛到 4 个**：录制浮条、剪辑台、区域截图、划词翻译不再各自开窗口，改为主窗口内的覆盖层，由统一的窗口管理模块管理层级与就绪时机；划词翻译改用 UI Automation 读取选区。
- **死代码清理**：删除长期无任何组件引用的 `SettingsPanel.vue`（1,397 行）与 `MeetingPanel.vue`（211 行），连同配套的源码文本测试与根目录遗留文件，合计清掉 **1,661 行**。
- **Rust 模块拆分**：Outlook COM 读取（`outlook_com.rs`，472 行）与窗口浮层管理（`window_manager.rs`，241 行）从主进程文件抽出；前端新增共享模型调用客户端与陪伴页浮层定位。
- **Agent 办公工具扩到 10 个**：新增读取会议转写、取截图 OCR 上下文、查询番茄钟状态与控制专注计时。
- **凭据只知状态、不可取回**：`load_api_key` 改为 `has_api_key`，前端拿不到 API Key 原文；企业登录去掉密码式自动登录，改为会话状态查询与显式删除凭据。
- **权限再收窄**：asset 作用域只保留两个录制目录与资源目录；读取 UI 文件前必须先登记用户显式授权的路径。

### v0.1.40

- **助手规则（AGENT.md）**：应用数据根目录下的 `AGENT.md` 与设置面板双向同步，每次对话作为系统规则注入；工作区里有 `AGENT.md` / `AGENTS.md` 会自动叠加。优先级为「系统安全边界 > 工作区规则 > 全局规则」，全局上限 4000 字。
- **Agent 办公工具**：Agent 现在能只读检索本地知识库（FTS5 全文 + BGE 语义混合）、查询 Outlook 与 QQ/163 邮件、查日历、列待办与会议记录；写操作只保留「新增番茄钟待办」一项，工具按 Agent 模式分别注册。
- **安全收紧**：asset 协议作用域从全盘 `**` 收窄为应用数据、资源目录等明确范围；新增外部地址校验、剪贴板非文本检测、更新包文件名清洗与 MCP 宿主探测。
- **运行时稳健**：Python 技能执行改为流式读取 + 120 秒超时 + 进程组终止，超时或取消能真正结束子进程；BGE 会话空闲后可卸载；技能文件哈希改为流式计算。
- **依赖瘦身**：移除 `ndarray`、`rayon`、未使用的 `playwright` 与 `translate.js` npm 包（划词翻译仍走 CDN），并新增 `npm test` 脚本。

### v0.1.39

- **办公导航重整**：移除“快捷工具”，原位置改为“录制”；番茄钟并入“今天”，邮件总结并入“邮箱”的“总结”页，录制、专注、总结各只有一个入口。
- **今天更紧凑**：专注与待办改为左右等宽布局；专注时长改在圆环内悬停按 ±1 分钟调整，移除滑杆。
- **模型与安全**：API Key 保存后不再回显，只有输入新 Key 才会替换；移除 Kimi/GLM/MiMo/OpenAI 预设，本地模型下移到企业网关之后；受信任目录固定显示在输入框上方并可随时更改。
- **工作区与记录**：默认打开“技能”；执行记录与变更产物合并为“记录”，支持删除历史、异常徽标；引擎里重复的技能页已移除，预设和高级参数迁入工作区。
- **陪伴与界面**：动作库合并进陪伴工具栏并向上展开 7 组 + 全部；同一封邮件在对话中只显示一次；设置、录制、灵动岛移除关闭 X，引擎顶部改为亮青色选中态。

### v0.1.38

- **工作区接过资料搜索**：资料页搜索、检索范围、预览与打开原位置并入工作区，左侧导航不再单独保留资料页，Ctrl+3 打开工作区搜索。
- **删除更安全**：受信文件夹的移除按钮仅在悬停时出现，重命名在失焦或回车时保存，删除先在应用内确认再移入系统回收站。
- **邮箱与邮件总结**：Outlook 卡片与其他邮箱对齐，邮件预览使用与新邮件相同的判断与反馈；邮件总结可改选已添加的其他邮箱，同一天、同一周或同一个月只保留一份。
- **新增内置技能**：Excel 按关键列对照，以第一份表为主表，按关键列左连接其余表后导出。

### v0.1.37

- **真实流式输出**：对话页此前会等整段生成完才显示，现在消费真实 SSE，收到正文片段即刻呈现；思考内容独立展示，停止生成会保留已收到的正文并忽略迟到结果。
- **简报按模型分配预算**：MiniMax M3.1 Flash 默认使用 131072 总输出预算与 `low` 推理等级，修复“能思考但写不完 JSON 导致简报为空”；已手动设置最大输出时遵循你的设置，其他模型策略不变。
- **陪伴联网查询**：陪伴页可按需只读查询真实资料（必应搜索 RSS、百度实时热榜、心知天气），支持“自动判断 / 每次搜索 / 关闭”；只发送本轮查询词或城市，来源随回复保存并可悬停查看。
- **灵动岛与角色预设**：灵动岛滚轮新增“开始专注”和“截图”卡片；三个性格预设现在会完整填充性格、表达方式、兴趣与示例对话，并勾选角色感受。
- **截图音效**：截图完成与“另存为”分别使用项目内合成的 0.22 秒快门声与 0.30 秒确认声，嵌入程序、无在线请求。

### v0.1.36

- **角色设定**：陪伴对话顶部可设置伙伴名称、用户称呼、性格、表达方式、兴趣背景与示例对话；三种性格预设可一键套用并保留已有兴趣与示例，另有独立的“重置角色”。
- **回答语言与交流风格**：回复可选跟随界面、固定中文、固定英文或中英对照；交流风格分为自然交流、理性讨论、创意交流，设置独立持久化。
- **陪伴语音朗读**：支持中文/英文分别朗读、朗读最新回复、固定短句试听与可选自动朗读；自动朗读默认关闭，只朗读本页新生成的回复，不播放历史记录与角色感受。
- **原生 Edge 合成修复**：补齐必需的握手头并适配当前 v2 校验协议，修复原先被服务返回 403 的朗读失败；中文固定晓伊、英文固定 Ana，主聊天音色配置不受影响。

### v0.1.35

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
| 💞 陪伴助手 | 可编辑角色设定（名称、性格、表达方式、兴趣与示例对话）、三种性格预设、回复语言与交流风格、可管理记忆与语音朗读、按需联网查询与来源查看 |
| 🤖 Agent 助手 | 三档授权、多模型与企业网关、工具执行、步骤预算、任务记录与显式恢复；`AGENT.md` 助手规则作为系统规则注入每次对话 |
| 🔎 Agent 办公工具 | 读取本地知识库（FTS5 + BGE 混合）、查询 Outlook 与 QQ/163 邮件、查日历、列待办与会议记录、读会议转写、取截图 OCR 上下文、查询与控制专注计时；写操作仅「新增番茄钟待办」 |
| 📂 工作区 | 授权目录内浏览、新建、重命名、删除、文本预览/编辑，交给 Agent 处理 |
| 🧑‍💻 代码与文档执行 | 精确文本补丁、写后核对、有界 Python/Node/npm/Cargo/Git 运行、真实退出码 |
| 🎙️ 录制工作台 | 录音录屏、共享计时与电平浮条、离线转写、纪要生成、剪辑转 MP4 与字幕；浮条与剪辑台在主窗口内呈现 |
| 🧠 本地大模型 | 本地 GGUF / llama.cpp 运行时与模型管理，适合离线和隐私优先场景 |
| 🎙️ 离线语音识别 | Whisper / SenseVoice 离线识别，运行时与模型可在引擎设置中管理 |
| 🗣️ 文字转语音 | Edge TTS 在线优先（主聊天晓晓 / Aria，陪伴页晓伊 / Ana）；Piper 离线兜底；可选 Kokoro ONNX 中英双语；Windows 系统语音最终回退 |
| 🍅 番茄钟 | 专注计时、待办、优先级、事件大小、推迟/完成/删除，和桌宠状态联动 |
| 📝 会议记录 | 会议录音、本地保存、离线转写、会议纪要生成和附件回填 |
| 🔤 划词翻译 | 选中文本后弹出轻量浮窗，可翻译、总结、加入待办、复制或继续带入聊天 |
| 📸 全能截图 | 区域截图、窗口吸附、标注、马赛克、文字、形状、本地 OCR、复制或作为聊天附件；完成与“另存为”有项目内合成音效 |
| 📄 文档 OCR | PDF 文本提取、图片文字识别、本地预览和上下文注入；PPTX 只读取文本 |
| 📧 邮件蒸馏 | Outlook 本机 COM 与 QQ/163 只读 IMAP，提供收件提醒、简报与邮件待办入口 |
| 📋 每日简报 | 打开主窗展示当天简报，建议行动可溯源到真实邮件原句并加入待办；按模型分配输出预算 |
| 🏝️ 灵动岛 | 顶部轻量状态岛，承接截图、提醒、搜索、番茄钟、录制、剪辑与下载状态；可读取正在播放的媒体标题、作者与播放状态 |
| 📨 传文件 | 微信文件传输助手直接内嵌主窗口，收发不再离开当前工作 |
| 🌍 多语言 | 中文、English、Français，主窗、设置、灵动岛、桌宠菜单和翻译窗口同步切换 |

## 界面预览

| 助手规则 | 灵动岛 |
| --- | --- |
| ![助手规则](images/AGENT.png) | ![灵动岛](images/灵动岛.png) |

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

### 陪伴页朗读

陪伴页使用独立的 Edge 合成入口，中文固定晓伊 `zh-CN-XiaoyiNeural`、英文固定 Ana `en-US-AnaNeural`，与主聊天的音色配置互不影响：

```text
在线 Edge TTS（陪伴：晓伊 / Ana）
      ↓ 不可用
朗读失败提示（不自动改用其他音色冒充）
```

陪伴与主聊天共用播放所有权：停止朗读会取消原生合成并丢弃迟到结果。

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

vvPet 由 4 个 Tauri 窗口组成，按工作状态协同。录制浮条、剪辑台、区域截图与划词翻译不再各自开窗口，而是作为主窗口内的覆盖层呈现：

| 窗口 | 作用 |
| --- | --- |
| `chat` | 主聊天框、工具、设置、工作区、资料库、邮箱、陪伴和历史；内嵌录制浮条、剪辑台、截图与划词翻译等覆盖层 |
| `pet` | 透明桌宠窗口，常驻桌面并提供右键快捷入口 |
| `pet-quick` | 桌宠下方轻交互，文字快聊、截图与最近提醒 |
| `island` | 灵动岛，展示即时状态和快捷操作 |

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
| API Key / Token | 写入 Windows Credential Manager，不以明文配置文件保存；**前端只能查询「是否存在」，取不回原文** |
| 本地搜索 | 用户显式授权目录后才建立索引 |
| 文档与截图 | 默认本地解析；是否进入模型上下文由用户操作触发 |
| 会议音频 | 本地保存，本地转写优先 |
| Outlook 邮件 | 通过本机 COM 读取，不经过中转服务 |
| QQ/163 邮件 | 本机加密 IMAP 连接，授权码保存在 Windows 凭据管理器；左侧“邮箱”页配置并查看来信，内置官方配置指引，首版每两分钟同步 |
| 陪伴联网查询 | 开启后只把本轮查询词或天气城市发送给公开搜索 / 热榜 / 天气服务；**不发送**记忆、办公聊天或人设，查询结果作为不可信资料交给模型，并附来源 |
| 离线语音模型 | 模型和运行时保存在本机应用数据目录 |
| 在线 TTS / 翻译 | 仅在你触发朗读/翻译时发送文本；可改用 Piper / Kokoro 离线 |
| 程序执行 | 按当前 Windows 账号权限执行，固定工作目录不等于操作系统沙箱 |
| 界面文件读取 | 读取界面文件前必须先登记用户显式授权的路径，未授权路径一律拒绝；asset 作用域只开放两个录制目录与资源目录 |

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
├─ showcase/             展示站点源码
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
