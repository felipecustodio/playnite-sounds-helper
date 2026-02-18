
# 🔍 Codebase Review — Playnite Sounds Manager — February 18, 2026

## 0. Reviewer Toolchain
*   **Inventory:** `find`, `ls` for file tree.
*   **Search:** `grep` / `ripgrep` for code analysis and dead code detection.
*   **Static Analysis:** Manual code review of `index.js` (logic), `index.html` (structure), and `shader-background.js` (performance).
*   **Documentation:** compared `README.md` and `CLAUDE.md` against actual implementation.

## 1. Project Overview
A client-side static web application designed to generate sound packs for the Playnite game launcher. It features a modern glassmorphism UI with a WebGL shader background.

*   **Tech Stack:** Vanilla JavaScript (ES6+), HTML5, CSS3.
*   **Dependencies (Runtime):** TailwindCSS (v3.4.5 via CDN), JSZip (v3.10.1 via CDN), Google Fonts (Inter).
*   **Build System:** None. Relies on `Justfile` to run a Python `http.server`.
*   **Scale:** ~500 LOC (JS + HTML), 0 tests, 0 local dependencies.

## 2. Feature Implementation Status

| Feature / Module | Status | Notes |
|---|---|---|
| **Event Configuration** | ✅ | All 9 Playnite events implemented with icons and descriptions. |
| **Audio Processing** | ✅ | Drag-and-drop, `FileReader`, and `AudioContext` decoding working correctly. |
| **WAV Conversion** | ✅ | Client-side PCM 16-bit WAV encoding implemented manually. |
| **Dual Audio Mode** | ✅ | Toggle for separate Desktop/Fullscreen audio works correctly. |
| **Audio Preview** | ✅ | Play/Pause logic with state tracking (stops others on play). |
| **ZIP Generation** | ✅ | JSZip integration correctly structures files as `D_Event.wav` / `F_Event.wav`. |
| **UI/UX** | ✅ | Responsive, glassmorphism, animated shader background. |
| **Error Handling** | ⚠️ | Minimal. `convertToWAV` logs to console on failure but returns original file, potentially creating a ZIP with invalid content. |

### 2.1 WAV Header Construction — Manual Implementation
The project manually constructs WAV headers in `audioUtils.writeWAVBytes` (index.js:145).
*   **Finding:** While functional for standard PCM, manual binary handling is fragile. The `writeString` function writes bytes directly. This works for ASCII "RIFF"/"WAVE" but is not robust for general purpose string writing (though not needed here).
*   **Risk:** Low, but if the browser's `decodeAudioData` returns a sample rate or channel count that defies the hardcoded expectations (e.g., extremely high sample rates or >2 channels), the hardcoded header values might drift or cause playback issues in strict players.
*   **Recommendation:** Add validation to ensure `numChannels` is 1 or 2 before writing.

## 3. Dead Weight — Unused & Orphaned Files

The `assets/` directory contains several large images that appear to be leftovers from a previous design iteration (before the shader background was implemented).

*   **`assets/bg.png`**: Never referenced in code.
*   **`assets/bg-optimized.jpg`**: Never referenced in code.
*   **`assets/playnite.png`**: Never referenced in code (only `playnite-optimized.png` is used in `index.html`).

**Action:** Delete these three files to reduce repository size and confusion.

## 4. Documentation Issues

*   **`README.md`**: References `assets/screenshot.png` in the Project Structure section, but this file **does not exist** in the repository.
*   **`README.md`**: Lists `bg-optimized.jpg` in the structure, but as noted above, it is dead code.
*   **`CLAUDE.md`**: Accurately describes the project as "no build process, no package manager", which aligns with reality.

## 5. Architecture Concerns

### 5.1 Missing Package Management
The project has a `biome.json` and a `Justfile` that references `npx @biomejs/biome`, but **no `package.json`**.
*   **Problem:** A developer cloning this repo cannot deterministically install the tools needed to develop or lint. They rely on `npx` downloading whatever is latest or cached.
*   **Recommendation:** Run `npm init -y` and `npm install -D @biomejs/biome prettier` (or similar) to lock down the tooling versions.

### 5.2 CDN Dependency Risk
Critical libraries (Tailwind, JSZip) are loaded via unversioned (Tailwind) or specific (JSZip) CDNs.
*   **Problem:** Offline development is impossible. If the CDN goes down or changes the Tailwind script behavior (since it's not version-locked in the URL `cdn.tailwindcss.com/3.4.5` - wait, it IS versioned, which is good), the app breaks.
*   **Recommendation:** For a simple tool, this is acceptable, but downloading these assets into a `vendor/` folder would make the app robust and truly "static" (runnable from a local file without internet).

### 5.3 Global State Management
`index.js` relies on a global `uploadedFiles` object and `cardRefreshCallbacks` array.
*   **Problem:** While acceptable for a script of this size, it makes testing difficult and the logic hard to follow if the app grows.
*   **Recommendation:** Encapsulate the app state into a `SoundManager` class or similar structure.

## 6. Security Findings
**Severity: LOW**

*   **Input Sanitization:** The app reads `audioFile.name` but does **not** use it for the final ZIP entry name (which uses hardcoded `D_EventName` keys). This effectively neutralizes directory traversal or malicious filename attacks in the generated ZIP.
*   **Content:** All processing is client-side. No data leaves the browser.

## 7. Performance Findings

*   **Shader Loop:** `shader-background.js` runs a WebGL fragment shader on `requestAnimationFrame` continuously.
    *   **Finding:** On high-refresh-rate monitors or mobile devices, this can consume significant battery/GPU.
    *   **Recommendation:** Consider pausing the animation loop when the tab is not visible (using `document.visibilityState`).

## 8. Missing Pieces — What the Project Needs

1.  **Tests:** There is zero test coverage. A simple test suite (even just verifying the WAV header generation logic) would prevent regressions.
2.  **Manifest:** A `package.json` to lock tooling versions.
3.  **CI/CD:** A simple GitHub Action to run the linter (`biome check`).

## 9. Prioritized Action Plan

### 🔴 Critical (Fix immediately)
*   *None.* The app is functional and secure.

### 🟠 High (Fix soon)
*   **Clean up Dead Assets:** Delete `bg.png`, `bg-optimized.jpg`, and `playnite.png`.
*   **Fix Documentation:** Update `README.md` to remove references to missing/unused files (`screenshot.png`).

### 🟡 Medium (Fix in next cycle)
*   **Initialize NPM:** Create `package.json` and install `biome` as a dev dependency to ensure consistent linting.
*   **Pause Shader:** Add visibility check to `shader-background.js` to save battery.

### 🟢 Low (Nice to have)
*   **Vendor Dependencies:** Download Tailwind and JSZip scripts to `assets/vendor/` for offline capability.
*   **Unit Tests:** Add a test for `audioUtils.writeWAVBytes`.

## 10. Summary
The `playnite-sounds-manager` is a well-scoped, functional utility. Its "no-build" architecture is a valid choice for its simplicity, though the lack of a `package.json` for tooling is a minor gap. The code is clean and readable, despite manual binary manipulation. The biggest immediate win is simply deleting unused image assets and correcting the README.

**Primary Recommendation:** Clean the repository of dead assets (`assets/*.png|jpg`) and initialize a minimal `package.json` to formalize the tooling requirements.
