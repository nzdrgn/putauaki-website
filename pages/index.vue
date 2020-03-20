<template>
    <!-- Slices block component -->
    <slices-block :slices="slices"/>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'Home',
  components: {
    SlicesBlock,
  },
  head () {
    return {
      title: 'Putauaki Trust',
    }
  },
  async asyncData({context, error, req}) {
    try{
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      // Query to get blog home content
      const document = await api.getSingle('home')
      let homepageContent = document.data

      
      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      // Returns data to be used in template
      return {
        homepageContent,
        documentId: document.id,
        slices: document.data.body
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
