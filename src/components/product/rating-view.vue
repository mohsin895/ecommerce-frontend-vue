<template>
    <div class="rating-view" :style="'font-size: ' + size">
        <b-icon 
        v-for="index in value" 
        :key="index+Math.random()" 
        icon="star-fill" 
        variant="warning"
        ></b-icon>

        <b-icon 
        v-for="index in (5-value)" 
        :key="index+Math.random()" 
        icon="star-fill" 
        ></b-icon> 
    </div>
</template>

<script>

export default {
    name: 'rating-view',
    props: {
        size: {
            type: String,
            default: '20px'
        },
        value: {
            type: Number,
            default: 4
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.rating-view {
    display: inline-block;
}
</style>
