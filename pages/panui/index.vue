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
  async asyncData({ $prismic, error }) {
    try{

      // Query to get the home page content
      const pageContent = (await $prismic.api.getSingle('panui_home')).data

      const panuiPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "panui"),
        { orderings : '[my.panui.date desc]' }
      )



      // Returns data to be used in template
      return {
        pageContent,
        panuiEntries: panuiPosts.results
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
