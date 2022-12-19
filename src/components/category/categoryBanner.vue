<template>
    <div class="category-banner">
        <img v-lazy="imageName" :alt="title" height="400" width="1200">
    </div>
</template>

<script>

export default {
    name: 'category-banner',
    props: {
        imageName:String,
        title:String
    },
    data() {
        return {
            msg:'category-banner'
        }
    }
}
</script>
<style scoped>
img {
    width: 100%;
}
</style>