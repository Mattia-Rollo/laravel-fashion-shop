<template>
  <section id="product_list">
    <div class="mk-container">
      <h3>Product Name</h3>
      <div class="row">
        
          <select name="type" id="type" v-model="searchTexture">
          <option value="">Tutte le Texture</option>
            <option v-for="(type, index) in store.texturesArray" :key="index" :value="`${type.id}`">{{ type.name }}
            </option>
          </select>
          <select name="brand" id="brand" v-model="searchBrand">
          <option value="">Tutti i Brand</option>
            <option v-for="(brand, index) in store.brandsArray" :key="index" :value="`${brand.id}`">{{ brand.name }}
            </option>
          </select>
          
        
        
      </div>
      <div class="row">
        <div class="col-lg-3 mb-4" v-for="(product, index) in findProducts" :key="index">
          <router-link :to="{ name: 'showproduct', params: { slug: product.slug } }">
            <CardComponent :product="product" />
          </router-link>
        </div>
      </div>
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
      productsArray: store.productsArray,
      searchTexture: '',
      searchBrand: ''
    };
  },
  components: {
    CardComponent
  },
  mounted() {
    // console.log(this.productsArray);

  },
  computed: {
    findProducts() {
      return (store.productsArray.filter((item) => {
        var product = item;
        // console.log(product)
        if (this.searchTexture.length > 0) {
          product = item.texture_id;
          return product == this.searchTexture;
          
        } else if( this.searchBrand.length > 0){
          product = item.brand_id;
          return product == this.searchBrand;
        }
        else {
          return product;
        }


      }))
    }
  }
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

#product_list {
  padding: 5rem 0;

  .row {
    margin-top: 3rem;
  }
}
</style>
