<template>
  <DecorativeShapes
    v-if="items.length"
    class="decorative-shapes--page-side"
    density="low"
    variant="editorial"
    :items="items"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ShapeTone = 'primary' | 'accent' | 'highlight' | 'secondary' | 'soft'

type ShapeItem = {
  id: string
  top?: string
  left?: string
  right?: string
  size: string
  rotate?: string
  opacity?: number
  depth?: number
  zIndex?: number
  tone?: ShapeTone
}

const route = useRoute()

const routeShapeMap: Record<string, ShapeItem[]> = {
  '/': [
    { id: 'hero-shape-right', opacity: 1, zIndex: 5, tone: 'accent' },
    { id: 'themes-shape-right', opacity: 0.26, tone: 'highlight' },
    { id: 'page-home-1', opacity: 0.95, tone: 'accent' },
    { id: 'page-home-3', opacity: 0.84, tone: 'soft' },
    { id: 'page-home-4', opacity: 0.92, tone: 'secondary' }
  ],
  '/qui-sommes-nous': [
    { id: 'qsn-hero-shape', opacity: 1, zIndex: 2, tone: 'accent' },
    { id: 'values-shape-side', opacity: 1, zIndex: 3, tone: 'highlight' },
    { id: 'page-about-3', opacity: 0.82, tone: 'soft' }
  ],
  '/formations': [
    { id: 'formations-head-shape', opacity: 0.92, zIndex: 1, tone: 'accent' },
    { id: 'formations-aside-shape', opacity: 0.28, zIndex: 0, tone: 'soft' },
    { id: 'page-formations-1', opacity: 0.94, tone: 'primary' },
    { id: 'page-formations-3', opacity: 0.78, tone: 'soft' },
    { id: 'page-formations-4', opacity: 0.88, tone: 'highlight' }
  ],
  '/temoignages': [
    { id: 'hero-a-large', opacity: 1, tone: 'accent' },
    { id: 'page-temoignages-1', opacity: 0.92, tone: 'accent' },
    { id: 'page-temoignages-3', opacity: 0.84, tone: 'soft' },
    { id: 'page-temoignages-4', opacity: 0.9, tone: 'secondary' }
  ],
  '/contact': [
    { id: 'hero-a', opacity: 0.8, tone: 'accent' },
    { id: 'hero-b', opacity: 0.2, tone: 'primary' },
    { id: 'hero-c', opacity: 0.3, tone: 'soft' },
    { id: 'page-contact-1', opacity: 0.9, tone: 'accent' },
    { id: 'page-contact-2', opacity: 0.96, tone: 'highlight' },
    { id: 'page-contact-3', opacity: 0.84, tone: 'soft' },
    { id: 'page-contact-4', opacity: 0.8, tone: 'primary' }
  ]
}

const items = computed(() => routeShapeMap[route.path] ?? routeShapeMap['/'])
</script>

<style scoped>
.decorative-shapes--page-side {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: visible;
}

@media (max-width: 900px) {
  .decorative-shapes--page-side {
    display: none;
  }
}
</style>
