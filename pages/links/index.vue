<template>
<div>
    <PageTitle :title="pageContent.title" :description="pageContent.description" :imageurl="pageContent.header_image.url"></PageTitle>

<section class="pt-0 pb-4">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col">
            <ul class="d-flex flex-wrap justify-content-center list-unstyled">
              <li class="mx-xl-4 mx-3 mb-5" v-for="item in pageContent.links" :key="item.id">
                <a :href="item.link.url">
                  <img class="" :src="item.image.url" alt="Image" height="80" />
                </a>
              </li>
            </ul>
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
  name: 'links',
   components: {
    SlicesBlock,
    PageTitle
  },
  head () {
    return {
        titleTemplate: '%s - ' + "Links"
    }
  },
  async asyncData({ $prismic, error }) {
    try{

      // Query to get the home page content
      const pageContent = (await $prismic.api.getSingle('links')).data

      
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
