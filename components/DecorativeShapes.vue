<template>
  <div
    class="decorative-shapes"
    :class="[`decorative-shapes--${density}`, `decorative-shapes--${variant}`]"
    aria-hidden="true"
  >
    <span
      v-for="item in resolvedItems"
      :key="item.id"
      class="decorative-shapes__item"
      :class="[`decorative-shapes__item--${item.tone}`, `decorative-shapes__item--${item.id}`]"
      :data-shape-id="item.id"
      :style="item.style"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ShapeTone = 'primary' | 'accent' | 'highlight' | 'secondary' | 'soft'

type ShapeItem = {
  id: string
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
      opacity: 0.78,
      tone: 'accent'
    },
    {
      id: 'shape-b',
      opacity: 0.24,
      tone: 'primary'
    },
    {
      id: 'shape-c',
      opacity: 0.42,
      tone: 'highlight'
    },
    {
      id: 'shape-d',
      opacity: 0.34,
      tone: 'secondary'
    }
  ],
  hero: [
    {
      id: 'hero-a',
      opacity: 0.8,
      tone: 'accent'
    },
    {
      id: 'hero-b',
      opacity: 0.2,
      tone: 'primary'
    },
    {
      id: 'hero-c',
      opacity: 0.3,
      tone: 'soft'
    }
  ],
  aside: [
    {
      id: 'aside-a',
      opacity: 0.28,
      tone: 'highlight'
    },
    {
      id: 'aside-b',
      opacity: 0.22,
      tone: 'secondary'
    }
  ],
  gallery: [
    {
      id: 'gallery-a',
      opacity: 0.24,
      tone: 'accent'
    },
    {
      id: 'gallery-b',
      opacity: 0.18,
      tone: 'primary'
    },
    {
      id: 'gallery-c',
      opacity: 0.32,
      tone: 'highlight'
    }
  ],
  footer: [
    {
      id: 'footer-a',
      opacity: 0.2,
      tone: 'soft'
    }
  ]
}

const mediumExtras: ShapeItem[] = [
  {
    id: 'shape-e',
    opacity: 0.3,
    tone: 'soft'
  },
  {
    id: 'shape-f',
    opacity: 0.18,
    tone: 'primary'
  }
]

const resolvedItems = computed(() => {
  const sourceItems = props.items.length
    ? props.items
    : props.density === 'low'
      ? variantPresets[props.variant]
      : [...variantPresets[props.variant], ...mediumExtras]

  return sourceItems.map((item, index) => {
    const style: Record<string, string> = {
      opacity: String(item.opacity ?? 0.3),
      zIndex: String(item.zIndex ?? index + 1),
      '--shape-opacity': String(item.opacity ?? 0.3)
    }

    if (item.top) {
      style['--shape-top'] = item.top
    }

    if (item.right) {
      style['--shape-right'] = item.right
    }

    if (item.bottom) {
      style['--shape-bottom'] = item.bottom
    }

    if (item.left) {
      style['--shape-left'] = item.left
    }

    if (item.size) {
      style['--shape-size'] = item.size
    }

    if (item.rotate) {
      style['--shape-rotate'] = item.rotate
    }

    return {
      ...item,
      tone: item.tone ?? 'primary',
      style
    }
  })
})
</script>
