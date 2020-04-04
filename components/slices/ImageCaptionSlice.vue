

<template>


      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-10">

                 <figure>
      <img :src="img.url" alt="Image" class="rounded">
      <figcaption>{{$prismic.asText(caption)}}</figcaption>
    </figure>

          </div>
        </div>
      </div>




</template>


<script>
export default {
  props: ["slice"],
  name: "image-caption-slice",
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

