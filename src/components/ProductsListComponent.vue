<template>
  <section id="product_list">
    <div class="mk-container">
      <h3>Product Name</h3>
      <div class="row">
        <div
          class="col-lg-3 mb-4"
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
    };
  },
  components: { CardComponent },
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
