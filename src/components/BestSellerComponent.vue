<template>
  <section id="best_seller">
    <div class="mk_container position-relative">
      <h2 class="text-center">Best Sellers</h2>
      <p class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div
        class="row gap-3 flex-nowrap overflow-hidden"
        id="content"
        ref="content"
      >
        <div class="my_col">
          <CardComponent />
        </div>
        <div class="my_col">
          <CardComponent />
        </div>
        <div class="my_col">
          <CardComponent />
        </div>
        <div class="my_col">
          <CardComponent />
        </div>
        <div class="my_col">
          <CardComponent />
        </div>
        <div class="my_col">
          <CardComponent />
        </div>
      </div>
      <button class="carousel_btn_left" @click="swipeLeft">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="carousel_btn_right" @click="swipeRight">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
    <button class="mk_btn d-block m-auto">Browse All</button>
  </section>
</template>

<script>
import CardComponent from "./CardComponent.vue";
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
      this.scrollTo(content, -450, 800);
    },
    swipeRight() {
      const content = this.$refs.content;
      this.scrollTo(content, 450, 800);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

#best_seller {
  margin-bottom: 3rem;
}

h2 {
  margin-bottom: 2rem;
}
.row {
  padding: 2.5rem 0;
}
.subtitle {
  width: 50%;
  margin: 0 auto;
}
button.mk_btn {
  margin-top: 2rem;
}
button.carousel_btn_left {
  position: absolute;
  border: none;
  width: 60px;
  height: 60px;
  font-size: 2rem;
  color: $mk_white;
  border-radius: 50%;
  z-index: 100;
  top: 55%;
  left: -2rem;
  background-color: $mk_bg_mint;
  transition: all 450ms ease-in-out;
  border: 3px solid transparent;

}
button.carousel_btn_right {
  position: absolute;
  border: none;
  width: 60px;
  height: 60px;
  font-size: 2rem;
  color: $mk_white;
  border-radius: 50%;
  z-index: 100;
  top: 55%;
  right: -2rem;
  background-color: $mk_bg_mint;
  transition: all 450ms ease-in-out;
  border: 3px solid transparent;

}
button:hover:not(.mk_btn){
  color: $mk_bg_mint;
  border: 3px solid $mk_bg_mint;
  background-color: $mk_white;
  transform: scale(1.1);

}
.my_col {
  width: calc((100% / 3));
}
</style>
