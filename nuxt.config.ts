// import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default ({
  head: {
    title: 'CHAO HANH',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt3 app' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Style resources
  ** See https://github.com/nuxt-community/style-resources-module
  */
  styleResources: {
    scss: [
      // '~/assets/scss/_variables.scss',
      // '~/assets/scss/_mixins.scss'
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    // { src: '~/assets/less/theme.less', lang: 'less' },
    { src: '~/assets/scss/style.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    // '@/plugins/antd-ui',
    // '@/plugins/api',
    // '@/plugins/directive',
    // '@/plugins/filter',
    // '@/plugins/util'
  ],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
})
