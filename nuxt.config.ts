// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    'vue-multiselect/dist/vue-multiselect.css'
  ],
  quasar: {
    plugins: ['Dark', 'Dialog', 'Cookies', 'Notify', 'Loading']
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "nuxt-quasar-ui", 
    "@pinia/nuxt", 
    "@vueuse/nuxt",
    "@vueuse/nuxt",
  ]
})