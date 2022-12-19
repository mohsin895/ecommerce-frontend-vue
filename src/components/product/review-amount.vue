<template>
    <div class="review-part">
        <div class="review-amount">
            <div class="active-reviews" :style="'width: calc('+ reviewer +'* 30px)'"></div>
        </div>
        <div class="reviewer-amount">
            {{reviewer}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'review-amount',
    props: {
        reviewer: {
            type: Number,
            default: 4
        }
    },
    data() {
        return {
            test: 3,
        }
    }
}
</script>

<style scoped>
.review-part {
    display: flex;
    grid-column-gap: 10px;
    align-items: center;
}
.review-amount {
    width: 200px;
    height: 15px;
    background: #DFDFDF;
    position: relative;
}

.active-reviews {
    position: absolute;
    background: #FFC700;
    top:0;
    left:0;
    right:0;
    bottom:0;
}
</style>
