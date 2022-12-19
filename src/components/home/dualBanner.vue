<template>
    <div class="dual-banner">
        <div class="banner-wrapper">
            <img src="@/assets/images/banner/vector-shopping-online-banner 1.png" alt="Loyer banner">
            <img src="@/assets/images/banner/e6ee2a5888b79c216ba21bc2ca6c8939 1.png" alt="Loyer banner">
        </div>
    </div>
</template>

<script>

export default {
    name:'dual-banner',
    data() {
        return {
            msg:'dual-banner'
        }
    }
}
</script>

<style scoped>
.banner-wrapper{
    width:100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding:0 10px;
}
.banner-wrapper img {
    display: block;
    width:49.3%;
    object-fit: contain;
}
</style>
