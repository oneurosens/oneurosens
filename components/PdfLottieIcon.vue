<template>
  <span class="pdf-lottie-icon" aria-hidden="true">
    <svg viewBox="0 0 72 72" fill="none">
      <defs>
        <linearGradient id="pdf-shadow" x1="36" y1="14" x2="36" y2="62" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0f8a85" stop-opacity="0.28" />
          <stop offset="1" stop-color="#0f8a85" stop-opacity="0" />
        </linearGradient>
      </defs>

      <ellipse class="pdf-lottie-icon__shadow" cx="36" cy="58.5" rx="14" ry="5" fill="url(#pdf-shadow)" />

      <g class="pdf-lottie-icon__doc">
        <path
          d="M21 10.5h22.8L52.5 19v31.2a5.3 5.3 0 0 1-5.3 5.3H21a5.3 5.3 0 0 1-5.3-5.3V15.8a5.3 5.3 0 0 1 5.3-5.3Z"
          fill="#ffffff"
        />
        <path
          d="M21 10.5h22.8L52.5 19v31.2a5.3 5.3 0 0 1-5.3 5.3H21a5.3 5.3 0 0 1-5.3-5.3V15.8a5.3 5.3 0 0 1 5.3-5.3Z"
          stroke="#168d88"
          stroke-width="2.6"
          stroke-linejoin="round"
        />
        <path d="M43.8 10.5V19h8.7" fill="#ffe49f" />
        <path d="M43.8 10.5V19h8.7" stroke="#168d88" stroke-width="2.6" stroke-linejoin="round" />

        <rect x="22.8" y="22.8" width="16.8" height="2.9" rx="1.45" fill="#dff5f3" />
        <rect x="22.8" y="28.2" width="22.1" height="2.9" rx="1.45" fill="#dff5f3" />
        <rect x="22.8" y="33.6" width="18.4" height="2.9" rx="1.45" fill="#dff5f3" />

        <g class="pdf-lottie-icon__badge">
          <rect x="22.8" y="39.8" width="24.6" height="10.8" rx="5.4" fill="#ee6f63" />
          <path
            d="M28.2 47.1v-4.8h2.1c1.5 0 2.4.8 2.4 2.1 0 1.4-.9 2.2-2.4 2.2h-1v.5h-1.1Zm1.1-1.5h.9c.8 0 1.3-.4 1.3-1.1s-.5-1-1.3-1h-.9v2.1Zm4.5 1.5v-4.8h1.9c1.9 0 3 .9 3 2.4s-1.2 2.4-3 2.4h-1.9Zm1.1-1.2h.7c1.2 0 2-.5 2-1.3s-.8-1.3-2-1.3h-.7v2.6Zm5.1 1.2v-4.8h3.3v1.2h-2.2v.9h2v1.2h-2v1.5H40Z"
            fill="#ffffff"
          />
        </g>
      </g>

      <g class="pdf-lottie-icon__download">
        <path d="M36 44.5v10.2" stroke="#168d88" stroke-width="3.4" stroke-linecap="round" />
        <path d="m30.4 49.8 5.6 5.2 5.6-5.2" stroke="#168d88" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <g class="pdf-lottie-icon__spark pdf-lottie-icon__spark--left">
        <circle cx="19.5" cy="18.5" r="2.2" fill="#f4c84e" />
      </g>
      <g class="pdf-lottie-icon__spark pdf-lottie-icon__spark--right">
        <circle cx="52.5" cy="27.5" r="1.8" fill="#5fe1d4" />
      </g>
    </svg>
  </span>
</template>

<style scoped>
.pdf-lottie-icon {
  display: inline-flex;
  width: 3.35rem;
  height: 3.35rem;
  flex: none;
}

.pdf-lottie-icon svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.pdf-lottie-icon__doc {
  transform-origin: 50% 48%;
  animation: pdf-doc-float 2.8s ease-in-out infinite;
}

.pdf-lottie-icon__badge {
  transform-origin: 50% 45px;
  animation: pdf-badge-pulse 2.8s ease-in-out infinite;
}

.pdf-lottie-icon__download {
  transform-origin: 50% 52px;
  animation: pdf-download-bounce 2.8s ease-in-out infinite;
}

.pdf-lottie-icon__shadow {
  transform-origin: 50% 58.5px;
  animation: pdf-shadow-scale 2.8s ease-in-out infinite;
}

.pdf-lottie-icon__spark {
  animation: pdf-sparkle 2.8s ease-in-out infinite;
}

.pdf-lottie-icon__spark--right {
  animation-delay: 0.25s;
}

@keyframes pdf-doc-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }

  35% {
    transform: translateY(-2px) rotate(-1.2deg) scale(1.02);
  }

  65% {
    transform: translateY(-4px) rotate(1.2deg) scale(1.03);
  }
}

@keyframes pdf-badge-pulse {
  0%, 100%, 55% {
    transform: scale(1);
  }

  38% {
    transform: scale(1.05);
  }
}

@keyframes pdf-download-bounce {
  0%, 100% {
    transform: translateY(4px);
    opacity: 0;
  }

  18%, 68% {
    transform: translateY(0);
    opacity: 1;
  }

  82% {
    transform: translateY(2px);
    opacity: 0;
  }
}

@keyframes pdf-shadow-scale {
  0%, 100% {
    transform: scaleX(1);
    opacity: 0.8;
  }

  65% {
    transform: scaleX(0.88);
    opacity: 0.45;
  }
}

@keyframes pdf-sparkle {
  0%, 100% {
    transform: scale(0.8);
    opacity: 0;
  }

  28%, 58% {
    transform: scale(1);
    opacity: 1;
  }

  78% {
    transform: scale(0.7);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pdf-lottie-icon__doc,
  .pdf-lottie-icon__badge,
  .pdf-lottie-icon__download,
  .pdf-lottie-icon__shadow,
  .pdf-lottie-icon__spark {
    animation: none;
  }
}
</style>
