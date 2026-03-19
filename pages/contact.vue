<template>
  <section class="contact-page">
    <div class="container contact-flow">
      <section class="contact-hero" aria-labelledby="contact-title">
        <DecorativeShapes density="low" variant="hero" />

        <div class="contact-hero__intro">
          <p class="eyebrow">Des informations claires pour échanger, s'inscrire et financer sa formation.</p>
          <h1 id="contact-title">Contact</h1>
          <p class="contact-hero__lead">
            Nous répondons à vos demandes sur les <strong>formations</strong>, les <strong>accompagnements</strong>, les
            inscriptions et les modalités de prise en charge. L'objectif est simple: vous permettre d'<strong>avancer
            rapidement</strong>, avec les <strong>bons interlocuteurs</strong>.
          </p>
        </div>

        <div class="contact-hero__grid">
          <div class="contact-direct-wrap">
            <div class="contact-direct__head">
              <p class="eyebrow">Les informations essentielles, présentées sans détour.</p>
              <h2>Coordonnées</h2>
            </div>

            <div class="contact-direct">
              <article class="contact-direct__item">
                <img :src="iconTel" alt="" aria-hidden="true" class="contact-direct__icon" loading="lazy">
                <div>
                  <p class="contact-direct__label">Par téléphone ou WhatsApp</p>
                  <p class="contact-direct__value">06 90 67 88 63</p>
                  <p class="contact-direct__value">06 90 48 21 99</p>
                </div>
              </article>

              <article class="contact-direct__item">
                <img :src="iconMail" alt="" aria-hidden="true" class="contact-direct__icon" loading="lazy">
                <div>
                  <p class="contact-direct__label">Par email</p>
                  <p class="contact-direct__value">
                    <a href="mailto:oneurosens.formation@gmail.com">oneurosens.formation@gmail.com</a>
                  </p>
                </div>
              </article>

              <article class="contact-direct__item">
                <img :src="iconPin" alt="" aria-hidden="true" class="contact-direct__icon" loading="lazy">
                <div>
                  <p class="contact-direct__label">Lieu de formation</p>
                  <p class="contact-direct__value">1315 route de Cocoyer</p>
                  <p>97190 Le Gosier, Guadeloupe</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-details" aria-labelledby="details-title">
        <div class="contact-section-head">
          <p class="eyebrow">Trois repères pour comprendre le parcours: contacter, s'inscrire, financer.</p>
          <h2 id="details-title">Informations pratiques</h2>
        </div>

        <div class="contact-details__grid">
          <article class="contact-panel contact-panel--steps">
            <div class="contact-panel__head">
              <img :src="iconInscription" alt="" aria-hidden="true" class="contact-panel__icon" loading="lazy">
              <div class="contact-panel__heading">
                <p class="contact-panel__kicker">Comment s'inscrire ?</p>
                <h3>Un parcours en trois étapes.</h3>
              </div>
            </div>

            <ol class="contact-steps">
              <li>Compléter la fiche d'inscription correspondant à la formation souhaitée.</li>
              <li>Scanner la fiche et l'envoyer par email ou par WhatsApp.</li>
              <li>Un référent formation vous recontacte rapidement pour établir un devis personnalisé.</li>
            </ol>
          </article>

          <article class="contact-panel contact-panel--finance">
            <div class="contact-panel__head">
              <img :src="iconFinancement" alt="" aria-hidden="true" class="contact-panel__icon" loading="lazy">
              <div class="contact-panel__heading">
                <p class="contact-panel__kicker">Comment financer ma formation ?</p>
                <h3>Plusieurs modalités peuvent être mobilisées.</h3>
              </div>
            </div>

            <ul class="finance-list">
              <li>À titre individuel</li>
              <li>Par mon employeur</li>
              <li>Financement OPCO</li>
            </ul>

            <p class="contact-panel__text">
              Les OPCO sont des opérateurs de compétences chargés d'accompagner le
              <strong>financement des formations professionnelles</strong>. Selon votre situation, nous pouvons vous aider
              à <strong>identifier la bonne piste de prise en charge</strong>.
            </p>

            <p class="contact-panel__text contact-panel__text--strong">
              Vous ne savez pas comment faire ? Nous sommes là pour vous guider.
            </p>
          </article>

          <article class="contact-panel contact-panel--support" aria-labelledby="contact-footer-title">
            <div class="contact-panel__head">
              <img :src="star" alt="" aria-hidden="true" class="contact-panel__icon" loading="lazy">
              <div class="contact-panel__heading">
                <p class="contact-panel__kicker">Besoin d'un appui pour l'inscription ou le financement ?</p>
                <h3 id="contact-footer-title">Accompagnement</h3>
              </div>
            </div>

            <p class="contact-panel__text">
              Nous vous aidons à <strong>identifier la bonne modalité de contact</strong>, à constituer votre demande et
              à clarifier les <strong>pièces utiles selon votre situation</strong>.
            </p>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import iconFinancement from '~/assets/img/contact/icone-financement.png'
import iconInscription from '~/assets/img/contact/icone-inscription.png'
import iconMail from '~/assets/img/contact/icone-mail.png'
import iconTel from '~/assets/img/contact/icone-tel.png'
import star from '~/assets/img/contact/etoile.png'

const iconPin = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
    <path d="M32 7c10.493 0 19 8.507 19 19 0 13.173-15.517 27.211-17.29 28.772a2.68 2.68 0 0 1-3.42 0C28.517 53.211 13 39.173 13 26c0-10.493 8.507-19 19-19Z" fill="#ef6d64"/>
    <circle cx="32" cy="26" r="7.25" fill="#fff5f1"/>
  </svg>
`)}`
</script>

<style scoped>
p {
  max-width: none;
}

:global(.site-main) {
  padding-block: clamp(3.5rem, 6vw, 5.5rem);
}

.contact-page {
  padding-bottom: var(--space-7);
}

.contact-flow {
  display: grid;
  gap: clamp(4rem, 6vw, 5.5rem);
}

.contact-hero,
.contact-details {
  position: relative;
}

.contact-hero {
  display: grid;
  gap: clamp(2rem, 3vw, 3rem);
  padding-top: var(--space-5);
}

.contact-hero__intro {
  display: grid;
  gap: var(--space-3);
  max-width: 54rem;
}

.contact-hero__intro h1 {
  max-width: 15ch;
  margin-bottom: 0;
  color: var(--color-accent);
}

.contact-hero__lead {
  max-width: 46rem;
  font-size: var(--font-size-300);
}

.contact-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(1.5rem, 2vw, 2rem);
  align-items: start;
}

.contact-direct-wrap {
  display: grid;
  gap: 1.3rem;
}

.contact-direct__head {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.45rem;
  align-items: start;
}

.contact-direct__head h2 {
  margin: 0;
  max-width: 20ch;
}

.contact-direct {
  display: grid;
  gap: 0;
  border-top: 2px solid color-mix(in srgb, var(--color-accent) 18%, white);
}

.contact-direct__item {
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr);
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 78%, white);
  align-items: start;
}

.contact-direct__icon,
.contact-panel__icon {
  width: 76px;
  height: 76px;
  object-fit: contain;
}

.contact-direct__label,
.contact-panel__kicker {
  margin: 0 0 0.4rem;
  color: #3f5ea0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.84rem;
}

.contact-direct__value {
  margin: 0 0 0.15rem;
  color: var(--color-text);
  font-size: clamp(1.08rem, 1rem + 0.24vw, 1.22rem);
  font-weight: 700;
}

.contact-direct p:last-child {
  margin-bottom: 0;
}

.contact-direct a {
  color: inherit;
  text-decoration: none;
}

.contact-details {
  display: grid;
  gap: clamp(1.8rem, 3vw, 2.6rem);
}

.contact-section-head {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.45rem;
  align-items: start;
  padding-top: var(--space-3);
  border-top: 2px solid color-mix(in srgb, var(--color-accent) 20%, white);
}

.contact-section-head h2 {
  margin: 0;
  max-width: 28ch;
}

.contact-details__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.8rem, 2.6vw, 2.6rem);
  align-items: stretch;
}

.contact-panel {
  display: grid;
  gap: 1.15rem;
  padding-top: var(--space-4);
  border-top: 3px solid transparent;
  align-content: start;
}

.contact-panel--steps {
  border-top-color: #e47673;
}

.contact-panel--finance {
  border-top-color: #efb03f;
}

.contact-panel--support {
  border-top-color: #f2c246;
}

.contact-panel__head {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: 1.1rem;
  align-items: start;
}

.contact-panel__heading {
  display: grid;
  gap: 0.35rem;
  align-content: start;
  min-height: 100%;
}

.contact-panel__head h3 {
  margin: 0;
  line-height: 1.12;
  max-width: 14ch;
}

.contact-steps {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: step;
  display: grid;
  gap: 0.85rem;
}

.contact-steps li {
  counter-increment: step;
  display: grid;
  grid-template-columns: 1.7rem minmax(0, 1fr);
  gap: 0.85rem;
  align-items: start;
  line-height: 1.62;
}

.contact-steps li::before {
  content: counter(step);
  display: grid;
  place-items: center;
  width: 1.7rem;
  height: 1.7rem;
  margin-top: 0.1rem;
  background: color-mix(in srgb, var(--color-coral) 88%, white);
  color: white;
  font-size: 0.88rem;
  font-weight: 700;
}

.finance-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.65rem;
}

.finance-list li {
  display: grid;
  grid-template-columns: 12px minmax(0, 1fr);
  gap: 0.75rem;
  align-items: start;
  font-weight: 700;
}

.finance-list li::before {
  content: "";
  width: 8px;
  height: 8px;
  margin-top: 0.5rem;
  background: var(--color-coral);
}

.contact-panel__text {
  margin: 0;
  line-height: 1.65;
}

.contact-panel__text--strong {
  font-weight: 700;
}

@media (max-width: 980px) {
  .contact-hero__grid,
  .contact-section-head,
  .contact-details__grid,
  .contact-panel__head {
    grid-template-columns: 1fr;
  }

  .contact-direct__icon,
  .contact-panel__icon {
    width: 64px;
    height: 64px;
  }
}

@media (max-width: 640px) {
  .contact-direct__item {
    grid-template-columns: 1fr;
  }

  .contact-direct__icon,
  .contact-panel__icon {
    width: 56px;
    height: 56px;
  }
}
</style>
