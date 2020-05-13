<template>
 <div>
 <PageTitle :title="grant.title" :description="grant.description" :imageurl="grant.header_image.url"></PageTitle>
  
  <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-10">
            <h2>Details</h2>
            <prismic-rich-text class="textslice" :field="grant.grant_details"/> 


            <h2 class="mt-5">Grant Status</h2>

            <a v-if="GrantStatus == 'Available'" href="#" class="m-1 btn btn-success mb-5">Open for Applications - Complete Form Below</a>

            <a v-if="GrantStatus != 'Available'" href="#" class="m-1 btn btn-danger mb-5">Closed for Applications</a>

            <h2 v-if="GrantStatus == 'Available'" class="mt-5">Grant Form</h2>

            <iframe v-if="GrantStatus == 'Available'" :src="grant.form.url" style="position:relative;width:1px;min-width:100%;*width:100%;" frameborder="0" scrolling="yes" seamless="seamless" height="1202" width="100%"></iframe>
            <script v-if="GrantStatus == 'Available'" src="https://www.cognitoforms.com/scripts/embed.js"></script>

           </div>
        </div>
      </div>
</section> 

  </div>
</template>

<script>

import PageTitle from '~/components/PageTitle.vue'
//Importing all the slices components
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'grant',
  components: {
    SlicesBlock,
    PageTitle
  },
  head () {
    return {
        titleTemplate: '%s - ' + "Grant"
    }
  },
  async asyncData({ $prismic, params, error }) {
    try{

      // Query to get post content
      const grant = (await $prismic.api.getByUID('grant', params.uid)).data
   
      var GrantStatus = "Unavailable";

      var TodayDate = new Date();

      var OpenDate = new Date(grant.open_date_time);

      var CloseDate = new Date(grant.close_date_time);

      if(grant.availability != 'Dates'){
        GrantStatus = grant.availability
      }else{
        if((TodayDate > OpenDate) && (TodayDate < CloseDate))
        {
          GrantStatus = "Available"
        }
      }


      // Returns data to be used in template
      return {
        grant,
        slices: grant.body,
        GrantStatus
      }
    } catch (e) {
      // Returns error page
    
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>