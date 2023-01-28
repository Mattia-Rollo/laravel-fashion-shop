<template>
  <section id="mk_about_hero">
    <div class="mk_hero_titol_frame mk_container">
      <h2 class="hidden">About Glow</h2>
      <span class="hidden">Lorem ipsum dolor sit amet consecteture.</span>
      <router-link :to="{ name: 'products' }">
        <button class="mk_btn">Browse Products</button>
      </router-link>
    </div>
  </section>

  <section id="treat_yourself">
    <div class="mk_container section_one">
      <div class="image">
        <div class="mk_hero_pink_square"></div>
        <img src="/img/about_model.jpg" alt="glow_model" />
      </div>
      <div class="content">
        <h2 class="hidden">Treat Yourself</h2>
        <p class="hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </section>

  <section id="shop">
    <div class="mk_container">
      <div class="item">
        <img src="/img/plastic-bag.png" alt="recicled plastic bag" />
        <h4>Easy to Shop</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
      <div class="item">
        <img src="/img/cosmetics.png" alt="recicled plastic bag" />
        <h4>Best Brands</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
      <div class="item">
        <img src="/img/make-up.png" alt="recicled plastic bag" />
        <h4>Good For Skin</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
    </div>
  </section>

  <section id="trusted">
    <div class="mk_container">
      <div class="hidden">
        <h2>Trusted By Industry Leaders</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div class="row hidden">
        <div class="col-4">
          <img src="/img/dior.png" alt="" />
        </div>
        <div class="col-4">
          <img src="/img/chanel.png" alt="" />
        </div>
        <div class="col-4">
          <img src="/img/rimmel.png" alt="" />
        </div>

        <div class="col-4">
          <img src="/img/max_factor.png" alt="" />
        </div>
        <div class="col-4">
          <img src="/img/maybelline.png" alt="" />
        </div>
        <div class="col-4">
          <img src="/img/loreal.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../store";
export default {
  name: "AboutUs",
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

#mk_about_hero {
  height: 500px;
  background-image: url(/img/about_hero.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @include mk_dflex_center;

  .mk_hero_titol_frame {
    height: 340px;
    max-width: 960px;
    background-color: $mk_bg_mint;
    @include mk_dflex_center_col;
    box-shadow: 0px 4px 8px -2px rgba($mk_txt_dark_gray, 0.35);

    span {
      font-size: 2.5rem;
      color: $mk_txt_light_gray;
      margin: 1rem 0 2.5rem 0;
    }
  }
}

#treat_yourself {
  .section_one {
    max-width: 1160px;
    @include mk_dflex_center;
    margin-bottom: 8rem;

    .image {
      width: 50%;

      .mk_hero_pink_square {
        width: 309px;
        height: 279px;
        background-color: $mk_bg_pink;
        margin-top: -150px;
        margin-left: 8rem;
        box-shadow: 0px 4px 8px -2px rgba($mk_txt_dark_gray, 0.35);
      }

      img {
        // width: 436px;
        height: 654px;
        margin-top: -260px;
        margin-left: -15px;
        box-shadow: 0px 4px 8px -2px rgba($mk_txt_dark_gray, 0.35);
      }
    }

    .content {
      width: 50%;
      text-align: center;

      p {
        text-align: justify;
        margin-top: 3rem;
      }
    }
  }
}

#shop {
  width: 100%;
  height: 500px;
  background-color: $mk_bg_brown;
  @include mk_dflex_center;
  margin-bottom: 8rem;

  .mk_container {
    @include mk_dflex_between;

    .item {
      @include mk_dflex_center_col;

      img {
        width: 148px;
      }

      h4 {
        margin: 2rem 0 1rem 0;
        color: $mk_txt_dark_gray;
        font-weight: 700;
      }

      p {
        max-width: 265px;
        text-align: center;
      }
    }
  }
}

#trusted {
  text-align: center;
  margin-bottom: 10rem;

  p {
    max-width: 700px;
    margin: 2rem auto;
  }

  .row {
    margin-top: 5rem;
    gap: 4rem 0;

    img {
      width: 280px;
      opacity: 0.6;
    }
  }
}
</style>
