<template>
    <div class="heroPage">
        <div class="banner">
            <Banner/>
        </div>
        <div class="loyel-container">
            <div class="category-slider">
                <div class="category">
                    <Menu/>
                </div>
                <div class="slider">
                    <Slider/>
                </div>
            </div>
            <br>
            <div class="shocking-deal">
                <div class="shocking">SHOCKING DEAL</div>
                <Shockslider/>
            </div>
            <br>
            <div class="todays-product">
                <Mostviewproduct title="Today Deals"/>
            </div>
            <br>
            <div class="letest-products">
                <Mostviewproduct title="Latest Featured Products"/>
            </div>
            <br>
            <div class="vendors">
                <Vendorslider/>
            </div>
            <br>
            <div class="dual-banner">
                <Dualbanner1/>
            </div>
            <br>
            
                <Tabslider :tabs="['Electronics','Mobile Phone']" :selectedTabIndex="0"/>
            
          <!--   <br> -->
           
            <!--     <Tabslider :tabs="['Man','Fashion']" :selectedTabIndex="1"/>
            
            <br>
                <Tabslider :tabs="['Women','Dresses']" :selectedTabIndex="0"/>
            
            <br> -->
            <div class="letest-products">
                <Latestproduct title="Latest products"/>
            </div>
            <br>
            <div class="recently-view">
                <Recentviewproduct title="Recently Viwed"/>
            </div>
            <br>
            <div class="dual-banner">
                <Dualbanner2/>
            </div>
            <br>
            <div class="most-view">
                <Mostviewproduct title="Most Viewed"/>
            </div>
            <br>
            <div class="brands">
                <Brandslider title="Our Avaiable Brands"/>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/home/banner';
import Slider from '@/components/slider/homeMainSlider';
import Tabslider from '@/components/slider/tabSlider';
import Menu from '@/components/home/multiMenu';
import Shockslider from '@/components/slider/shockingSlider'
// import Productslider from '@/components/slider/simpleProductSlider'
import Mostviewproduct from '@/components/slider/mostViewProduct'
import Latestproduct from '@/components/slider/latestProduct'
import Recentviewproduct from '@/components/slider/recentViewProduct'
import Brandslider from '@/components/slider/brandSlider'
import Vendorslider from '@/components/slider/vendorSlider'
import Dualbanner1 from '@/components/home/dualBanner1'
import Dualbanner2 from '@/components/home/dualBanner2'
export default {
    name: 'hero',
    components:{
        Banner,
        Slider,
        Menu,
        Shockslider,
        Mostviewproduct,
        Recentviewproduct,
        Latestproduct,
        Vendorslider,
        Dualbanner1,
        Dualbanner2,
        Tabslider,
        Brandslider,
        // Productslider
    },
    data() {
        return {
            msg:'heropage',
        }
    }
}
</script>

<style scoped>
.heroPage{
    height:auto;
}
.banner{
    width:100%;
}
.category-slider{
    height:470px;
    display: flex;
    /* flex-flow: row wrap; */
}
.category{
    width:300px;
    background: white;
    position:relative;
}
.slider{
    width:calc(100% - 300px);
}
.owl-theme .owl-nav{
    margin-top:-200px !important;
}
.shocking{
    margin-left: 10px;
    font-weight: bold;
    font-size: 1.3rem;
}
.tab-product-slider{
    height:320px;
}
</style>