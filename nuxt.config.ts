// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
  ],
  css: [
    '~/assets/css/style.css',
    '~/assets/css/tailwind.css',
    "bootstrap/dist/css/bootstrap.min.css",
  ],
  plugins: [
    '~/plugins/fontawesome.js',
  ],
  app: {
    head:{
      title: 'Todo App Nuxt3',
      meta:[
        {name: 'description', content: 'This is a todo app using Nuxt3'},
      ],
      link:[
        {ref: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'}
      ],
    }
  },
})
