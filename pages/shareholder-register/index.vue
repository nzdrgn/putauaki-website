<template>
<div>
    <PageTitle :title="pageContent.title" :description="pageContent.description" :imageurl="pageContent.header_image.url"></PageTitle>


<section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-10">

             <prismic-rich-text class="textslice" :field="pageContent.introduction"/> 

          </div>
        </div>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-10">

             <vue-good-table
      :columns="columns"
      :rows="rows" 
      :search-options="{
    enabled: true
  }"/>

          </div>
        </div>
      </div>
</section>

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
        titleTemplate: '%s - ' + "Shareholder Register"
    }
  },
  async asyncData({ $prismic, error }) {
    try{

      // Query to get the home page content
      const pageContent = (await $prismic.api.getSingle('shareholder_register')).data

      const columns = [
        {
          label: 'No',
          field: 'number',
          type: 'number',
        },
        {
          label: 'First Name',
          field: 'first_name'
        },
        {
          label: 'Surname',
          field: 'surname'
        },
        {
          label: 'Shares',
          field: 'shares',
          type: 'number',
        }
      ]



      // Returns data to be used in template
      return {
        pageContent,
        slices: pageContent.body,
        columns,
        rows: pageContent.register
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
