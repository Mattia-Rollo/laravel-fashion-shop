<template>
  ciao
</template>

<script>
import { store } from "../store";
import axios from "axios";
export default {
  name: "HomePage",
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

<style lang="scss" scoped>

</style>
