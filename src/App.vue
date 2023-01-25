<template>
  <header>
    <HeaderComponent />
  </header>
  <div>
    <router-view></router-view>
  </div>

  <footer>
    <!-- <FooterComponent /> -->
  </footer>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style lang="scss" scoped>

</style>
