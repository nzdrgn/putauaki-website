<template>
    <!-- Slices block component -->
    <slices-block :slices="slices"/>
</template>

<script>

import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'home',
  components: {
    SlicesBlock,
  },
  head () {
    return {
      title: 'Putauaki Trust',
    }
  },
  	
async asyncData({ $prismic, error }) {
    try{


      // Here we query blog home content using $prismic which
			// has the api endpoint data from the nuxt.config.js
      const homepageContent = (await $prismic.api.getSingle('home')).data
     
           // Query to get the page content
      const pageContent = (await $prismic.api.getSingle('home')).data


      // Returns data to be used in template
      return {
        pageContent,
        slices: pageContent.body
      }
    } catch (e) {
      // Returns error page

      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
