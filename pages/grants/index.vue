<template>
<div>
    <PageTitle :title="pageContent.title" :description="pageContent.description" :imageurl="pageContent.header_image.url"></PageTitle>
     <!-- Slices block component -->
    <slices-block :slices="slices"/>

    <grant-widget v-for="grant in grantEntries" :key="grant.id" v-bind:grant="grant"></grant-widget>  

</div>
</template>

<script>

import SlicesBlock from '~/components/SlicesBlock.vue'
import PageTitle from '~/components/PageTitle.vue'
import GrantWidget from '~/components/GrantWidget.vue'

export default {
  name: 'grants',
   components: {
    SlicesBlock,
    PageTitle,
    GrantWidget
  },
  head () {
    return {
        titleTemplate: '%s - ' + "Grants"
    }
  },
  async asyncData({ $prismic, error }) {
    try{

      // Query to get the home page content
      const pageContent = (await $prismic.api.getSingle('grants')).data

      const grantResults = await $prismic.api.query(
        $prismic.predicates.at("document.type", "grant")
      )

      // Returns data to be used in template
      return {
        pageContent,
        slices: pageContent.body,
        grantEntries: grantResults.results
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
