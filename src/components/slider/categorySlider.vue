<template>
    <div class="category-slider">
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
            <slide>
                <div class="product">
                    <Card
                    productName="Beans seed with real good seeds"
                    imageName="png_kidney_beans_17966 1.png"
                    :discountPrice="80"
                    :price="100"
                    />
                </div>
            </slide>
            <slide>
                <div class="product">
                    <Card
                    productName="Samsung Led Tv 32"
                    imageName="purepng 1.png"
                    :discountPrice="28000"
                    :price="35000"
                    />
                </div>
            </slide>
            <slide>
                <div class="product">
                    <Card
                    productName="Samsung Freez"
                    imageName="195-Ltr-right 1.png"
                    :discountPrice="0"
                    :price="28000"
                    />
                </div>
            </slide>
            <slide>
                <div class="product">
                    <Card
                    productName="Walton Mobile Phone"
                    imageName="walton-primo-h9-pro 1.png"
                    :discountPrice="0"
                    :price="17000"
                    />
                </div>
            </slide>
            <slide>
                <div class="product">
                    <Card
                    productName="Walton Laptop"
                    imageName="colors-laptop 1.png"
                    :discountPrice="0"
                    :price="28000"
                    />
                </div>
            </slide>
            <slide>
                <div class="product">
                    <Card
                    productName="Samsung"
                    imageName="1703263168121830 1.png"
                    :discountPrice="0"
                    :price="9000"
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
import Card from '@/components/slider/productCard'
export default {
    name:'category-slider',
    props:{
        title:String,
        initialQuantity:Number
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
                        itemsToShow: this.initialQuantity-1,
                        centerMode: false,
                    },
                    650: {
                        itemsToShow: this.initialQuantity-1,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: this.initialQuantity-1,
                    },
                    1200: {
                        itemsToShow: this.initialQuantity,
                    }
                }
            }
        }
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
