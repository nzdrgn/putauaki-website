<template>
  <div>
    <HeaderBlock/>
    <nuxt />
    <FooterBlock/>
</div>
</template>

<script>
import FooterBlock from '~/components/FooterBlock.vue'
import HeaderBlock from '~/components/HeaderBlock.vue'


export default {
  components: {
    FooterBlock,
    HeaderBlock,
    
  },
  head () {
    return {
      title: 'Putauaki Trust'
    }
  }

}
</script>