<template>
  <section class="contact-page">
    <div class="container contact-flow">
      <section class="contact-hero" aria-labelledby="contact-title">
        <div class="contact-hero__intro">
          <!--<p class="eyebrow">Contacter l’équipe, cadrer votre demande et avancer rapidement.</p>-->
          <h1 id="contact-title">Contact</h1>
          <p class="contact-hero__lead">
            Un point d’entrée simple pour vos <strong>demandes de formation</strong>, vos questions d’<strong>inscription</strong>,
            vos <strong>demandes d'informations complementaires</strong>, vos <strong>demandes de RDV</strong> ou de
            <strong>financement</strong>.
          </p>
        </div>

        <div class="contact-hero__grid">
          <div class="contact-direct-wrap">
            <div class="contact-direct__head">
              <!--<p class="eyebrow">Les informations essentielles, presentées sans detour.</p>-->
              <h2>Coordonnees</h2>
            </div>

            <div class="contact-direct">
              <article class="contact-direct__item">
                <img :src="iconTel" alt="" aria-hidden="true" class="contact-direct__icon" loading="lazy">
                <div>
                  <p class="contact-direct__label">Par telephone ou WhatsApp</p>
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

          <article class="contact-form-card theme-tint-panel">
            <div class="contact-form-card__head">
              <h2 id="contact-form-title">Écrivez-nous</h2>
              <p>
                Un message structure pour orienter rapidement votre demande.
              </p>
            </div>

            <form class="contact-form" @submit.prevent="submitContactForm">
              <div class="form-row">
                <label class="form-field">
                  <input
                    v-model.trim="contactForm.fullName"
                    type="text"
                    autocomplete="name"
                    placeholder="Nom / prenom"
                    aria-label="Nom / prenom"
                    required
                  >
                </label>

                <label class="form-field">
                  <input
                    v-model.trim="contactForm.email"
                    type="email"
                    autocomplete="email"
                    placeholder="Email"
                    aria-label="Email"
                    required
                  >
                </label>
              </div>

              <div class="form-row">
                <label class="form-field">
                  <input
                    v-model.trim="contactForm.phone"
                    type="tel"
                    autocomplete="tel"
                    placeholder="Telephone"
                    aria-label="Telephone"
                  >
                </label>

                <label class="form-field">
                  <select v-model="contactForm.subject" aria-label="Objet" required>
                    <option value="" disabled>Selectionner un objet</option>
                    <option v-for="option in contactSubjectOptions" :key="option" :value="option">{{ option }}</option>
                  </select>
                </label>
              </div>

              <label class="form-field">
                <textarea
                  v-model.trim="contactForm.message"
                  rows="6"
                  placeholder="Message"
                  aria-label="Message"
                  required
                />
              </label>

              <div class="contact-form__actions">
                <BaseButton type="submit" :disabled="isSendingContactForm">
                  {{ isSendingContactForm ? 'Envoi en cours...' : 'Envoyer la demande' }}
                </BaseButton>
                <p v-if="contactFormFeedback" :class="['form-feedback', `form-feedback--${contactFormFeedback.type}`]">
                  {{ contactFormFeedback.message }}
                </p>
              </div>
            </form>
          </article>
        </div>
      </section>

      <section class="contact-details" aria-labelledby="details-title">
        <div class="contact-section-head">
          <!--<p class="eyebrow">Trois repères utiles pour la suite.</p>-->
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
              <p class="contact-panel__text">
                Vous pouvez soit <strong>telecharger la fiche PDF</strong>, soit passer par le
                <strong>formulaire d'inscription en ligne</strong> pour transmettre directement votre demande.
              </p>
              <div class="registration-actions">
                <BaseButton @click="openRegistrationModal">Ouvrir le formulaire d'inscription</BaseButton>
                <BaseButton :href="REGISTRATION_DOWNLOAD_URL" :download="REGISTRATION_DOWNLOAD_NAME" variant="secondary">
                  Télécharger la fiche PDF
                </BaseButton>
              </div>
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
                <li>A titre individuel</li>
                <li>Par mon employeur</li>
                <li>Financement OPCO</li>
              </ul>

              <p class="contact-panel__text contact-panel__text--strong">
                Nous pouvons vous aider a identifier la bonne piste selon votre situation.
              </p>
            </div>
          </article>

          <article class="contact-panel contact-panel--support" aria-labelledby="contact-footer-title">
            <div class="contact-panel__head">
              <img :src="mascotteParapluie" alt="" aria-hidden="true" class="contact-panel__icon contact-panel__icon--support" loading="lazy">
              <div class="contact-panel__heading">
                <p class="contact-panel__kicker">Besoin d'aide ?</p>
                <h3 id="contact-footer-title">Un appui concret</h3>
              </div>
            </div>

            <div class="contact-panel__body contact-panel__body--support">
              <p class="contact-panel__text">
                Nous vous aidons a <strong>clarifier votre besoin de formation ou d'accompagnement</strong>, a choisir le
                bon mode de contact et a preparer les <strong>pieces utiles</strong>.
              </p>
              <p class="contact-panel__text">
                Vous devez repondre a un <strong>appel a projet</strong> ? Nous sommes a votre ecoute pour vous soutenir
                dans cette demarche.
              </p>
            </div>
          </article>
        </div>

        <div class="contact-next-actions">
          <p>Vous voulez d'abord explorer l'offre avant d'echanger ?</p>
          <BaseButton :href="CATALOGUE_DOWNLOAD_URL" :download="CATALOGUE_DOWNLOAD_NAME" variant="secondary">Télécharger le catalogue</BaseButton>
        </div>
      </section>
    </div>

    <Teleport to="body">
      <div
        v-if="isRegistrationModalOpen"
        class="modal-overlay"
        role="presentation"
        @click.self="closeRegistrationModal"
      >
        <div
          class="registration-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="registration-modal-title"
        >
          <button class="modal-close" type="button" aria-label="Fermer le formulaire d'inscription" @click="closeRegistrationModal">
            ×
          </button>

          <div class="registration-modal__head">
            <p class="eyebrow">Inscription</p>
            <h2 id="registration-modal-title">Formulaire d'inscription</h2>
          </div>

          <form class="registration-form" @submit.prevent="submitRegistrationForm">
            <fieldset class="registration-type registration-card">
              <legend>Type d'inscription</legend>
              <label>
                <input v-model="registrationForm.type" type="radio" value="intra" name="registrationType">
                <span>Inscription intra-entreprise</span>
              </label>
              <label>
                <input v-model="registrationForm.type" type="radio" value="individual" name="registrationType">
                <span>Inscription personne individuelle</span>
              </label>
            </fieldset>

            <div v-if="registrationForm.type === 'intra'" class="registration-section registration-card">
              <div class="form-row">
                <label class="form-field">
                  <span>Nom de l'entreprise / association</span>
                  <input v-model.trim="registrationForm.enterpriseName" type="text" required>
                </label>
                <label class="form-field">
                  <span>Nom du responsable de la structure</span>
                  <input v-model.trim="registrationForm.structureManager" type="text" required>
                </label>
              </div>

              <div class="form-row">
                <label class="form-field">
                  <span>Nombre de personnes a former</span>
                  <input v-model.trim="registrationForm.traineeCount" type="number" min="1" inputmode="numeric" required>
                </label>
                <label class="form-field">
                  <span>Nom de l'OPCO</span>
                  <input v-model.trim="registrationForm.opcoName" type="text">
                </label>
              </div>
            </div>

            <div v-else class="registration-section registration-card">
              <div class="form-row">
                <label class="form-field">
                  <span>Nom</span>
                  <input v-model.trim="registrationForm.lastName" type="text" required>
                </label>
                <label class="form-field">
                  <span>Prenom</span>
                  <input v-model.trim="registrationForm.firstName" type="text" required>
                </label>
              </div>

              <div class="form-row">
                <label class="form-field">
                  <span>Date de naissance</span>
                  <input v-model="registrationForm.birthDate" type="date">
                </label>
                <label class="form-field">
                  <span>Telephone</span>
                  <input v-model.trim="registrationForm.phone" type="tel" autocomplete="tel">
                </label>
              </div>

              <label class="form-field">
                <span>Adresse</span>
                <textarea v-model.trim="registrationForm.address" rows="3"></textarea>
              </label>

              <div class="form-row">
                <label class="form-field">
                  <span>Email</span>
                  <input v-model.trim="registrationForm.email" type="email" autocomplete="email">
                </label>
                <label class="form-field">
                  <span>Profession</span>
                  <input v-model.trim="registrationForm.profession" type="text">
                </label>
              </div>

              <label class="form-field">
                <span>Nom de la structure employeur</span>
                <input v-model.trim="registrationForm.employerName" type="text">
              </label>
            </div>

            <div class="registration-section registration-card">
              <label class="form-field">
                <span>Intitule de(s) formation(s)</span>
                <input v-model.trim="registrationForm.trainingTitle" type="text" required>
              </label>

              <label class="form-field">
                <span>Dates de(s) formation(s)</span>
                <input v-model.trim="registrationForm.trainingDates" type="text" required>
              </label>
            </div>

            <fieldset class="registration-consents registration-card">
              <legend>Protection des donnees et droits a l'image</legend>
              <label>
                <input v-model="registrationForm.dataConsent" type="checkbox">
                <span>J'autorise l'organisme de formation a collecter mes donnees personnelles.</span>
              </label>
              <label>
                <input v-model="registrationForm.imageConsent" type="checkbox">
                <span>J'autorise l'organisme a me prendre en photo a des fins pedagogiques ou de communication.</span>
              </label>
              <label>
                <input v-model="registrationForm.newsletterConsent" type="checkbox">
                <span>J'autorise l'envoi par mail d'informations relatives aux formations et newsletters.</span>
              </label>
            </fieldset>

            <fieldset class="registration-handicap registration-card">
              <legend>Etes vous en situation de handicap ?</legend>
              <label>
                <input v-model="registrationForm.handicap" type="radio" value="oui" name="handicap">
                <span>Oui</span>
              </label>
              <label>
                <input v-model="registrationForm.handicap" type="radio" value="non" name="handicap">
                <span>Non</span>
              </label>
            </fieldset>

            <div class="form-row registration-signature registration-card">
              <label class="form-field">
                <span>Date</span>
                <input v-model="registrationForm.signatureDate" type="date">
              </label>
              <label class="form-field">
                <span>Nom pour signature</span>
                <input v-model.trim="registrationForm.signatureName" type="text">
              </label>
            </div>

            <div class="registration-form__actions">
              <BaseButton class="registration-form__submit" type="submit" :disabled="isSendingRegistrationForm">
                {{ isSendingRegistrationForm ? 'Envoi en cours...' : "Envoyer l'inscription" }}
              </BaseButton>
              <p v-if="registrationFormFeedback" :class="['form-feedback', `form-feedback--${registrationFormFeedback.type}`]">
                {{ registrationFormFeedback.message }}
              </p>
            </div>
          </form>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import iconFinancement from '~/assets/img/contact/icone-financement.png'
import iconInscription from '~/assets/img/contact/icone-inscription.png'
import iconMail from '~/assets/img/contact/icone-mail.png'
import iconTel from '~/assets/img/contact/icone-tel.png'
import mascotteParapluie from '~/assets/img/mascotte-parapluie.png'
import { CATALOGUE_DOWNLOAD_NAME, CATALOGUE_DOWNLOAD_URL } from '~/utils/catalogueDownload'
import { REGISTRATION_DOWNLOAD_NAME, REGISTRATION_DOWNLOAD_URL } from '~/utils/registrationDownload'

const contactSubjectOptions = [
  'demande de formation',
  "demande d'informations complementaires",
  'demande de RDV telephonique',
  'demande de RDV en presentiel',
  'demande de financement',
  'autre demande'
]

const contactForm = ref({
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const createRegistrationForm = () => ({
  type: 'individual',
  enterpriseName: '',
  structureManager: '',
  traineeCount: '',
  opcoName: '',
  lastName: '',
  firstName: '',
  birthDate: '',
  address: '',
  phone: '',
  email: '',
  employerName: '',
  profession: '',
  trainingTitle: '',
  trainingDates: '',
  dataConsent: false,
  imageConsent: false,
  newsletterConsent: false,
  handicap: '',
  signatureDate: '',
  signatureName: ''
})

const registrationForm = ref(createRegistrationForm())
const isRegistrationModalOpen = ref(false)
const isSendingContactForm = ref(false)
const isSendingRegistrationForm = ref(false)
const contactFormFeedback = ref<{ type: 'success' | 'error', message: string } | null>(null)
const registrationFormFeedback = ref<{ type: 'success' | 'error', message: string } | null>(null)
const runtimeConfig = useRuntimeConfig()
const web3formsAccessKey = runtimeConfig.public.web3formsAccessKey
const formRecipient = runtimeConfig.public.formRecipient

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const cleanWeb3FormsPayload = (data: Record<string, string>) =>
  Object.fromEntries(
    Object.entries(data).filter(([, value]) => value.trim() !== '')
  )

const getErrorMessage = (error: unknown) => {
  if (error && typeof error === 'object' && 'data' in error) {
    const data = (error as { data?: { message?: string } }).data

    if (data?.message) {
      return data.message
    }
  }

  if (error instanceof Error && error.message) {
    return error.message
  }

  return "L'envoi a echoue. Verifiez la configuration email puis reessayez."
}

const submitToWeb3Forms = async (data: Record<string, string>) => {
  if (!web3formsAccessKey) {
    throw new Error('Clé Web3Forms manquante')
  }

  const response = await $fetch<{ success: boolean, message?: string }>('https://api.web3forms.com/submit', {
    method: 'POST',
    body: cleanWeb3FormsPayload({
      access_key: web3formsAccessKey,
      ...data
    })
  })

  if (!response.success) {
    throw new Error(response.message || 'Echec Web3Forms')
  }
}

const resetContactForm = () => {
  contactForm.value = {
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}

const submitContactForm = async () => {
  isSendingContactForm.value = true
  contactFormFeedback.value = null

  try {
    await submitToWeb3Forms({
      subject: `Contact site - ${contactForm.value.subject}`,
      from_name: 'Site O Neuro Sens',
      full_name: contactForm.value.fullName,
      email: contactForm.value.email,
      phone: contactForm.value.phone || '-',
      contact_subject: contactForm.value.subject,
      message: contactForm.value.message,
      botcheck: ''
    })

    resetContactForm()
    contactFormFeedback.value = {
      type: 'success',
      message: 'Votre demande a bien ete envoyee.'
    }
  } catch (error) {
    contactFormFeedback.value = {
      type: 'error',
      message: getErrorMessage(error)
    }
  } finally {
    isSendingContactForm.value = false
  }
}

const submitRegistrationForm = async () => {
  isSendingRegistrationForm.value = true
  registrationFormFeedback.value = null

  const registrationEmail = registrationForm.value.email.trim()
  const hasValidRegistrationEmail = registrationEmail !== '' && isValidEmail(registrationEmail)

  try {
    await submitToWeb3Forms({
      subject: 'Inscription formation - site web',
      from_name: 'Site O Neuro Sens',
      registration_type: registrationForm.value.type === 'intra' ? 'intra-entreprise' : 'personne individuelle',
      enterprise_name: registrationForm.value.enterpriseName || '-',
      structure_manager: registrationForm.value.structureManager || '-',
      trainee_count: registrationForm.value.traineeCount || '-',
      opco_name: registrationForm.value.opcoName || '-',
      last_name: registrationForm.value.lastName || '-',
      first_name: registrationForm.value.firstName || '-',
      birth_date: registrationForm.value.birthDate || '-',
      address: registrationForm.value.address || '-',
      phone: registrationForm.value.phone || '-',
      participant_email: registrationEmail || '-',
      replyto: hasValidRegistrationEmail ? registrationEmail : '',
      employer_name: registrationForm.value.employerName || '-',
      profession: registrationForm.value.profession || '-',
      training_title: registrationForm.value.trainingTitle,
      training_dates: registrationForm.value.trainingDates,
      data_consent: registrationForm.value.dataConsent ? 'Oui' : 'Non',
      image_consent: registrationForm.value.imageConsent ? 'Oui' : 'Non',
      newsletter_consent: registrationForm.value.newsletterConsent ? 'Oui' : 'Non',
      handicap: registrationForm.value.handicap || '-',
      signature_date: registrationForm.value.signatureDate || '-',
      signature_name: registrationForm.value.signatureName || '-',
      botcheck: ''
    })

    registrationForm.value = createRegistrationForm()
    registrationFormFeedback.value = {
      type: 'success',
      message: "L'inscription a bien ete envoyee."
    }
  } catch (error) {
    registrationFormFeedback.value = {
      type: 'error',
      message: getErrorMessage(error)
    }
  } finally {
    isSendingRegistrationForm.value = false
  }
}

const openRegistrationModal = () => {
  isRegistrationModalOpen.value = true
}

const closeRegistrationModal = () => {
  isRegistrationModalOpen.value = false
  registrationFormFeedback.value = null
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isRegistrationModalOpen.value) {
    closeRegistrationModal()
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown)
}

watch(isRegistrationModalOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown)
  }

  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})

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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: start;
}

.contact-direct-wrap,
.contact-form-card,
.contact-form,
.contact-form-card__head,
.contact-details,
.contact-panel,
.contact-panel__head,
.contact-panel__heading,
.contact-panel__body,
.registration-modal__head,
.registration-form,
.registration-section {
  display: grid;
}

.contact-direct-wrap,
.contact-form-aside,
.contact-details {
  gap: 1rem;
}

.contact-panel,
.contact-form-card {
  background: color-mix(in srgb, white 82%, var(--color-highlight));
  border: 1px solid color-mix(in srgb, var(--color-border) 72%, white);
  border-radius: clamp(1.2rem, 2vw, 1.8rem);
}

.contact-form-card {
  padding: clamp(1.15rem, 2vw, 1.5rem);
}

.contact-direct__head,
.contact-section-head {
  display: grid;
  gap: 0.45rem;
}

.contact-direct__head h2,
.contact-section-head h2 {
  margin: 0;
}

.contact-direct {
  display: grid;
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
.contact-panel__kicker,
.form-field span,
.registration-type legend,
.registration-consents legend,
.registration-handicap legend,
.contact-panel__note-title {
  margin: 0 0 0.4rem;
  color: #3f5ea0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.84rem;
}

.contact-panel__kicker {
  display: flex;
  align-items: end;
  min-height: 2.8em;
}

.contact-direct__value {
  margin: 0 0 0.15rem;
  color: var(--color-text);
  font-size: clamp(1.08rem, 1rem + 0.24vw, 1.22rem);
  font-weight: 700;
}

.contact-direct p:last-child,
.contact-form-note strong,
.contact-form-card__head h2 {
  margin: 0;
}

.contact-direct a {
  color: inherit;
  text-decoration: none;
}

.contact-form-card {
  gap: 1.35rem;
}

.contact-form-card__head {
  gap: 0.7rem;
}

.contact-form-card__head p:last-child {
  color: var(--color-text-body);
  line-height: var(--line-height-base);
  padding-bottom: 1rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 72%, white);
}

.contact-form {
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.form-field {
  display: grid;
  gap: 0.45rem;
}

.form-field input,
.form-field select,
.form-field textarea {
  width: 100%;
  border: 1px solid color-mix(in srgb, var(--color-border) 74%, white);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.94);
  padding: 0.9rem 1rem;
  color: var(--color-text);
  font: inherit;
}

.form-field select {
  padding-right: 3rem;
}

.form-field textarea {
  min-height: 8rem;
  resize: vertical;
}

.contact-form__actions,
.registration-form__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.form-feedback {
  flex: 1 1 100%;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.form-feedback--success {
  color: #116149;
}

.form-feedback--error {
  color: #ab2f2f;
}

.registration-actions {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
}

.registration-actions > * {
  width: 100%;
}

.contact-details {
  gap: clamp(1.8rem, 3vw, 2.6rem);
}

.contact-next-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-top: var(--space-4);
}

.contact-next-actions p {
  margin: 0;
  max-width: 34rem;
  color: var(--color-text);
  font-weight: var(--font-weight-semibold);
}

.contact-section-head {
  padding-top: var(--space-3);
  border-top: 2px solid color-mix(in srgb, var(--color-accent) 20%, white);
}

.contact-details__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.8rem, 2.6vw, 2.6rem);
  align-items: stretch;
}

.contact-panel {
  grid-template-rows: auto 1fr;
  gap: clamp(1.4rem, 1.9vw, 1.7rem);
  min-height: clamp(28rem, 34vw, 34rem);
  padding: clamp(1.5rem, 2.1vw, 1.95rem);
  align-content: start;
}

.contact-panel__head {
  grid-template-rows: clamp(108px, 8vw, 124px) auto;
  gap: 1rem;
}

.contact-panel__heading {
  align-content: start;
  gap: 0.5rem;
  min-height: clamp(8.5rem, 10vw, 10rem);
}

.contact-panel__head h3 {
  margin: 0;
  line-height: 1.08;
  font-size: clamp(1.95rem, 1.5rem + 1vw, 2.85rem);
  min-height: 2.25em;
}

.contact-panel__icon {
  width: clamp(108px, 8vw, 124px);
  height: clamp(108px, 8vw, 124px);
  object-position: top left;
  justify-self: center;
  align-self: end;
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
  gap: 1.2rem;
  align-content: start;
}

.contact-panel__body--finance {
  grid-template-rows: auto 1fr auto;
}

.contact-panel__text {
  margin: 0;
  max-width: 24ch;
  line-height: var(--line-height-base);
  font-size: var(--font-size-body);
  color: var(--color-text-body);
}

.contact-panel__text--strong {
  font-weight: 700;
  color: var(--color-text);
  align-self: end;
}

.contact-panel__note {
  gap: 0.7rem;
  padding-top: 1rem;
}

.contact-panel__note ul,
.finance-list {
  display: grid;
  gap: 0.6rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.contact-panel__note li {
  display: grid;
  grid-template-columns: 0.55rem minmax(0, 1fr);
  gap: 0.75rem;
  align-items: start;
  padding-left: 0;
  color: var(--color-text);
  line-height: 1.55;
}

.contact-panel__note li::before {
  content: "";
  width: 0.55rem;
  height: 0.55rem;
  margin-top: 0.45rem;
  background: var(--page-tint, var(--color-accent));
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

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: grid;
  place-items: center;
  padding: 1.25rem;
  background: rgba(24, 24, 24, 0.48);
  backdrop-filter: blur(6px);
}

.registration-modal {
  position: relative;
  width: min(56rem, 100%);
  max-height: 92vh;
  overflow: auto;
  padding: clamp(1.35rem, 2.2vw, 2rem);
  border-radius: 1.8rem;
  border: 1px solid color-mix(in srgb, var(--color-border) 76%, white);
  background: #f7f4ee;
  box-shadow: 0 24px 60px rgba(29, 30, 32, 0.14);
}

.modal-close {
  position: sticky;
  top: 0;
  margin-left: auto;
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 999px;
  background: color-mix(in srgb, white 70%, var(--color-highlight));
  color: var(--color-text);
  font-size: 1.5rem;
  cursor: pointer;
}

.registration-modal__head {
  gap: 0.7rem;
  margin-top: -1.2rem;
  margin-bottom: 1.25rem;
  padding: 0.35rem 0 1rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 76%, white);
}

.registration-modal__head h2 {
  margin: 0;
}

.registration-form,
.registration-section {
  gap: 1rem;
}

.registration-form {
  gap: 1.15rem;
}

.registration-card {
  padding: 1rem 1rem 1.05rem;
  border: 1px solid color-mix(in srgb, var(--color-border) 72%, white);
  border-radius: 1.3rem;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.65);
}

.registration-type,
.registration-consents,
.registration-handicap {
  display: grid;
  gap: 0.85rem;
  margin: 0;
  padding: 1rem 1rem 1.05rem;
  border: 0;
  border-top: 0;
}

.registration-type label,
.registration-consents label,
.registration-handicap label {
  display: grid;
  grid-template-columns: 1.1rem minmax(0, 1fr);
  gap: 0.75rem;
  align-items: start;
  color: var(--color-text);
  line-height: 1.55;
  padding: 0.25rem 0;
}

.registration-type input,
.registration-consents input,
.registration-handicap input {
  margin-top: 0.18rem;
}

.registration-signature {
  align-items: end;
}

.registration-form__actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.registration-form__actions > * {
  width: 100%;
}

:deep(.registration-form__submit) {
  border-color: #ffcc00;
  background: #ffcc00;
  color: #181818;
}

:deep(.registration-form__submit:hover),
:deep(.registration-form__submit:focus-visible) {
  background: #f2c200;
  color: #181818;
}

@media (max-width: 980px) {
  .contact-hero__grid,
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
    min-height: 0;
  }

  .contact-panel {
    min-height: auto;
  }

  .contact-panel__head {
    grid-template-rows: auto auto;
  }

  .contact-panel__heading,
  .contact-panel__kicker {
    min-height: 0;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .registration-form__actions {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
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
  }

  .contact-panel,
  .contact-form-card,
  .registration-modal {
    padding: 1.25rem 1.15rem;
  }

  .contact-panel__text {
    max-width: none;
  }
}
</style>
