<template>
  <section id="product_list">
    <div class="mk-container">
      <h3>Product Name</h3>
      <select name="type" id="type" v-model="searchType">

        <option v-for="(type, index) in store.typesArray" :key="index" :value="`${type.id}`">{{ type.name }}
        </option>

      </select>
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
      searchType: ''
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
        const product = item.type_id;
        console.log(product)
        if (this.searchType.length == 0) {
          // console.log(product.type_id)
          return product;
        } else {
          return  product == this.searchType;
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
