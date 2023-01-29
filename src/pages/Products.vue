<template>
  <section>
    <div class="mk_container">
      <h2 class="text-center">Our Products</h2>
      <p class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <ProductsListComponent />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import ProductsListComponent from "../components/ProductsListComponent.vue";
import { store } from "../store";
export default {
  name: "Products",
  data() {
    return {
      store,
    };
  },
  methods: {
    callProducts() {
      axios.get(`${this.store.apiBaseUrl}/products`).then((res) => {
        store.productsArray = res.data.results;
        // console.log(res.data.results);
      });
    },
  },
  mounted() {

    this.store.getTexture();
    this.store.getBrands();
    this.store.getTypes();

  },
  created() {
    this.callProducts();
    window.scrollTo(0, 0);
    store.showitems();
  },
  components: { ProductsListComponent },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

h2 {
  padding: 3rem 0 1.5rem 0;
}

.subtitle {
  text-align: center;
  width: 50%;
  margin: 0 auto;
}
</style>
