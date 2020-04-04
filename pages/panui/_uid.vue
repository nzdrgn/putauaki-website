<template>
 <div>
 <PageTitle :title="post.title" :description="post.description" :imageurl="post.image.url"></PageTitle>
    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices"/>
  </div>
</template>

<script>

import PageTitle from '~/components/PageTitle.vue'
//Importing all the slices components
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'panui',
  components: {
    SlicesBlock,
    PageTitle
  },
  head () {
    return {
        titleTemplate: '%s - ' + "Panui"
    }
  },
  async asyncData({ $prismic, params, error }) {
    try{

      // Query to get post content
      const post = (await $prismic.api.getByUID('panui', params.uid)).data
      console.log(post)


      // Returns data to be used in template
      return {
        post,
        slices: post.body,
        formattedDate: Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(post.date)),
      }
    } catch (e) {
      // Returns error page
      console.log(e)
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>