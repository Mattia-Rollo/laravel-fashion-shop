<template>
  <section v-if="singleProduct">
    <h2 class="text-center py-5">{{ singleProduct.name }}</h2>
    <div class="mk_container mk_padding_container">
      <div class="mk_show">
        <img :src="`${store.imageBasePath}${singleProduct.cover_image}`" :alt="singleProduct.name" />
        <div class="mk_rect_mint">
          <p class="text-capitalize">
            <span class="mk_span">Brand:</span> {{ singleProduct.brand.name }}
          </p>
          <p>
            <span class="mk_span">Price:</span>
            <span>{{ singleProduct.price_sign }}</span>
            {{ singleProduct.price }}
          </p>
          <div class="mk_rect_brown">
            <!-- RETTANGOLO IN ABSOLUTE -->
          </div>
        </div>
      </div>
    </div>
    <button class="d-block m-auto mk_btn" @click="addtoCart()">
      Add to Cart
    </button>

    <!-- BOX SHADES -->
    <div class="mk_shades_box">
      <div class="mk_container mk_shades_flex" v-if="singleProduct.colors">
        <div class="mk_shades" v-for="(color, index) in singleProduct.colors" :key="index">
          <div class="mk_color_shades" :style="{ backgroundColor: color.hex_value }">
            <!-- TONALITà DISPONIBILI -->
          </div>
          <p>{{ color.name }}</p>
        </div>
      </div>
    </div>
    <!-- BOX DESCRIZIONE -->
    <div class="mk_description_box">
      <div class="mk_container mk_des_padding">
        <h3>Description</h3>
        <p>
          {{ singleProduct.description }}
        </p>
      </div>
    </div>
  </section>
  <section v-if="!singleProduct">
    <div class="m-auto ">
    <div style="width: 100%; height: 0%; padding-bottom: 56%; position: relative">
      <iframe src="https://giphy.com/embed/g01ZnwAUvutuK8GIQn" width="100%" height="100%" style="position: absolute"
        frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
    <p>
      <a href="https://giphy.com/gifs/high-quality-highqualitygifs-g01ZnwAUvutuK8GIQn"></a>
    </p>
  </div>
  </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "ShowProduct",
  data() {
    return {
      store,
      singleProduct: null,
      
    };
  },
  methods: {
    addtoCart() {

      let defaultquantity = 1;

      let cartItem = store.cartData.find(i => i.id === this.singleProduct.id);
      if (cartItem) {
        cartItem.quantity++
      } else {
        store.cartData.push({
          ...this.singleProduct,
          quantity: defaultquantity
        })
      }

      localStorage.setItem(`cart`, JSON.stringify(store.cartData));



      // console.log(store.shoppingCart);
    },
    callSingleProduct() {
      axios
        .get(`${store.apiBaseUrl}/products/${this.$route.params.slug}`)
        .then((res) => {
          if (res.data.success) {
            // console.log(res.data.results);
            this.singleProduct = res.data.results;
          } else {
            // console.log(this.$router);
            this.$router.push({ name: "not-found" });
          }
          // console.log(this.singleProduct);
        });
    },
  },
  mounted() {
    
    this.callSingleProduct();
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

.mk_padding_container {
  padding: 0 0 80px 0;
  @include mk_dflex_center;
}

img {
  height: 475px;
  border: 40px solid $mk_bg_pink;
  border-radius: 7px;
}

.mk_show {
  @include mk_dflex_between;
  width: 1000px;
}

.mk_span {
  color: $mk_txt_light_gray;
}

.mk_rect_mint {
  width: 405px;
  height: 320px;
  background-color: $mk_bg_mint;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px 0 60px;
  position: relative;
  box-shadow: 0px 4px 8px -2px rgba($mk_txt_dark_gray, 0.35);

  p {
    font-size: 1.8rem;
    font-weight: 700;
    color: $mk_txt_dark_gray;
    line-height: 1.4;
  }

  .mk_rect_brown {
    width: 405px;
    height: 320px;
    background-color: $mk_bg_brown;
    position: absolute;
    top: 35px;
    left: 35px;
    z-index: -1;
  }
}

.mk_shades_flex {
  display: flex;
  flex-wrap: wrap;
}

.mk_shades_box {
  width: 100%;
  margin: 80px 0;
  // border-top: 1px solid $mk_txt_light_gray;
  // border-bottom: 1px solid $mk_txt_light_gray;
  box-shadow: 0px 4px 8px 2px rgba($mk_txt_dark_gray, 0.35);
}

.mk_shades {
  display: flex;
  align-items: center;
  padding: 30px 0;

  p {
    margin-bottom: 0;
    margin-right: 20px;
    color: $mk_txt_dark_gray;
  }
}

.mk_color_shades {
  width: 40px;
  height: 40px;
  background-color: $mk_bg_pink;
  border-radius: 50%;
  margin-right: 20px;
}

.mk_description_box {
  background-color: $mk_bg_mint;

  p {
    margin-bottom: 0;
  }
}

.mk_des_padding {
  padding: 70px 0;
  margin: 8rem;

  h3 {
    margin-bottom: 2rem;
  }
}
</style>
