<template>
<div>
    <PageTitle :title="pageContent.title" :description="pageContent.description" :imageurl="pageContent.header_image.url"></PageTitle>

    <section>
      <div class="container">
        <div class="row justify-content-center">
      <prismic-image :field="pageContent.structure_image"/>
        </div>
      </div>
    </section>
     <!-- Slices block component -->
    <slices-block :slices="slices"/>
</div>
</template>

<script>

import SlicesBlock from '~/components/SlicesBlock.vue'
import PageTitle from '~/components/PageTitle.vue'

export default {
  name: 'structure',
   components: {
    SlicesBlock,
    PageTitle
  },
  head () {
    return {
        titleTemplate: '%s - ' + "Structure"
    }
  },
  async asyncData({ $prismic, error }) {
    try{

      // Query to get the home page content
      const pageContent = (await $prismic.api.getSingle('structure')).data

      
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
