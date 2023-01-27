<template>
  <form @submit.prevent="sendForm()">
    <div class="form_inputs">

      <div class="position-relative">
        <input type="text" id="name" name="name" v-model="name" required />
        <label for="name">Name</label>
      </div>
      <p v-for="(error, index) in errors.name" :key="index" class="invalid-feedback">
        {{ error }}
      </p>
      <div class="position-relative">
        <input type="email" id="email" name="email" v-model="email" required />
        <label for="email">Email Address</label>
      </div>
    </div>

    <div class="form_textarea">
      <div class="position position-relative">
        <textarea name="message" id="message" v-model="message" required></textarea>
        <label for="message">Write a message</label>
      </div>
    </div>

    <button class="mk_btn">Submit</button>
  </form>
</template>

<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "ContactsFormComponent",
  data() {
    return {
      store,
      name: '',
      email: '',
      message: '',
      success: false,
      errors: {},
      loading: false,
    };
  },
  methods: {
    sendForm() {
      this.loading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((response) => {
        console.log(response.data);
        this.success = response.data.success;
        if (!this.success) {
          this.errors = response.data.errors;
          //console.log(this.errors);
        } else {
          this.name = '';
          this.email = '';
          this.message = '';
        }
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

form {
  padding: 5rem;
  background-color: $mk_bg_mint;
}

.form_inputs {
  display: flex;
  justify-content: space-between;

  input {
    width: 500px;
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

  input:focus~label {
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

  textarea:focus~label {
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
</style>
