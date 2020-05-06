

<template>
    <section class="controls-inside controls-light p-0 bg-primary-3">
      <no-ssr>
      <Flickity :options="flickityOptions">
      <div class="carousel-cell py-5"  v-for="item in slice.items" :key="item.id">
        <img :src="item.slide_image.url" alt="Image" class="bg-image opacity-70">
        <div class="container">
          <div class="row justify-content-center min-vh-70 align-items-center">
            <div class="col-lg-10 col-xl-9">
              <div class="text-center text-light">
                <prismic-rich-text  :field="item.slide_title" class="display-3"/>
                <prismic-rich-text  :field="item.slide_description" class="lead"/>                 
              </div>
            </div>
          </div>
        </div>
      </div>
      </Flickity>
      </no-ssr>
    </section>
</template>


<script>


export default {
  props: ["slice"],
  name: "full-width-slideshow-slice",
  data () {
    return {
      flickityOptions: {
        autoPlay: 4000
      }
    }
  }
};
</script>

