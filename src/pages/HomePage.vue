<template>
  <BestSellerComponent />
</template>

<script>
import { store } from "../store";
import axios from "axios";
import BestSellerComponent from "../components/BestSellerComponent.vue";
export default {
  name: "HomePage",
  components: { BestSellerComponent },
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
