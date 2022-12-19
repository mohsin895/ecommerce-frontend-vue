<template>
    <div class="product-slider">
        <image-magnifier
        class="magnifire-style"
        :src="currentImg"
        :zoom-src="currentImg"
        zoom-width="400"
        zoom-height="400"
        >
        </image-magnifier>
        <hooper  :settings="hooperSettings" :infiniteScroll="false">
            <slide v-for="imageInfo,imageIndex in productImages" :key="imageIndex">
                <img @click="getImg($event)" v-lazy="imageInfo.base_url+imageInfo.product_image" :alt="imageInfo.alt_name">
            </slide>
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
    name: 'product-slider',
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,        
    },
    props:{
        productImages:Array,
    },
    data() {
        return {
            hooperSettings: {
                itemsToShow: 4,
                itemsToSlide:1,
                infiniteScroll: true,
                centerMode: true,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: false,
                keysControl: false,
            },
            currentImg: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }
    },
    methods: {
        getImg(event) {
        this.currentImg = event.currentTarget.src;
        }
    },
}
</script>

<style scoped>

.product-view {
    height: 400px;
}
.product-rows {
    height: 1000px;
}

.hooper {
  margin-top:10px;
  height: 100px;
  width: 100%;
}

.hooper-track ul li {
  width: 100px;
  height: 50px;
}
.hooper-track img {
  width: 80px;
  height: 50px;
  object-fit: contain;
  cursor: pointer;
}
</style>
