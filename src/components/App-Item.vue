<template>
  <div id="app">
    <section class="Header">
      <h1 id="Fruiticious!">Fruiticious!</h1>
      <!-- Cart component -->
      <!-- <shop-cart :cart="this.cart" :total="this.total" @empty-cart="emptyCart"></shop-cart> -->
    </section>
    <!-- Item component -->
    <shop-item @update-cart="updateCart"></shop-item>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      cart: [],
      total: 0,
    };
  },
  methods: {
    updateCart(e) {
      this.cart.push(e);
      this.total = this.shoppingCartTotal;
    },
    emptyCart() {
      this.cart = [];
      this.total = 0;
    },
  },
};
</script>