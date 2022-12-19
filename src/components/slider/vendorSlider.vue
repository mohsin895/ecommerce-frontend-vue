<template>
    <div class="vendor">
        <div class="slider-heading">
            <div class="caption pointer">
                FEATURED VENDOR
            </div>
            <div class="seeall-btn pointer">
                SEE ALL
                <span class="see-all-span"> 
                    <img src="@/assets/images/arrow.png" alt="">
                </span>
            </div>
        </div>
        <hooper  :settings="hooperSettings" :play-speed="5000">
            <slide v-for="(shopInfo,shopIndex) in shopList" :key="shopIndex">
                <!-- <pre>{{shopInfo}}</pre> -->
                <div class="vendor-card-import">
                    <VendorCard
                    :imageName="shopInfo.shop_banner"
                    :shortTitle="shopInfo.shop_name"
                    :shopDetails="shopInfo"
                    />
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
import VendorCard from '@/components/slider/vendorCard'
export default {
    name:'vendor',
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
        VendorCard
    },
    data() {
        return {
            shopList:[],
            msg:'vendor',
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
    beforeMount(){
        this.getShopList();
    },
    methods:{
        getShopList(){
           this.$http.get("get/random/shop/list")
           .then(response=>{ 
                this.shopList=response.data;
           })
           .catch(error=>{console.dir(error)})
           .finally();
        }
    }
}
</script>


<style scoped>
.hooper{
    height:auto;
    width: 1177px;
    margin:auto;
}
.vendor-card-import{
    width:275px;
    height:135spx;
    background:white;
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
    font-size:1.1rem;
}
.seeall-btn:hover{
    color: var(--see-all-color);
}

/* slider header style end  */
</style>