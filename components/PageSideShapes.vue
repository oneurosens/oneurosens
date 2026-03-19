<template>
  <DecorativeShapes
    v-if="items.length"
    class="page-side-shapes"
    density="low"
    variant="editorial"
    :items="items"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import forme1 from '~/assets/img/formes/1.svg'
import forme4 from '~/assets/img/formes/4.svg'
import forme5 from '~/assets/img/formes/5.svg'
import forme6 from '~/assets/img/formes/6.svg'
import forme8 from '~/assets/img/formes/8.svg'
import forme10 from '~/assets/img/formes/10.svg'
import forme12 from '~/assets/img/formes/12.svg'
import forme13 from '~/assets/img/formes/13.svg'
import forme15 from '~/assets/img/formes/15.svg'
import forme16 from '~/assets/img/formes/16.svg'
import forme18 from '~/assets/img/formes/18.svg'
import forme19 from '~/assets/img/formes/19.svg'
import forme20 from '~/assets/img/formes/20.svg'

type ShapeTone = 'primary' | 'accent' | 'highlight' | 'secondary' | 'soft'

type ShapeItem = {
  id: string
  src: string
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
    { id: 'page-home-1', src: forme18, top: '6%', left: '-3.4vw', size: 'clamp(190px, 20vw, 350px)', rotate: '-12deg', opacity: 0.95, depth: 10, tone: 'accent' },
    { id: 'page-home-3', src: forme12, top: '54%', left: '-2.8vw', size: 'clamp(160px, 17vw, 290px)', rotate: '10deg', opacity: 0.84, depth: 9, tone: 'soft' },
    { id: 'page-home-4', src: forme16, top: '78%', right: '-3.6vw', size: 'clamp(188px, 19vw, 335px)', rotate: '-6deg', opacity: 0.92, depth: 10, tone: 'secondary' }
  ],
  '/qui-sommes-nous': [
    { id: 'page-about-3', src: forme13, top: '63%', right: '-2.8vw', size: 'clamp(154px, 16vw, 285px)', rotate: '12deg', opacity: 0.82, depth: 10, tone: 'soft' }
  ],
  '/formations': [
    { id: 'page-formations-1', src: forme19, top: '7%', left: '-3.4vw', size: 'clamp(176px, 19vw, 330px)', rotate: '-10deg', opacity: 0.94, depth: 10, tone: 'primary' },
    { id: 'page-formations-3', src: forme4, top: '56%', left: '-2.8vw', size: 'clamp(148px, 16vw, 270px)', rotate: '-8deg', opacity: 0.78, depth: 8, tone: 'soft' },
    { id: 'page-formations-4', src: forme15, top: '82%', right: '-3.8vw', size: 'clamp(186px, 20vw, 350px)', rotate: '8deg', opacity: 0.88, depth: 10, tone: 'highlight' }
  ],
  '/temoignages': [
    { id: 'page-temoignages-1', src: forme6, top: '5%', left: '-3.6vw', size: 'clamp(186px, 20vw, 350px)', rotate: '-12deg', opacity: 0.92, depth: 10, tone: 'accent' },
    { id: 'page-temoignages-3', src: forme5, top: '58%', left: '-2.8vw', size: 'clamp(164px, 18vw, 315px)', rotate: '12deg', opacity: 0.84, depth: 10, tone: 'soft' },
    { id: 'page-temoignages-4', src: forme18, top: '84%', right: '-3.8vw', size: 'clamp(182px, 19vw, 330px)', rotate: '-10deg', opacity: 0.9, depth: 10, tone: 'secondary' }
  ],
  '/contact': [
    { id: 'page-contact-1', src: forme13, top: '8%', right: '-3vw', size: 'clamp(176px, 19vw, 330px)', rotate: '10deg', opacity: 0.9, depth: 8, tone: 'accent' },
    { id: 'page-contact-2', src: forme16, top: '30%', left: '-3.5vw', size: 'clamp(190px, 20vw, 350px)', rotate: '-8deg', opacity: 0.96, depth: 9, tone: 'highlight' },
    { id: 'page-contact-3', src: forme8, top: '60%', right: '-2.8vw', size: 'clamp(154px, 17vw, 290px)', rotate: '14deg', opacity: 0.84, depth: 8, tone: 'soft' },
    { id: 'page-contact-4', src: forme1, top: '84%', left: '-2.6vw', size: 'clamp(148px, 16vw, 270px)', rotate: '-16deg', opacity: 0.8, depth: 8, tone: 'primary' }
  ]
}

const items = computed(() => routeShapeMap[route.path] ?? routeShapeMap['/'])
</script>

<style scoped>
.page-side-shapes {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: visible;
}

@media (max-width: 900px) {
  .page-side-shapes {
    display: none;
  }
}
</style>
