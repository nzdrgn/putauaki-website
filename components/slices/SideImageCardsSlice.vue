<template>
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col">            
            <div class="row">
              <div class="col-lg-8" v-for="item in slice.items" :key="item.id">
                <div class="card card-article-wide flex-md-row no-gutters" >
                  <a href="#" class="col-md-4">
                    <img :src="item.item_image.url" alt="Image" class="card-img-top">
                  </a>
                  <div class="card-body d-flex flex-column col-auto p-4">
                    
                    
                      <prismic-rich-text  :field="item.item_title"/>  
                      <prismic-rich-text  :field="item.item_text"/> 
                    
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "side-image-cards-slice" 
};
</script>