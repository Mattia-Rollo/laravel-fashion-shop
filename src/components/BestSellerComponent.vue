<template>
  <section id="best_seller">
    <div class="mk_container">
      <h2 class="text-center hidden">Best Sellers</h2>
      <p class="subtitle hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="align">
        <button class="carousel_btn_left" @click="swipeLeft">
          <i class="fa-solid fa-chevron-left"></i>
        </button>

        <div
          v-if="store.productsArray.length > 0"
          id="content"
          ref="content"
          class="my_row"
        >
          <div
            class="my_col"
            v-for="(product, index) in store.productsArray"
            :key="index"
          >
            <router-link
              :to="{ name: 'showproduct', params: { slug: product.slug } }"
            >
              <CardComponent :product="product" />
            </router-link>
          </div>
        </div>

        <button class="carousel_btn_right" @click="swipeRight">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
    <router-link :to="{ name: 'products' }">
      <button class="mk_btn d-block m-auto">Browse All</button>
    </router-link>
  </section>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import axios from "axios";
import { store } from "../store";
export default {
  name: "BestSellerComponent",
  components: { CardComponent },
  data() {
    return {
      store,
    };
  },
  methods: {
    scrollTo(element, scrollPixels, duration) {
      const scrollPos = element.scrollLeft;
      if (
        !(
          (scrollPos === 0 || scrollPixels > 0) &&
          (element.clientWidth + scrollPos === element.scrollWidth ||
            scrollPixels < 0)
        )
      ) {
        const startTime =
          "now" in window.performance
            ? performance.now()
            : new Date().getTime();

        function scroll(timestamp) {
          const timeElapsed = timestamp - startTime;

          const progress = Math.min(timeElapsed / duration, 1);

          element.scrollLeft = scrollPos + scrollPixels * progress;

          if (timeElapsed < duration) {
            window.requestAnimationFrame(scroll);
          } else {
            return;
          }
        }

        window.requestAnimationFrame(scroll);
      }
    },
    swipeLeft() {
      const content = this.$refs.content;
      this.scrollTo(content, -1113, 800);
    },
    swipeRight() {
      const content = this.$refs.content;
      this.scrollTo(content, 1113, 800);
    },
    callProducts() {
      axios.get(`${this.store.apiBaseUrl}/randomproducts`).then((res) => {
        store.productsArray = res.data.results;
        console.log(store.productsArray);
      });
    },
  },
  mounted() {
    this.callProducts();
    store.showitems();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

#best_seller {
  // max-width: 1213px;
  // margin: 0 auto;
  margin-bottom: 3rem;
}

h2 {
  margin-bottom: 1.5rem;
}

.subtitle {
  margin: 0 auto;
  text-align: center;
  max-width: 640px;
}

.my_row {
  // margin: 2rem 0;

  display: flex;
  gap: 1rem;
  max-width: 1110px;
  width: 100%;
  // margin: 0 auto;
  overflow: hidden;
  padding: 30px 5px;
}

.align {
  max-width: 1330px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button.carousel_btn_left {
  // position: absolute;
  // top: 55%;
  // left: -1rem;
  border: none;
  width: 60px;
  height: 60px;
  font-size: 2rem;
  color: $mk_white;
  border-radius: 50%;
  z-index: 100;
  background-color: $mk_bg_mint;
  transition: all 450ms ease-in-out;
  border: 3px solid transparent;
}

button.carousel_btn_right {
  // position: absolute;
  // top: 55%;
  // right: -1rem;
  border: none;
  width: 60px;
  height: 60px;
  font-size: 2rem;
  color: $mk_white;
  border-radius: 50%;
  z-index: 100;
  background-color: $mk_bg_mint;
  transition: all 450ms ease-in-out;
  border: 3px solid transparent;
}

button:hover:not(.mk_btn) {
  color: $mk_bg_mint;
  border: 3px solid $mk_bg_mint;
  background-color: $mk_white;
  transform: scale(1.1);
}
</style>

<!-- class="row gap-3 flex-nowrap overflow-hidden" -->
