<template>
  <section class="bg-primary-alt">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <div class="row">
            <div class="col-md-6 col-lg-4" v-for="item in slice.items" :key="item.id">
              <div class="card">
                <a :href="item.card_link">
                  <img :src="item.card_image.url" alt="Image" class="card-img-top" />
                </a>
                <div class="card-body d-flex flex-column">
                  <a :href="item.card_link">
                    <h4>{{$prismic.richTextAsPlain(item.card_title)}}</h4>
                  </a>
                  <p class="flex-grow-1">{{$prismic.richTextAsPlain(item.card_text)}}</p>
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
  name: "basic-cards-slice"
};
</script>