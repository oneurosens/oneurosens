<template>
  <section class="qsn-page">
    <div class="container qsn-flow">
      <section class="qsn-hero" aria-labelledby="qsn-title">
        <DecorativeShapes density="low" variant="hero" :items="heroDecorItems" />
        <div class="qsn-hero__intro">
          <p class="eyebrow">Un organisme de formation porté par le terrain, la relation et la transmission.</p>
          <h1 id="qsn-title">Qui sommes-nous ?</h1>
          <p class="qsn-hero__lead">
            <strong>Ô Neuro Sens Formations</strong> est un organisme de formation certifié <strong>Qualiopi</strong>
            depuis février 2024. Il est dirigé par Maryline TISSOT et Lisa CHEREAU SOUDANI, deux professionnelles
            engagées dans la <strong>transmission de pratiques utiles et applicables</strong>.
          </p>
        </div>

        <div class="qsn-hero__grid">
          <div class="qsn-highlights">
            <article class="qsn-highlight">
              <img :src="cible" alt="Objectifs" class="qsn-highlight__icon" loading="lazy">
              <div>
                <p class="qsn-highlight__title">Notre mission</p>
                <p>
                  <strong>Sensibiliser, informer et former</strong> les professionnels oeuvrant dans le domaine de
                  l’enfance, de la famille, de l’éducation et du handicap, ainsi que les parents désireux d’améliorer
                  les <strong>relations intra-familiales</strong>.
                </p>
              </div>
            </article>

            <article class="qsn-highlight">
              <img :src="calendar" alt="Temps forts" class="qsn-highlight__icon" loading="lazy">
              <div>
                <p class="qsn-highlight__title">Un accompagnement dans la durée</p>
                <p>
                  Nous vous accompagnons dans vos établissements <strong>tout au long de l’année</strong>, avec des
                  formations pré-programmées adaptables à vos besoins, ainsi que des <strong>temps forts réguliers</strong>
                  sous forme de conférences ou d’ateliers.
                </p>
              </div>
            </article>

            <article class="qsn-highlight">
              <img :src="puzzle" alt="Équipe pluridisciplinaire" class="qsn-info-strip__icon" loading="lazy">
              <div>
                <p class="qsn-info-strip__title">Une équipe pluridisciplinaire</p>
                <p>
                  Des <strong>professionnels du terrain</strong> et des formateurs pour adultes, complétés par des
                  <strong>experts</strong> selon les domaines d’intervention.
                </p>
              </div>
            </article>

            <article class="qsn-highlight">
              <img :src="map" alt="Lieux de formation" class="qsn-info-strip__icon" loading="lazy">
              <div>
                <p class="qsn-info-strip__title">Les formations peuvent se dérouler</p>
                <ul>
                  <li>dans vos locaux</li>
                  <li>dans notre centre de formation</li>
                </ul>
                <p><strong>1315 Route de Cocoyer au Gosier</strong></p>
                <p><strong>Guadeloupe</strong></p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="qsn-team" aria-labelledby="team-title">
        <div class="qsn-team__head">
          <p class="eyebrow">Deux profils complémentaires, une même exigence de qualité humaine et professionnelle.</p>
          <h2 id="team-title">L'équipe</h2>
          <p class="qsn-team__lead">
            La direction de l'organisme s'appuie sur des <strong>profils de terrain</strong> aux compétences distinctes
            mais convergentes: <strong>former, accompagner et transmettre avec clarté</strong>.
          </p>
        </div>

        <div class="leaders-grid">
          <article class="leader-card leader-card--yellow">
            <div class="leader-card__head">
              <img :src="portraitMaryline" alt="Maryline TISSOT" class="leader__portrait" loading="lazy">
              <div>
                <h3 class="leader__name">Maryline TISSOT</h3>
                <p class="leader__role">Formatrice pour adultes et infirmière puéricultrice</p>
              </div>
            </div>

            <p class="leader__text">
              Passionnée par la <strong>communication néonatale</strong>, le développement de l’enfant, la psychologie et
              le <strong>développement du cerveau</strong>.
            </p>

            <div class="leader__formations">
              <p class="leader__subtitle">Formations :</p>
              <ul class="leader__list">
                <li><img :src="bulletJaune" alt="" aria-hidden="true">Neurosciences affectives et sociales</li>
                <li><img :src="bulletJaune" alt="" aria-hidden="true">Approche Snoezelen</li>
                <li><img :src="bulletJaune" alt="" aria-hidden="true">Échelle d’évaluation néonatale Brazelton</li>
                <li><img :src="bulletJaune" alt="" aria-hidden="true">Communication non violente</li>
                <li><img :src="bulletJaune" alt="" aria-hidden="true">Massage bébé IAIM et MISA</li>
              </ul>
            </div>

            <p class="leader__quote">“La sensorialité est un axe primordial dans mes transmissions.”</p>
          </article>

          <article class="leader-card leader-card--coral">
            <div class="leader-card__head">
              <img :src="portraitLisa" alt="Lisa CHEREAU SOUDANI" class="leader__portrait" loading="lazy">
              <div>
                <h3 class="leader__name">Lisa CHEREAU SOUDANI</h3>
                <p class="leader__role">Formatrice pour adultes et assistante de service social</p>
              </div>
            </div>

            <p class="leader__text">
              Passionnée par la <strong>relation d’aide</strong>, les techniques de communication bienveillante, la
              parentalité et le développement des <strong>compétences psycho-sociales</strong> de l’enfant et de
              l’adolescent.
            </p>

            <div class="leader__formations">
              <p class="leader__subtitle">Formations :</p>
              <ul class="leader__list">
                <li><img :src="bulletRouge" alt="" aria-hidden="true">Programmation neuro-linguistique</li>
                <li><img :src="bulletRouge" alt="" aria-hidden="true">Braingym et réflexes archaïques IMP</li>
              </ul>
            </div>

            <p class="leader__quote">
              “Également <strong>Sophrologue</strong>, mon approche s’oriente vers la prévention du stress et de
              l’épuisement professionnel.”
            </p>
          </article>
        </div>
      </section>

      <section class="qsn-values" aria-labelledby="values-title">
        <DecorativeShapes density="low" variant="editorial" :items="valuesDecorItems" />
        <div class="qsn-values__head">
          <p class="eyebrow">Une pédagogie rigoureuse, articulée autour de l'humain, de la science et du terrain.</p>
          <h2 id="values-title">Nos valeurs</h2>
          <p class="values__quote">
            Nous ne sommes pas des <strong>êtres logiques avec des émotions</strong>, mais des <strong>êtres émotifs</strong>
            qui parfois sont logiques
          </p>
          <p class="values__author">Antonio DAMASIO</p>
        </div>

        <div class="qsn-values__body">
          <figure class="values-banner">
            <img :src="bandeau" alt="Enfant en activité" loading="lazy">
          </figure>

          <div class="values-grid">
            <div class="values-card values-card--lead">
              <p><strong>Ô Neuro Sens est un centre de formation porté sur l'humain.</strong></p>
            </div>
            <div class="values-card">
              <p>Nous avons à cœur de vous accompagner dans votre <strong>épanouissement professionnel</strong>.</p>
            </div>
            <div class="values-card">
              <p>
                Notre pédagogie allie les <strong>dernières données scientifiques</strong> aux <strong>valeurs humaines
                universelles</strong>, ce qui nous permet d'être innovants et performants dans notre offre de formation.
              </p>
            </div>
          </div>
        </div>

        <p class="values-text__end">“Ensemble, donnons du sens à vos pratiques”</p>

        <div class="qsn-next-actions">
          <p>Vous souhaitez maintenant explorer les sujets traités ou cadrer une demande ?</p>
          <div class="cta-row">
            <BaseButton :href="CATALOGUE_DOWNLOAD_URL" :download="CATALOGUE_DOWNLOAD_NAME">Télécharger le catalogue</BaseButton>
            <BaseButton to="/contact" variant="secondary">Parler de votre besoin</BaseButton>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import bandeau from '~/assets/img/qui-sommes-nous/bandeau-qsn.jpg'
import portraitLisa from '~/assets/img/qui-sommes-nous/portrait-lisa.png'
import portraitMaryline from '~/assets/img/qui-sommes-nous/portrait-maryline.png'
import bulletRouge from '~/assets/img/qui-sommes-nous/bullet-rouge.png'
import bulletJaune from '~/assets/img/qui-sommes-nous/bullet-jaune.png'
import cible from '~/assets/img/qui-sommes-nous/cible.png'
import puzzle from '~/assets/img/qui-sommes-nous/puzzle.png'
import calendar from '~/assets/img/qui-sommes-nous/calendar.png'
import map from '~/assets/img/qui-sommes-nous/map.png'
import forme20 from '~/assets/img/formes/20.svg'
import { CATALOGUE_DOWNLOAD_NAME, CATALOGUE_DOWNLOAD_URL } from '~/utils/catalogueDownload'

const heroDecorItems = [
  {
    id: 'qsn-hero-shape',
    src: forme20,
    top: '0.4rem',
    right: '-7vw',
    size: 'clamp(180px, 20vw, 320px)',
    rotate: '0deg',
    opacity: 1,
    depth: 8,
    zIndex: 2,
    tone: 'accent'
  }
]

const valuesDecorItems = [
  {
    id: 'values-shape-side',
    src: forme20,
    top: '10%',
    right: '-4.5vw',
    size: 'clamp(130px, 15vw, 240px)',
    rotate: '-8deg',
    opacity: 1,
    depth: 10,
    zIndex: 3,
    tone: 'highlight'
  }
]
</script>

<style scoped>
p {
  max-width: none;
}

:global(.site-main) {
  padding-block: clamp(3.5rem, 6vw, 5.5rem);
}

.qsn-page {
  padding-bottom: var(--space-7);
}

.qsn-flow {
  display: grid;
  gap: clamp(4rem, 6vw, 5.4rem);
}

.qsn-hero,
.qsn-team,
.qsn-values {
  position: relative;
}

.qsn-hero {
  display: grid;
  gap: clamp(2rem, 3vw, 3rem);
  padding-top: var(--space-5);
}

.qsn-hero__intro {
  display: grid;
  gap: var(--space-3);
  max-width: 58rem;
}

.qsn-hero__intro h1 {
  margin-bottom: 0;
  color: var(--color-accent);
}

.qsn-hero__lead {
  max-width: 44rem;
  font-size: var(--font-size-300);
  color: var(--color-text);
}

.qsn-hero__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.6rem, 2.6vw, 2.4rem);
  align-items: start;
  max-width: 72rem;
}

.qsn-highlights {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.8rem, 2.6vw, 2.9rem);
  align-items: start;
}

.qsn-highlight {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 1.1rem;
  align-items: start;
  padding-top: var(--space-4);
  border-top: 1px solid color-mix(in srgb, var(--color-border-strong) 52%, white);
  min-height: 100%;
}

.qsn-highlight__icon,
.qsn-info-strip__icon {
  width: 76px;
  height: 76px;
  object-fit: contain;
}

.qsn-highlight__title,
.qsn-info-strip__title {
  margin: 0 0 0.35rem;
  color: var(--color-text);
  font-size: var(--font-size-200);
  font-weight: var(--font-weight-semibold);
}

.qsn-highlight ul {
  margin: 0 0 var(--space-2);
  padding-left: 1rem;
}

.qsn-highlight:last-child p {
  line-height: 1.34;
}

.qsn-team {
  display: grid;
  gap: clamp(1.8rem, 3vw, 2.8rem);
}

.qsn-team__head {
  display: grid;
  gap: var(--space-3);
  justify-items: center;
  text-align: center;
  padding-top: var(--space-3);
  border-top: 2px solid color-mix(in srgb, var(--color-accent) 20%, white);
}

.qsn-team__head h2 {
  margin-bottom: 0;
}

.qsn-team__lead {
  max-width: 34rem;
  margin: 0;
  color: #454850;
}

.leaders-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(2rem, 3vw, 3rem);
}

.leader-card {
  display: grid;
  gap: var(--space-4);
  padding-top: var(--space-4);
  border-top: 3px solid transparent;
  background: linear-gradient(180deg, color-mix(in srgb, white 82%, var(--color-surface-soft)) 0%, transparent 100%);
}

.leader-card--yellow {
  border-top-color: #efb03f;
}

.leader-card--coral {
  border-top-color: #e47673;
}

.leader-card__head {
  display: grid;
  justify-items: center;
  gap: 1rem;
  text-align: center;
}

.leader__portrait {
  width: 132px;
  height: 132px;
  object-fit: contain;
}

.leader__name {
  margin: 0 0 0.2rem;
  font-size: clamp(1.24rem, 1.04rem + 0.35vw, 1.42rem);
  line-height: 1.12;
}

.leader-card--yellow .leader__name {
  color: #efb03f;
}

.leader-card--coral .leader__name {
  color: #e47673;
}

.leader__role {
  margin: 0;
  color: #53565d;
  font-weight: 700;
  line-height: 1.35;
  text-align: center;
}

.leader__text,
.leader__quote {
  margin: 0;
  color: #2f3237;
  line-height: 1.66;
}

.leader__subtitle {
  margin: 0 0 0.7rem;
  color: var(--color-text);
  font-weight: 700;
}

.leader__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.55rem;
}

.leader__list li {
  display: grid;
  grid-template-columns: 14px 1fr;
  gap: 0.5rem;
  align-items: start;
  color: #2f3237;
}

.leader__list img {
  width: 10px;
  height: 10px;
  margin-top: 0.45rem;
}

.qsn-values {
  display: grid;
  gap: clamp(1.8rem, 3vw, 2.6rem);
  padding-top: var(--space-3);
}

.qsn-values__head {
  display: grid;
  gap: var(--space-3);
  padding-top: var(--space-3);
  border-top: 2px solid color-mix(in srgb, var(--color-accent) 20%, white);
}

.qsn-values__head h2 {
  margin: 0;
  color: var(--color-accent);
  font-size: clamp(2.25rem, 1.9rem + 1.25vw, 3.2rem);
}

.values__quote {
  margin: 0;
  color: #33549b;
  font-size: clamp(1.2rem, 1.08rem + 0.35vw, 1.45rem);
  font-weight: 700;
  line-height: 1.4;
}

.values__author {
  margin: 0;
  color: #3f5ea0;
}

.values-banner {
  margin: 0;
}

.values-banner img {
  display: block;
  width: 100%;
  height: auto;
}

.qsn-values__body {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.6rem, 2.8vw, 2.4rem);
  align-items: start;
}

.values-grid {
  display: grid;
  gap: 1.1rem;
  align-items: start;
  max-width: 54rem;
  margin-inline: auto;
  text-align: center;
}

.values-card {
  padding-top: 0;
  border-top: 0;
}

.values-card p {
  margin: 0;
  color: #34373c;
  line-height: 1.66;
}

.values-card--lead p {
  color: var(--color-accent);
  font-size: clamp(1.02rem, 0.98rem + 0.2vw, 1.14rem);
  font-weight: 700;
}

.values-text__end {
  width: fit-content;
  margin: 0 auto;
  padding: 0.85rem 1.1rem 0.7rem;
  border-left: 3px solid color-mix(in srgb, var(--color-accent) 46%, white);
  color: #171717;
  font-size: clamp(1.15rem, 1.08rem + 0.3vw, 1.32rem);
  font-style: italic;
  font-weight: 700;
  text-align: center;
  background: color-mix(in srgb, white 86%, var(--color-soft));
}

.qsn-next-actions {
  display: grid;
  gap: var(--space-4);
  justify-items: center;
  padding-top: var(--space-4);
  border-top: 1px solid color-mix(in srgb, var(--color-border) 74%, white);
}

.qsn-next-actions p {
  margin: 0;
  max-width: 42rem;
  text-align: center;
  color: var(--color-text);
  font-weight: var(--font-weight-semibold);
}

.qsn-values::after {
  content: "";
  display: block;
  width: min(100%, 72rem);
  height: 1px;
  margin-top: clamp(1.25rem, 2vw, 1.8rem);
  background: color-mix(in srgb, var(--color-border-strong) 46%, white);
}

@media (max-width: 980px) {
  .qsn-hero__grid,
  .leaders-grid {
    grid-template-columns: 1fr;
  }

  .qsn-highlights {
    grid-template-columns: 1fr;
  }

  .qsn-team__head,
  .qsn-values__head,
  .qsn-values__body {
    grid-template-columns: 1fr;
  }

  .leader-card__head {
    grid-template-columns: 88px minmax(0, 1fr);
  }

  .leader__portrait {
    width: 88px;
    height: 88px;
  }

  :deep(.decorative-shapes__item--values-shape-side) {
    display: none;
  }

  :deep(.decorative-shapes__item--qsn-hero-shape) {
    display: none;
  }
}

@media (max-width: 640px) {
  .qsn-highlight {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .qsn-highlight__icon,
  .qsn-info-strip__icon {
    width: 62px;
    height: 62px;
  }

  .leader-card__head {
    grid-template-columns: 1fr;
  }
}
</style>
