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
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/gallery',
        '/contact'
      ]
    }
  }
})