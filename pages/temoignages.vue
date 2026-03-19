<template>
  <section class="testimonials-page">
    <div class="container">
      <div class="testimonials-head">
        <DecorativeShapes class="testimonials-head__decor" density="low" variant="hero" :items="headDecorItems" />
        <p class="eyebrow">Leurs avis</p>
        <h1>Témoignages</h1>
        <p class="testimonials-intro">
          Quelques retours issus des <strong>accompagnements et formations</strong> menés auprès des professionnelles de
          la <strong>petite enfance</strong> et de l’animation.
        </p>
      </div>

      <div class="testimonials-stage">
        <div class="testimonials-stage__intro">
          <p class="testimonials-stage__label">Retours de terrain</p>
          <h2>Des paroles très directes, des situations concrètes, et des effets visibles dans la pratique.</h2>
          <div class="testimonials-controls">
            <button class="testimonials-control" type="button" aria-label="Témoignage précédent" @click="goToPrevious">
              <span aria-hidden="true">←</span>
            </button>
            <button class="testimonials-control" type="button" aria-label="Témoignage suivant" @click="goToNext">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div class="testimonials-carousel" @mouseenter="isAutoPlaying = false" @mouseleave="resumeAutoplay">
          <div
            ref="trackRef"
            class="testimonials-track"
            :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
          >
            <article
              v-for="(testimonial, index) in testimonials"
              :key="testimonial.name"
              class="testimonial-slide"
              :class="`testimonial-slide--${testimonial.theme}`"
              :aria-hidden="activeIndex === index ? 'false' : 'true'"
            >
              <div class="testimonial-bubble">
                <div class="testimonial-bubble__portrait">
                  <img :src="testimonial.portrait" :alt="testimonial.name" loading="lazy">
                </div>

                <div class="testimonial-bubble__meta">
                  <p class="testimonial-bubble__name">{{ testimonial.name }}</p>
                  <p class="testimonial-bubble__role">{{ testimonial.role }}</p>
                </div>

                <p class="testimonial-bubble__quote" v-html="testimonial.quote" />
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="testimonials-summary">
        <article v-for="item in summaryPoints" :key="item.title">
          <p class="testimonials-summary__title">{{ item.title }}</p>
          <p v-html="item.text" />
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

import fabiennePortrait from '~/assets/img/temoignages/fabienne-t.jpeg'
import keishaPortrait from '~/assets/img/temoignages/keisha-t.jpeg'
import melissaPortrait from '~/assets/img/temoignages/melissa-v.jpeg'
import nicolePortrait from '~/assets/img/temoignages/nicole-g.jpeg'
import samiaPortrait from '~/assets/img/temoignages/samia-m.jpeg'
import forme17 from '~/assets/img/formes/17.svg'

type TestimonialTheme = 'sun' | 'lagoon' | 'coral' | 'blue'

type Testimonial = {
  name: string
  role: string
  quote: string
  portrait: string
  theme: TestimonialTheme
}

const testimonials: Testimonial[] = [
  {
    name: 'Nicole G.',
    role: 'Enseignante',
    quote:
      'Le groupe classe et la <strong>bienveillance des formatrices</strong> nous entraînent, parfois par simple mimétisme, à faire preuve de bienveillance à notre tour, à <strong>chercher des solutions</strong> plutôt qu’à rester enfermées dans nos problèmes.',
    portrait: nicolePortrait,
    theme: 'sun'
  },
  {
    name: 'Samia M.',
    role: 'Éducatrice de jeunes enfants',
    quote: '<strong>Tous les professionnels</strong> devraient être formés.',
    portrait: samiaPortrait,
    theme: 'lagoon'
  },
  {
    name: 'Melissa V.',
    role: 'Infirmière puéricultrice',
    quote:
      'Grâce à cette formation, je me sens enrichie d’informations et de connaissances qui me permettent d’<strong>avancer avec confiance et assurance</strong>.',
    portrait: melissaPortrait,
    theme: 'lagoon'
  },
  {
    name: 'Keisha T.',
    role: 'Animatrice ALSH',
    quote: 'Je repars avec un <strong>état d’esprit plus calme</strong>, plus attentif, et des <strong>repères très concrets</strong> pour la suite.',
    portrait: keishaPortrait,
    theme: 'blue'
  },
  {
    name: 'Fabienne T.',
    role: 'Responsable animation chargée de projet',
    quote:
      'Au retour de formation, je trouve mes animateurs changés: avec une <strong>posture professionnelle qui a évolué</strong>, une attitude plus posée et bienveillante envers les jeunes de la MJC.',
    portrait: fabiennePortrait,
    theme: 'coral'
  }
]

const summaryPoints = [
  {
    title: 'Une parole concrète',
    text: 'Chaque retour met en avant des <strong>changements visibles</strong> dans la posture, les relations et la <strong>confiance professionnelle</strong>.'
  },
  {
    title: 'Une ambiance vivante',
    text: 'Le dispositif de formation est souvent cité pour sa <strong>bienveillance</strong>, son caractère ludique et sa <strong>mise en pratique immédiate</strong>.'
  },
  {
    title: 'Un impact durable',
    text: 'Les témoignages parlent moins de théorie que d’<strong>effets utiles sur le terrain</strong>, dans les équipes et dans les accompagnements.'
  }
]

const headDecorItems = [
  {
    id: 'hero-a-large',
    src: forme17,
    top: '0.2rem',
    right: '-6vw',
    size: 'clamp(132px, 16vw, 240px)',
    rotate: '10deg',
    opacity: 1,
    depth: 18,
    tone: 'accent'
  }
]

const activeIndex = ref(0)
const isAutoPlaying = ref(true)
const trackRef = ref<HTMLElement | null>(null)

let autoplayTimer: ReturnType<typeof setInterval> | null = null

const goTo = (index: number) => {
  activeIndex.value = (index + testimonials.length) % testimonials.length
}

const goToPrevious = () => {
  goTo(activeIndex.value - 1)
}

const goToNext = () => {
  goTo(activeIndex.value + 1)
}

const startAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
  }

  autoplayTimer = setInterval(() => {
    if (!isAutoPlaying.value) {
      return
    }

    goToNext()
  }, 4600)
}

const resumeAutoplay = () => {
  isAutoPlaying.value = true
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
  }
})
</script>

<style scoped>
:global(.site-main) {
  padding-block: clamp(3.5rem, 6vw, 5.5rem);
}

.testimonials-page {
  padding-bottom: var(--space-7);
}

.testimonials-head {
  position: relative;
  display: grid;
  gap: var(--space-3);
  margin-bottom: clamp(2.8rem, 5vw, 4.5rem);
  padding-top: var(--space-6);
  overflow: visible;
}

.testimonials-head h1 {
  max-width: 10ch;
  margin-bottom: 0;
  color: var(--color-accent);
}

.testimonials-head__decor {
  overflow: visible;
}

.testimonials-intro {
  max-width: 44rem;
  font-size: var(--font-size-300);
}

.testimonials-stage {
  display: grid;
  grid-template-columns: 4fr 8fr;
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: start;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.testimonials-stage__intro {
  display: grid;
  gap: var(--space-4);
  align-content: start;
  padding-top: var(--space-5);
}

.testimonials-stage__label {
  margin: 0;
  color: var(--color-secondary);
  font-size: var(--font-size-100);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.testimonials-stage__intro h2 {
  max-width: 12ch;
  margin-bottom: 0;
}

.testimonials-controls {
  display: flex;
  gap: 0.7rem;
}

.testimonials-control {
  width: 3rem;
  height: 3rem;
  border: 0;
  border-radius: 999px;
  background: var(--color-accent);
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  transition:
    transform var(--transition-fast),
    color var(--transition-fast),
    background-color var(--transition-fast);
}

.testimonials-control:hover,
.testimonials-control:focus-visible {
  transform: translateY(-2px);
  background: color-mix(in srgb, var(--color-accent) 86%, black);
}

.testimonials-carousel {
  position: relative;
  overflow: hidden;
}

.testimonials-track {
  display: flex;
  transition: transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.testimonial-slide {
  flex: 0 0 100%;
  min-width: 0;
  padding: 1rem;
}

.testimonial-bubble {
  position: relative;
  display: grid;
  align-content: start;
  min-height: clamp(25rem, 45vw, 33rem);
  padding: clamp(2rem, 4vw, 3rem);
  color: white;
  border-radius: clamp(2rem, 3vw, 3rem);
}

.testimonial-slide--sun .testimonial-bubble {
  background: #f4b545;
}

.testimonial-slide--lagoon .testimonial-bubble {
  background: #4abcc8;
}

.testimonial-slide--coral .testimonial-bubble {
  background: #ec7368;
}

.testimonial-slide--blue .testimonial-bubble {
  background: #5f87ca;
}

.testimonial-bubble__portrait {
  width: clamp(4.8rem, 8vw, 6.2rem);
  aspect-ratio: 1;
  margin-bottom: var(--space-4);
  border: 4px solid rgba(255, 255, 255, 0.82);
  overflow: hidden;
  border-radius: 999px;
}

.testimonial-bubble__portrait img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-bubble__meta {
  margin-bottom: var(--space-5);
}

.testimonial-bubble__name {
  margin: 0;
  color: white;
  font-size: var(--font-size-300);
  font-weight: var(--font-weight-semibold);
}

.testimonial-bubble__role {
  margin: 0.12rem 0 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: var(--font-size-100);
  font-style: italic;
}

.testimonial-bubble__quote {
  max-width: 30ch;
  margin: 0;
  color: white;
  font-size: clamp(1.08rem, 0.94rem + 0.55vw, 1.42rem);
  line-height: 1.55;
  font-weight: 600;
}

.testimonials-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-5);
  margin-bottom: var(--space-6);
  padding-top: var(--space-5);
  border-top: 1px solid color-mix(in srgb, var(--color-border) 82%, white);
}

.testimonials-summary article {
  display: grid;
  gap: var(--space-2);
}

.testimonials-summary__title {
  margin: 0;
  color: var(--color-secondary);
  font-size: var(--font-size-100);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 980px) {
  .testimonials-stage {
    grid-template-columns: 1fr;
  }

  .testimonials-stage__intro h2 {
    max-width: 16ch;
  }

  .testimonial-bubble {
    min-height: 23rem;
  }

  .testimonials-summary {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  :deep(.decorative-shapes__item--hero-a-large) {
    display: none;
  }

  .testimonial-slide {
    padding: 0;
  }

  .testimonial-bubble {
    padding: 1.4rem;
  }

  .testimonial-bubble__quote {
    max-width: none;
  }
}
</style>
