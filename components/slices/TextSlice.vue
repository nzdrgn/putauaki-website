<template>
<section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-10">

             <prismic-rich-text class="textslice" :field="slice.primary.text"/> 

          </div>
        </div>
      </div>
</section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'text-slice'
}
</script>

