// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

    css: [
    '@picocss/pico/css/pico.min.css'
  ],
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxt/icon']
})