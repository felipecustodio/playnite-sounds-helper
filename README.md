# Playnite Sounds Manager

A modern web-based tool for creating custom sound packs for Playnite with the [Playnite Sounds Mod extension](https://github.com/ashpynov/PlayniteSound). This application provides an intuitive interface to upload, convert, and package audio files for all supported Playnite events.

## ✨ Features

- **🎵 Multi-Event Support**: Configure sounds for 9 different Playnite events
- **🔄 Auto-Conversion**: Automatically converts audio files to WAV format for compatibility
- **🖥️ Dual Audio Mode**: Separate audio files for desktop and fullscreen modes
- **🎧 Audio Preview**: Built-in audio preview functionality for uploaded files
- **📦 One-Click Packaging**: Generate ready-to-install ZIP sound packs
- **🎨 Modern UI**: Clean, responsive interface with drag-and-drop support
- **⚡ Client-Side Processing**: All audio processing happens in your browser - no server required

## 🎮 Supported Playnite Events

| Event | Description |
|-------|-------------|
| **ApplicationStarted** | Sound played when Playnite starts |
| **ApplicationStopped** | Sound played when Playnite closes |
| **GameInstalled** | Sound played when a game is installed |
| **GameSelected** | Sound played when a game is selected |
| **GameStarted** | Sound played when a game starts |
| **GameStarting** | Sound played while a game is starting |
| **GameStopped** | Sound played when a game stops |
| **GameUninstalled** | Sound played when a game is uninstalled |
| **LibraryUpdated** | Sound played when the game library is updated |

## 🚀 How to Use

### 1. Open the Application
- Download or clone this repository
- Open `index.html` in your web browser
- Or visit the hosted version (if available)

### 2. Configure Your Sound Pack
- For each event you want to customize:
  - Click the file upload button
  - Select your audio file (supports MP3, WAV, OGG, and more)
  - Optionally use the checkbox to set separate desktop/fullscreen audio
  - Use the preview button to test your audio

### 3. Generate Your Sound Pack
- Enter a name for your sound pack
- Click "Download Sound Pack"
- Wait for processing and automatic download

### 4. Install in Playnite
- Locate your Playnite Sound Manager folder:
  - For portable installations: `Playnite\ExtraMetadata\Sound Manager\`
  - Or go to: **Addons → Generic → Playnite Sounds Mod → Sound Manager → Open Sound Manager Folder**
- Place the downloaded ZIP file in this folder
- Import and activate your sound pack from the Sound Manager interface

## 🔧 Technical Details

### Supported Audio Formats
- **Input**: MP3, WAV, OGG, M4A, FLAC, and other common audio formats
- **Output**: WAV (16-bit PCM) for maximum compatibility with Playnite

### Audio Processing
- Client-side audio conversion using Web Audio API
- Automatic format detection and conversion
- Quality preservation with configurable volume normalization
- No server-side processing required

### Browser Compatibility
- Modern browsers with Web Audio API support
- Chrome, Firefox, Safari, Edge (latest versions)
- File API and Blob support required

## 🛠️ Development Setup

### Prerequisites
- Modern web browser
- Local web server (for development)

### Local Development
```bash
# Clone the repository
git clone https://github.com/felipecustodio/playnite-sounds-manager.git
cd playnite-sounds-manager

# Start a local server (Python example)
python -m http.server 3000

# Or use Node.js
npx serve .

# Open http://localhost:3000 in your browser
```

### Project Structure
```
playnite-sounds-manager/
├── index.html          # Main application interface
├── index.js           # Application logic and audio processing
├── shader-background.js # WebGL background animation
├── assets/            # Images and resources
│   └── playnite-optimized.png
└── README.md          # This file
```

## 🎨 Features Overview

### Audio Management
- **Smart Upload**: Drag-and-drop or click to upload
- **Format Detection**: Automatic audio format recognition
- **Quality Control**: Maintains audio quality during conversion
- **Preview System**: Test audio before packaging

### User Experience
- **Responsive Design**: Works on desktop and mobile devices
- **Visual Feedback**: Progress indicators and status updates
- **Error Handling**: Graceful error handling with user feedback
- **Accessibility**: Keyboard navigation and screen reader support

### Sound Pack Creation
- **Custom Naming**: Name your sound packs
- **Efficient Packaging**: Optimized ZIP generation
- **Instant Download**: No server uploads required
- **Ready-to-Install**: Generated packs work immediately with Playnite

## 🔗 Related Projects

- **[Playnite Sounds Mod](https://github.com/ashpynov/PlayniteSound)** - The Playnite extension that uses these sound packs
- **[Playnite](https://playnite.link/)** - Open source video game library manager

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 💬 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/felipecustodio/playnite-sounds-manager/issues) section
2. Create a new issue with detailed information
3. Join the Playnite community discussions

---

**Note**: This tool is designed to work with the [Playnite Sounds Mod](https://github.com/ashpynov/PlayniteSound), which is a fork of the original abandoned Playnite Sound extension.
