<template>
    <div class="shocking-deal">
        <hooper  :settings="hooperSettings" :play-speed="5000">
            <slide>
                <img width="275px" src="@/assets/images/shocking-deal/800px_COLOURBOX28439023 1.png" alt="">
            </slide>
            <slide>
                <img width="275px" src="@/assets/images/shocking-deal/800px_COLOURBOX31859615 1.png" alt="">
            </slide>
            <slide>
                <img width="275px" src="@/assets/images/shocking-deal/800px_COLOURBOX28439023 1.png" alt="">
            </slide>
            <slide>
                <img width="275px" src="@/assets/images/shocking-deal/matching-prob-online-shopping-ph-banner.png" alt="">
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <!-- <hooper-pagination slot="hooper-addons"></hooper-pagination> -->
        </hooper>
    </div>
</template>

<script>
import { 
    Hooper,
    Slide, 
    Navigation as HooperNavigation,
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    name:'shocking-deal',
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination
    },
    data() {
        return {
            msg:'shocking-deal',
            hooperSettings: {
                itemsToShow: 4,
                itemsToSlide:1,
                infiniteScroll: true,
                centerMode: true,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
            }
        }
    },
    mounted() {

    }
}
</script>

<style scoped>

.hooper{
    height:auto;
    width: 1177px;
    margin:auto;
}

</style>
