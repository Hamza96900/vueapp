<template>
  <div class="pages">
    <button v-scroll-to="'#element'">
    Scroll to #element
</button>

<h1 id="element">Hi. I'm element</h1>
    <h1>This is an pages page</h1>
    <ul>
      <li><img class="img1" src="//picsum.photos/300/200?1" /></li>
      <li><img class="img2" src="//picsum.photos/300/200?2" /></li>
      <li><img class="img3" src="//picsum.photos/300/200?3" /></li>
      <li><img class="img4" src="//picsum.photos/300/200?4" /></li>
      <li><img class="img5" src="//picsum.photos/300/200?5" /></li>
      <li><img class="img6" src="//picsum.photos/300/200?6" /></li>
      <li><img class="img7" src="//picsum.photos/300/200?7" /></li>
      <li><img class="img8" src="//picsum.photos/300/200?8" /></li>
      <li><img class="img9" src="//picsum.photos/300/200?9" /></li>
    </ul>
    <button @click="show(-1)">&lt;</button>
    <button @click="show(+1)">&gt;</button>
  </div>
</template>
<script>
var Vue = require('vue');
var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo)
 
// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })
export default {
  data () {
    return{
   liEls: document.querySelectorAll('ul li'),
   index: 0
    }
  },
methods: {
  show(increase) {
    console.log("myowncarousel");
  this.index = this.index + increase;
  this.index = Math.min(Math.max(this.index,0), this.liEls.length-1);
  this.liEls[this.index].scrollIntoView({behavior: 'smooth'});
  console.log("myowncarouselindex", this.index);
}
}
}
</script>
<style scoped>
button {
    margin-bottom: 1000px;
}
ul {
  display: flex;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
li {
  display: block;
  list-style: none;
}
button.prev,
button.next {
  display: flex;
  font-size: 32px;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #333;
  border-radius: 50%;
  width: 44px;
  height: 44px;
}
button.prev {
  position: absolute;
  left: 0;
  top: 80px;
}
button.next {
  position: absolute;
  right: 0;
  top: 80px;
}
</style>
