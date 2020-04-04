<template>
  <section
    class="bg-dark text-light header-inner p-0 jarallax o-hidden"
    data-overlay
    data-jarallax
    data-speed="0.2"
  >
    <img :src="this.imageurl" alt="Image" class="jarallax-img opacity-30" />
    <div class="container py-0 layer-2">
      <div class="row my-3"></div>
      <div class="row my-4 my-md-6">
        <div class="col-lg-9 col-xl-8">
          <h1 class="display-4">{{$prismic.asText(this.title)}}</h1>
          <p class="lead mb-0">{{$prismic.asText(this.description)}}</p>
        </div>
      </div>
    </div>
    <div class="decoration-wrapper mb-5"></div>
    <div class="divider flip-x">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="96px"
        viewBox="0 0 100 100"
        version="1.1"
        preserveAspectRatio="none"
        class="injected-svg"
        data-src="~/assets/img/dividers/divider-1.svg"
      >
        <path d="M0,0 C40,33 66,52 75,52 C83,52 92,33 100,0 L100,100 L0,100 L0,0 Z" />
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: Array,
    description: Array,
    imageurl: String
  }
};
</script>