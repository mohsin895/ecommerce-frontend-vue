<template>
    <div class="home-slider">
        <hooper  :settings="hooperSettings">
            <slide v-for="(sliderInfo,sliderIndex) in sliderList" :key="sliderIndex">
                <img class="hooper-img" v-lazy="sliderInfo.base_url+sliderInfo.slider_url" :alt="sliderInfo.title">
            </slide>
            <!-- <slide>
                <img class="hooper-img" src="@/assets/images/slider/slides_22 1.png" alt="">
            </slide> -->
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
    </div>
</template>

<script>
import { 
    Hooper,
    Slide, 
    Navigation as HooperNavigation,
    Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    name:'home-slider',
      components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination
    },
    data() {
        return {
            sliderList:[],
            msg:'home-slider',
            hooperSettings: {
                itemsToShow: 1,
                centerMode: false,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
            }
        }
    },
    mounted(){
        this.getSliderList();
    },
    methods:{
        getSliderList(){
            this.$http.get("get/slider/list")
           .then(response=>{ 
                this.sliderList=response.data;
           })
           .catch(error=>{console.dir(error)})
           .finally();
        }
    }
}
</script>


<style scoped>
/* use height weight for prevent auto resize  */
.hooper {
    height: 470px;
    width:900px;
}
.hooper-img{
    width:100%;
}
</style>