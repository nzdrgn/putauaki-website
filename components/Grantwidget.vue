    <template>

      <div class="container mb-10" > 
        <div class="row justify-content-center">
          <div class="col">
            
            <div class="row">
              <div class="col">
                <nuxt-link :to="'/grants/' + grant.uid" class="card card-article-wide flex-md-row no-gutters hover-shadow-3d">                
                  <div class="col-md-5 col-lg-6">
                    <img :src="grant.data.header_image.url" alt="Image" class="card-img-top">
                  </div>
                  <div class="card-body d-flex flex-column justify-content-between col-auto p-4 p-lg-5">
                    <div>                      
                      <h2>{{$prismic.asText(grant.data.title)}}</h2>
                      <prismic-rich-text  :field="grant.data.description"/> 
                    </div>
                    <p class="lead mb-0 text-primary font-weight-bold">View Grant</p>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </template>

<script>
import LinkResolver from "~/plugins/link-resolver.js"

export default {
  props: ['grant']
};
</script>