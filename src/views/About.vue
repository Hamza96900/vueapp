<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="myProgress">
      <div id="myBar"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: 1,
      oldScrol: 0,
    };
  },
  mounted() {
    // var scrollableElement = document.body;
    // scrollableElement.addEventListener("wheel", this.checkScrollDirection(event));
    window.addEventListener("scroll", () => {
      let pos = window.scrollY;
      console.log("its hamza", pos, this.oldScroll, pos > this.oldScrol);
      if (pos > this.oldScrol) {
        document.getElementById("myBar").style.width = this.width + "%";
        if (this.width >= 100) {
          this.width = 100;
          this.oldScrol = pos;
        } else {
          this.width = this.width + 0.1;
          this.oldScrol = pos;
        }
      } else {
        document.getElementById("myBar").style.width = this.width + "%";
        if (this.width <= 0) {
          this.width = 0;
          this.oldScrol = pos;
        } else {
          this.width = this.width - 0.1;
          this.oldScrol = pos;
        }
      }
    });
  },
  methods: {
    // checkScrollDirectionIsUp (e) {
    //   if (e.wheelDelta) {
    //     return e.wheelDelta > 0;
    //   }
    //   return e.deltaY < 0;
    // },
    // checkScrollDirection (event) {
    //   if (this.checkScrollDirectionIsUp(event)) {
    //     console.log("UP");
    //   } else {
    //     console.log("Down");
    //   }
    // },
  },
};
</script>
<style scoped>
#myProgress {
  position: fixed;
  width: 100%;
  background-color: #ddd;
}

#myBar {
  width: 1%;
  height: 30px;
  background-color: #4caf50;
}
.about {
  height: 10000px;
}
</style>
