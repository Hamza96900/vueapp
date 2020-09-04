<template>
  <div id="app">
    <section class="Header">
      <h1 id="Fruiticious!">My Profile</h1>
    </section>
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