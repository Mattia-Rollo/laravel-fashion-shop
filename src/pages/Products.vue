<template>
  <div>Pagina Prodotti</div>
</template>

<script>
import axios from "axios";
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
        console.log(res.data.results);
      });
    },
  },
  mounted() {
    this.callProducts();
  },
};
</script>

<style lang="scss" scoped></style>
