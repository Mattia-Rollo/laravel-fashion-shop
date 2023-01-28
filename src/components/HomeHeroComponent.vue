<template>
  <section id="hero">
    <div class="home_hero_img"></div>
    <div class="home_hero_title">
      <h1>Less Shadow, More<img src="/img/glow.PNG" alt="Glow" /></h1>
    </div>
    <div class="home_hero_bg"></div>

    <div class="home_hero_highlight mk_container">
      <div class="home_hero_highlight_img"></div>
      <div class="infos">
        <h3 class="hidden">Made Only From<br />Organic Materials</h3>
        <p class="hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
  name: "HomeHeroComponent",
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

.home_hero_img {
  height: 550px;
  background-image: url(/img/home_hero.PNG);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.home_hero_title {
  text-align: center;
  background: $mk_bg_pink;
  width: 1000px;
  margin: 0 auto;
  border-radius: 15px;
  margin-top: -70px;

  img {
    width: 20%;
    padding-bottom: 1.8rem;
    margin-left: 1.2rem;
  }
}

.home_hero_bg {
  height: 400px;
  background: $mk_bg_pink;
  margin-top: -55px;
}

.home_hero_highlight {
  // max-width: 1138px;
  margin-top: -320px;
  height: 590px;
  @include mk_dflex_between;
  margin-bottom: 5rem;
  box-shadow: 0px 4px 8px -2px rgba($mk_txt_dark_gray, 0.35);

  .home_hero_highlight_img {
    height: 100%;
    width: 35%;
    background-image: url(/img/organic_materials.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .infos {
    height: 100%;
    width: 65%;
    background-color: $mk_bg_mint;
    @include mk_dflex_start;
    padding: 0 8rem;

    p {
      margin: 1rem 0 3rem 0;
    }
  }
}
</style>
