<template>
<div>
    <PageTitle :title="pageContent.title" :description="pageContent.description" :imageurl="pageContent.header_image.url"></PageTitle>

    <iframe  :src="pageContent.form.url" style="position:relative;width:1px;min-width:100%;*width:100%;" frameborder="0" scrolling="yes" seamless="seamless" height="1202" width="100%"></iframe>
    <script  src="https://www.cognitoforms.com/scripts/embed.js"></script>

     <!-- Slices block component -->
    <slices-block :slices="slices"/>
</div>
</template>

<script>

import SlicesBlock from '~/components/SlicesBlock.vue'
import PageTitle from '~/components/PageTitle.vue'

export default {
  name: 'register',
   components: {
    SlicesBlock,
    PageTitle
  },
 
  head () {
    return {
        titleTemplate: '%s - ' + "Register"
    }
  },
  async asyncData({ $prismic, error }) {
    try{

      // Query to get the home page content
      const pageContent = (await $prismic.api.getSingle('register')).data

      
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
