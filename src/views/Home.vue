<template>
  <div class="home">
    <VueSlickCarousel
      :arrows="true"
      :dots="true"
      :autoplay="true"
    > 
    <div @click="navigate(slide.link)"
      @pointerdown="handleDown"
      @pointerup="handleUp"
      @pointercancel="handleUp" v-for="(slide , index) in slides" :key= index class="slides">
     <img :src="require(`@/${slide.image}`)" />
    </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
// @ is an alias to /src
// import Footer from '@/components/Footer.vue'
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Home",
  components: {
    VueSlickCarousel,
  },
  data(){
    return{
      drag: false,
      slides: [
  {
    number: 1,
    link: "tiles247.co.uk",
    image: "assets/slide1.jpg"
  },
  {
   number: 2,
    link: "/tilemountain.co.uk",
    image: "assets/slide2.jpg"
  },
  {
    number: 3,
    link: "/pages", 
    image: "assets/slide3.jpg"
  }
]
    }
  },
  methods: {
    navigate(buttonLink) {
      console.log("clickWasTriggered");
      if (!this.drag) {
        console.log("justATest for Click");
        this.click = !this.click;
        // this.$router.push(buttonLink);
        window.open('https://'+buttonLink, '_blank');
      }
    },
    handleMove() {
      this.drag = true;
    },
    handleDown() {
      document.addEventListener("pointermove", this.handleMove);
      console.log("justfetchingDrag", this.drag);
    },
    handleUp() {
      document.removeEventListener("pointermove", this.handleMove);
      setTimeout(() => {
        this.drag = false;
        console.log("draggingIsFalseNow");
      }, 50);
    },
  },
  // mounted() {
  //   this.load();
  // },
};
</script>
<style scoped>
.slides{
  cursor: pointer;
}
</style>
