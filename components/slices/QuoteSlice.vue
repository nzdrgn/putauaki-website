<template>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-10">
          <blockquote class="bg-primary-alt">
            <div class="h3 mb-2">
            {{ $prismic.richTextAsPlain(slice.primary.quote) }}
            </div>
            </blockquote>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  props: ["slice"],
  name: "quote-slice"
};
</script>
