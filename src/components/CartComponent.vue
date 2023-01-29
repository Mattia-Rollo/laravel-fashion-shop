<template>
  <div class="shopping_cart">
    <div class="mk_container">
      <div class="py-2 fs-3 text-end" @click="store.openCart = !store.openCart">
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
      <h6>Shopping Cart</h6>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "CartComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

.shopping_cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  min-height: 100vh;
  background-color: $mk_white;
  box-shadow: -1px 1px 10px 0px $mk_txt_light_gray;
  z-index: 20;

  i{
    cursor: pointer;
  }
}
</style>
