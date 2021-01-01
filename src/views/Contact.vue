<template>
  <div class="contact">
    <h1>This is an contact page</h1>
    <div class="carousel js-product-carousel">
  <div class="carousel__view">
    <span class="carousel__control js-carousel-prev"><i class="icon">previous</i></span>
    <span href="#" class="carousel__control js-carousel-next"><i class="icon">next</i></span>
    <ul class="product-list js-product-list">
      <li class="product-list__item">
        <div data-slide="1" class="product">
          <span>1</span>
        </div>
      </li>
      <li class="product-list__item">
        <div data-slide="2" class="product">
          <span>2</span>
        </div>
      </li>
      <li class="product-list__item">
        <div data-slide="3" class="product">
          <span>3</span>
        </div>
      </li>
      <li class="product-list__item">
        <div data-slide="4" class="product">
          <span>4</span>
        </div>
      </li>
      <li class="product-list__item">
        <div data-slide="5" class="product">
          <span>5</span>
        </div>
      </li>
      <li class="product-list__item">
        <div data-slide="6" class="product">
          <span>6</span>
        </div>
      </li>
    </ul>
  </div>
</div>

  </div>
</template>
<script>
export default {
  data (){
    return{
      productListSteps: 0
    }
  },
  mounted (){
  this.startit()
  },
  methods:{
  startit() {
  var carousels = document.querySelectorAll('.js-product-carousel');
  console.log("kamran" , carousels );
  for(let carousel of carousels){ this.carouselize(carousel);
    console.log("kamran1" , carousels ); }
  // [].forEach.call(carousels, function(carousel) {
  //   this.carouselize(carousel);
  //   console.log("kamran1" , carousels );
  // });
},
carouselize(carousel) {
  var productList = carousel.querySelector('.js-product-list');
  var productListWidth = 0;
  var products = carousel.querySelectorAll('.product');
  var productAmount = 0;
  var productAmountVisible = 4;
  var carouselPrev = carousel.querySelector('.js-carousel-prev');
  var carouselNext = carousel.querySelector('.js-carousel-next');

  //Count all the products
  [].forEach.call(products, function() {
    productAmount++;
    console.log("productAmount", productAmount, productListWidth)
    productListWidth += 250;
    productList.style.width = productListWidth+"px";
  });

  carouselNext.onclick = function() {
    if(this.productListSteps < productAmount-productAmountVisible) {
      this.productListSteps++;
      console.log("kamran2",this.productListSteps)
      this.moveProductList();
    }
  }
  carouselPrev.onclick = function() {
     
    if(this.productListSteps > 0) {
      this.productListSteps--;
      console.log("kamran3",this.productListSteps)
      this.moveProductList();
    }
  }
},
  // This is a bit hacky, let me know if you find a better way to do this!
  // Move the carousels product-list
  moveProductList() {
    this.productList.style.transform = "translateX(-"+205*this.productListSteps+"px)";
  }
}
}
</script>
<style scoped lang="scss">
$carousel-height: 300px;
$carousel-preview-width: 70;

$products-amount-visible: 4;
$product-width: 200px;

$carousel-width: calc((200px*4) + 22px);

.carousel {
  margin: 20px;
  &__view {
    width: $carousel-width;
    height: $carousel-height;
    background: white;
    //border: solid 1px red;
    box-shadow: 0 1px 8px #888888;
    margin: auto;
    overflow: hidden;
    position: relative;
  }
  &__control {
    position: absolute;
    z-index: 1;
    height: $carousel-height;
    width: 70px;
    background-color: rgba(#ddd,.5);
    transition: background-color .3s;
    display: table;
    .icon {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
    }
    &:hover {
      background-color: rgba(#ddd,.8);
    }
    &:first-of-type {
      left: 0;
    }
    &:last-of-type {
      right: 0;
    }
  }
}
.product-list {
  position: absolute;
  margin: 0;
  padding: 0;
  transition: transform .3s;
  transform: translateX(0px);
  list-style: none;
  height: $carousel-height;
  
  //border: solid 1px black;
  
  &__item {
    width: 200px;
    height: $carousel-height;
    //border: solid 1px green;
    display: inline-block;
  }
}

.product {
  display: table;
  height: 100%;
  width: 100%;
  span {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: white;
    font-size: 50px;
  }
  
  &[data-slide="1"] {
    background-color: blue;
  }
  &[data-slide="2"] {
    background-color: green;
  }
  &[data-slide="3"] {
    background-color: yellow;
  }
  &[data-slide="4"] {
    background-color: orange;
  }
  &[data-slide="5"] {
    background-color: red;
  }
  &[data-slide="6"] {
    background-color: pink;
  }
}

body {
  margin: 50px;
}


</style>
