<template>
  <header>
    <HeaderComponent />
  </header>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

  <footer>
    <FooterComponent />
  </footer>
  <!-- FIXED ELEMENTS -->
  <div class="arrow-up" ref="arrow" @click="scrollToTop()">
    <i class="fa-solid fa-arrow-up"></i>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23"><path fill="#FFF" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M10 21.5v-19"/><path fill="#FFF" d="M3.926 7.484c-.388-.404-.388-.801 0-1.188L9.419.803c.14-.176.334-.264.58-.264s.44.088.582.264l5.493 5.493c.387.388.387.784 0 1.188-.389.405-.775.396-1.162-.026L9.999 2.599 5.088 7.458c-.388.422-.775.432-1.162.026z"/></svg> -->
  </div>
  <div class="aside_menu_shop">
    <i class="fa-brands fa-opencart" @click="store.openCart = true"></i>
    <Transition class="cart_animation">
      <div class="cart_counter" v-if="store.cartData.length > 0">
        <span>{{ store.cartData.length }}</span>
      </div>
    </Transition>
  </div>
  <Transition name="openCart">
    <ShoppingCartComponent v-if="store.openCart" />
  </Transition>
</template>

<script>
import { store } from "./store";
import ShoppingCartComponent from "./components/ShoppingCartComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
  },
  data() {
    return {
      store,
      cartData: []
    };
  },
  methods: {
    vueOnScroll() {
      let prev = window.pageYOffset;
      const refs = this.$refs.arrow;
      window.addEventListener("scroll", () => {
        let curr = window.pageYOffset;
        if (prev > curr) {
          refs.classList.add("scrollDown");
          refs.classList.remove("scrolled");
        } else {
          refs.classList.add("scrollDown");
          refs.classList.remove("scrolled");
        }
        if (curr === 0) {
          refs.classList.remove("scrollDown");
          refs.classList.remove("scrolled");
        }
        prev = curr;
      });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    this.vueOnScroll();
    const cartData = localStorage.getItem('cart');
    store.cartData = cartData ? JSON.parse(cartData) : [];
  },
};
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;
@use "./assets/styles/partials/mixins" as *;
.cart_animation-enter-active,
.cart_animation-leave-active {
  transition: opacity 0.5s ease;
}

.cart_animation-enter-from,
.cart_animation-leave-to {
  opacity: 0;
}
.cart_counter {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: $mk_bg_pink;
  color: $mk_white;
  text-align: center;
  line-height: 35px;
  font-size: 20px;
  position: absolute;
  bottom: -15px;
  left: -15px;
}
.openCart-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.openCart-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.openCart-enter-from,
.openCart-leave-to {
  transform: translateX(550px);
  // opacity: 0;
}

// CLASSI PER TRANSIZIONE TRA LE ROTTE
.slide-fade-enter-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.arrow-up {
  padding: 0.95rem 1.55rem;
  border-radius: 50%;
  font-size: 1.5rem;
  background-color: $mk_bg_mint;
  color: $mk_white;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 10;
  opacity: 0;
  transition: opacity 450ms ease;
  cursor: pointer;
  transition: all 450ms ease;
  box-shadow: 0px 4px 8px -2px rgba($mk_txt_dark_gray, 0.35);

  &:hover {
    transform: scale(1.1);
    background-color: $mk_white;
    color: $mk_bg_mint;
    border: 4px solid $mk_bg_mint;
  }
}

.scrolled {
  opacity: 0;
}
.scrollDown {
  opacity: 1;
}
.aside_menu_shop {
  position: fixed;
  top: 6.5rem;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 0.8rem;
  background-color: $mk_white;
  color: $mk_txt_dark_gray;
  font-size: 1.4rem;
  box-shadow: 0px 4px 8px -2px rgba($mk_txt_dark_gray, 0.35);
  border-radius: 0.5rem 0 0 0.5rem;
  transition: all 450ms ease;
  cursor: pointer;

  &:hover {
    padding-right: 1.5rem;
  }
}
</style>
