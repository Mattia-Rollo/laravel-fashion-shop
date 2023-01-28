<template>
  <section id="contacts">
    <div class="mk_container">
      <h2 class="text-center hidden">Drop Us a Message</h2>
      <div class="contact_form">
        <ContactsFormComponent />
      </div>
      <div class="contact_info hidden">
        <div class="contact_info_inner hidden">
          <h5>Location</h5>
          <p class="mb-0">23 West 18th Street 8th Floor,</p>
          <p>New York, NY</p>
        </div>
        <div class="contact_info_inner hidden">
          <h5>Phone</h5>
          <p class="underline">212.242.1213</p>
        </div>
        <div class="contact_info_inner hidden">
          <h5>Email</h5>
          <p class="underline">info@glow.com</p>
        </div>
        <div class="contact_info_inner hidden">
          <h5>Hours</h5>
          <p>Everyday : 8am - 5pm</p>
        </div>
      </div>
      <!-- <h2 class="text-center">Subscribe Our Newsletter</h2> -->
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
    store.showitems();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

#contacts {
  margin-bottom: 5rem;

  h2 {
    margin: 3rem 0;
  }

  h5 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: $mk_txt_dark_gray;
  }

  .contact_info {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
  }

  .underline:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
