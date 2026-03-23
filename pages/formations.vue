<template>
  <section class="formations-page">
    <div class="container">
      <div class="formations-head">
        <p class="eyebrow">Nos thématiques de formations</p>
        <h1>Formations</h1>
        <p class="formations-intro">
          Des thématiques conçues pour répondre à des <strong>besoins de terrain récurrents</strong>, avec une approche
          <strong>concrète, progressive et immédiatement mobilisable</strong>.
        </p>
      </div>

      <div class="formations-layout">
        <aside class="formations-aside theme-tint-panel">
          <p class="formations-aside__label">Méthode</p>
          <h2>Une offre claire, adaptable et pensée pour vos réalités de terrain.</h2>
          <p>
            Les contenus peuvent être proposés en <strong>sessions ponctuelles</strong>, en
            <strong>cycles de montée en compétence</strong> ou dans des formats ajustés à votre structure.
          </p>
          <div class="formations-aside__notes">
            <p><strong>présentiel ou distanciel</strong></p>
            <p><strong>professionnels, équipes et structures</strong></p>
            <p><strong>formats adaptables selon le contexte</strong></p>
          </div>
          <div class="formations-aside__trust">
            <p class="formations-aside__trust-title">Repères utiles</p>
            <ul>
              <li>catalogue téléchargeable immédiatement</li>
              <li>formats ajustables à votre réalité</li>
              <li>échange préalable possible avant décision</li>
            </ul>
          </div>
          <div class="cta-row">
            <BaseButton :href="CATALOGUE_DOWNLOAD_URL" :download="CATALOGUE_DOWNLOAD_NAME">Télécharger le catalogue</BaseButton>
            <BaseButton to="/contact" variant="secondary">Parler de votre besoin</BaseButton>
          </div>
        </aside>

        <div class="formations-list" aria-label="Liste des thématiques de formations">
          <article
            v-for="item in trainingThemes"
            :key="item.title"
            class="formation-item"
            :style="{ '--formation-color': item.color }"
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
import { CATALOGUE_DOWNLOAD_NAME, CATALOGUE_DOWNLOAD_URL } from '~/utils/catalogueDownload'

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

</script>

<style scoped>
:global(.site-main) {
  padding-block: clamp(3.5rem, 6vw, 5.5rem);
}

.formations-page {
  --page-tint: #2f5d9a;
  --page-cta-fg: #ffffff;
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
  grid-template-columns: minmax(16rem, 4.2fr) minmax(0, 7.8fr);
  gap: clamp(2rem, 3.6vw, 3.6rem);
  align-items: start;
}

.formations-aside {
  position: relative;
  display: grid;
  gap: var(--space-4);
  align-content: start;
  padding: clamp(1.25rem, 2vw, 1.75rem);
  overflow: visible;
  max-width: 25rem;
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

.formations-aside__trust {
  display: grid;
  gap: 0.6rem;
  padding-top: var(--space-2);
  border-top: 1px solid color-mix(in srgb, var(--color-border) 72%, white);
}

.formations-aside__trust-title {
  margin: 0;
  color: var(--color-secondary);
  font-size: 0.82rem;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.formations-aside__trust ul {
  display: grid;
  gap: 0.6rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.formations-aside__trust li {
  padding-left: 1rem;
  border-left: 2px solid color-mix(in srgb, var(--color-primary) 28%, white);
  color: var(--color-text);
  line-height: 1.55;
}

.formations-list {
  position: relative;
  display: grid;
  gap: 1.15rem;
  padding-left: 0;
}

.formation-item {
  position: relative;
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr);
  gap: 1rem;
  align-items: center;
  background: color-mix(in srgb, white 72%, transparent);
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

  .formations-aside {
    max-width: none;
  }

  .formations-aside h2 {
    max-width: 16ch;
  }

  .formation-item {
    margin-left: 0;
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
