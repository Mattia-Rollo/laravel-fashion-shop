<template>
  <HomeHeroComponent />
  <HomeDeliveryComponent />
  <BestSellerComponent />
</template>

<script>
import { store } from "../store";
import axios from "axios";
import BestSellerComponent from "../components/BestSellerComponent.vue";
import HomeHeroComponent from "../components/HomeHeroComponent.vue";
import HomeDeliveryComponent from "../components/HomeDeliveryComponent.vue";

export default {
  name: "HomePage",
  components: {
    HomeHeroComponent,
    HomeDeliveryComponent,
    BestSellerComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
