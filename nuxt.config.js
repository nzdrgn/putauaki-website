const pkg = require('./package')


module.exports = {
  mode: 'universal',
  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY

  },

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
      
    ]
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

    '~/plugins/vue-gallery.client.js',
    '~/plugins/google-maps',
    '~/plugins/vue-good-table',
    '~/plugins/vue-mailchimp-subscribe'  
  ],

  /*
  ** Nuxt.js modules
  */

 modules: [
   'bootstrap-vue/nuxt',
   '@nuxtjs/dotenv',   	
    // modules for full static before `nuxt export` (coming in v2.12)
    '@/modules/static',
    '@/modules/crawler',
    // This is where you import the new plugin
    '@nuxtjs/prismic'
  ],
 bootstrapVue: {
   bootstrapCSS: false, // Or `css: false`
   bootstrapVueCSS: false // Or `bvCSS: false`
 },

 // This is where you configure your settings for the new plugin
 prismic: {
  endpoint: 'https://putauaki-website.prismic.io/api/v2',
  linkResolver: '@/plugins/link-resolver',
  htmlSerializer: '@/plugins/html-serializer',
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