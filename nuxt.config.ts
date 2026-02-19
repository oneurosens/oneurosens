export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  ssr: true,
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/zlk0pty.css' }]
    }
  },
  css: ['~/assets/css/variables.css', '~/assets/css/base.css', '~/assets/css/components.css'],
  nitro: {
    prerender: {
      routes: [
        '/',
        '/qui-sommes-nous',
        '/formations',
        '/actions',
        '/temoignages',
        '/contact',
        '/telecharger-le-catalogue'
      ]
    }
  }
})
