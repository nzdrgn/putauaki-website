

<template>
  <section class="bg-primary-3 text-light has-divider jarallax" data-jarallax data-speed="0.2">

      <img :src="img.url" alt="Image" class="jarallax-img opacity-80" />

    <div class="container">
      <div class="row justify-content-center text-center min-vh-50 align-items-center">
        <div class="col-xl-8 col-lg-9 col-md-10">
          <h4 class="display-4">{{$prismic.asText(title)}}</h4>
          <p class="lead">{{$prismic.asText(caption)}}</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>


export default {
  props: ["slice"],
  name: "wide-image-caption-slice",
  data: function() {
    return {
      img: "",
      caption: "",
      title: ""
    };
  },
  created() {
    this.img = this.slice.primary.image;
    this.caption = this.slice.primary.description;
    this.title = this.slice.primary.title;
  }
};
</script>

