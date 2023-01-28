<template>
  <HomeHeroComponent />
  <HomeDeliveryComponent />
  <BestSellerComponent />
</template>

<script>
import { store } from "../store";
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
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
