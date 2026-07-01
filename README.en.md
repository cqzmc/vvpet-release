<div align="center">
<img src="https://capsule-render.vercel.app/api?type=venom&height=360&color=gradient&customColorList=12,14,15,16,18,20&text=vvPet&fontColor=fff&fontSize=40&desc=AI%20%E5%8A%9E%E5%85%AC%E8%90%8C%E5%AE%A0&descSize=20&descAlign=72&descAlignY=65&animation=twinkling" />
<p>
  <a href="README.md">中文</a> · <b>English</b>
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

<h3>Bring AI to your desktop without breaking focus: chat, reminders, translation, screenshots, meetings, and local search in one lightweight companion.</h3>

<p>
  <b>Resident Pet · AI Assistant · Offline Voice · Pomodoro · Meeting Notes · Selection Translation · Document OCR · Local LLM · Mail Digest · Dynamic Island · Screenshot Toolkit · Multilingual UI</b>
</p>

<p>
  <a href="https://github.com/cqzmc/vvpet-release/releases"><img src="https://img.shields.io/badge/Download%20for%20Windows-111827?style=for-the-badge&logo=github&logoColor=white" alt="Download for Windows" /></a>
  <a href="#quick-start"><img src="https://img.shields.io/badge/Quick%20Start-14b8a6?style=for-the-badge&logo=rocket&logoColor=white" alt="Quick Start" /></a>
</p>

</div>

## Why vvPet

vvPet is a Windows desktop AI office pet. It combines a chat window, desktop pet, dynamic island, screenshots, translation, meeting recording, Pomodoro tasks, and local model management in one lightweight desktop app.

The product is designed for low interruption. Most of the time it stays as a small desktop companion or a compact dynamic island. When you need AI, it expands into a focused chat and tool surface.



## Highlights

| Capability | What it does |
| --- | --- |
| Resident desktop pet | Pixel Cat, Hoop Chick, Crayfish, floating status feedback, and a right-click quick menu |
| AI assistant | Multi-model setup, default enterprise gateway, custom OpenAI-compatible APIs, deep thinking, web search, and chat history |
| Local LLM | Local GGUF / llama.cpp runtime and model management for offline or privacy-first workflows |
| Offline voice | Whisper / Vosk speech recognition plus Piper / Kokoro text-to-speech runtime and model management |
| Pomodoro | Focus timer, todos, priority, event size, postpone / complete / delete actions, and pet state sync |
| Meeting notes | Meeting recording, local saving, offline transcription, generated minutes, and attachment handoff |
| Selection translation | Lightweight translation popup for selected text, with copy, read-aloud, and continue-in-chat actions |
| Screenshot toolkit | Region capture, annotation, mosaic, text, shapes, local OCR, copy, and chat attachment support |
| Document OCR | File upload, PDF text extraction, image OCR, local preview, and context injection |
| Mail digest | Outlook unread-mail reminders via local COM integration |
| Dynamic island | Compact top-of-screen status island for screenshots, reminders, search, Pomodoro, and todos |
| Multilingual UI | Chinese, English, and French across chat, settings, dynamic island, pet menu, tray menu, and translation windows |

## Workflows

- **Ask quickly**: open the main chat from the pet menu or shortcut and ask the AI directly.
- **Summarize meetings**: record locally, transcribe offline, then generate meeting minutes.
- **Read documents without leaving the desktop**: upload PDFs, images, or documents, extract text locally, then summarize or translate.
- **Capture and process screenshots**: capture, annotate, OCR, translate, copy, or send to the AI.
- **Stay focused**: run Pomodoro sessions while important mail and reminders appear through the pet or dynamic island.

## Windows

vvPet is composed of several Tauri windows that cooperate with each other:

| Window | Purpose |
| --- | --- |
| `chat` | Main chat, tools, settings, and history |
| `pet` | Transparent always-on-top desktop pet and quick menu |
| `island` | Compact status island and quick actions |
| `capture` | Screenshot capture and annotation |
| `selection-translate` | Selection translation popup |

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Desktop | Tauri 2, Rust, NSIS |
| Frontend | Vue 3, TypeScript, Vite, vue-i18n |
| Local capability | SQLite FTS5, Windows Credential Manager, Windows COM, WebView2 |
| AI / Voice | OpenAI-compatible APIs, enterprise gateway, llama.cpp / GGUF, Whisper, Vosk, Piper, Kokoro |

## Quick Start

### Install

Download the Windows installer from [GitHub Releases](https://github.com/cqzmc/vvpet-release/releases).

Release builds are generated at:

```text
vv/src-tauri/target/release/bundle/nsis/vv_<version>_x64-setup.exe
```

### Develop Locally

Requirements:

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

Common commands:

```bash
npm run check
npm run build:frontend
npm run test:summary
npm run test:rust
npm run build
```

## Repository Layout

```text
vvpet/
├─ docs/                 Product docs and README assets
├─ vv/                   Main application
│  ├─ src/               Vue frontend source
│  ├─ src/i18n/          Locale resources
│  ├─ src-tauri/         Rust / Tauri backend
│  └─ scripts/           Build and release scripts
├─ build-dist/           Marketing and distribution artifacts
├─ AGENTS.md             Repository collaboration instructions
├─ README.md             Chinese README
└─ README.en.md          English README
```

## Privacy and Local-First Design

| Data | Handling |
| --- | --- |
| API keys / tokens | Stored in Windows Credential Manager instead of plaintext config files |
| Local search | Indexes only directories explicitly authorized by the user |
| Documents and screenshots | Parsed locally by default; model context is triggered by user action |
| Meeting audio | Saved locally, with offline transcription preferred |
| Outlook mail | Read through local COM integration, without a relay service |
| Offline voice models | Stored under local application data |

## Languages

Built in:

- Chinese
- English
- French

Language switching updates the main chat, settings, dynamic island, pet quick menu, selection translation window, and tray menu. English and French use a wider default chat window of `480 x 480`; Chinese keeps `360 x 480`.

## Roadmap

- [x] Multilingual chat, settings, and tool panels
- [x] Multilingual dynamic island, pet quick menu, selection translation window, and tray menu
- [x] Offline voice, TTS, and local model management
- [x] Meeting recording, offline transcription, and meeting minutes
- [x] Screenshot annotation, OCR, translation, and attachment handoff
- [ ] Add more real screenshots and demo GIFs
- [ ] Expand community translation workflow
- [ ] Improve CI, release notes, and installer signing

## License

MIT. A root `LICENSE` file should be added before public release to avoid missing license metadata.

---

<div align="center">

If vvPet helps you, consider starring the release repository.

<a href="https://github.com/cqzmc/vvpet-release/stargazers">
  <img src="https://img.shields.io/github/stars/cqzmc/vvpet-release?style=social&logo=github" alt="Star vvPet" />
</a>

</div>
## Project Stats

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
