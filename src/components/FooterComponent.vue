<template>
  <div class="mk_container">
    <div class="mk_footer">
      <div class="d-flex justify-content-center">
        <div class="social-icons d-flex justify-content-center align-items-center mx-2">
          <a href="#"><i class="fa-brands fa-facebook-f fa-2xl"></i></a>
        </div>

        <div class="social-icons d-flex justify-content-center align-items-center mx-2">
          <a href="#"><i class="fa-brands fa-instagram fa-2xl"></i></a>
        </div>

        <div class="social-icons d-flex justify-content-center align-items-center mx-2">
          <a href="#"><i class="fa-brands fa-twitter fa-2xl"></i></a>
        </div>

        <div class="social-icons d-flex justify-content-center align-items-center mx-2">
          <a href="#"><i class="fa-brands fa-linkedin-in fa-2xl"></i></a>
        </div>

        <div class="social-icons d-flex justify-content-center align-items-center mx-2">
          <a href="#"><i class="fa-brands fa-pinterest fa-2xl"></i></a>
        </div>
      </div>

      <div class="text-center">
        <div>&#169; 2022-2023 Glow.com</div>
        <div>Metropolitan Makeup Show LLC</div>
        <div>123 West 18th Street 8th Floor New York, NY 10011 Office</div>
        <div>212.242.1213 Fax – 212.463.7099</div>
        <div>info@glow.com</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

.mk_container {
  height: 350px;
  background-color: $mk_bg_pink;
  width: 100%;
}

.mk_footer {
  @include mk_dflex_center_col;
  width: 80%;
  margin: 0 auto;
  padding-top: 3.5rem;
}

.social-icons {
  width: 50px;
  height: 50px;
  padding-top: .2rem;
  // border: 3px solid $mk_white;
  background-color: $mk_bg_dark_pink;
  border-radius: 50%;
  transition: all 250ms ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $mk_white;
}

.text-center {
  padding-top: 3.5rem;
  color: $mk_white;
  font-weight: 600;
}

i {
  color: $mk_white;
}
</style>
