<template>
  <HomeHeroComponent />
  <HomeDeliveryComponent />
</template>

<script>
import { store } from "../store";
import axios from "axios";
import HomeHeroComponent from "../components/HomeHeroComponent.vue";
import HomeDeliveryComponent from "../components/HomeDeliveryComponent.vue";

export default {
  name: "HomePage",
  components: {
             HomeHeroComponent,
             HomeDeliveryComponent,
         },
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
