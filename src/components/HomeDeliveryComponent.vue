<template>
  <section id="home_delivery">
    <div class="home_delivery_section mk_container">
      <div class="home_delivery_section_img"></div>
      <div class="infos">
        <h3 class="hidden">Superfast Product<br />Delivery System</h3>
        <p class="hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <router-link :to="{ name: 'products' }">
          <button class="mk_btn">Browse Products</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../store";
export default {
  name: "HomeDeliveryComponent",
  data() {
    return {
      store,
    };
  },
  mounted() {
    store.showitems();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

#home_delivery {
  width: 100%;
  height: 400px;
  background-color: $mk_bg_brown;
  margin-bottom: 5rem;

  .home_delivery_section {
    height: 100%;
    width: 100%;
    @include mk_dflex_between;

    .home_delivery_section_img {
      height: 100%;
      width: 50%;
      background-image: url(/img/delivery.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .infos {
      height: 100%;
      width: 50%;
      @include mk_dflex_start;
      padding: 0 8rem;

      p {
        margin: 1rem 0 2rem 0;
      }

      button {
        background-color: $mk_bg_mint;
        color: $mk_txt_dark_gray;
        font-weight: 700;

        &:hover {
          color: $mk_bg_mint;
          border: 4px solid $mk_bg_mint;
          background-color: $mk_white;
        }
      }
    }
  }
}
</style>
