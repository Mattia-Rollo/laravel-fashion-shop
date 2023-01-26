<template>
  <div class="mk_card">
    <div class="img_wrap">
      <img
        class="img-fluid"
        :src="`${store.imageBasePath}${product.cover_image}`"
        :alt="product.slug"
      />
    </div>
    <div class="card_content">
      <h5 class="text-center mb-3">{{ product.name }}</h5>
      <p class="text-center">{{ truncateContent(product.description) }}</p>
      <div class="price_section text-center">
        <span>Price:</span>
        <span>{{ product.price }}</span>
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
  props: {
    product: Object,
  },
  data() {
    return {
      store,
      contentMaxLenght: 35,
    };
  },
  methods: {
    truncateContent(text) {
      if (text.length > this.contentMaxLenght) {
        return text.substr(0, this.contentMaxLenght) + "...";
      }
      return text;
    },
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
  width: 200px;
  height: 200px;
  margin: 0 auto;
  padding-bottom: 1rem;
  overflow: hidden;

  & img {
    object-fit: cover;
  }
}
.mk_card {
  padding: 1rem;
  background-color: $mk_white;
  box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.35);
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
.card_content {
  h5 {
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    font-size: 1.4rem;
  }
  .price_section {
    font-size: 1.2rem;
    font-weight: bold;

    span {
      padding-right: 0.5rem;
    }
  }
}
</style>
