const scale = window.devicePixelRatio || 1; // Fallback to 1 if no DPR is available
document.documentElement.style.setProperty('--size-scale', scale);