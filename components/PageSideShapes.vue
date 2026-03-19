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
    { id: 'page-home-1', src: forme18, top: '6%', left: '-5.5vw', size: 'clamp(170px, 18vw, 320px)', rotate: '-12deg', opacity: 0.95, depth: 10, tone: 'accent' },
    { id: 'page-home-2', src: forme5, top: '28%', right: '-5vw', size: 'clamp(154px, 16vw, 290px)', rotate: '8deg', opacity: 0.88, depth: 12, tone: 'highlight' },
    { id: 'page-home-3', src: forme12, top: '54%', left: '-4.5vw', size: 'clamp(148px, 15vw, 260px)', rotate: '10deg', opacity: 0.84, depth: 9, tone: 'soft' },
    { id: 'page-home-4', src: forme16, top: '78%', right: '-5.5vw', size: 'clamp(172px, 17vw, 300px)', rotate: '-6deg', opacity: 0.92, depth: 10, tone: 'secondary' }
  ],
  '/qui-sommes-nous': [
    { id: 'page-about-1', src: forme20, top: '5%', right: '-4.5vw', size: 'clamp(210px, 22vw, 380px)', rotate: '0deg', opacity: 1, depth: 8, tone: 'accent' },
    { id: 'page-about-2', src: forme8, top: '34%', left: '-5.5vw', size: 'clamp(170px, 17vw, 300px)', rotate: '-16deg', opacity: 0.9, depth: 10, tone: 'highlight' },
    { id: 'page-about-3', src: forme13, top: '63%', right: '-4vw', size: 'clamp(142px, 15vw, 260px)', rotate: '12deg', opacity: 0.82, depth: 10, tone: 'soft' },
    { id: 'page-about-4', src: forme6, top: '84%', left: '-4vw', size: 'clamp(160px, 16vw, 280px)', rotate: '-10deg', opacity: 0.9, depth: 8, tone: 'primary' }
  ],
  '/formations': [
    { id: 'page-formations-1', src: forme19, top: '7%', left: '-5.5vw', size: 'clamp(160px, 17vw, 300px)', rotate: '-10deg', opacity: 0.94, depth: 10, tone: 'primary' },
    { id: 'page-formations-2', src: forme10, top: '26%', right: '-4.5vw', size: 'clamp(146px, 15vw, 270px)', rotate: '14deg', opacity: 0.82, depth: 10, tone: 'accent' },
    { id: 'page-formations-3', src: forme4, top: '56%', left: '-4vw', size: 'clamp(136px, 14vw, 240px)', rotate: '-8deg', opacity: 0.78, depth: 8, tone: 'soft' },
    { id: 'page-formations-4', src: forme15, top: '82%', right: '-5.5vw', size: 'clamp(170px, 18vw, 320px)', rotate: '8deg', opacity: 0.88, depth: 10, tone: 'highlight' }
  ],
  '/telecharger-le-catalogue': [
    { id: 'page-catalogue-1', src: forme15, top: '10%', right: '-4.5vw', size: 'clamp(170px, 18vw, 310px)', rotate: '8deg', opacity: 0.88, depth: 9, tone: 'highlight' },
    { id: 'page-catalogue-2', src: forme1, top: '44%', left: '-5vw', size: 'clamp(140px, 15vw, 260px)', rotate: '-14deg', opacity: 0.82, depth: 9, tone: 'primary' },
    { id: 'page-catalogue-3', src: forme12, top: '76%', right: '-4vw', size: 'clamp(148px, 16vw, 280px)', rotate: '10deg', opacity: 0.8, depth: 8, tone: 'soft' }
  ],
  '/temoignages': [
    { id: 'page-temoignages-1', src: forme6, top: '5%', left: '-5.5vw', size: 'clamp(170px, 18vw, 320px)', rotate: '-12deg', opacity: 0.92, depth: 10, tone: 'accent' },
    { id: 'page-temoignages-2', src: forme20, top: '24%', right: '-4vw', size: 'clamp(185px, 19vw, 340px)', rotate: '0deg', opacity: 1, depth: 8, tone: 'highlight' },
    { id: 'page-temoignages-3', src: forme5, top: '58%', left: '-4vw', size: 'clamp(150px, 16vw, 290px)', rotate: '12deg', opacity: 0.84, depth: 10, tone: 'soft' },
    { id: 'page-temoignages-4', src: forme18, top: '84%', right: '-5.5vw', size: 'clamp(168px, 17vw, 300px)', rotate: '-10deg', opacity: 0.9, depth: 10, tone: 'secondary' }
  ],
  '/contact': [
    { id: 'page-contact-1', src: forme13, top: '8%', right: '-4.5vw', size: 'clamp(160px, 17vw, 300px)', rotate: '10deg', opacity: 0.9, depth: 8, tone: 'accent' },
    { id: 'page-contact-2', src: forme16, top: '30%', left: '-5vw', size: 'clamp(175px, 18vw, 320px)', rotate: '-8deg', opacity: 0.96, depth: 9, tone: 'highlight' },
    { id: 'page-contact-3', src: forme8, top: '60%', right: '-4vw', size: 'clamp(142px, 15vw, 260px)', rotate: '14deg', opacity: 0.84, depth: 8, tone: 'soft' },
    { id: 'page-contact-4', src: forme1, top: '84%', left: '-4vw', size: 'clamp(136px, 14vw, 240px)', rotate: '-16deg', opacity: 0.8, depth: 8, tone: 'primary' }
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
