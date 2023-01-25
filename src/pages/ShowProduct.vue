<template>

  <h2 class="text-center py-5">Product Name</h2>
  <div class="mk_container mk_padding_container">
    <div class="mk_show">
      <img src="/img/cover_img_ex.jpg" alt="Product Name">
      <div class="mk_rect_mint">
        <p>Brand: Nome brand prodotto</p>
        <p>Price: Prezzo</p>
        <div class="mk_rect_brown">
          <!-- RETTANGOLO IN ABSOLUTE -->
        </div>
      </div>
    </div>
  </div>

  <!-- BOX SHADES -->
  <div class="mk_shades_box">
    <div class="mk_container mk_shades_flex">
      <div class="mk_shades">
        <div class="mk_color_shades">
          <!-- TONALITà DISPONIBILI -->
        </div>
        <p>Nome tonalità</p>
      </div>
      <div class="mk_shades">
        <div class="mk_color_shades">
          <!-- TONALITà DISPONIBILI -->
        </div>
        <p>Nome tonalità</p>
      </div>
      <div class="mk_shades">
        <div class="mk_color_shades">
          <!-- TONALITà DISPONIBILI -->
        </div>
        <p>Nome tonalità</p>
      </div>
      <div class="mk_shades">
        <div class="mk_color_shades">
          <!-- TONALITà DISPONIBILI -->
        </div>
        <p>Nome tonalità</p>
      </div>
    </div>
  </div>

  <!-- BOX DESCRIZIONE -->
  <div class="mk_description_box">
    <div class="mk_container mk_des_padding">
      <h3>Description</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore iste vel nisi mollitia id maxime. Est
        fuga corrupti corporis quaerat magni vero possimus quasi eaque, consequatur accusamus atque deleniti
        consequuntur beatae, dolores provident iure culpa eum autem? Ut iure quod ea porro inventore harum. Dolores
        officia quia obcaecati quaerat.</p>
    </div>
  </div>


</template>

<script>
export default {
  name: "ShowProduct",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/partials/mixins" as *;

.mk_padding_container {
  padding: 0 0 80px 0;
  @include mk_dflex_center;
}

img {
  height: 475px;
  border: 40px solid $mk_bg_pink;
  border-radius: 7px;
}

.mk_show {
  @include mk_dflex_between;
  width: 1000px;
}

.mk_rect_mint {
  width: 405px;
  height: 320px;
  background-color: $mk_bg_mint;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px 0 60px;
  position: relative;
  box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.35);

  p {
    font-size: 1.8rem;
    font-weight: 700;
    color: $mk_txt_dark_gray;
    line-height: 1.4;
  }

  .mk_rect_brown {
    width: 405px;
    height: 320px;
    background-color: $mk_bg_brown;
    position: absolute;
    top: 35px;
    left: 35px;
    z-index: -1;
  }
}

.mk_shades_flex {
  display: flex;
}

.mk_shades_box {
  width: 100%;
  margin: 80px 0;
  border-top: 1px solid $mk_txt_light_gray;
  border-bottom: 1px solid $mk_txt_light_gray;
  border-radius: 5px;
  box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.35);
}

.mk_shades {
  display: flex;
  align-items: center;
  padding: 30px 0;

  p {
    margin-bottom: 0;
    margin-right: 20px;
    color: $mk_txt_dark_gray;
  }
}

.mk_color_shades {
  width: 40px;
  height: 40px;
  background-color: $mk_bg_pink;
  border-radius: 50%;
  margin-right: 20px;
}

.mk_description_box {
  background-color: $mk_bg_mint;


  p {
    margin-bottom: 0;
  }
}

.mk_des_padding {
  padding: 70px 0;
  margin: 8rem;

  h3 {
    margin-bottom: 2rem;
  }
}
</style>
