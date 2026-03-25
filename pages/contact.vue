<template>
  <section class="contact-page">
    <div class="container contact-flow">
      <section class="contact-hero" aria-labelledby="contact-title">
        <div class="contact-hero__intro">
          <p class="eyebrow">Contacter l’équipe, cadrer votre demande et avancer rapidement.</p>
          <h1 id="contact-title">Contact</h1>
          <p class="contact-hero__lead">
            Un point d’entrée simple pour vos <strong>demandes de formation</strong>, vos questions d’<strong>inscription</strong>
            ou de <strong>financement</strong>.
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

          <aside class="contact-summary contact-form-card" aria-labelledby="contact-form-title">
            <div class="contact-form-card__head">
              <strong id="contact-form-title">Écrivez-nous</strong>
              <span>Un message structuré pour orienter rapidement votre demande.</span>
            </div>

            <form class="contact-form" @submit.prevent>
              <div class="contact-form__grid">
                <label class="contact-form__field">
                  <span>Nom / prénom <em>*</em></span>
                  <input type="text" name="fullName" autocomplete="name" required>
                </label>

                <label class="contact-form__field">
                  <span>Email <em>*</em></span>
                  <input type="email" name="email" autocomplete="email" required>
                </label>

                <label class="contact-form__field">
                  <span>Téléphone</span>
                  <input type="tel" name="phone" autocomplete="tel">
                </label>

                <label class="contact-form__field">
                  <span>Objet</span>
                  <select name="subject">
                    <option value="catalogue">Recevoir le catalogue</option>
                    <option value="devis">Demander un devis</option>
                    <option value="autre">Autre</option>
                  </select>
                </label>

                <label class="contact-form__field contact-form__field--full">
                  <span>Message</span>
                  <textarea name="message" rows="5"></textarea>
                </label>
              </div>

              <button class="btn btn--primary contact-form__cta" type="submit">
                Envoyer la demande
              </button>
            </form>
          </aside>
        </div>
      </section>

      <section class="contact-details" aria-labelledby="details-title">
        <div class="contact-section-head">
          <p class="eyebrow">Trois repères utiles pour la suite.</p>
          <h2 id="details-title">Informations pratiques</h2>
        </div>

        <div class="contact-details__grid">
          <article class="contact-panel contact-panel--steps">
            <div class="contact-panel__head">
              <img :src="iconInscription" alt="" aria-hidden="true" class="contact-panel__icon contact-panel__icon--steps" loading="lazy">
              <div class="contact-panel__heading">
                <p class="contact-panel__kicker">Comment s'inscrire ?</p>
                <h3>Une démarche simple.</h3>
              </div>
            </div>

            <div class="contact-panel__body">
              <ol class="contact-steps">
                <li>Compléter la fiche de la formation choisie.</li>
                <li>L’envoyer par email ou WhatsApp.</li>
                <li>Recevoir un retour avec la suite à donner.</li>
              </ol>
            </div>
          </article>

          <article class="contact-panel contact-panel--finance">
            <div class="contact-panel__head">
              <img :src="iconFinancement" alt="" aria-hidden="true" class="contact-panel__icon" loading="lazy">
              <div class="contact-panel__heading">
                <p class="contact-panel__kicker">Comment financer ma formation ?</p>
                <h3>Plusieurs options existent.</h3>
              </div>
            </div>

            <div class="contact-panel__body contact-panel__body--finance">
              <ul class="finance-list">
                <li>À titre individuel</li>
                <li>Par mon employeur</li>
                <li>Financement OPCO</li>
              </ul>

              <p class="contact-panel__text contact-panel__text--strong">
                Nous pouvons vous aider à identifier la bonne piste selon votre situation.
              </p>
            </div>
          </article>

          <article class="contact-panel contact-panel--support" aria-labelledby="contact-footer-title">
            <div class="contact-panel__head">
              <img :src="mascotteParapluie" alt="" aria-hidden="true" class="contact-panel__icon contact-panel__icon--support" loading="lazy">
              <div class="contact-panel__heading">
                <p class="contact-panel__kicker">Besoin d’aide ?</p>
                <h3 id="contact-footer-title">Un appui concret</h3>
              </div>
            </div>

            <div class="contact-panel__body contact-panel__body--support">
              <p class="contact-panel__text">
                Nous vous aidons à <strong>clarifier votre demande</strong>, le mode de contact le plus simple et les
                <strong>pièces utiles</strong>.
              </p>
            </div>
          </article>
        </div>

        <div class="contact-next-actions">
          <p>Vous voulez d’abord explorer l’offre avant d’échanger ?</p>
          <BaseButton :href="CATALOGUE_DOWNLOAD_URL" :download="CATALOGUE_DOWNLOAD_NAME" variant="secondary">Télécharger le catalogue</BaseButton>
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
import mascotteParapluie from '~/assets/img/mascotte-parapluie.png'
import { CATALOGUE_DOWNLOAD_NAME, CATALOGUE_DOWNLOAD_URL } from '~/utils/catalogueDownload'

const iconPin = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="29" fill="#ef6d64"/>
    <path d="M32 16.5c7.46 0 13.5 6.04 13.5 13.5 0 9.3-10.96 19.21-12.21 20.31a1.9 1.9 0 0 1-2.58 0C29.46 49.21 18.5 39.3 18.5 30c0-7.46 6.04-13.5 13.5-13.5Z" fill="#fff"/>
    <circle cx="32" cy="30" r="5.1" fill="#ef6d64"/>
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
  --page-tint: #ffcc00;
  --page-cta-fg: #181818;
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
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: start;
}

.contact-direct-wrap {
  display: grid;
  gap: 1rem;
}

.contact-summary {
  display: grid;
  gap: var(--space-3);
  padding: clamp(1.15rem, 2vw, 1.5rem);
  background: color-mix(in srgb, white 78%, var(--color-highlight));
  border: 1px solid color-mix(in srgb, var(--color-border) 72%, white);
  border-radius: clamp(1.2rem, 2vw, 1.8rem);
  align-content: start;
}

.contact-summary strong {
  color: var(--color-text);
  font-size: clamp(1.5rem, 1.2rem + 0.8vw, 2rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.contact-summary span {
  color: var(--color-text-soft);
  font-size: 0.92rem;
  line-height: 1.5;
}

.contact-form-card {
  gap: 1.15rem;
  padding: clamp(1.3rem, 2.2vw, 1.7rem);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.14)),
    color-mix(in srgb, var(--color-highlight) 30%, white);
  border-color: color-mix(in srgb, var(--color-highlight) 42%, var(--color-border));
  box-shadow: 0 18px 48px rgba(84, 61, 18, 0.08);
}

.contact-form-card__head {
  display: grid;
  gap: 0.45rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid color-mix(in srgb, var(--color-highlight) 44%, white);
}

.contact-form {
  display: grid;
  gap: 1.1rem;
}

.contact-form__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.95rem 0.85rem;
}

.contact-form__field {
  display: grid;
  gap: 0.45rem;
}

.contact-form__field--full {
  grid-column: 1 / -1;
}

.contact-form__field span {
  color: var(--color-text);
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.contact-form__field em {
  font-style: normal;
  color: var(--color-accent);
}

.contact-form__field input,
.contact-form__field select,
.contact-form__field textarea {
  width: 100%;
  border: 1px solid color-mix(in srgb, var(--color-border-strong) 78%, white);
  border-radius: 1rem;
  background: rgba(255, 251, 239, 0.72);
  color: var(--color-text);
  font: inherit;
  padding: 0.9rem 1rem;
  transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease;
}

.contact-form__field select {
  appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, var(--color-text) 50%),
    linear-gradient(135deg, var(--color-text) 50%, transparent 50%);
  background-position:
    calc(100% - 1.15rem) calc(50% - 0.12rem),
    calc(100% - 0.85rem) calc(50% - 0.12rem);
  background-size: 0.35rem 0.35rem, 0.35rem 0.35rem;
  background-repeat: no-repeat;
  padding-right: 2.5rem;
}

.contact-form__field textarea {
  min-height: 8.5rem;
  resize: vertical;
}

.contact-form__field input::placeholder,
.contact-form__field textarea::placeholder {
  color: color-mix(in srgb, var(--color-text-soft) 80%, white);
}

.contact-form__field input:focus,
.contact-form__field select:focus,
.contact-form__field textarea:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--color-accent) 52%, var(--color-border));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-highlight) 22%, white);
  background: rgba(255, 252, 243, 0.95);
}

.contact-form__cta {
  width: 100%;
  justify-content: center;
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

.contact-panel__icon--support {
  width: 110px;
  height: 110px;
  margin-left: -0.35rem;
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

.contact-next-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid color-mix(in srgb, var(--color-border) 74%, white);
}

.contact-next-actions p {
  margin: 0;
  max-width: 34rem;
  color: var(--color-text);
  font-weight: var(--font-weight-semibold);
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
  grid-template-rows: auto 1fr;
  gap: clamp(1.4rem, 1.9vw, 1.7rem);
  min-height: clamp(29rem, 34vw, 34rem);
  padding: clamp(1.5rem, 2.1vw, 1.95rem);
  border: 1px solid color-mix(in srgb, var(--color-border) 70%, white);
  border-radius: clamp(1.2rem, 2vw, 1.8rem);
  background: color-mix(in srgb, white 88%, var(--color-highlight));
  align-content: start;
}

.contact-panel__head {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: start;
}

.contact-panel__heading {
  display: grid;
  gap: 0.5rem;
  align-content: start;
}

.contact-panel__head h3 {
  margin: 0;
  line-height: 1.08;
 
  font-size: clamp(1.95rem, 1.5rem + 1vw, 2.85rem);
}

.contact-panel__icon {
  width: clamp(108px, 8vw, 124px);
  height: clamp(108px, 8vw, 124px);
  object-position: top left;
  justify-self: center;
}

.contact-panel__icon--steps {
  object-position: bottom left;
}

.contact-panel__icon--support {
  width: clamp(108px, 8vw, 124px);
  height: clamp(108px, 8vw, 124px);
  margin-left: 0;
}

.contact-panel__body {
  display: grid;
  align-content: start;
  gap: 1.35rem;
  min-height: 100%;
}

.contact-panel__body--finance {
  grid-template-rows: auto 1fr auto;
}

.contact-panel__body--support {
  padding-top: 0.35rem;
}

.contact-steps {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: step;
  display: grid;
  gap: 1rem;
  align-content: start;
}

.contact-steps li {
  counter-increment: step;
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  gap: 0.95rem;
  align-items: start;
  line-height: 1.7;
  font-size: clamp(1rem, 0.98rem + 0.22vw, 1.14rem);
}

.contact-steps li::before {
  content: counter(step);
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  margin-top: 0.05rem;
  border-radius: 999px;
  background: #ef6d64;
  color: #fff7f1;
  font-size: 0.92rem;
  font-weight: 700;
}

.finance-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 1rem;
  align-content: start;
}

.finance-list li {
  display: grid;
  grid-template-columns: 0.85rem minmax(0, 1fr);
  gap: 0.8rem;
  align-items: start;
  font-weight: 700;
  font-size: clamp(1.02rem, 0.99rem + 0.24vw, 1.16rem);
  line-height: 1.45;
}

.finance-list li::before {
  content: "";
  width: 0.55rem;
  height: 0.55rem;
  margin-top: 0.5rem;
  background: #ef6d64;
  border-radius: 999px;
}

.contact-panel__text {
  margin: 0;
  max-width: 24ch;
  line-height: 1.68;
  font-size: clamp(1rem, 0.98rem + 0.22vw, 1.12rem);
  color: var(--color-text-soft);
}

.contact-panel__text--strong {
  font-weight: 700;
  color: var(--color-text);
  align-self: end;
}

@media (max-width: 980px) {
  .contact-hero__grid,
  .contact-section-head,
  .contact-details__grid {
    grid-template-columns: 1fr;
  }

  .contact-next-actions {
    display: grid;
    justify-items: start;
  }

  .contact-direct__icon,
  .contact-panel__icon {
    width: 92px;
    height: 92px;
  }

  .contact-panel__head h3 {
    max-width: 11ch;
  }

  .contact-panel {
    min-height: auto;
  }

  .contact-form-card {
    max-width: 42rem;
  }
}

@media (max-width: 640px) {
  .contact-form__grid {
    grid-template-columns: 1fr;
  }

  .contact-form__field--full {
    grid-column: auto;
  }

  .contact-direct__item {
    grid-template-columns: 1fr;
  }

  .contact-direct__icon,
  .contact-panel__icon {
    width: 72px;
    height: 72px;
  }

  .contact-panel__icon--support {
    width: 88px;
    height: 88px;
    margin-left: 0;
  }

  .contact-panel {
    padding: 1.25rem 1.15rem;
  }

  .contact-form-card {
    padding: 1.2rem 1rem;
    border-radius: 1.35rem;
  }

  .contact-panel__text {
    max-width: none;
  }
}
</style>
