const pkg = require('./package')
const PrismicConfig = require('./prismic.config')

module.exports = {
  mode: 'universal',
  VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      
    ],
    script: [

      { innerHTML: '{ window.prismic = { endpoint: "' + PrismicConfig.apiEndpoint + '"} }' },
      { src: '//static.cdn.prismic.io/prismic.min.js' }

    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/theme-putauaki.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/link-resolver.js',
    '~/plugins/html-serializer.js',
    '~/plugins/prismic-vue.js',
    '~/plugins/vue-gallery.client.js',
    '~/plugins/google-maps'
  ],

  /*
  ** Nuxt.js modules
  */

 modules: ['bootstrap-vue/nuxt','@nuxtjs/dotenv'],
 bootstrapVue: {
   bootstrapCSS: false, // Or `css: false`
   bootstrapVueCSS: false // Or `bvCSS: false`
 },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map',
        config.resolve.alias['vue'] = 'vue/dist/vue.common'
      }     
      
    }
  },

  generate: {
        fallback: '404.html'    
  }
}