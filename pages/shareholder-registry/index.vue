<template>
<div>
    <PageTitle :title="pageContent.title" :description="pageContent.description" :imageurl="pageContent.header_image.url"></PageTitle>
     <!-- Slices block component -->
    <slices-block :slices="slices"/>
</div>
</template>

<script>

import SlicesBlock from '~/components/SlicesBlock.vue'
import PageTitle from '~/components/PageTitle.vue'

export default {
  name: 'shareholder-registry',
   components: {
    SlicesBlock,
    PageTitle
  },
  head () {
    return {
        titleTemplate: '%s - ' + "Shareholder Registry"
    }
  },
  async asyncData({ $prismic, error }) {
    try{

      // Query to get the home page content
      const pageContent = (await $prismic.api.getSingle('shareholder_register')).data

      
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
