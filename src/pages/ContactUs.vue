<template>
  <section id="contacts">
    <div class="mk_container">
      <h2 class="text-center">Drop Us a Message</h2>
      <div class="contact_form">
        <ContactsFormComponent />
      </div>
      <div class="contact_info">
        <div class="contact_info_inner">
          <h5>Location</h5>
          <p class="mb-0">22 Div Mountain,</p>
          <p>San Francisco, California</p>
        </div>
        <div class="contact_info_inner">
          <h5>Phone</h5>
          <p class="text-decoration-underline">+8801740376995</p>
        </div>
        <div class="contact_info_inner">
          <h5>Email</h5>
          <p class="text-decoration-underline">mail@domain.com</p>
        </div>
        <div class="contact_info_inner">
          <h5>Hours</h5>
          <p>Everyday: 8am-5pm</p>
        </div>
      </div>
      <h2 class="text-center">Subscribe Our Newsletter</h2>
    </div>
  </section>
</template>

<script>
import ContactsFormComponent from "../components/ContactsFormComponent.vue";
import { store } from "../store";
export default {
  name: "ContactUs",
  data() {
    return {
      store,
    };
  },
  components: { ContactsFormComponent },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

h2 {
  padding: 2rem 0;
}

h5 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.contact_info {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
}

.text-decoration-underline:hover {
  cursor: pointer;
}
</style>
