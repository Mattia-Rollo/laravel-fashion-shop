<template>
  <nav class="mk_container">
    <div class="mk_nav_flex">
      <router-link :to="{ name: 'home' }">
        <img src="/img/logo.png" alt="logo" class="mk_logo_nav" />
      </router-link>

      <ul class="mk_ul_flex">
        <li>
          <router-link :to="{ name: 'home' }" active-class="active_nav_link">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'products' }" active-class="active_nav_link">Products</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }" active-class="active_nav_link">About</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contacts' }" active-class="active_nav_link">Contacts</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'techteam' }" active-class="active_nav_link">Tech Team</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

.active_nav_link {
  color: $mk_white;
  font-weight: 900;
}

.mk_container {
  background-color: $mk_bg_pink;
  width: 100%;
  padding: .2rem 0;
}

.mk_nav_flex {
  @include mk_dflex_between;
  width: 80%;
  margin: 0 auto;
}

.mk_logo_nav {
  width: 45px;
  padding: .25rem;
  cursor: pointer;
}

.mk_ul_flex {
  display: flex;
  flex-direction: row;
  margin-bottom: 0;

  li {
    margin-left: 30px;
    cursor: pointer;
    font-weight: 600;
  }
  a:hover{
      color: $mk_white;
    }
}
</style>
