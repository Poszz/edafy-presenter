# Edafy Platform Slides — Electron App

> React + Vite presentation converted to a cross-platform Electron desktop app.

---

## Prerequisites

- **Node.js** 18 or later
- **npm** 9 or later

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development mode (hot-reload)

```bash
npm run electron:dev
```

This starts the Vite dev server on `http://localhost:5173` and opens Electron pointing at it.

### 3. Package for distribution

```bash
npm run electron:build          # Current platform
npm run electron:build:win      # Windows (.exe installer)
npm run electron:build:mac      # macOS (.dmg)
npm run electron:build:linux    # Linux (.AppImage / .deb)
```

Packaged output lands in the `release/` folder.

---

## Project Structure

```
├── electron/
│   ├── main.cjs        ← Main process (window, menu, fullscreen)
│   └── preload.cjs     ← Context bridge
├── src/                ← Original React source (unchanged)
├── vite.config.ts      ← base: './' added for file:// compatibility
└── package.json        ← Electron scripts + deps added
```

---

## Key Changes from Web App

| File | Change |
|------|--------|
| `package.json` | Added `"main"`, Electron scripts, new devDeps |
| `vite.config.ts` | Added `base: './'` — critical for Electron file:// |
| `electron/main.cjs` | **New** — BrowserWindow, menu, F11 fullscreen |
| `electron/preload.cjs` | **New** — Secure context bridge |

No React source files were modified.

---

## Presentation Controls

| Key | Action |
|-----|--------|
| Arrow keys / Space | Navigate slides |
| F11 | Toggle fullscreen |
| Click nav dots | Jump to slide |

---

## App Icons (optional)

Place in `public/`: `icon.icns` (macOS), `icon.ico` (Windows), `icon.png` (Linux, 512×512).
