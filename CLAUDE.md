# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Playnite Sounds Manager is a **static web application** (no build process, no package manager, no bundler) that creates sound packs for the [Playnite Sounds Mod](https://github.com/ashpynov/PlayniteSound) extension. Users upload audio files for Playnite events, the app converts them to WAV client-side via Web Audio API, and packages them into a ZIP for installation.

## Development

```bash
# Serve locally (any static server works)
just dev  # or: uv run python3 -m http.server 3000
# Then open http://localhost:3000/index.html
```

There is **no build step, no linter, no test framework, no package.json**. Changes to HTML/CSS/JS are reflected immediately on browser refresh. Validation is manual browser testing only.

VS Code launch config (`.vscode/launch.json`) is set up to debug via Chrome at `localhost:3000`.

## Architecture

This is a three-file app with CDN-loaded dependencies:

- **`index.html`** — Full UI with embedded CSS. Loads TailwindCSS (CDN), JSZip (CDN), and Google Fonts. Contains Tailwind config, collapsible instruction card, file upload grid, and download controls. All custom styles (glassmorphism cards, glow animations, shader overlay) are in an embedded `<style>` block.

- **`index.js`** — All application logic:
  - `audioFiles` array at top defines the 9 Playnite sound events (ApplicationStarted, ApplicationStopped, GameInstalled, GameSelected, GameStarted, GameStarting, GameStopped, GameUninstalled, LibraryUpdated)
  - `audioUtils` object handles audio-to-WAV conversion (Web Audio API decode → PCM 16-bit WAV with manual header writing)
  - `createAudioEventElement()` builds each event card's DOM, manages single/dual file input modes, preview playback, and file state
  - `uploadedFiles` global object stores files keyed as `D_<EventName>` (desktop) and `F_<EventName>` (fullscreen)
  - Download handler creates a ZIP via JSZip with files named `D_<EventName>.wav` / `F_<EventName>.wav`

- **`shader-background.js`** — `ShaderBackground` class: WebGL fragment shader rendering an animated black/orange noise background on a full-screen canvas.

## Key Conventions

- File keys in `uploadedFiles` use prefix `D_` (desktop) and `F_` (fullscreen) followed by the event name — this naming maps directly to what Playnite Sounds Mod expects inside the ZIP
- In single-file mode (checkbox unchecked), both `D_` and `F_` keys point to the same file
- WAV conversion uses 16-bit PCM at source sample rate with 0.8 volume factor to prevent clipping
- The accent color is orange (`#ff9626`) matching Playnite's palette; glassmorphism styling uses `rgba(255, 255, 255, 0.06)` backgrounds with `backdrop-filter: blur`
