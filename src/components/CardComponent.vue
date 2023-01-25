<template>
  <div class="mk_card">
    <div class="img_wrap">
      <img
        class="img-fluid"
        src="../../public/cover_img_ex.jpg"
        alt="product_pic"
      />
    </div>
    <div class="card_content">
      <h5 class="text-center mb-3">Milani</h5>
      <p class="text-center">Milani Cream-To-Powder MakeUp</p>
      <div class="price_section text-center">
        <span>Price:</span>
        <span>$ 10.99</span>
      </div>
      <div class="card_colors_section">
        <div class="hex_dot"></div>
        <div class="hex_dot"></div>
        <div class="hex_dot"></div>
        <div class="hex_dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "CardComponent",
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
// .mk_col {
//   width: calc(100% / 3);
// }
.img_wrap {
  width: 70%;
  margin: 0 auto;
  padding-bottom: 1rem;
}
.mk_card {
  padding: 1rem;
  background-color: $mk_white;
  box-shadow: 0px 9px 9px -2px rgba(0, 0, 0, 0.35);
}
.card_colors_section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 1rem 2rem;
  .hex_dot {
    width: 40px;
    height: 40px;
    background-color: $mk_bg_pink;
    border-radius: 50%;
  }
}
</style>
