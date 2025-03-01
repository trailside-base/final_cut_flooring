// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Final Cut Flooring - Professional Flooring & Tile Installation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Professional flooring and bathroom tile installation services. Quality craftsmanship and exceptional customer service.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    baseURL: '/final_cut_flooring/'
  },
  ssr: true,
  nitro: {
    preset: 'github-pages',
    routeRules: {
      '/**': { prerender: true }
    },
    publicAssets: [
      {
        baseURL: 'final_cut_flooring',
        dir: 'public',
        maxAge: 60 * 60 * 24 * 365 // 1 year
      }
    ],
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/gallery',
        '/contact'
      ]
    }
  },
  experimental: {
    payloadExtraction: false
  },
  runtimeConfig: {
    // Private keys that are exposed to the server
    emailService: process.env.EMAIL_SERVICE || 'smtp',
    emailHost: process.env.EMAIL_HOST,
    emailPort: process.env.EMAIL_PORT,
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
    emailFrom: process.env.EMAIL_FROM,
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    mailgunApiKey: process.env.MAILGUN_API_KEY,
    contactFormRecipient: process.env.CONTACT_FORM_RECIPIENT,
    
    // Public keys that are exposed to the client
    public: {
      baseURL: process.env.NODE_ENV === 'production' 
        ? 'https://trailside-base.github.io/final_cut_flooring'
        : 'http://localhost:3000',
      siteUrl: process.env.SITE_URL || 'http://localhost:3000'
    }
  }
})