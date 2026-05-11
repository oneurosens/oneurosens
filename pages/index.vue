<template>
  <div class="home-page">
    <section class="home-hero">
      <div class="container">
        <div class="home-grid home-grid--hero">
          <div class="hero-visuals">
            <figure class="hero-visual hero-visual--logo">
              <img :src="logoInfobulle" alt="Infobulle Ô Neuro Sens" loading="lazy">
            </figure>
          </div>

          <div class="hero-copy">
            <h1 class="hero-title">
              Des formations qui transforment les pratiques de terrain
            </h1>
            <p class="hero-lead">
              <strong>Ô Neuro Sens Formations</strong> conçoit des <strong>formations innovantes</strong> basées sur une
              <strong>pédagogie active</strong> et des outils immédiatement mobilisables pour les
              <strong>professionnels</strong>, les <strong>structures</strong> et les <strong>familles</strong>.
            </p>
          </div>

          <div class="cta-row cta-row--hero">
            <BaseButton :href="CATALOGUE_DOWNLOAD_URL" :download="CATALOGUE_DOWNLOAD_NAME" class="hero-cta-primary">Télécharger le catalogue</BaseButton>
            <BaseButton to="/contact" variant="secondary">Parler de votre besoin</BaseButton>
          </div>
        </div>
      </div>
    </section>

    <section class="home-section home-section--qualiopi">
      <div class="container">
        <div class="qualiopi-section">
          <p class="eyebrow">Un cadre de formation reconnu et structuré</p>
          <a
            :href="QUALIOPI_CERTIFICATE_URL"
            :download="QUALIOPI_CERTIFICATE_NAME"
            class="qualiopi-section__link"
            target="_blank"
            rel="noopener"
            aria-label="Consulter le certificat Qualiopi en PDF"
          >
            <img
              :src="qualiopiLogo"
              alt="Certification Qualiopi - Actions de formation"
              class="qualiopi-section__logo"
              loading="lazy"
            >
          </a>
          <a
            :href="QUALIOPI_CERTIFICATE_URL"
            :download="QUALIOPI_CERTIFICATE_NAME"
            class="qualiopi-section__text-link"
            target="_blank"
            rel="noopener"
          >
            <span class="qualiopi-section__text-link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 3v5h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="m9 14 2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span>Consulter le certificat Qualiopi</span>
          </a>
        </div>
      </div>
    </section>

    <section class="home-section">
      <div class="container">
        <div class="home-grid home-grid--story">
          <figure class="story-photo story-photo--large">
            <img :src="homePhotoThree" alt="Portrait d'un échange professionnel" loading="lazy">
          </figure>

          <div class="story-panel theme-tint-panel">
            <!--<p class="eyebrow">Un organisme ancré dans le terrain, la relation et la transmission.</p>-->
            <h2>Qui sommes-nous ?</h2>
            <p>
              Nous accompagnons les professionnels avec une <strong>pédagogie claire, incarnée et accessible</strong>.
              Chaque intervention apporte des <strong>repères solides</strong> sans se couper du quotidien des équipes.
            </p>
            <p>
              L’objectif n’est pas seulement d’informer. Il s’agit de rendre les pratiques <strong>plus lisibles, plus
              apaisées et plus efficaces</strong> dans les <strong>situations réelles de travail</strong>.
            </p>
                        <ul class="editorial-list">
              <li>des contenus fondés sur les neurosciences affectives et sociales</li>
              <li>des formats vivants, concrets et adaptables</li>
              <li>une posture bienveillante sans perte d’exigence</li>
            </ul>
            <BaseButton to="/qui-sommes-nous" variant="secondary">Découvrir l'organisme</BaseButton>
          </div>
        </div>

      </div>
    </section>

    <section class="home-section">
      <div class="container">
        <div class="home-grid home-grid--themes">
          <div class="themes-side theme-tint-panel">
            <!--<p class="eyebrow">Des formations pensées pour des besoins professionnels concrets et identifiables.</p>-->
            <h2>Nos thématiques de formation</h2>
            <p class="themes-intro">
              Les contenus se déploient en <strong>modules, ateliers ou parcours plus longs</strong>. Ils peuvent être
              <strong>pré-programmés</strong> ou adaptés aux <strong>besoins spécifiques d’une équipe</strong>.
            </p>
            <div class="themes-footer">
              <p class="themes-footnote">Formats mobilisables en équipe, en structure ou dans un parcours plus ciblé.</p>
              <BaseButton to="/formations">Explorer les thématiques</BaseButton>
            </div>
          </div>

          <div class="themes-visual">
            <figure class="themes-visual__photo">
              <img :src="illustrationPhoto" alt="Illustration d'accompagnement et de formation" loading="lazy">
            </figure>
            <div class="themes-quote theme-tint-panel"> 
              <p class="themes-quote__text">Ensemble, donnons du sens à vos pratiques</p>
            </div>
          </div>

          <div class="themes-tiles" aria-label="Thématiques de formation">
            <article>
              <strong>Développement de l’enfant</strong>
              <span>Observer, comprendre, ajuster</span>
            </article>
            <article>
              <strong>Communication bienveillante</strong>
              <span>Mieux coopérer dans les relations quotidiennes</span>
            </article>
            <article>
              <strong>Parentalité et accompagnement</strong>
              <span>Renforcer les appuis des familles</span>
            </article>
            <article>
              <strong>Handicap & inclusion</strong>
              <span>Adapter les pratiques et les environnements</span>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="prestations" class="home-section">
      <div class="container">
        <div class="home-grid home-grid--actions">
          <div class="actions-copy theme-tint-panel">
            <!--<p class="eyebrow">Un accompagnement au plus près du terrain pour passer du constat à l'action.</p>-->
            <h2>Prestations</h2>
            <p>
              Nous intervenons dans les structures pour <strong>observer les situations</strong>, clarifier les besoins,
              soutenir les équipes et <strong>co-construire des réponses adaptées</strong> à la réalité du terrain.
            </p>
            <div class="cta-row">
              <BaseButton to="/contact">Parler de votre besoin</BaseButton>
              <BaseButton :href="CATALOGUE_DOWNLOAD_URL" :download="CATALOGUE_DOWNLOAD_NAME" variant="secondary">Télécharger le catalogue</BaseButton>
            </div>
          </div>

          <div class="actions-editorial">
            <figure class="actions-visual__photo">
              <img :src="homePhotoTwo" alt="Intervention de terrain au sein d'une structure" loading="lazy">
            </figure>
          </div>

          <div class="actions-listing" aria-label="Prestations proposées">
            <h3 class="actions-listing__title">Prestations proposées</h3>
            <ul class="actions-listing__list">
              <li
                v-for="item in serviceOfferings"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="home-section home-section--references">
      <div class="container">
        <div class="references-layout">
          <div class="references-head">
            <!--<p class="eyebrow"></p>-->
            <h2>Ils nous font confiance</h2>
            <p>
              Des <strong>structures, collectivités et partenaires locaux</strong> s’appuient déjà sur Ô Neuro Sens pour
              <strong>former, ajuster ou renforcer leurs pratiques</strong>.
            </p>
            <div class="references-tags" aria-label="Types de structures accompagnées">
              <span class="references-tags__item references-tags__item--blue">Petite enfance</span>
              <span class="references-tags__item references-tags__item--mint">Éducation</span>
              <span class="references-tags__item references-tags__item--gold">Handicap</span>
              <span class="references-tags__item references-tags__item--coral">Parentalité</span>
              <span class="references-tags__item references-tags__item--blue">Collectivités</span>
            </div>
          </div>


        </div>

        <div class="references-grid" aria-label="Partenaires institutionnels">
          <div
            v-for="logo in partnerLogos"
            :key="logo.alt"
            class="references-grid__item"
          >
            <img :src="logo.src" :alt="logo.alt" loading="lazy">
          </div>
        </div>

        <div class="references-foot">
          <p>Vous voulez identifier le bon format pour votre structure ?</p>
          <BaseButton to="/contact" variant="secondary">Parler de votre besoin</BaseButton>
        </div>
      </div>
    </section>

    <section class="home-section home-section--final">
      <div class="container">
        <div class="final-grid">
          <figure class="final-visual final-visual--small">
            <img :src="catalogueMockup" alt="Mockup du catalogue Ô Neuro Sens" loading="lazy">
          </figure>

          <div class="final-copy">
            <!--<p class="eyebrow">Un point d’entrée simple pour comprendre l’offre et préparer votre demande.</p>-->
            <h2>Télécharger le catalogue</h2>
            <p>
              Le catalogue permet d’<strong>explorer les thématiques</strong>, de préparer une demande de formation et
              d’<strong>identifier plus vite les parcours pertinents</strong> pour votre structure.
            </p>
            <ul class="final-points" aria-label="Contenus du catalogue">
              <li>les thématiques et formats d’intervention</li>
              <li>les repères pour cibler la bonne demande</li>
              <li>une base claire pour échanger ensuite avec l’équipe</li>
            </ul>
            <div class="cta-row">
              <BaseButton :href="CATALOGUE_DOWNLOAD_URL" :download="CATALOGUE_DOWNLOAD_NAME">Télécharger le catalogue</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import qualiopiLogo from '~/assets/img/logo-qualiopi.png'
import catalogueMockup from '~/assets/img/home/photos/mockup-catalogue.jpg'
import homePhotoTwo from '~/assets/img/home/photos/2.jpeg'
import homePhotoThree from '~/assets/img/home/photos/3.jpeg'
import illustrationPhoto from '~/assets/img/home/photos/illustration1.jpeg'
import logoInfobulle from '~/assets/img/logo-infobulle.svg'
import { CATALOGUE_DOWNLOAD_NAME, CATALOGUE_DOWNLOAD_URL } from '~/utils/catalogueDownload'
import {
  QUALIOPI_CERTIFICATE_NAME,
  QUALIOPI_CERTIFICATE_URL
} from '~/utils/qualiopiCertificate'

import logo1 from '~/assets/img/home/logos/logo1.jpeg'
import logo2 from '~/assets/img/home/logos/logo2.png'
import logo3 from '~/assets/img/home/logos/logo3.jpeg'
import logo4 from '~/assets/img/home/logos/logo4.jpeg'
import logo5 from '~/assets/img/home/logos/logo5.jpeg'
import logo6 from '~/assets/img/home/logos/logo6.jpeg'
import logo7 from '~/assets/img/home/logos/logo7.png'
import logo8 from '~/assets/img/home/logos/logo8.jpeg'
import logo9 from '~/assets/img/home/logos/logo-9.jpeg'
import logo10 from '~/assets/img/home/logos/logo-10.jpeg'
import logo11 from '~/assets/img/home/logos/logo11.jpeg'
import logo12 from '~/assets/img/home/logos/logo12.jpeg'
import logo13 from '~/assets/img/home/logos/logo13.jpeg'
import logo14 from '~/assets/img/home/logos/logo14.jpeg'

const partnerLogos = [
  { src: logo1, alt: 'Partenaire 1' },
  { src: logo2, alt: 'Partenaire 2' },
  { src: logo3, alt: 'Partenaire 3' },
  { src: logo4, alt: 'Partenaire 4' },
  { src: logo5, alt: 'Partenaire 5' },
  { src: logo6, alt: 'Partenaire 6' },
  { src: logo7, alt: 'Partenaire 7' },
  { src: logo8, alt: 'Partenaire 8' },
  { src: logo9, alt: 'Partenaire 9' },
  { src: logo10, alt: 'Partenaire 10' },
  { src: logo11, alt: 'Partenaire 11' },
  { src: logo12, alt: 'Partenaire 12' },
  { src: logo13, alt: 'Partenaire 13' },
  { src: logo14, alt: 'Partenaire 14' }
]

const serviceOfferings = [
  "Groupe d'analyse des pratiques professionnelles à destination des équipes",
  "Groupe d'analyse des pratiques professionnelles spécifiques aux équipes de direction",
  'Journée pédagogique',
  'Conférences',
  'Ti Kozé / groupe de parole',
  'Séances de sophrologie enfants et/ou parents',
  'Séances snoezelen',
  'Ateliers conseils 1000 premiers jours',
  'Handidanse',
  'Ateliers en compétences psychosociales',
  'Ateliers en facilitation graphique et intelligence collective'
]

</script>

<style scoped>
:global(.site-main) {
  padding-block: 0;
}

.home-page {
  --page-tint: #ee6f63;
  --page-cta-fg: #ffffff;
  padding-bottom: var(--space-7);
}

.home-section,
.home-hero {
  position: relative;
}

.home-hero {
  padding-block: clamp(1.25rem, 2.4vw, 2.2rem) clamp(1.1rem, 2.4vw, 2rem);
}

.home-section {
  padding-block: clamp(4.25rem, 7vw, 6.5rem);
}

.home-grid {
  display: grid;
  align-items: start;
  column-gap: clamp(1.5rem, 3vw, 3.25rem);
  row-gap: clamp(1rem, 2vw, 2rem);
}

.home-grid--hero,
.home-grid--story,
.home-grid--themes,
.home-grid--actions,
.final-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.home-grid--hero {
  align-items: start;
  min-height: clamp(25rem, 31vw, 29rem);
}

.hero-copy,
.story-panel,
.themes-side,
.actions-copy,
.final-copy {
  max-width: 36rem;
}

#prestations {
  scroll-margin-top: clamp(6rem, 10vw, 8.5rem);
}

.hero-copy {
  grid-column: 7 / 13;
  align-self: start;
  max-width: 35rem;
  padding-top: clamp(0.8rem, 2vw, 1.55rem);
}

.story-panel,
.themes-side,
.actions-copy,
.final-copy {
  grid-column: 1 / 6;
}

.hero-copy,
.story-panel,
.themes-side,
.actions-copy,
.final-copy,
.story-side {
  display: grid;
  align-content: start;
  gap: var(--space-4);
}

.hero-title {
margin-bottom: 0;
  max-width: none;
  color: var(--color-ink-700);
  font-size: clamp(2.65rem, 1.9rem + 2vw, 4.5rem);
  line-height: 0.92;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  text-wrap: auto;

}

.hero-lead {
  max-width: 31rem;
  margin: 0;
  font-size: var(--font-size-body);
  line-height: var(--line-height-base);
  color: var(--color-text-body);
}

.cta-row--hero {
  grid-column: 4 / 10;
  justify-self: center;
  margin-top: clamp(0.5rem, 1.2vw, 1rem);
  margin-bottom: 0;
}

.hero-cta-primary {
  box-shadow: 0 14px 32px rgba(238, 111, 99, 0.18);
}

.hero-cta-note {
  margin: -0.35rem 0 0;
  color: var(--color-text-soft);
  font-size: var(--font-size-100);
}

.hero-assurance {
  display: grid;
  gap: 0.35rem;
  padding-top: var(--space-3);
}

.hero-assurance__title {
  margin: 0;
  color: var(--color-secondary);
  font-size: 0.82rem;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-assurance p:last-child {
  margin: 0;
  max-width: 56ch;
}

.hero-visuals {
  position: relative;
  grid-column: 1 / 7;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  align-items: start;
  align-self: start;
  min-height: clamp(25rem, 31vw, 29rem);
  overflow: visible;
  z-index: 3;
}

.hero-visual,
.story-photo,
.story-visual,
.themes-visual__photo,
.actions-visual__photo,
.final-visual {
  position: relative;
  margin: 0;
}

.hero-visual img,
.story-photo img,
.story-visual img,
.themes-visual__photo img,
.actions-visual__photo img,
.final-visual img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-visual--tall {
  grid-row: span 2;
  min-height: 34rem;
}

.hero-visual--logo {
  display: grid;
  place-items: center;
  grid-column: 1 / -1;
  min-height: clamp(25rem, 31vw, 29rem);
  padding: clamp(0.75rem, 1.6vw, 1.15rem);
  position: relative;
  z-index: 1;
}



.hero-visual--logo img {
  position: relative;
  z-index: 1;
  width: min(100%, 25.5rem);
  height: auto;
  object-fit: contain;
}

.home-section--qualiopi {
  padding-block: clamp(2.25rem, 4vw, 3.4rem);
}

.qualiopi-section {
  display: grid;
  justify-items: center;
  gap: 0.85rem;
  text-align: center;
}

.qualiopi-section__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  text-decoration: none;
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.qualiopi-section__link:hover,
.qualiopi-section__link:focus-visible {
  transform: translateY(-2px);
  opacity: 0.95;
}

.qualiopi-section__logo {
  width: min(240px, 62vw);
  height: auto;
}

.qualiopi-section__text-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 2.55rem;
  padding: 0.7rem 1rem;
  border: 1px solid color-mix(in srgb, var(--color-secondary) 26%, white);
  border-radius: 999px;
  background: color-mix(in srgb, white 88%, var(--color-sky-200));
  color: var(--color-secondary);
  font-size: 0.96rem;
  font-weight: var(--font-weight-semibold);
  line-height: 1.15;
  text-decoration: none;
  transition:
    transform var(--transition-fast),
    color var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast);
}

.qualiopi-section__text-link-icon {
  display: inline-flex;
  width: 1rem;
  height: 1rem;
  color: color-mix(in srgb, var(--color-secondary) 82%, white);
}

.qualiopi-section__text-link-icon svg {
  width: 100%;
  height: 100%;
}

.qualiopi-section__text-link:hover,
.qualiopi-section__text-link:focus-visible {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--color-accent) 28%, white);
  background: color-mix(in srgb, white 82%, var(--color-soft));
  color: var(--color-accent);
}

.home-grid--story {
  align-items: stretch;
}

.story-photo--large {
  grid-column: 1 / 7;
  min-height: 31rem;
  overflow: hidden;
  border-radius: clamp(1.4rem, 2vw, 2rem);
}

.story-panel {
  grid-column: 7 / 13;
  align-content: center;
  min-height: 29rem;
}

.story-panel.theme-tint-panel,
.actions-copy.theme-tint-panel {
  padding: clamp(1.5rem, 2.6vw, 2.3rem);
}

.story-side {
  display: contents;
}

.story-side__card {
  padding-top: var(--space-3);
  border-top: 2px solid color-mix(in srgb, var(--color-highlight) 55%, white);
}

.story-side__card h3 {
  margin-bottom: var(--space-3);
}

.story-support {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.5rem, 3vw, 3rem);
  margin-top: clamp(1.8rem, 3vw, 2.8rem);
  padding-top: clamp(1.4rem, 2vw, 2rem);
}

.story-side__card--list {
  align-content: start;
}

.editorial-list {
  display: grid;
  gap: 0.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.editorial-list li {
  display: grid;
  grid-template-columns: 0.55rem minmax(0, 1fr);
  gap: 0.75rem;
  align-items: start;
  padding-left: 0;
}

.editorial-list li::before {
  content: "";
  width: 0.55rem;
  height: 0.55rem;
  margin-top: 0.45rem;
  background: var(--page-tint, var(--color-accent));
}

.themes-visual {
  position: relative;
  grid-column: 6 / 13;
  display: grid;
  align-content: start;
  gap: clamp(1rem, 2vw, 1.4rem);
}

.themes-side.theme-tint-panel {
  min-height: 34rem;
  grid-template-rows: auto auto 1fr auto;
  padding: clamp(1.75rem, 3vw, 2.6rem);
  gap: clamp(1rem, 1.8vw, 1.35rem);
}

.themes-intro {
  margin: 0;
  max-width: 34rem;
  font-size: var(--font-size-body);
  line-height: var(--line-height-base);
  color: var(--color-text-body);
}

.themes-side h2 {
  max-width: 11ch;
  margin-bottom: 0;
}

.themes-visual__photo {
  min-height: 34rem;
  overflow: hidden;
  border-radius: clamp(1.4rem, 2vw, 2rem);
  background: color-mix(in srgb, white 92%, var(--color-highlight));
  box-shadow: 0 22px 54px rgba(28, 44, 77, 0.08);
}

.themes-quote {
  position: absolute;
  top: 1.4rem;
  left: 1.4rem;
  right: 1.4rem;
  margin-left: auto;
  z-index: 2;
  padding: 0.95rem 1.15rem;
  border: 1px solid color-mix(in srgb, white 58%, transparent);
  border-radius: clamp(1.2rem, 2vw, 1.8rem);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 34px rgba(28, 44, 77, 0.08);
}

.themes-quote p {
  margin: 0;
  color: var(--color-text);
  max-width: none;
}

.themes-quote__eyebrow {
  margin: 0 0 0.45rem;
  color: var(--color-secondary);
  font-size: 0.75rem;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.themes-quote__text {
  position: relative;
  padding-inline: 1.35rem;
  font-size: clamp(1.08rem, 0.98rem + 0.42vw, 1.4rem);
  font-style: italic;
  font-weight: 500;
  line-height: 1.45;
  letter-spacing: -0.02em;
  text-wrap: balance;
  text-align: center;
}

.themes-quote__text::before {
  content: "“";
  position: absolute;
  left: 0;
  top: -0.08rem;
  color: color-mix(in srgb, var(--color-accent) 58%, white);
  font-size: 1.45em;
  line-height: 1;
}

.themes-quote__text::after {
  content: "”";
  position: absolute;
  right: 0;
  top: -0.08rem;
  color: color-mix(in srgb, var(--color-primary) 54%, white);
  font-size: 1.45em;
  line-height: 1;
}

.themes-tiles {
  display: grid;
  grid-column: 1 / 13;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-3);
  margin-top: var(--space-3);
}

.themes-tiles article {
  display: grid;
  gap: 0.35rem;
  padding-top: var(--space-3);
  border-top: 2px solid color-mix(in srgb, var(--color-accent) 26%, white);
}

.themes-tiles strong {
  color: var(--color-text);
  font-size: var(--font-size-200);
  line-height: 1.4;
}

.themes-tiles span {
  color: var(--color-text-soft);
  font-size: var(--font-size-100);
  line-height: 1.65;
}

.themes-footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 0.35rem;
  margin-top: auto;
}

.themes-footer .btn {
  flex: 0 0 auto;
}

.themes-footnote {
  margin: 0;
  max-width: 18rem;
  color: var(--color-text-body);
  font-size: var(--font-size-body);
  line-height: var(--line-height-base);
}

.actions-copy .cta-row {
  flex-wrap: wrap;
}

.actions-copy .cta-row > * {
  flex: 0 0 auto;
}

.actions-editorial {
  position: relative;
  grid-column: 6 / 13;
  display: block;
}

.actions-visual__photo {
  position: relative;
  width: 100%;
  min-height: 28rem;
  overflow: hidden;
  border-radius: clamp(1.4rem, 2vw, 2rem);
}

.actions-listing {
  display: grid;
  grid-column: 1 / 13;
  gap: clamp(1rem, 1.8vw, 1.4rem);
  margin-top: var(--space-3);
}

.actions-listing__title {
  margin: 0;
  color: var(--color-text);
  font-size: clamp(1.2rem, 1rem + 0.5vw, 1.45rem);
}

.actions-listing__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.95rem clamp(1.2rem, 2vw, 1.8rem);
  margin: 0;
  padding: 0;
  list-style: none;
}

.actions-listing__list li {
  position: relative;
  padding-left: 1.15rem;
  color: var(--color-text);
  font-size: var(--font-size-200);
  font-weight: var(--font-weight-semibold);
  line-height: 1.45;
}

.actions-listing__list li::before {
  content: "";
  position: absolute;
  top: 0.55em;
  left: 0;
  width: 0.45rem;
  aspect-ratio: 1;
  background: var(--page-tint, var(--color-accent));
  transform: translateY(-50%);
}

.home-section--references {
  padding-bottom: clamp(3.4rem, 7vw, 5rem);
}

.home-section--final {
  padding-bottom: clamp(1.4rem, 3vw, 2.2rem);
}

.references-head {
  display: grid;
  gap: var(--space-3);
  max-width: 42rem;
}

.references-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(17rem, 0.65fr);
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: end;
  margin-bottom: var(--space-6);
}

.references-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.references-tags__item {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  border: 0;
  color: var(--color-text);
  font-size: var(--font-size-100);
  font-weight: var(--font-weight-semibold);
}

.references-tags__item--blue {
  background: color-mix(in srgb, var(--color-sky-200) 70%, white);
}

.references-tags__item--mint {
  background: color-mix(in srgb, var(--color-mint-200) 78%, white);
}

.references-tags__item--coral {
  background: color-mix(in srgb, var(--color-soft) 70%, white);
}

.references-tags__item--gold {
  background: color-mix(in srgb, var(--color-apricot-200) 80%, white);
}

.references-note {
  display: grid;
  gap: 0.7rem;
  padding: clamp(1.2rem, 2vw, 1.6rem);
  border: 1px solid color-mix(in srgb, var(--color-border) 72%, white);
  background: color-mix(in srgb, white 78%, var(--color-apricot-200));
  transform: translateY(-0.35rem);
}

.references-note__eyebrow {
  margin: 0;
  color: var(--color-secondary);
  font-size: 0.82rem;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.references-note h3 {
  margin: 0;
  font-size: var(--font-size-400);
}

.references-note__list {
  display: grid;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.references-note__list li {
  display: grid;
  grid-template-columns: 0.55rem minmax(0, 1fr);
  gap: 0.75rem;
  align-items: start;
  padding-left: 0;
  color: var(--color-text);
  line-height: 1.55;
}

.references-note__list li::before {
  content: "";
  width: 0.55rem;
  height: 0.55rem;
  margin-top: 0.45rem;
  background: var(--page-tint, var(--color-accent));
}

.references-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 1px;
  border-top: 1px solid color-mix(in srgb, var(--color-border) 88%, white);
  border-left: 1px solid color-mix(in srgb, var(--color-border) 88%, white);
}

.references-grid__item {
  display: grid;
  place-items: center;
  aspect-ratio: 1 / 1;
  min-height: 0;
  padding: clamp(1rem, 2vw, 1.4rem);
  border-right: 1px solid color-mix(in srgb, var(--color-border) 88%, white);
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 88%, white);
  background: color-mix(in srgb, white 68%, transparent);
}

.references-grid__item img {
  max-width: 82%;
  max-height: 4.75rem;
  width: auto;
  height: auto;
  object-fit: contain;
  mix-blend-mode: multiply;
}

.references-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  margin-top: var(--space-5);
  padding-top: var(--space-4);
}

.references-foot p {
  margin: 0;
  max-width: 34rem;
  color: var(--color-text);
  font-size: var(--font-size-200);
  font-weight: var(--font-weight-semibold);
}

.final-visual {
  position: relative;
  grid-column: 1 / 7;
  min-height: 18rem;
  width: 100%;
  justify-self: start;
  overflow: hidden;
  border-radius: clamp(1.4rem, 2vw, 2rem);
}

.final-visual img {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.final-visual--small {
  align-self: center;
}

.final-copy {
  grid-column: 7 / 13;
  align-self: center;
  padding-left: clamp(1.35rem, 2.8vw, 3.2rem);
}

.final-points {
  display: grid;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.final-points li {
  display: grid;
  grid-template-columns: 0.55rem minmax(0, 1fr);
  gap: 0.75rem;
  align-items: start;
  padding-left: 0;
  color: var(--color-text);
}

.final-points li::before {
  content: "";
  width: 0.55rem;
  height: 0.55rem;
  margin-top: 0.45rem;
  background: var(--page-tint, var(--color-accent));
}

.final-note {
  margin: -0.2rem 0 0;
  color: var(--color-text-body);
  font-size: var(--font-size-body);
}

@media (max-width: 1100px) {
  .story-panel,
  .themes-side,
  .actions-copy,
  .final-copy {
    grid-column: 1 / 7;
  }

  .story-photo--large {
    grid-column: 1 / 7;
  }

  .references-layout {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .references-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 980px) {
  .home-grid--hero,
  .home-grid--story,
  .home-grid--themes,
  .home-grid--actions,
  .final-grid {
    grid-template-columns: 1fr;
  }

  .home-grid--actions > * {
    grid-column: 1 / -1 !important;
    justify-self: stretch;
  }

  .hero-copy,
  .hero-visuals,
  .cta-row--hero,
  .story-panel,
  .story-photo--large,
  .story-side,
  .story-support,
  .themes-side,
  .themes-tiles,
  .themes-visual,
  .actions-copy,
  .actions-editorial,
  .final-copy,
  .final-visual {
    grid-column: auto;
  }

  .home-grid--actions {
    row-gap: clamp(1.25rem, 4vw, 2rem);
  }

  .final-copy {
    padding-left: 0;
  }

  .hero-copy {
    padding-top: 0;
    max-width: none;
  }

  .hero-visuals,
  .themes-visual,
  .actions-editorial,
  .final-visual {
    min-height: auto;
  }

  .themes-footer {
    align-items: start;
    flex-direction: column;
  }

  .hero-visuals {
    grid-template-columns: 1fr;
  }

  .cta-row--hero {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-3);
    justify-self: stretch;
    margin-top: 0;
  }

  .cta-row--hero > * {
    width: 100%;
    min-width: 0;
  }

  .hero-visual--logo {
    min-height: auto;
  }

  .hero-visual--logo::before {
    inset: 12% 8% 10% 10%;
  }

  .story-support,
  .themes-tiles,
  .actions-editorial,
  .actions-listing {
    grid-template-columns: 1fr;
  }

  .actions-copy {
    order: 1;
    max-width: none;
    width: 100%;
    justify-self: stretch;
  }

  .actions-listing {
    order: 2;
    margin-top: 0;
    gap: 1rem;
  }

  .actions-editorial {
    order: 3;
  }

  .references-layout,
  .references-foot {
    grid-template-columns: 1fr;
  }

  .references-foot {
    display: grid;
    justify-items: start;
  }

  .hero-visual--tall,
  .hero-visual--logo,
  .story-photo--large,
  .themes-visual__photo,
  .actions-visual__photo {
    min-height: auto;
    aspect-ratio: 4 / 3;
  }

  .hero-note,
  .themes-quote {
    position: relative;
    right: auto;
    left: auto;
    bottom: auto;
    width: auto;
    margin-top: var(--space-4);
    margin-left: 0;
  }

  .references-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 980px) {
  .home-hero,
  .home-section {
    padding-block: var(--space-8);
  }

  .cta-row--hero {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .themes-tiles {
    grid-template-columns: 1fr;
  }

  .references-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .references-grid__item {
    aspect-ratio: auto;
    min-height: 6.75rem;
    padding: 0.9rem;
  }

  .references-grid__item img {
    max-width: 78%;
    max-height: 3.5rem;
  }

  .actions-copy.theme-tint-panel {
    padding: 1.35rem 1.15rem;
    width: 100%;
  }

  .actions-editorial {
    display: none;
  }

  .actions-copy .cta-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .actions-copy .cta-row > * {
    width: 100%;
  }

  .actions-listing__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.8rem 1rem;
  }

  .themes-side.theme-tint-panel {
    padding: 1.35rem 1.15rem;
  }

  .hero-note {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .cta-row--hero {
    grid-template-columns: 1fr;
  }

  .actions-listing__list {
    grid-template-columns: 1fr;
  }
}
</style>
