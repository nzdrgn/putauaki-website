<template>
    <section>
      <div class="container">
        <div class="row">
          <div class="col">
            <prismic-rich-text  :field="slice.primary.gallery_title"/> 
          </div>
        </div>

        <div class="row" >
 <no-ssr>
          <v-gallery :images="images"
           :index="index"
           @close="index = null" />
 </no-ssr>
          <div class="col-6 col-md-4 mb-3" v-for="item in slice.items" :key="item.id" @click="index = item.id">
            
              <img :src="item.gallery_image.url" alt="Image" class="rounded" >
            
          </div>
          

        </div>
      </div>
    </section>
</template>

<script>



export default {
  props: ['slice'],
  name: 'photo-gallery',
  data() {
      return {
        images: this.getImages(),
        index: null,
      };
    },
    methods: {
        getImages: function(){
            var vals=[];
            for(var i=0;i<this.slice.items.length;i++){
              
                vals.push(this.slice.items[i].gallery_image.url);
            }

            return vals;

        }
    }
}
</script>

