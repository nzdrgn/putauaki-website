<template>
<div>
    <PageTitle :title="pageContent.title" :description="pageContent.description" :imageurl="pageContent.header_image.url"></PageTitle>
    <!-- Embeded Timeline -->
    <section>
      <iframe frameborder="0" height="650" src="https://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=1Wep72puF5nZrWs5GNzXcHTwNlcCYKgoS_hIW3j_dd2A&amp;font=Bevan-PotanoSans&amp;maptype=toner&amp;lang=en&amp;height=650" width="100%"></iframe>
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
  name: 'our-history',
   components: {
    SlicesBlock,
    PageTitle
  },
  data () {
    return {
      title: "" 
    };
  },
  head () {
    return {
        titleTemplate: '%s - ' + this.title
    }
  },
  async asyncData({context, error, req}) {
    try{
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      // Query to get blog home content
      const document = await api.getSingle('our_history')
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
