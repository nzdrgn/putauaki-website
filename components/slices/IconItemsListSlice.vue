<template>
    <section>
      <div class="container">
          
        <div class="row mb-4">
          <div class="col">
            <prismic-rich-text  :field="slice.primary.item_title"/> 
          </div>
        </div>

        <div class="row"  >
          
          <div class="col-md-6 col-lg-4 d-flex mb-3 mb-md-0" v-for="item in slice.items" :key="item.id">
            <img class="icon icon-md " :src="item.icon.url" alt="patch icon"  />
            <div class="ml-3">
              <prismic-rich-text  :field="item.item_title"/>  
              <prismic-rich-text  :field="item.text"/>     
            </div>
          </div>

          
        </div>
      </div>

    </section>

</template>

<script>
export default {
  props: ['slice'],
  name: 'icon-items-list'
}
</script>