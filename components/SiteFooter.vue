<template>
  <footer :class="['site-footer', `site-footer--${themeName}`]">
    <div class="site-footer__cap">
      <div class="container site-footer__cap-inner">
        <img
          :src="footerMascot"
          alt="Mascotte Oneuro Sens"
          class="site-footer__mascot"
          loading="lazy"
        >
      </div>
      <div class="site-footer__top-shape" aria-hidden="true" />
    </div>

    <div class="container site-footer__inner">
      <div class="footer-grid">
        <div class="footer-column footer-column--contact">
          <p class="footer-column__eyebrow">Contact</p>
          <h2>Par email ou par téléphone</h2>

          <a class="footer-link" href="mailto:oneurosens.formation@gmail.com">
            <span class="footer-link__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Zm2.23-.75L12 11.73 20.27 6H3.73Zm16.77 1.84-7.86 5.44a1.13 1.13 0 0 1-1.28 0L3.5 7.84v9.41c0 .14.11.25.25.25h16.5c.14 0 .25-.11.25-.25V7.84Z" />
              </svg>
            </span>
            <span>oneurosens.formation@gmail.com</span>
          </a>

          <a class="footer-link" href="tel:+590690482199">
            <span class="footer-link__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1.5 1.5 0 0 1 1.53-.36c1.17.39 2.42.6 3.69.6a1.5 1.5 0 0 1 1.5 1.5v3.08a1.5 1.5 0 0 1-1.5 1.5C10.88 21.5 2.5 13.12 2.5 2.5A1.5 1.5 0 0 1 4 1h3.08a1.5 1.5 0 0 1 1.5 1.5c0 1.27.21 2.52.6 3.69a1.5 1.5 0 0 1-.36 1.53l-2.2 2.2Z" />
              </svg>
            </span>
            <span>06 90 48 21 99</span>
          </a>

          <a class="footer-link" href="tel:+590690678863">
            <span class="footer-link__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1.5 1.5 0 0 1 1.53-.36c1.17.39 2.42.6 3.69.6a1.5 1.5 0 0 1 1.5 1.5v3.08a1.5 1.5 0 0 1-1.5 1.5C10.88 21.5 2.5 13.12 2.5 2.5A1.5 1.5 0 0 1 4 1h3.08a1.5 1.5 0 0 1 1.5 1.5c0 1.27.21 2.52.6 3.69a1.5 1.5 0 0 1-.36 1.53l-2.2 2.2Z" />
              </svg>
            </span>
            <span>06 90 67 88 63</span>
          </a>
        </div>

        <div class="footer-column footer-column--address">
          <p class="footer-column__eyebrow">Adresse</p>
          <h2>Centre de formation</h2>

          <div class="footer-link footer-link--static">
            <span class="footer-link__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.25a7.5 7.5 0 0 1 7.5 7.5c0 5.2-6 11.03-6.26 11.27a1.78 1.78 0 0 1-2.48 0C10.5 20.78 4.5 14.95 4.5 9.75A7.5 7.5 0 0 1 12 2.25Zm0 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </span>
            <span>1315 route de Cocoyer<br>97190 Le Gosier<br>Guadeloupe</span>
          </div>
        </div>

        <div class="footer-column footer-column--links">
          <p class="footer-column__eyebrow">Accès rapide</p>
          <h2>Aller plus loin</h2>

          <a class="footer-link" :href="CATALOGUE_DOWNLOAD_URL" :download="CATALOGUE_DOWNLOAD_NAME">
            <span class="footer-link__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 2.25A2.25 2.25 0 0 0 3.75 4.5v15A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5V8.56a2.25 2.25 0 0 0-.66-1.59l-4.56-4.56a2.25 2.25 0 0 0-1.59-.66H6Zm7.5 1.9 4.85 4.85H15a1.5 1.5 0 0 1-1.5-1.5V4.15ZM7.5 13.5h9v1.5h-9v-1.5Zm0 3h9V18h-9v-1.5Zm0-6h3.75V12H7.5v-1.5Z" />
              </svg>
            </span>
            <span>Télécharger le catalogue</span>
          </a>

          <div class="footer-socials">
            <p class="footer-socials__label">Suivez-nous</p>
            <div class="footer-socials__list">
              <a
                v-for="social in socialLinks"
                :key="social.label"
                class="footer-social"
                :href="social.href"
                target="_blank"
                rel="noreferrer"
                :aria-label="social.label"
              >
                <img :src="menuToggleShape" alt="" class="footer-social__shape" aria-hidden="true">
                <span class="footer-social__icon" aria-hidden="true" v-html="social.icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import mascotAccueil from '~/assets/img/footer/mascotte-accueil.svg'
import mascotContact from '~/assets/img/footer/mascotte-contact.svg'
import mascotFormation from '~/assets/img/footer/mascotte-formation.svg'
import mascotQuiSommesNous from '~/assets/img/footer/mascotte-qui-sommes-nous.svg'
import mascotTemoignage from '~/assets/img/footer/mascotte-temoignage.svg'
import menuToggleShape from '~/assets/img/menu/menu-toggle-shape.svg'
import { CATALOGUE_DOWNLOAD_NAME, CATALOGUE_DOWNLOAD_URL } from '~/utils/catalogueDownload'
import { getRouteThemeName } from '~/utils/routeTheme'

const route = useRoute()
const displayedThemePath = useState('displayed-theme-path', () => route.path)

const footerMascot = computed(() => {
  if (route.path === '/qui-sommes-nous') {
    return mascotQuiSommesNous
  }

  if (route.path === '/formations') {
    return mascotFormation
  }

  if (route.path === '/temoignages') {
    return mascotTemoignage
  }

  if (route.path === '/contact') {
    return mascotContact
  }

  return mascotAccueil
})

const themeName = computed(() => getRouteThemeName(displayedThemePath.value))

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm4.25 2.7A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.8A3.7 3.7 0 1 0 15.7 12 3.7 3.7 0 0 0 12 8.3Zm5.1-2.15a1.3 1.3 0 1 1-1.3 1.3 1.3 1.3 0 0 1 1.3-1.3Z" />
      </svg>
    `
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.45 8.35A1.65 1.65 0 1 1 5.4 5.05a1.65 1.65 0 0 1 .05 3.3ZM3.95 9.75h3v9.3h-3v-9.3Zm4.9 0h2.88v1.28h.05c.4-.75 1.38-1.56 2.85-1.56 3.05 0 3.62 2 3.62 4.62v4.96h-3v-4.4c0-1.05-.02-2.4-1.47-2.4s-1.7 1.14-1.7 2.32v4.48h-3v-9.3Z" />
      </svg>
    `
  },
  {
    label: 'Facebook',
    href: '#',
    icon: `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.33 21v-7.1h2.38l.36-2.77h-2.74V9.36c0-.8.22-1.35 1.37-1.35h1.46V5.6c-.25-.04-1.12-.11-2.13-.11-2.11 0-3.55 1.29-3.55 3.65v1.99H8.1v2.77h2.38V21h2.85Z" />
      </svg>
    `
  }
]
</script>
