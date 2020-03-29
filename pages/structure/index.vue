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
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
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
  async asyncData({context, error, req}) {
    try{
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      // Query to get blog home content
      const document = await api.getSingle('structure')
      let pageContent = document.data
      

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      // Returns data to be used in template
      return {
        pageContent,
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
