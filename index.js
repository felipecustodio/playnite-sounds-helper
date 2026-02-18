const audioFiles = [
    {
        name: 'ApplicationStarted',
        description: 'Plays once when Playnite launches',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'ApplicationStopped',
        description: 'Plays when Playnite is closed',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameInstalled',
        description: 'Plays when a game finishes installing',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameSelected',
        description: 'Plays each time you highlight a different game — keep it short',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameStarted',
        description: 'Plays after a game has fully launched',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1z" /><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameStarting',
        description: 'Plays while Playnite is launching the game executable',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameStopped',
        description: 'Plays when you quit a game and return to Playnite',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameUninstalled',
        description: 'Plays when a game is uninstalled from your library',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'LibraryUpdated',
        description: 'Plays after Playnite finishes scanning for new games',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" /></svg>'
    }
];

const fileContainer = document.getElementById('fileContainer');
const downloadAllButton = document.getElementById('downloadAll');
const uploadedFiles = {};
const cardRefreshCallbacks = [];

function applyFileToAllEvents(sourceFile) {
    audioFiles.forEach(eventDef => {
        uploadedFiles[`D_${eventDef.name}`] = sourceFile;
        uploadedFiles[`F_${eventDef.name}`] = sourceFile;
    });
    cardRefreshCallbacks.forEach(fn => fn());
    showToast(`Applied to all ${audioFiles.length} events.`);
}

// Shared AudioContext — created once, reused for all conversions
const sharedAudioContext = new (window.AudioContext || window.webkitAudioContext)();

// Audio conversion utilities
const audioUtils = {
    // Function to convert audio file to WAV
    convertToWAV: async function(audioFile) {
        // If it's already a WAV file, just return the file
        if (audioFile.name.toLowerCase().endsWith('.wav')) {
            return audioFile;
        }

        try {
            // Get audio data as ArrayBuffer
            const arrayBuffer = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.onerror = reject;
                reader.readAsArrayBuffer(audioFile);
            });

            const audioContext = sharedAudioContext;

            // Decode audio data
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
                .catch(decodeError => {
                    throw new Error(`Could not decode audio file: ${decodeError.message}`);
                });

            // Convert to WAV
            const wavBlob = await this.audioBufferToWAV(audioBuffer);

            // Create a new file object with the WAV data
            const wavFile = new File([wavBlob],
                audioFile.name.replace(/\.[^/.]+$/, '.wav'),
                { type: 'audio/wav' }
            );

            return wavFile;
        } catch (error) {
            console.error('Error converting audio to WAV:', error);
            showToast(`Error converting "${audioFile.name}" to WAV: ${error.message}`, 'error');
            // Returning original file is still an option, but the toast provides immediate feedback
            return audioFile; 
        }
    },

    // Function to convert AudioBuffer to WAV Blob
    audioBufferToWAV: function(buffer) {
        return new Promise(resolve => {
            const normalizeCheckbox = document.getElementById('normalizeVolume');
            const shouldNormalize = normalizeCheckbox ? normalizeCheckbox.checked : true; // Default to true if checkbox not found

            const numOfChannels = buffer.numberOfChannels;
            const sampleRate = buffer.sampleRate;
            const format = 1; // PCM
            const bitDepth = 16;

            let result;
            if (numOfChannels === 2) {
                result = this.interleave(buffer.getChannelData(0), buffer.getChannelData(1));
            } else {
                result = buffer.getChannelData(0);
            }

            let gain = 1.0;
            if (shouldNormalize) {
                // Normalize to peak amplitude so the loudest sample hits 0 dBFS without clipping
                let peak = 0;
                for (let i = 0; i < result.length; i++) {
                    const abs = Math.abs(result[i]);
                    if (abs > peak) peak = abs;
                }
                gain = peak > 0 ? 1.0 / peak : 1.0;
            }

            // Convert float32 to int16
            const buffer16 = new Int16Array(result.length);
            for (let i = 0; i < result.length; i++) {
                const s = Math.max(-1, Math.min(1, result[i] * gain));
                buffer16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
            }

            const dataView = this.writeWAVBytes(buffer16, numOfChannels, sampleRate, format, bitDepth);
            const blob = new Blob([dataView], { type: 'audio/wav' });

            resolve(blob);
        });
    },

    // Function to interleave audio channels
    interleave: function(leftChannel, rightChannel) {
        const length = leftChannel.length * 2; // one sample from each channel per frame
        const result = new Float32Array(length);

        let index = 0;
        let inputIndex = 0;

        while (index < length) {
            result[index++] = leftChannel[inputIndex];
            result[index++] = rightChannel[inputIndex];
            inputIndex++;
        }

        return result;
    },

    // Function to write WAV header and data
    writeWAVBytes: function(samples, numChannels, sampleRate, format, bitDepth) {
        const bytesPerSample = bitDepth / 8;
        const blockAlign = numChannels * bytesPerSample;

        const buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
        const view = new DataView(buffer);

        // Write WAV header
        // "RIFF" chunk descriptor
        this.writeString(view, 0, 'RIFF');
        view.setUint32(4, 36 + samples.length * bytesPerSample, true);
        this.writeString(view, 8, 'WAVE');

        // "fmt " sub-chunk
        this.writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true); // fmt chunk size
        view.setUint16(20, format, true);
        view.setUint16(22, numChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * blockAlign, true); // byte rate
        view.setUint16(32, blockAlign, true);
        view.setUint16(34, bitDepth, true);

        // "data" sub-chunk
        this.writeString(view, 36, 'data');
        view.setUint32(40, samples.length * bytesPerSample, true);

        // Write PCM data
        if (bitDepth === 16) {
            for (let i = 0; i < samples.length; i++) {
                view.setInt16(44 + i * bytesPerSample, samples[i], true);
            }
        }

        return view;
    },

    // Function to write a string to a DataView
    writeString: function(view, offset, string) {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    }
};

// --- Global UI helpers ---

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = type === 'error' ? 'toast error' : 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.2s ease forwards';
        toast.addEventListener('animationend', () => toast.remove());
    }, 3000);
}

function updateProgress() {
    const configuredEvents = new Set();
    Object.keys(uploadedFiles).forEach(key => configuredEvents.add(key.slice(2)));
    const count = configuredEvents.size;
    const total = audioFiles.length;

    const progressCounter = document.getElementById('progressCounter');
    const progressBar = document.getElementById('progressBar');
    const progressLabel = document.getElementById('progressLabel');
    const downloadBtn = document.getElementById('downloadAll');

    if (progressCounter) {
        progressCounter.textContent = count === 0
            ? 'No events configured'
            : `${count} of ${total} events configured`;
    }
    if (progressBar) {
        progressBar.style.width = `${(count / total) * 100}%`;
        progressBar.setAttribute('aria-valuenow', count);
    }
    if (progressLabel) {
        if (count === 0) progressLabel.textContent = '';
        else if (count === total) progressLabel.textContent = 'All done!';
        else progressLabel.textContent = `${total - count} remaining`;
    }
    if (downloadBtn) {
        const isMuted = count === 0;
        downloadBtn.classList.toggle('download-button-muted', isMuted);
        downloadBtn.setAttribute('tabindex', isMuted ? '-1' : '0');
        if (isMuted) {
            downloadBtn.setAttribute('aria-disabled', 'true');
        } else {
            downloadBtn.removeAttribute('aria-disabled');
        }
    }
}

// --- Card factory ---

function createAudioEventElement(file) {
    const fileBox = document.createElement('div');
    fileBox.className = 'card-glass rounded-xl p-5 flex flex-col justify-between backdrop-blur-xl';
    fileBox.setAttribute('role', 'group');
    fileBox.setAttribute('aria-labelledby', `cardTitle_${file.name}`);
    let audioPlayer = null;
    let currentPreviewFile = null;
    let currentPreviewUrl = null;

    fileBox.innerHTML = `
        <div>
            <div class="flex justify-between items-center mb-3">
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/10 rounded-full text-[#ff9626]">
                        ${file.icon}
                    </div>
                    <h3 id="cardTitle_${file.name}" class="text-lg font-semibold title-gradient">${file.name}</h3>
                </div>
                <button title="Preview sound" aria-label="Preview sound" class="preview-button opacity-0 pointer-events-none w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-[#ff9626]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <p class="text-sm text-gray-300 mb-4 opacity-80">${file.description}</p>
            <div id="fileInputsContainer_${file.name}">
                <div id="fileInputs_${file.name}" class="space-y-3">
                    <div id="singleInput_${file.name}">
                        <label for="file_${file.name}" class="block text-xs font-medium text-gray-300 mb-1">Audio (Desktop &amp; Fullscreen)</label>
                        <div class="input-file-area">
                            <span class="text-gray-500 text-sm">Drag &amp; drop or click to upload</span>
                            <input type="file" accept="audio/*" id="file_${file.name}" class="input-file-style block w-full text-xs text-gray-300 cursor-pointer">
                        </div>
                        <div class="flex items-center gap-2 mt-1 min-h-[1.25rem]">
                            <span id="fileName_single_${file.name}" class="text-xs text-gray-400 truncate flex-1 min-w-0 hidden" title=""></span>
                            <button id="clear_single_${file.name}" class="hidden text-xs text-gray-500 hover:text-red-400 transition-colors flex-shrink-0" title="Remove file" aria-label="Remove file">✕</button>
                        </div>
                    </div>
                    <div id="doubleInput_${file.name}" class="hidden">
                        <div class="mb-3">
                            <label for="file_D_${file.name}" class="block text-xs font-medium text-gray-300 mb-1">Audio (Desktop)</label>
                            <div class="input-file-area">
                                <span class="text-gray-500 text-sm">Drag &amp; drop or click to upload</span>
                                <input type="file" accept="audio/*" id="file_D_${file.name}" class="input-file-style block w-full text-xs text-gray-300 cursor-pointer">
                            </div>
                            <div class="flex items-center gap-2 mt-1 min-h-[1.25rem]">
                                <span id="fileName_D_${file.name}" class="text-xs text-gray-400 truncate flex-1 min-w-0 hidden" title=""></span>
                                <button id="clear_D_${file.name}" class="hidden text-xs text-gray-500 hover:text-red-400 transition-colors flex-shrink-0" title="Remove file" aria-label="Remove file">✕</button>
                            </div>
                        </div>
                        <div>
                            <label for="file_F_${file.name}" class="block text-xs font-medium text-gray-300 mb-1">Audio (Fullscreen)</label>
                            <div class="input-file-area">
                                <span class="text-gray-500 text-sm">Drag &amp; drop or click to upload</span>
                                <input type="file" accept="audio/*" id="file_F_${file.name}" class="input-file-style block w-full text-xs text-gray-300 cursor-pointer">
                            </div>
                            <div class="flex items-center gap-2 mt-1 min-h-[1.25rem]">
                                <span id="fileName_F_${file.name}" class="text-xs text-gray-400 truncate flex-1 min-w-0 hidden" title=""></span>
                                <button id="clear_F_${file.name}" class="hidden text-xs text-gray-500 hover:text-red-400 transition-colors flex-shrink-0" title="Remove file" aria-label="Remove file">✕</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 pt-3 border-t border-white/10 space-y-1.5">
            <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" id="same_${file.name}" class="h-4 w-4 rounded cursor-pointer" style="accent-color: #E0E0E0;">
                <span class="ml-2 text-sm text-gray-300">Use separate audio per mode</span>
            </label>
            <p class="text-xs text-gray-500 ml-6">Assign different sounds for desktop vs fullscreen mode</p>
            <button id="useForAll_${file.name}" class="hidden text-xs text-gray-500 hover:text-[#ff9626] transition-colors ml-0 pt-0.5" title="Apply this sound to all events">&#8594; Use this sound for all events</button>
        </div>
    `;

    // Get references to elements
    const sameAudioCheckbox = fileBox.querySelector(`#same_${file.name}`);
    const singleInputContainer = fileBox.querySelector(`#singleInput_${file.name}`);
    const doubleInputContainer = fileBox.querySelector(`#doubleInput_${file.name}`);
    const fileInputSingle = fileBox.querySelector(`#file_${file.name}`);
    const fileInputDesktop = fileBox.querySelector(`#file_D_${file.name}`);
    const fileInputFullscreen = fileBox.querySelector(`#file_F_${file.name}`);
    const fileNameSingleSpan = fileBox.querySelector(`#fileName_single_${file.name}`);
    const fileNameDesktopSpan = fileBox.querySelector(`#fileName_D_${file.name}`);
    const fileNameFullscreenSpan = fileBox.querySelector(`#fileName_F_${file.name}`);
    const clearButtonSingle = fileBox.querySelector(`#clear_single_${file.name}`);
    const clearButtonDesktop = fileBox.querySelector(`#clear_D_${file.name}`);
    const clearButtonFullscreen = fileBox.querySelector(`#clear_F_${file.name}`);
    const useForAllButton = fileBox.querySelector(`#useForAll_${file.name}`);
    const previewButton = fileBox.querySelector('.preview-button');

    // Drag and drop functionality
    const setupDragAndDrop = (inputElement) => {
        const dropArea = inputElement.closest('.input-file-area');
        if (!dropArea) return;

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => dropArea.classList.add('drag-over'), false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => dropArea.classList.remove('drag-over'), false);
        });

        dropArea.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            if (files.length > 0) {
                inputElement.files = files;
                const event = new Event('change', { bubbles: true });
                inputElement.dispatchEvent(event);
            }
        }, false);
    };

    setupDragAndDrop(fileInputSingle);
    setupDragAndDrop(fileInputDesktop);
    setupDragAndDrop(fileInputFullscreen);

    const playIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
    </svg>`;
    const pauseIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M5.75 4.75a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75h-1.5zm6.5 0a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75h-1.5z" /></svg>`;

    function updateCardState() {
        const hasFile = !!(uploadedFiles[`D_${file.name}`] || uploadedFiles[`F_${file.name}`]);
        fileBox.classList.toggle('card-configured', hasFile);
        useForAllButton.classList.toggle('hidden', !hasFile);
        updateProgress();
    }

    function updateFileNameDisplays() {
        const desktopFile = uploadedFiles[`D_${file.name}`];
        const fullscreenFile = uploadedFiles[`F_${file.name}`];
        const isChecked = sameAudioCheckbox.checked;

        const singleFileName = desktopFile ? desktopFile.name : '';
        fileNameSingleSpan.textContent = singleFileName;
        fileNameSingleSpan.title = singleFileName;
        fileNameSingleSpan.classList.toggle('hidden', isChecked || !singleFileName);
        clearButtonSingle.classList.toggle('hidden', isChecked || !singleFileName);

        const desktopFileName = desktopFile ? desktopFile.name : '';
        fileNameDesktopSpan.textContent = desktopFileName;
        fileNameDesktopSpan.title = desktopFileName;
        fileNameDesktopSpan.classList.toggle('hidden', !isChecked || !desktopFileName);
        clearButtonDesktop.classList.toggle('hidden', !isChecked || !desktopFileName);

        const fullscreenFileName = fullscreenFile ? fullscreenFile.name : '';
        fileNameFullscreenSpan.textContent = fullscreenFileName;
        fileNameFullscreenSpan.title = fullscreenFileName;
        fileNameFullscreenSpan.classList.toggle('hidden', !isChecked || !fullscreenFileName);
        clearButtonFullscreen.classList.toggle('hidden', !isChecked || !fullscreenFileName);
    }

    function updatePreviewButton() {
        const fileToPreview = uploadedFiles[`D_${file.name}`] || uploadedFiles[`F_${file.name}`];
        if (fileToPreview) {
            previewButton.classList.remove('opacity-0', 'pointer-events-none');
            if (currentPreviewFile !== fileToPreview) {
                if (audioPlayer) audioPlayer.pause();
                if (currentPreviewUrl) URL.revokeObjectURL(currentPreviewUrl);
                currentPreviewUrl = URL.createObjectURL(fileToPreview);
                audioPlayer = new Audio(currentPreviewUrl);
                currentPreviewFile = fileToPreview;
                previewButton.innerHTML = playIconSvg;
                previewButton.setAttribute('aria-label', 'Preview sound');
                audioPlayer.onended = () => {
                    previewButton.innerHTML = playIconSvg;
                    previewButton.setAttribute('aria-label', 'Preview sound');
                };
            }
        } else {
            previewButton.classList.add('opacity-0', 'pointer-events-none');
            if (audioPlayer) audioPlayer.pause();
            if (currentPreviewUrl) URL.revokeObjectURL(currentPreviewUrl);
            audioPlayer = null;
            currentPreviewFile = null;
            currentPreviewUrl = null;
        }
    }

    // Register refresh callback for "Use for all" cross-card updates
    function refreshCard() {
        updatePreviewButton();
        updateFileNameDisplays();
        updateCardState();
    }
    cardRefreshCallbacks.push(refreshCard);

    // Clear button handlers
    clearButtonSingle.addEventListener('click', () => {
        delete uploadedFiles[`D_${file.name}`];
        delete uploadedFiles[`F_${file.name}`];
        fileInputSingle.value = '';
        updatePreviewButton();
        updateFileNameDisplays();
        updateCardState();
    });

    clearButtonDesktop.addEventListener('click', () => {
        delete uploadedFiles[`D_${file.name}`];
        fileInputDesktop.value = '';
        updatePreviewButton();
        updateFileNameDisplays();
        updateCardState();
    });

    clearButtonFullscreen.addEventListener('click', () => {
        delete uploadedFiles[`F_${file.name}`];
        fileInputFullscreen.value = '';
        updatePreviewButton();
        updateFileNameDisplays();
        updateCardState();
    });

    // "Use for all" button
    useForAllButton.addEventListener('click', () => {
        const sourceFile = uploadedFiles[`D_${file.name}`] || uploadedFiles[`F_${file.name}`];
        if (sourceFile) applyFileToAllEvents(sourceFile);
    });

    // Checkbox: toggle single/dual input mode — stop audio first to avoid ghost playback
    sameAudioCheckbox.addEventListener('change', (event) => {
        if (audioPlayer) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            previewButton.innerHTML = playIconSvg;
            previewButton.setAttribute('aria-label', 'Preview sound');
        }

        const isChecked = event.target.checked;
        const desktopFileKey = `D_${file.name}`;
        const fullscreenFileKey = `F_${file.name}`;

        if (isChecked) {
            singleInputContainer.classList.add('hidden');
            doubleInputContainer.classList.remove('hidden');
            fileInputDesktop.value = '';
            fileInputFullscreen.value = '';

            const fileFromSingle = uploadedFiles[desktopFileKey];
            if (fileFromSingle) {
                uploadedFiles[desktopFileKey] = fileFromSingle;
                delete uploadedFiles[fullscreenFileKey];
            } else {
                delete uploadedFiles[desktopFileKey];
                delete uploadedFiles[fullscreenFileKey];
            }
        } else {
            const fileToKeep = uploadedFiles[desktopFileKey] || uploadedFiles[fullscreenFileKey];
            singleInputContainer.classList.remove('hidden');
            doubleInputContainer.classList.add('hidden');
            fileInputSingle.value = '';

            if (fileToKeep) {
                uploadedFiles[desktopFileKey] = fileToKeep;
                uploadedFiles[fullscreenFileKey] = fileToKeep;
            } else {
                delete uploadedFiles[desktopFileKey];
                delete uploadedFiles[fullscreenFileKey];
            }
        }
        updatePreviewButton();
        updateFileNameDisplays();
        updateCardState();
    });

    // File input handlers
    fileInputSingle.addEventListener('change', async (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            const wavFile = await audioUtils.convertToWAV(uploadedFile);
            uploadedFiles[`D_${file.name}`] = wavFile;
            uploadedFiles[`F_${file.name}`] = wavFile;
        } else {
            delete uploadedFiles[`D_${file.name}`];
            delete uploadedFiles[`F_${file.name}`];
        }
        updatePreviewButton();
        updateFileNameDisplays();
        updateCardState();
    });

    fileInputDesktop.addEventListener('change', async (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            const wavFile = await audioUtils.convertToWAV(uploadedFile);
            uploadedFiles[`D_${file.name}`] = wavFile;
        } else {
            delete uploadedFiles[`D_${file.name}`];
        }
        updatePreviewButton();
        updateFileNameDisplays();
        updateCardState();
    });

    fileInputFullscreen.addEventListener('change', async (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            const wavFile = await audioUtils.convertToWAV(uploadedFile);
            uploadedFiles[`F_${file.name}`] = wavFile;
        } else {
            delete uploadedFiles[`F_${file.name}`];
        }
        updatePreviewButton();
        updateFileNameDisplays();
        updateCardState();
    });

    // Preview button: toggle play/pause
    previewButton.addEventListener('click', () => {
        if (!audioPlayer) return;
        if (audioPlayer.paused) {
            audioPlayer.play();
            previewButton.innerHTML = pauseIconSvg;
            previewButton.setAttribute('aria-label', 'Pause preview');
        } else {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            previewButton.innerHTML = playIconSvg;
            previewButton.setAttribute('aria-label', 'Preview sound');
        }
    });

    updateFileNameDisplays();

    return fileBox;
}

// Generate UI elements for each audio file
audioFiles.forEach(file => {
    const fileElement = createAudioEventElement(file);
    fileContainer.appendChild(fileElement);
});

// Set initial progress state (0 / 9, button muted)
updateProgress();

// Enter key in pack name field triggers download
document.getElementById('packName').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !downloadAllButton.classList.contains('download-button-muted')) {
        downloadAllButton.click();
    }
});

// Event listener for the download button
downloadAllButton.addEventListener('click', async () => {
    const packNameInput = document.getElementById('packName');
    const packName = packNameInput.value.trim() || 'PlayniteSoundPack';

    if (Object.keys(uploadedFiles).length === 0) {
        showToast('Add at least one sound file before downloading.', 'error');
        return;
    }

    // Show spinner in the button
    const originalButtonContent = downloadAllButton.innerHTML;
    downloadAllButton.innerHTML = `
        <svg class="animate-spin h-5 w-5 text-[#ff9626]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="ml-2">Processing...</span>
    `;
    downloadAllButton.disabled = true;
    downloadAllButton.classList.add('opacity-80', 'cursor-not-allowed');

    // Only show the overlay after a short delay — avoids a jarring flash for small packs
    const processingDiv = document.createElement('div');
    processingDiv.className = 'fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-50';
    processingDiv.innerHTML = `
        <div class="bg-white/10 rounded-xl p-6 max-w-md text-center">
            <svg class="animate-spin h-10 w-10 text-[#ff9626] mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="text-white text-lg font-medium">Packaging your sound files...</p>
            <p class="text-gray-300 mt-2">Creating ZIP archive for Playnite.</p>
        </div>
    `;
    const overlayTimeout = setTimeout(() => document.body.appendChild(processingDiv), 250);

    try {
        const zip = new JSZip();

        // Files are already WAV after upload-time conversion — no re-conversion needed
        const promises = Object.entries(uploadedFiles).map(([fileKey, file]) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    zip.file(`${fileKey}.wav`, e.target.result);
                    resolve();
                };
                reader.readAsArrayBuffer(file);
            });
        });

        await Promise.all(promises);

        const content = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(content);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `${packName}.zip`;
        document.body.appendChild(a);
        a.click();

        setTimeout(() => {
            URL.revokeObjectURL(url);
            document.body.removeChild(a);
            
            // Clear uploaded files and reset UI
            for (const key in uploadedFiles) {
                delete uploadedFiles[key];
            }
            packNameInput.value = '';
            // Clear all file input elements
            document.querySelectorAll('input[type="file"]').forEach(input => {
                input.value = '';
            });
            // Re-render cards to reflect cleared state
            cardRefreshCallbacks.forEach(fn => fn());
            showToast('Sound pack downloaded successfully!', 'info');

        }, 100);

    } catch (error) {
        console.error('Error creating zip file:', error);
        showToast('Failed to create ZIP file. Please try again.', 'error');
    } finally {
        clearTimeout(overlayTimeout);
        if (document.body.contains(processingDiv)) document.body.removeChild(processingDiv);
        downloadAllButton.innerHTML = originalButtonContent;
        downloadAllButton.disabled = false;
        downloadAllButton.classList.remove('opacity-80', 'cursor-not-allowed');
    }
});