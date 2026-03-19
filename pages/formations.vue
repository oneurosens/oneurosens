<template>
  <section class="formations-page">
    <div class="container">
      <div class="formations-head">
        <DecorativeShapes density="low" variant="hero" :items="headDecorItems" />
        <p class="eyebrow">Nos thématiques de formations</p>
        <h1>Formations</h1>
        <p class="formations-intro">
          Une sélection de thématiques construites pour répondre à des <strong>besoins de terrain récurrents</strong>,
          avec une approche <strong>concrète, progressive et directement mobilisable</strong> dans la pratique.
        </p>
      </div>

      <div class="formations-layout">
        <aside class="formations-aside">
          <DecorativeShapes density="low" variant="aside" :items="asideDecorItems" />
          <p class="formations-aside__label">Méthode</p>
          <h2>Une offre pensée comme un parcours clair, lisible et adaptable.</h2>
          <p>
            Les contenus peuvent être proposés en <strong>sessions ponctuelles</strong>, en
            <strong>cycles de montée en compétence</strong> ou en formats ajustés à votre structure.
          </p>
          <div class="formations-aside__notes">
            <p><strong>présentiel ou distanciel</strong></p>
            <p><strong>professionnels, équipes et structures</strong></p>
            <p><strong>formats adaptables selon le contexte</strong></p>
          </div>
          <div class="cta-row">
            <BaseButton to="/telecharger-le-catalogue">Télécharger le catalogue</BaseButton>
            <BaseButton to="/contact" variant="secondary">Construire un parcours</BaseButton>
          </div>
        </aside>

        <div class="formations-list" aria-label="Liste des thématiques de formations">
          <div class="formations-list__line" aria-hidden="true" />
          <article
            v-for="(item, index) in trainingThemes"
            :key="item.title"
            class="formation-item"
            :style="{
              '--formation-color': item.color,
              '--formation-offset': formationOffsets[index] ?? '0rem'
            }"
          >
            <div class="formation-item__icon">
              <img :src="item.icon" :alt="''" loading="lazy">
            </div>
            <div class="formation-item__content">
              <h3>{{ item.title }}</h3>
              <p v-html="item.text" />
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import icon1 from '~/assets/img/formations/icone-1.png'
import icon2 from '~/assets/img/formations/icone-2.png'
import icon3 from '~/assets/img/formations/icone-3.png'
import icon4 from '~/assets/img/formations/icone-4.png'
import icon5 from '~/assets/img/formations/icone-5.png'
import icon6 from '~/assets/img/formations/icone-6.png'
import icon7 from '~/assets/img/formations/icone-7.png'
import icon8 from '~/assets/img/formations/icone-8.png'
import icon9 from '~/assets/img/formations/icone-9.png'
import icon10 from '~/assets/img/formations/icone-10.png'
import icon11 from '~/assets/img/formations/icone-11.png'
import forme7 from '~/assets/img/formes/7.svg'
import forme11 from '~/assets/img/formes/11.svg'

const trainingThemes = [
  {
    icon: icon1,
    color: '#f1c54b',
    title: 'Comprendre les différents développements de l’enfant',
    text: 'De la <strong>naissance à l’adolescence</strong>, pour mieux <strong>observer, ajuster et accompagner</strong>.'
  },
  {
    icon: icon2,
    color: '#8ed3de',
    title: 'S’initier aux neurosciences affectives et sociales',
    text: 'Relier les <strong>apports scientifiques</strong> aux <strong>enjeux relationnels du quotidien</strong>.'
  },
  {
    icon: icon3,
    color: '#4f72bf',
    title: 'Accompagner les habiletés motrices globales et la sensorialité',
    text: 'Favoriser une <strong>lecture plus fine</strong> du corps, du mouvement et des <strong>besoins de l’enfant</strong>.'
  },
  {
    icon: icon4,
    color: '#e6827e',
    title: 'Développer et animer des ateliers en compétences psychosociales',
    text: 'Concevoir des <strong>temps concrets</strong> pour soutenir les interactions et la <strong>régulation</strong>.'
  },
  {
    icon: icon5,
    color: '#de8bb6',
    title: 'Identifier les enjeux de la parentalité',
    text: 'Clarifier les <strong>repères d’accompagnement</strong> et mieux situer les <strong>besoins des familles</strong>.'
  },
  {
    icon: icon6,
    color: '#f0c84d',
    title: 'Programme national des 1000 premiers jours de vie',
    text: 'Mieux comprendre cette <strong>période clé</strong> et ses implications dans l’accompagnement.'
  },
  {
    icon: icon7,
    color: '#8ad0db',
    title: 'Favoriser l’accueil et l’inclusion de l’enfant en situation de handicap',
    text: 'Adapter <strong>l’environnement, les postures et les pratiques</strong> au plus près du terrain.'
  },
  {
    icon: icon8,
    color: '#506fc0',
    title: 'Aménager un espace Snoezelen',
    text: 'Penser un <strong>cadre sensoriel cohérent, sécurisant et utile</strong> dans les usages quotidiens.'
  },
  {
    icon: icon9,
    color: '#de8bb6',
    title: 'Favoriser son écoute active et sa posture empathique',
    text: 'Développer une <strong>présence professionnelle</strong> plus apaisée, plus stable et plus ajustée.'
  },
  {
    icon: icon10,
    color: '#e16e74',
    title: 'Communiquer avec bienveillance',
    text: '<strong>Mieux coopérer</strong>, prévenir les tensions et améliorer la <strong>qualité relationnelle</strong>.'
  },
  {
    icon: icon11,
    color: '#d96d63',
    title: 'Prévention de l’épuisement professionnel',
    text: 'Repérer les <strong>signaux faibles</strong> et renforcer des <strong>ressources durables</strong> pour les équipes.'
  }
]

const formationOffsets = ['0rem', '1.4rem', '0.45rem', '1.8rem', '0.7rem', '1.55rem', '0.35rem', '1.7rem', '0.6rem', '1.3rem', '0.25rem']

const headDecorItems = [
  {
    id: 'formations-head-shape',
    src: forme11,
    top: '-2%',
    right: '-5vw',
    size: 'clamp(96px, 12vw, 186px)',
    rotate: '4deg',
    opacity: 0.92,
    depth: 14,
    zIndex: 1,
    tone: 'accent'
  }
]

const asideDecorItems = [
  {
    id: 'formations-aside-shape',
    src: forme7,
    bottom: '-4%',
    left: '-7vw',
    size: 'clamp(96px, 11vw, 172px)',
    rotate: '-18deg',
    opacity: 0.28,
    depth: 8,
    zIndex: 0,
    tone: 'soft'
  }
]
</script>

<style scoped>
:global(.site-main) {
  padding-block: clamp(3.5rem, 6vw, 5.5rem);
}

.formations-page {
  padding-bottom: var(--space-7);
}

.formations-head {
  position: relative;
  display: grid;
  gap: var(--space-3);
  margin-bottom: clamp(2.6rem, 5vw, 4rem);
  padding-top: var(--space-6);
}

.formations-head h1 {
  max-width: 12ch;
  margin-bottom: 0;
  color: var(--color-accent);
}

.formations-intro {
  max-width: 44rem;
  font-size: var(--font-size-300);
}

.formations-layout {
  display: grid;
  grid-template-columns: 4fr 8fr;
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: start;
}

.formations-aside {
  position: relative;
  display: grid;
  gap: var(--space-4);
  align-content: start;
  padding-top: var(--space-4);
  overflow: visible;
}

.formations-aside__label {
  margin: 0;
  color: var(--color-secondary);
  font-size: var(--font-size-100);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.formations-aside h2 {
  max-width: 12ch;
  margin-bottom: 0;
}

.formations-aside__notes {
  display: grid;
  gap: var(--space-3);
}

.formations-aside__notes p {
  margin: 0;
  padding-left: 1rem;
  border-left: 2px solid color-mix(in srgb, var(--color-highlight) 54%, white);
  color: var(--color-text);
  text-transform: lowercase;
}

.formations-list {
  position: relative;
  display: grid;
  gap: 1rem;
  padding-left: clamp(1rem, 2vw, 1.6rem);
}

.formations-list__line {
  position: absolute;
  top: 2.5rem;
  bottom: 2.5rem;
  left: 2.25rem;
  width: 2px;
  background:
    repeating-linear-gradient(
      to bottom,
      color-mix(in srgb, var(--color-secondary) 55%, white) 0,
      color-mix(in srgb, var(--color-secondary) 55%, white) 6px,
      transparent 6px,
      transparent 14px
    );
  opacity: 0.7;
}

.formation-item {
  position: relative;
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr);
  gap: 1rem;
  align-items: center;
  margin-left: var(--formation-offset);
}

.formation-item:nth-child(odd) {
  margin-left: 0;
}

.formation-item__icon {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 4.5rem;
  height: 4.5rem;
  background: var(--formation-color);
  border-radius: 999px;
}

.formation-item__icon img {
  width: 2.8rem;
  height: 2.8rem;
  object-fit: contain;
}

.formation-item__content {
  min-width: 0;
  padding: 1rem 1.35rem;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 10px 24px rgba(45, 53, 63, 0.06);
}

.formation-item__content h3 {
  margin: 0 0 0.3rem;
  color: var(--color-text);
  font-size: clamp(1rem, 0.95rem + 0.18vw, 1.12rem);
  line-height: 1.35;
}

.formation-item__content p {
  margin: 0;
  max-width: none;
  font-size: var(--font-size-100);
  line-height: 1.5;
}

@media (max-width: 980px) {
  .formations-layout {
    grid-template-columns: 1fr;
  }

  .formations-aside h2 {
    max-width: 16ch;
  }

  .formations-list__line {
    left: 2rem;
  }

  .formation-item {
    margin-left: 0;
  }

  :deep(.decorative-shapes__item--formations-head-shape),
  :deep(.decorative-shapes__item--formations-aside-shape) {
    display: none;
  }
}

@media (max-width: 640px) {
  .formations-list {
    padding-left: 0;
  }

  .formations-list__line {
    display: none;
  }

  .formation-item {
    grid-template-columns: 3.8rem minmax(0, 1fr);
    gap: 0.8rem;
  }

  .formation-item__icon {
    width: 3.8rem;
    height: 3.8rem;
  }

  .formation-item__content {
    padding: 0.95rem 1rem;
  }
}
</style>
