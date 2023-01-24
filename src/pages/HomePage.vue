<template>
  <div class="mk_container">
    Home
    <button class="mk_btn">Browse Products</button>
    <h1>Titolo</h1>
    <h2>Titolo 2</h2>
    <h3>Made Only From <br>Organic Materials</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae architecto corporis atque distinctio facere, eveniet alias quasi repudiandae quia quae! Sapiente minima reiciendis ab itaque corrupti, non deserunt laborum soluta!</p>
    <ul>
      <li><a href="">Prova</a></li>
      <li><a href="">Prova</a></li>
      <li><a href="">Prova</a></li>
      <li><a href="">Prova</a></li>
    </ul>
  </div>
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

<style lang="scss" scoped></style>
