<template>
<div>
    <PageTitle :title="pageContent.title" :description="pageContent.description" :imageurl="pageContent.header_image.url"></PageTitle>


    <section>
      <div class="container">
        <div class="row text-center">
          <div class="col-sm-4 mb-3 mb-sm-0">
            <h3 class="h2">Visit</h3>
            <span class="lead">
              <prismic-rich-text  :field="pageContent.office_address"/>
            </span>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <h3 class="h2">Email</h3>
            <a :href="'mailto:' + pageContent.email" class="lead">{{pageContent.email}}</a>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <h3 class="h2">Call</h3>
            <span class="lead">
              {{ pageContent.phone }}
            </span>
            <div class="text-small text-muted">{{ pageContent.hours }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="p-0">
      <div class="container">
        <div class="row">
          <div class="col">
    <gmap-map :center="position"  :zoom="15">
      <gmap-marker
        
        :position="position"

      />
    </gmap-map>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-8 col-xl-6">
            <div class="text-center mb-4">
              <h2 class="h1">Leave a message</h2>
              <p class="lead">Please fill the form in below and we will contact you as soon as possible.
              </p>
            </div>
            <form name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact-form" />
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Your Name *</label>
                    <input name="contact-name" type="text" class="form-control" required>
                    <div class="invalid-feedback">
                      Please type your name.
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Email Address *</label>
                    <input name="contact-email" type="email" placeholder="you@yoursite.com" class="form-control" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Company Name</label>
                    <input name="contact-company" type="text" class="form-control" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Contact Number</label>
                    <input name="contact-phone" type="tel" class="form-control" required>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label>Message:</label>
                    <textarea class="form-control" name="contact-message" rows="10" placeholder="How can we help?"></textarea>
                  </div>
                </div>
                <div class="col-12">
                  
                </div>
                <div class="col">
                  <div class="d-none alert alert-success" role="alert">
                    Thanks, a member of our team will be in touch shortly.
                  </div>
                  <div class="d-none alert alert-danger" role="alert" >
                    Please fill all fields correctly.
                  </div>
                  <button class="btn btn-primary btn-loading" >
                    <span>Send Enquiry</span>
                  </button>
                </div>
              </div>
            </form>

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
  name: 'contact-us',
   components: {
    SlicesBlock,
    PageTitle
  },
  head () {
    return {
        titleTemplate: '%s - ' + "Contact Us"
    }
  },
  async asyncData({ $prismic, error }) {
    try{
      // Query to get the home page content
      const pageContent = (await $prismic.api.getSingle('contact_us')).data

            
      const position = { "lat": pageContent.location.latitude, "lng": pageContent.location.longitude }

     

      // Returns data to be used in template
      return {
        pageContent,
        slices: pageContent.body,
        position
        
      }
    } catch (e) {
      console.log(e)
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}
</style>