<template>
    <nav class="mk_container">
        <div class=" mk_nav_flex">
            <img src="/public/img/logo.png" alt="logo" class="mk_logo_nav">
            <ul class="mk_ul_flex">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

.mk_container {
    height: 50px;
    background-color: $mk_bg_pink;
    width: 100%;
}

.mk_nav_flex {
    @include mk_dflex_between;
    width: 80%;
    margin: 0 auto;
}

.mk_logo_nav {
    width: 45px;
    cursor: pointer;
}

.mk_ul_flex {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;

    li {
        margin-left: 30px;
        cursor: pointer;
    }
}
</style>