<template>
  <div class="home">
    <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" @swipe=" (e) => handleSwipe(e)">
      <div><router-link to="/about"><img alt="Vue logo" src="../assets/logo.png"></router-link></div>
      <div><router-link to="/services"><img alt="Vue logo" src="../assets/logo.png"></router-link></div>
      <div><router-link to="/pages"><img alt="Vue logo" src="../assets/logo.png"></router-link></div>
      <div><router-link to="contact"><img alt="Vue logo" src="../assets/logo.png"></router-link></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
// @ is an alias to /src
// import Footer from '@/components/Footer.vue'
 import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'Home',
  components: {
    VueSlickCarousel 
  },
  methods:{
    handleSwipe(e){
      console.log("this is event",e)
    }
  }
}
</script>
