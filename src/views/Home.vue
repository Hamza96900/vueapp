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
      @pointercancel="handleUp" v-for="(slide , index) in slides" :key= index>
     <p>{{slide.number}}</p>
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
    link: "/about"
  },
  {
   number: 2,
    link: "/home"
  },
  {
    number: 3,
    link: "/pages", 
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
        this.$router.push(buttonLink);
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
