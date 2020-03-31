<template>
<div>
    <PageTitle :title="pageContent.title" :description="pageContent.description" :imageurl="pageContent.header_image.url"></PageTitle>


    <section>
      <div class="container">
        <div class="row text-center">
          <div class="col-sm-4 mb-3 mb-sm-0">
            <h3 class="h2">Visit</h3>
            <span class="lead">
              389 Greenpoint Ave
              <br>Crown Heights, Brooklyn
              <br>New York
            </span>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <h3 class="h2">Email</h3>
            <a href="#" class="lead">hello@company.io</a>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <h3 class="h2">Call</h3>
            <span class="lead">
              +61 4728 3928
            </span>
            <div class="text-small text-muted">Mon - Fri, 9am - 5pm</div>
          </div>
        </div>
      </div>
    </section>
    <section class="p-0">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="min-vh-50 w-100 rounded shadow-3d" data-marker-image="assets/img/map-marker-2.svg" data-maps-api-key="INSERT_YOUR_GOOGLE_MAPS_API_KEY_HERE" data-address="389 Greenpoint Ave, Crown Heights, Brooklyn New York" data-map-zoom="14">
              <div class="map-marker" data-address="389 Greenpoint Ave, Crown Heights, Brooklyn New York">
                <div class="info-window" data-max-width="400">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <h5>Infowindows in Leap</h5>
                      </div>
                      <div class="col-4">
                        <img alt="Leap Logo" class="w-100" src="assets/img/logo.svg">
                      </div>
                      <div class="col-8 pb-2">
                        <p>
                          We've made infowindows easy in Leap, so you can use any HTML in this infowindow on your map.
                        </p>
                        <h6 class="mb-0">Address</h6>
                        <address>
                          389 Greenpoint Ave Crown Heights, Brooklyn New York
                        </address>
                        <a target="_blank" href="#">... More Info</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <p class="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>
            <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

          </div>
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
  async asyncData({context, error, req}) {
    try{
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      // Query to get blog home content
      const document = await api.getSingle('contact_us')
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
