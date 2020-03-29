<template>
<div>
    <PageTitle :title="pageContent.title" :description="pageContent.description" :imageurl="pageContent.header_image.url"></PageTitle>
     <!-- Panui block component -->
    <section>
      <div class="container">
        <div class="row mb-4">

          <panui-widget v-for="panui in panuiEntries" :key="panui.id" v-bind:panui="panui"></panui-widget>          
          
        </div>

      </div>
    </section>
</div>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
import SlicesBlock from '~/components/SlicesBlock.vue'
import PageTitle from '~/components/PageTitle.vue'
import PanuiWidget from '~/components/PanuiWidget.vue'

export default {
  name: 'panui-home',
   components: {
    SlicesBlock,
    PageTitle,
    PanuiWidget
  },
 
  head () {
    return {
        titleTemplate: '%s - ' + "Panui"
    }
  },
  async asyncData({context, error, req}) {
    try{
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      // Query to get blog home content
      const document = await api.getSingle('panui_home')
      let pageContent = document.data

     
        // Query to get posts content to preview
      const panuiPosts = await api.query(
        Prismic.Predicates.at("document.type", "panui"),
        { orderings : '[my.panui.date desc]' }
      )

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      // Returns data to be used in template
      return {
        pageContent,
        documentId: document.id,
        slices: document.data.body,
        panuiEntries: panuiPosts.results
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
