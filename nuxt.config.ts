export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  ssr: true,
  runtimeConfig: {
    public: {
      web3formsAccessKey: process.env.NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '',
      formRecipient: process.env.NUXT_PUBLIC_FORM_RECIPIENT || 'oneurosens@proton.me'
    }
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/zlk0pty.css' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  },
  css: ['~/assets/css/variables.css', '~/assets/css/base.css', '~/assets/css/formes.css', '~/assets/css/components.css'],
  nitro: {
    prerender: {
      routes: [
        '/',
        '/qui-sommes-nous',
        '/formations',
        '/actions',
        '/temoignages',
        '/contact'
      ]
    }
  }
})
