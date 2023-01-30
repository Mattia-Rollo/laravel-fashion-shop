<template>
  <section id="product_list">
    <div class="mk-container">
      <div class="filters_container">
        <div class="select_box">
          <!-- <label>Type:</label> -->
          <select name="type" id="type" v-model="searchType">
            <option value="" class="label">Type:</option>
            <option
              v-for="(type, index) in store.typesArray"
              :key="index"
              :value="`${type.id}`"
            >
              {{ type.name }}
            </option>
          </select>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="select_box">
          <!-- <label>Brand:</label> -->
          <select name="brand" id="brand" v-model="searchBrand">
            <option value="" class="label">Brand:</option>
            <option
              v-for="(brand, index) in store.brandsArray"
              :key="index"
              :value="`${brand.id}`"
            >
              {{ brand.name }}
            </option>
          </select>
          <i class="fa-solid fa-chevron-down"></i>
        </div>

        <div class="select_box">
          <!-- <label>Texture:</label> -->
          <select name="texture" id="texture" v-model="searchTexture">
            <option value="" class="label">Texture:</option>
            <option
              v-for="(texture, index) in store.texturesArray"
              :key="index"
              :value="`${texture.id}`"
            >
              {{ texture.name }}
            </option>
          </select>
          <i class="fa-solid fa-chevron-down"></i>
        </div>

        <button class="mk_btn" @click="reset()">Reset Filter</button>
      </div>

      <div class="row" v-if="this.findProducts.length > 0">
        <div
          class="col-lg-3 mb-4"
          v-for="(product, index) in findProducts"
          :key="index"
        >
          <router-link
            :to="{ name: 'showproduct', params: { slug: product.slug } }"
          >
            <CardComponent :product="product" />
          </router-link>
        </div>
      </div>
      <div v-else class="mt-5 text-center fs-3">No Results</div>
    </div>
  </section>
</template>

<script>
import { store } from "../store";
import CardComponent from "./CardComponent.vue";
export default {
  name: "ProductListComponent",
  data() {
    return {
      store,
      searchTexture: "",
      searchType: "",
      searchBrand: "",
    };
  },
  components: {
    CardComponent,
  },
  mounted() {
    // console.log(this.productsArray);
  },
  methods: {
    reset() {
      this.searchTexture = "";
      this.searchType = "";
      this.searchBrand = "";
    },
  },
  computed: {
    findProducts() {
      return store.productsArray.filter((item) => {
        var product = item;
        // console.log(product)
        if (
          this.searchTexture.length > 0 &&
          this.searchBrand.length > 0 &&
          this.searchType.length > 0
        ) {
          // filtering with texture + type + brand
          if (
            item.brand_id == this.searchBrand &&
            item.texture_id == this.searchTexture &&
            item.type_id == this.searchType
          ) {
            return (product = item);
          }
        } else if (
          this.searchTexture.length > 0 &&
          this.searchBrand.length > 0
        ) {
          //filtering texture + brand
          if (
            item.brand_id == this.searchBrand &&
            item.texture_id == this.searchTexture
          ) {
            return (product = item);
          }
        } else if (this.searchType.length > 0 && this.searchBrand.length > 0) {
          //filtering type + brand
          if (
            item.brand_id == this.searchBrand &&
            item.type_id == this.searchType
          ) {
            return (product = item);
          }
        } else if (
          this.searchTexture.length > 0 &&
          this.searchType.length > 0
        ) {
          //filtering texture + type
          if (
            item.type_id == this.searchType &&
            item.texture_id == this.searchTexture
          ) {
            return (product = item);
          }
        } else if (this.searchTexture.length > 0) {
          product = item.texture_id;
          return product == this.searchTexture;
        } else if (this.searchBrand.length > 0) {
          product = item.brand_id;
          return product == this.searchBrand;
        } else if (this.searchType.length > 0) {
          product = item.type_id;
          return product == this.searchType;
        } else {
          return product;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

#product_list {
  margin: 5rem 0;

  .row {
    margin-top: 3rem;
  }
}
.filters_container {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .select_box {
    position: relative;
    width: 220px;
    margin-right: 1.5rem;

    select {
      width: 100%;
      position: relative;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-weight: 700;
      -webkit-appearance: none;
      appearance: none;
      color: $mk_txt_light_gray;
      border: 4px solid $mk_bg_mint;
      cursor: pointer;
    }
    select::ms-expand {
      display: none;
    }
    select:focus {
      outline: none;
      // box-shadow: 0 0 10px -1px $mk_txt_light_gray;
    }
    .label {
      position: absolute;
      top: 1.3rem;
      left: 1rem;
      z-index: 1;
      display: inline-block;
      font-weight: 700;
      color: $mk_txt_light_gray;
    }

    i {
      position: absolute;
      right: 1.3rem;
      top: 0.95rem;
      font-size: 1.2rem;
      color: $mk_bg_pink;
    }
  }
}
.select_box select:focus + i {
  color: $mk_txt_light_gray;
}

button {
  background-color: $mk_bg_mint;
  color: $mk_white;
  font-weight: 900;

  &:hover {
    color: $mk_bg_mint;
    border: 4px solid $mk_bg_mint;
    background-color: $mk_white;
  }
}
</style>
