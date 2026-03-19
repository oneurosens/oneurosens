<template>
  <Transition name="page-loader-fade">
    <div
      v-if="visible"
      :key="cycle"
      class="page-loader"
      :style="{ '--page-loader-from': fromColor, '--page-loader-to': toColor }"
      aria-live="polite"
      aria-busy="true"
    >
      <span class="page-loader__layer page-loader__layer--from" aria-hidden="true" />
      <span class="page-loader__layer page-loader__layer--to" aria-hidden="true" />
      <div class="page-loader__inner">
        <img :src="logoLoader" alt="Ô Neuro Sens" class="page-loader__logo" loading="eager">
        <div class="page-loader__progress" aria-hidden="true">
          <span class="page-loader__progress-bar" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import logoLoader from '~/assets/img/logo-loader.svg'

defineProps<{
  visible: boolean
  fromColor: string
  toColor: string
  cycle: number
}>()
</script>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: grid;
  place-items: center;
  padding: 2rem;
  isolation: isolate;
  background: var(--page-loader-from, #ffffff);
}

.page-loader__inner {
  position: relative;
  z-index: 2;
  display: grid;
  justify-items: center;
  gap: 1.2rem;
  width: min(24rem, 100%);
}

.page-loader__layer {
  position: absolute;
  inset: 0;
}

.page-loader__layer--from {
  background: var(--page-loader-from, #ffffff);
}

.page-loader__layer--to {
  background: var(--page-loader-to, #ffffff);
  opacity: 0;
  animation: page-loader-color-shift 2100ms ease-in-out 120ms forwards;
}

.page-loader__logo {
  width: min(18rem, 58vw);
  height: auto;
  opacity: 0;
  transform: translateY(10px);
  animation: page-loader-logo-in 560ms var(--ease-smooth) 160ms forwards;
}

.page-loader__progress {
  width: min(11rem, 52vw);
  height: 0.22rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.34);
}

.page-loader__progress-bar {
  display: block;
  width: 100%;
  height: 100%;
  background: #ffffff;
  transform-origin: left center;
  transform: translateX(-100%) scaleX(0.18);
  animation: page-loader-progress 1.9s ease-in-out forwards;
}

.page-loader-fade-enter-active,
.page-loader-fade-leave-active {
  transition: opacity 360ms var(--ease-smooth);
}

.page-loader-fade-enter-from,
.page-loader-fade-leave-to {
  opacity: 0;
}

@keyframes page-loader-logo-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes page-loader-progress {
  0% {
    transform: translateX(-100%) scaleX(0.18);
  }

  55% {
    transform: translateX(-18%) scaleX(0.52);
  }

  100% {
    transform: translateX(0) scaleX(1);
  }
}

@keyframes page-loader-color-shift {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .page-loader__logo,
  .page-loader__progress-bar,
  .page-loader__layer--to,
  .page-loader-fade-enter-active,
  .page-loader-fade-leave-active {
    transition: none;
    animation: none;
  }

  .page-loader__logo {
    opacity: 1;
    transform: none;
  }

  .page-loader__layer--to {
    opacity: 1;
  }
}
</style>
