<template>
  <div
    class="decorative-shapes"
    :class="[
      `decorative-shapes--${density}`,
      `decorative-shapes--${variant}`,
      { 'decorative-shapes--interactive': isInteractive }
    ]"
    aria-hidden="true"
    @pointermove="isInteractive ? handlePointerMove($event) : undefined"
    @pointerleave="isInteractive ? resetPointer() : undefined"
  >
    <span
      v-for="item in resolvedItems"
      :key="item.id"
      class="decorative-shapes__item"
      :class="[`decorative-shapes__item--${item.tone}`, `decorative-shapes__item--${item.id}`]"
      :style="item.style"
    >
      <img :src="item.src" :alt="''" loading="lazy">
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import forme1 from '~/assets/img/formes/1.svg'
import forme4 from '~/assets/img/formes/4.svg'
import forme7 from '~/assets/img/formes/7.svg'
import forme11 from '~/assets/img/formes/11.svg'
import forme14 from '~/assets/img/formes/14.svg'
import forme17 from '~/assets/img/formes/17.svg'

type ShapeTone = 'primary' | 'accent' | 'highlight' | 'secondary' | 'soft'

type ShapeItem = {
  id: string
  src?: string
  top?: string
  right?: string
  bottom?: string
  left?: string
  size?: string
  rotate?: string
  opacity?: number
  depth?: number
  zIndex?: number
  tone?: ShapeTone
}

const props = withDefaults(
  defineProps<{
    items?: ShapeItem[]
    density?: 'low' | 'medium'
    variant?: 'editorial' | 'hero' | 'aside' | 'gallery' | 'footer'
  }>(),
  {
    density: 'medium',
    variant: 'editorial',
    items: () => []
  }
)

const variantPresets: Record<string, ShapeItem[]> = {
  editorial: [
    {
      id: 'shape-a',
      src: forme17,
      top: '-4%',
      right: '-2%',
      size: 'clamp(72px, 10vw, 138px)',
      rotate: '10deg',
      opacity: 0.78,
      depth: 18,
      tone: 'accent'
    },
    {
      id: 'shape-b',
      src: forme7,
      bottom: '8%',
      left: '-1%',
      size: 'clamp(96px, 14vw, 174px)',
      rotate: '-12deg',
      opacity: 0.24,
      depth: 28,
      tone: 'primary'
    },
    {
      id: 'shape-c',
      src: forme11,
      top: '22%',
      left: '7%',
      size: 'clamp(54px, 6.4vw, 88px)',
      rotate: '-4deg',
      opacity: 0.42,
      depth: 14,
      tone: 'highlight'
    },
    {
      id: 'shape-d',
      src: forme14,
      bottom: '-5%',
      right: '12%',
      size: 'clamp(64px, 8vw, 108px)',
      rotate: '16deg',
      opacity: 0.34,
      depth: 22,
      tone: 'secondary'
    }
  ],
  hero: [
    {
      id: 'hero-a',
      src: forme17,
      top: '-7%',
      right: '-2%',
      size: 'clamp(82px, 11vw, 154px)',
      rotate: '10deg',
      opacity: 0.8,
      depth: 18,
      tone: 'accent'
    },
    {
      id: 'hero-b',
      src: forme7,
      top: '10%',
      left: '-4%',
      size: 'clamp(110px, 16vw, 188px)',
      rotate: '-18deg',
      opacity: 0.2,
      depth: 24,
      tone: 'primary'
    },
    {
      id: 'hero-c',
      src: forme4,
      bottom: '9%',
      right: '10%',
      size: 'clamp(42px, 4vw, 68px)',
      rotate: '6deg',
      opacity: 0.3,
      depth: 10,
      tone: 'soft'
    }
  ],
  aside: [
    {
      id: 'aside-a',
      src: forme11,
      top: '5%',
      right: '2%',
      size: 'clamp(40px, 5vw, 62px)',
      rotate: '-4deg',
      opacity: 0.28,
      depth: 10,
      tone: 'highlight'
    },
    {
      id: 'aside-b',
      src: forme14,
      bottom: '-3%',
      left: '-2%',
      size: 'clamp(58px, 7vw, 88px)',
      rotate: '14deg',
      opacity: 0.22,
      depth: 12,
      tone: 'secondary'
    }
  ],
  gallery: [
    {
      id: 'gallery-a',
      src: forme1,
      top: '8%',
      right: '4%',
      size: 'clamp(36px, 4vw, 58px)',
      rotate: '-12deg',
      opacity: 0.24,
      depth: 10,
      tone: 'accent'
    },
    {
      id: 'gallery-b',
      src: forme7,
      bottom: '4%',
      left: '-3%',
      size: 'clamp(78px, 10vw, 128px)',
      rotate: '-10deg',
      opacity: 0.18,
      depth: 14,
      tone: 'primary'
    },
    {
      id: 'gallery-c',
      src: forme17,
      top: '-2%',
      left: '20%',
      size: 'clamp(60px, 8vw, 94px)',
      rotate: '8deg',
      opacity: 0.32,
      depth: 16,
      tone: 'highlight'
    }
  ],
  footer: [
    {
      id: 'footer-a',
      src: forme14,
      top: '-10%',
      right: '3%',
      size: 'clamp(56px, 7vw, 92px)',
      rotate: '14deg',
      opacity: 0.2,
      depth: 8,
      tone: 'soft'
    }
  ]
}

const mediumExtras: ShapeItem[] = [
  {
    id: 'shape-e',
    src: forme4,
    top: '58%',
    right: '5%',
    size: 'clamp(42px, 4.4vw, 68px)',
    rotate: '8deg',
    opacity: 0.3,
    depth: 12,
    tone: 'soft'
  },
  {
    id: 'shape-f',
    src: forme1,
    top: '12%',
    right: '24%',
    size: 'clamp(38px, 3.8vw, 58px)',
    rotate: '-16deg',
    opacity: 0.18,
    depth: 10,
    tone: 'primary'
  }
]

const pointerX = ref(0)
const pointerY = ref(0)
const targetX = ref(0)
const targetY = ref(0)
const isInteractive = ref(false)

let animationFrame = 0

const updateInteractivity = () => {
  if (typeof window === 'undefined') {
    return
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
  const isCompactViewport = window.innerWidth < 900

  isInteractive.value = !prefersReducedMotion && !isCoarsePointer && !isCompactViewport

  if (!isInteractive.value) {
    pointerX.value = 0
    pointerY.value = 0
    targetX.value = 0
    targetY.value = 0
  }
}

const resolvedItems = computed(() => {
  const sourceItems = props.items.length
    ? props.items
    : props.density === 'low'
      ? variantPresets[props.variant]
      : [...variantPresets[props.variant], ...mediumExtras]

  return sourceItems.map((item, index) => {
    const depth = item.depth ?? 16
    const x = `${(pointerX.value * depth).toFixed(2)}px`
    const y = `${(pointerY.value * depth).toFixed(2)}px`

    return {
      ...item,
      src: item.src ?? forme17,
      tone: item.tone ?? 'primary',
      style: {
        top: item.top ?? 'auto',
        right: item.right ?? 'auto',
        bottom: item.bottom ?? 'auto',
        left: item.left ?? 'auto',
        width: item.size ?? '88px',
        opacity: String(item.opacity ?? 0.3),
        zIndex: String(item.zIndex ?? index + 1),
        '--shape-opacity': String(item.opacity ?? 0.3),
        '--shape-rotate': item.rotate ?? '0deg',
        '--shape-translate-x': x,
        '--shape-translate-y': y
      }
    }
  })
})

const handlePointerMove = (event: PointerEvent) => {
  const currentTarget = event.currentTarget

  if (!(currentTarget instanceof HTMLElement) || !isInteractive.value) {
    return
  }

  const rect = currentTarget.getBoundingClientRect()
  const relativeX = (event.clientX - rect.left) / rect.width - 0.5
  const relativeY = (event.clientY - rect.top) / rect.height - 0.5

  targetX.value = relativeX
  targetY.value = relativeY
}

const resetPointer = () => {
  targetX.value = 0
  targetY.value = 0
}

const animatePointer = () => {
  pointerX.value += (targetX.value - pointerX.value) * 0.1
  pointerY.value += (targetY.value - pointerY.value) * 0.1
  animationFrame = window.requestAnimationFrame(animatePointer)
}

onMounted(() => {
  updateInteractivity()
  window.addEventListener('resize', updateInteractivity)
  animationFrame = window.requestAnimationFrame(animatePointer)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateInteractivity)
  window.cancelAnimationFrame(animationFrame)
})
</script>
