const audioFiles = [
    {
        name: 'ApplicationStarted',
        description: 'Sound played when the application starts',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'ApplicationStopped',
        description: 'Sound played when the application stops',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameInstalled',
        description: 'Sound played when a game is installed',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameSelected',
        description: 'Sound played when a game is selected',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameStarted',
        description: 'Sound played when a game starts',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1z" /><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameStarting',
        description: 'Sound played while a game is starting',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameStopped',
        description: 'Sound played when a game stops',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'GameUninstalled',
        description: 'Sound played when a game is uninstalled',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>'
    },
    {
        name: 'LibraryUpdated',
        description: 'Sound played when the game library is updated',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" /></svg>'
    }
];

const fileContainer = document.getElementById('fileContainer');
const downloadAllButton = document.getElementById('downloadAll');
const uploadedFiles = {};

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
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

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
            // Return original file if conversion fails
            return audioFile;
        }
    },

    // Function to convert AudioBuffer to WAV Blob
    audioBufferToWAV: function(buffer) {
        return new Promise(resolve => {
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

            // Normalize to peak amplitude so the loudest sample hits 0 dBFS without clipping
            let peak = 0;
            for (let i = 0; i < result.length; i++) {
                const abs = Math.abs(result[i]);
                if (abs > peak) peak = abs;
            }
            const gain = peak > 0 ? 1.0 / peak : 1.0;

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

// Function to create the HTML element for a single audio event
function createAudioEventElement(file) {
    const fileBox = document.createElement('div');
    fileBox.className = 'card-glass rounded-xl p-5 flex flex-col justify-between backdrop-blur-xl';
    let audioPlayer = null; // To hold the audio element for preview
    let currentPreviewFile = null; // To track which file is loaded in the player
    let currentPreviewUrl = null; // Object URL for the current preview — must be revoked when replaced

    fileBox.innerHTML = `
        <div>
            <div class="flex justify-between items-center mb-3">
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/10 rounded-full text-blue-400">
                        ${file.icon}
                    </div>
                    <h3 class="text-lg font-semibold title-gradient">${file.name}</h3>
                </div>
                <button title="Preview Sound" class="preview-button hidden w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-200 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <p class="text-sm text-gray-300 mb-4 opacity-80">${file.description}</p>
            <div id="fileInputsContainer_${file.name}" class="min-h-[120px]">
                <div id="fileInputs_${file.name}" class="space-y-3">
                    <div id="singleInput_${file.name}">
                        <label for="file_${file.name}" class="block text-xs font-medium text-gray-300 mb-1">Audio (Desktop & Fullscreen)</label>
                        <div class="flex items-center space-x-2">
                            <input type="file" accept="audio/*" id="file_${file.name}" class="input-file-style flex-grow">
                            <span id="fileName_single_${file.name}" class="text-xs text-gray-400 truncate max-w-[100px]" title=""></span>
                        </div>
                    </div>
                    <div id="doubleInput_${file.name}" class="hidden">
                        <div class="mb-3">
                            <label for="file_D_${file.name}" class="block text-xs font-medium text-gray-300 mb-1">Audio (Desktop)</label>
                            <div class="flex items-center space-x-2">
                                <input type="file" accept="audio/*" id="file_D_${file.name}" class="input-file-style flex-grow">
                                <span id="fileName_D_${file.name}" class="text-xs text-gray-400 truncate max-w-[100px]" title=""></span>
                            </div>
                        </div>
                        <div>
                            <label for="file_F_${file.name}" class="block text-xs font-medium text-gray-300 mb-1">Audio (Fullscreen)</label>
                            <div class="flex items-center space-x-2">
                                <input type="file" accept="audio/*" id="file_F_${file.name}" class="input-file-style flex-grow">
                                <span id="fileName_F_${file.name}" class="text-xs text-gray-400 truncate max-w-[100px]" title=""></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 pt-3 border-t border-white/10">
            <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" id="same_${file.name}" class="form-checkbox h-4 w-4 text-blue-500 rounded-md bg-white/10 border-none focus:ring-blue-400 focus:ring-offset-gray-900">
                <span class="ml-2 text-sm text-gray-300">Use separate desktop/fullscreen audio</span>
            </label>
        </div>
    `;

    // Add shared file input styles dynamically to avoid repetition in innerHTML
    fileBox.querySelectorAll('input[type="file"]').forEach(input => {
        input.className = 'input-file-style block w-full text-xs text-gray-300 cursor-pointer';
    });

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
    const previewButton = fileBox.querySelector('.preview-button');
    const playIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
    </svg>`;
    const pauseIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M5.75 4.75a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75h-1.5zm6.5 0a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75h-1.5z" /></svg>`;

    // Function to update the displayed filename spans
    function updateFileNameDisplays() {
        const desktopFile = uploadedFiles[`D_${file.name}`];
        const fullscreenFile = uploadedFiles[`F_${file.name}`];
        const isChecked = sameAudioCheckbox.checked;

        // Update text and title attribute for potential truncation
        const singleFileName = desktopFile ? desktopFile.name : '';
        fileNameSingleSpan.textContent = singleFileName;
        fileNameSingleSpan.title = singleFileName;

        const desktopFileName = desktopFile ? desktopFile.name : '';
        fileNameDesktopSpan.textContent = desktopFileName;
        fileNameDesktopSpan.title = desktopFileName;

        const fullscreenFileName = fullscreenFile ? fullscreenFile.name : '';
        fileNameFullscreenSpan.textContent = fullscreenFileName;
        fileNameFullscreenSpan.title = fullscreenFileName;

        // Adjust visibility based on checkbox state - inverted now
        fileNameSingleSpan.classList.toggle('hidden', isChecked || !singleFileName);
        fileNameDesktopSpan.classList.toggle('hidden', !isChecked || !desktopFileName);
        fileNameFullscreenSpan.classList.toggle('hidden', !isChecked || !fullscreenFileName);
    }

    // Function to update preview button visibility and state
    function updatePreviewButton() {
        const fileToPreview = uploadedFiles[`D_${file.name}`] || uploadedFiles[`F_${file.name}`];
        if (fileToPreview) {
            previewButton.classList.remove('hidden');
            if (currentPreviewFile !== fileToPreview) {
                // Revoke the old object URL before creating a new one
                if (audioPlayer) audioPlayer.pause();
                if (currentPreviewUrl) URL.revokeObjectURL(currentPreviewUrl);
                currentPreviewUrl = URL.createObjectURL(fileToPreview);
                audioPlayer = new Audio(currentPreviewUrl);
                currentPreviewFile = fileToPreview;
                previewButton.innerHTML = playIconSvg;
                audioPlayer.onended = () => { previewButton.innerHTML = playIconSvg; };
            }
        } else {
            previewButton.classList.add('hidden');
            if (audioPlayer) audioPlayer.pause();
            if (currentPreviewUrl) URL.revokeObjectURL(currentPreviewUrl);
            audioPlayer = null;
            currentPreviewFile = null;
            currentPreviewUrl = null;
        }
    }

    // Event listener for the checkbox - INVERTED LOGIC
    sameAudioCheckbox.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
        const desktopFileKey = `D_${file.name}`;
        const fullscreenFileKey = `F_${file.name}`;

        if (isChecked) {
            // Switching TO double input mode (now when checked)
            singleInputContainer.classList.add('hidden');
            doubleInputContainer.classList.remove('hidden');
            fileInputDesktop.value = ''; // Clear file inputs visually
            fileInputFullscreen.value = '';

            // Get the shared file to use as desktop file
            const fileFromSingle = uploadedFiles[desktopFileKey];
            if (fileFromSingle) {
                uploadedFiles[desktopFileKey] = fileFromSingle;
                // Clear the fullscreen file when separating
                delete uploadedFiles[fullscreenFileKey];
            } else {
                delete uploadedFiles[desktopFileKey];
                delete uploadedFiles[fullscreenFileKey];
            }
        } else {
            // Switching TO single input mode (now when unchecked)
            // Keep any file that was assigned to desktop
            const fileToKeep = uploadedFiles[desktopFileKey] || uploadedFiles[fullscreenFileKey];
            singleInputContainer.classList.remove('hidden');
            doubleInputContainer.classList.add('hidden');
            fileInputSingle.value = ''; // Clear file input visually

            if (fileToKeep) {
                uploadedFiles[desktopFileKey] = fileToKeep;
                uploadedFiles[fullscreenFileKey] = fileToKeep; // Both point to the same file
            } else {
                delete uploadedFiles[desktopFileKey];
                delete uploadedFiles[fullscreenFileKey];
            }
        }
        updatePreviewButton(); // Update preview state
        updateFileNameDisplays(); // Update filename display
    });

    // Event listener for the single file input
    fileInputSingle.addEventListener('change', async (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            const wavFile = await audioUtils.convertToWAV(uploadedFile);
            uploadedFiles[`D_${file.name}`] = wavFile;
            uploadedFiles[`F_${file.name}`] = wavFile;
        } else {
            // Clear if the user cancels file selection
            delete uploadedFiles[`D_${file.name}`];
            delete uploadedFiles[`F_${file.name}`];
        }
        updatePreviewButton();
        updateFileNameDisplays(); // Update filename display
    });

    // Event listener for the desktop file input
    fileInputDesktop.addEventListener('change', async (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            const wavFile = await audioUtils.convertToWAV(uploadedFile);
            uploadedFiles[`D_${file.name}`] = wavFile;
        } else {
            delete uploadedFiles[`D_${file.name}`];
        }
        updatePreviewButton();
        updateFileNameDisplays(); // Update filename display
    });

    // Event listener for the fullscreen file input
    fileInputFullscreen.addEventListener('change', async (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            const wavFile = await audioUtils.convertToWAV(uploadedFile);
            uploadedFiles[`F_${file.name}`] = wavFile;
        } else {
            delete uploadedFiles[`F_${file.name}`];
        }
        updatePreviewButton();
        updateFileNameDisplays(); // Update filename display
    });

    // Event listener for the preview button
    previewButton.addEventListener('click', () => {
        if (!audioPlayer) return;
        if (audioPlayer.paused) {
            audioPlayer.play();
            previewButton.innerHTML = pauseIconSvg;
        } else {
            audioPlayer.pause();
            audioPlayer.currentTime = 0; // Reset playback to start
            previewButton.innerHTML = playIconSvg;
        }
    });

    // Initial setup for filename display
    updateFileNameDisplays();

    return fileBox;
}

// Generate UI elements for each audio file
audioFiles.forEach(file => {
    const fileElement = createAudioEventElement(file);
    fileContainer.appendChild(fileElement);
});

// Event listener for the download button
downloadAllButton.addEventListener('click', async () => {
    const packNameInput = document.getElementById('packName');
    const packName = packNameInput.value.trim() || 'PlayniteSoundPack';

    if (Object.keys(uploadedFiles).length === 0) {
        alert('No sound files have been added. Please add at least one sound file before downloading.');
        return;
    }

    // Show spinner in the button
    const originalButtonContent = downloadAllButton.innerHTML;
    downloadAllButton.innerHTML = `
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="ml-2">Processing...</span>
    `;
    downloadAllButton.disabled = true;
    downloadAllButton.classList.add('opacity-80', 'cursor-not-allowed');

    const processingDiv = document.createElement('div');
    processingDiv.className = 'fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-50';
    processingDiv.innerHTML = `
        <div class="bg-white/10 rounded-xl p-6 max-w-md text-center">
            <svg class="animate-spin h-10 w-10 text-blue-400 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="text-white text-lg font-medium">Processing audio files...</p>
            <p class="text-gray-300 mt-2">Converting all files to WAV format.</p>
        </div>
    `;
    document.body.appendChild(processingDiv);

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
        }, 100);

    } catch (error) {
        console.error('Error creating zip file:', error);
        alert('An error occurred while creating the zip file. Please try again.');
    } finally {
        document.body.removeChild(processingDiv);
        downloadAllButton.innerHTML = originalButtonContent;
        downloadAllButton.disabled = false;
        downloadAllButton.classList.remove('opacity-80', 'cursor-not-allowed');
    }
});