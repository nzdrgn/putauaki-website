<template>
  <nuxt-link :to="link">

          <div class="col-md-6 col-lg-4 d-flex">
            <div class="card">
              
                <img :src="panui.data.image.url" alt="Image" class="card-img-top">
   
              <div class="card-body d-flex flex-column">
                
                  <h4>{{ $prismic.richTextAsPlain(panui.data.title) }}</h4>
                
                <p class="flex-grow-1">
                 {{getFirstParagraph(panui)}}
                </p>

              </div>
            </div>
          </div>
    
  </nuxt-link>
</template>


<script>
import LinkResolver from "~/plugins/link-resolver.js"

export default {
  props: ['panui'],
  data: function() {
    return {
      link: '',
      formattedDate: '',
    }
  },
  name: 'panui-widget',
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph (panui) {
      const textLimit = 200;
      const slices = panui.data.body;
      let firstParagraph = '';
      let haveFirstParagraph = false;

      slices.map(function(slice) {
        if (!haveFirstParagraph && slice.slice_type == "text") {
          slice.primary.text.forEach(function(block){
            if (block.type == "paragraph" && !haveFirstParagraph) {
              firstParagraph += block.text;
              haveFirstParagraph = true;
            }
          });
        }
      });
      
      const limitedText = firstParagraph.substr(0, textLimit)

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...';
      }
      else {
        return firstParagraph;
      }
    },
  },
  created () {
    this.link = LinkResolver(this.panui),
    this.formattedDate = Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(this.panui.data.date))
  },
}
</script>