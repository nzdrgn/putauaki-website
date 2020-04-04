    <template>
    <section>
      <div class="container">
        <div class="row align-items-center justify-content-around">
          
          <template v-if="orientation === false">

          <div class="col-md-5 col-xl-6 mb-4 mb-md-0">
            <img :src="img.url" alt="Image" class="rounded shadow-3d">
          </div>

          <div   class="col-md-7 col-xl-6">
            <div class="row justify-content-center">
              <div class="col-xl-10 col-lg-10">
                <span class="badge badge-primary">{{$prismic.asText(badge)}}</span>
                <div class="my-3">
                  <span class="h1">{{$prismic.asText(heading)}}</span>
                </div>
                <prismic-rich-text class="lead" :field="text"/> 
              </div>
            </div>
          </div>

          </template>

          <template v-else>

          <div   class="col-md-7 col-xl-6">
            <div class="row justify-content-center">
              <div class="col-xl-10 col-lg-10">
                <span class="badge badge-primary">{{$prismic.asText(badge)}}</span>
                <div class="my-3">
                  <span class="h1">{{$prismic.asText(heading)}}</span>
                </div>
                <prismic-rich-text class="lead" :field="text"/> 
              </div>
            </div>
          </div>
          <div class="col-md-5 col-xl-6 mb-4 mb-md-0">
            <img :src="img.url" alt="Image" class="rounded shadow-3d">
          </div>

          </template>

        </div>
      </div>
    </section>
    </template>

    
<script>


export default {
  props: ["slice"],
  name: "side-image-text",
  data: function() {
    return {
      img: "",
      text: "",
      heading: "",
      badge: "",
      orientation: "false"
    };
  },
  created() {
    this.img = this.slice.primary.image;
    this.orientation = this.slice.primary.image_orientation;

    this.text = this.slice.primary.text;
    this.heading = this.slice.primary.heading;
    this.badge = this.slice.primary.badge;
  }
};
</script>