<template>
    <div class="product-slider">
        <div class="slider-heading">
            <div class="caption pointer">
                {{title}}
            </div>
            <div class="seeall-btn pointer">
                SEE ALL
                <span class="see-all-span"> 
                    <img src="@/assets/images/arrow.png" alt="">
                </span>
            </div>
        </div>

        <hooper  :settings="hooperSettings" :play-speed="5000">
            <slide v-for="(productInfo,productIndex) in dataList" :key="productIndex">
                <div class="product">
                    <Card :productInfo="productInfo" />
                </div>
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
import Card from '@/components/slider/productCard'
export default {
    name:'most-viewed-product',
    props:{
        title:String
    },
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
        Card
    },
    data() {
        return {
            msg:'slider',
            dataList:[],
            hooperSettings: {
                itemsToShow: 6,
                itemsToSlide:1,
                infiniteScroll: true,
                centerMode: true,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
                breakpoints: {
                    380: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    650: {
                        itemsToShow: 4,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 5
                    },
                    1200: {
                        itemsToShow: 6
                    }
                }
            }
        }
    },
    beforeMount() {
        this.getMostViewProduct();
    },
    methods:{
        getMostViewProduct(){
           this.$http.get("get/most/viewed/product")
           .then(response=>{ 
                this.dataList=response.data;
           })
           .catch(error=>{console.dir(error)})
           .finally();
        },
    }
}
</script>

<style scoped>
/* .hooper {
    width: calc(100% + 2 * var(--slider-gap));
    margin: var(--slider-gap);
}
.hooper-slide {
    padding: 0 10px;
} */
.hooper{
    height:auto;
    max-width: 1177px;
    margin:auto;
}
.product{
    width: 180px;
    height:270px;
}
.see-all-span{
    margin-left:10px;
}
.see-all-span img{
    margin-top:-4px;
}

/* slider header style  start */
.slider-heading{
    height:40px;
    max-width:1177px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    border:1px solid rgb(167, 165, 165);
    margin-bottom:10px;
    padding:0 10px;
    background: white;
}
.caption{
    font-weight: bold;
    font-size:1.2rem;
}
.seeall-btn:hover{
    color: var(--see-all-color);
}

/* slider header style end  */
</style>
