<template>
<div>
    <PageTitle :title="pageContent.title" :description="pageContent.description" :imageurl="pageContent.header_image.url"></PageTitle>
    <files-table :reports="pageContent.reports"></files-table>
</div>
</template>

<script>

import SlicesBlock from '~/components/SlicesBlock.vue'
import PageTitle from '~/components/PageTitle.vue'
import FilesTable from '~/components/FilesTable.vue'

export default {
  name: 'reports',
   components: {
    SlicesBlock,
    PageTitle,
    FilesTable
  },
  head () {
    return {
        titleTemplate: '%s - ' + "Reports"
    }
  },
  async asyncData({ $prismic, error }) {
    try{

      // Query to get the home page content
      const pageContent = (await $prismic.api.getSingle('reports')).data

      
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
