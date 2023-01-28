<template>
  <LoaderComponent v-if="store.isLoading" />
  <Transition name="fading">
    <div v-if="success" class="delivered_wrap">Message Delivered!</div>
  </Transition>

  <form @submit.prevent="sendForm()">
    <div class="form_inputs">
      <div class="position-relative w-50">
        <input type="text" id="name" name="name" v-model="name" required />
        <label id="nameLabel" for="name" :class="{ fixed_input: name.length }">Name</label>
      </div>
      <p v-for="(error, index) in errors.name" :key="index" class="invalid-feedback">
        {{ error }}
      </p>
      <div class="position-relative w-50">
        <input type="email" id="email" name="email" v-model="email" required />
        <label id="mailLabel" for="email" :class="{ fixed_input: email.length }">Email Address</label>
      </div>
    </div>

    <div class="form_textarea">
      <div class="position position-relative">
        <textarea name="message" id="message" v-model="message" required></textarea>
        <label id="messaggeLabel" for="message" :class="{ fixed_textarea: message.length }">Write a message</label>
      </div>
    </div>

    <button class="mk_btn" :disabled="store.isLoading">
      {{ store.isLoading ? "Sending..." : "Submit" }}
    </button>
  </form>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import LoaderComponent from "./LoaderComponent.vue";
export default {
  name: "ContactsFormComponent",
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      success: false,
      errors: {},
    };
  },
  methods: {
    resetDeliveryMsg() {
      setTimeout(() => {
        this.success = false;
      }, 2500);
    },
    sendForm() {
      store.isLoading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((response) => {
        console.log(response.data);
        this.success = response.data.success;
        if (!this.success) {
          this.errors = response.data.errors;
          //console.log(this.errors);
        } else {
          this.name = "";
          this.email = "";
          this.message = "";
        }
        store.isLoading = false;
        this.resetDeliveryMsg();
      });
    },
  },
  mounted() { },
  components: { LoaderComponent },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;


input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid $mk_white;
  -webkit-text-fill-color: $mk_white;
  -webkit-box-shadow: 0 0 0px 1000px $mk_bg_mint inset;
  transition: background-color 5000s ease-in-out 0s;
}

form {
  padding: 5rem;
  background-color: $mk_bg_mint;
}

.form_inputs {
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  input {
    width: 100%;
    padding: 1.8rem;
    outline: none;
    border-radius: 10px;
    border: 2px solid $mk_white;
    background: transparent;
  }

  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
    font-size: 1.2rem;
    color: $mk_white;
    transition: top 0.3s ease;
    padding: 0.4rem;
  }

  input:focus~label,
  input~label.fixed_input {
    top: 0;
    background-color: $mk_bg_mint;
  }
}

.form_textarea {
  margin-top: 3rem;

  textarea {
    width: 100%;
    height: 400px;
    background-color: transparent;
    outline: none;
    border: 2px solid $mk_white;
    color: $mk_white;
    border-radius: 10px;
    padding: 2rem;
    resize: none;
  }

  label {
    position: absolute;
    top: 1.5rem;
    left: 2rem;
    font-size: 1.2rem;
    color: $mk_white;
    padding: 0.4rem;
    transition: top 0.3s ease;
  }

  textarea:focus~label,
  textarea~label.fixed_textarea {
    top: -1.3rem;
    background-color: $mk_bg_mint;
  }
}

button.mk_btn {
  margin-top: 2rem;
  display: block;
  margin-left: auto;
  //   width: fit-content;
  //   padding: 0.5rem 1.6rem;
}

.fading-enter-active {
  animation: fading-in 0.5s;
}

.fading-leave-active {
  animation: fading-in 0.5s reverse;
}

@keyframes fading-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

.delivered_wrap {
  background-color: $mk_bg_pink;
  height: 80px;
  width: 100%;
  margin-bottom: 3rem;
  @include mk_dflex_center;
  font-size: 1.5rem;
  color: $mk_white;
}
</style>
