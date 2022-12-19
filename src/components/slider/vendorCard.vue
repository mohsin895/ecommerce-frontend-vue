<template>
    <div class="vendor-card">
        <div class="image-text-overflow">
            <!-- <img :src="require(`@/assets/images/shops/${imageName}`)" alt=""> -->
            <img v-lazy="imageName" :alt="shopDetails.shop_name">
            <div class="overflow-text">
                <div class="shop-name">
                    {{shopDetails.shop_name}}             
                </div>
                <div class="shop-rating">
                    <b-icon 
                    v-for="index in getRating(shopDetails)" 
                    :key="index+Math.random()" 
                    icon="star-fill" 
                    font-scale="1" 
                    variant="warning"
                    ></b-icon>

                    <b-icon 
                    v-for="index in getReverseRating(shopDetails)" 
                    :key="index+Math.random()" 
                    icon="star-fill" 
                    font-scale="1" 
                    style="color: white;"
                    ></b-icon>
                </div>
                <div class="shop-location">
                   <!--  {{shopDetails.address}} -->
                </div>
            </div>
            <div class="vendor-icon-title">
                {{shortTitle.substring(0,2)}}
            </div>
        </div>
        <div class="visit-store-btn pointer">
            Visit Store <span class="right-arrow"> &rarr;</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'vendor-card',
    props:{
        imageName:String,
        shortTitle:String,
        shopDetails:Object,
    },
    data() {
        return {
            msg:'vendor-card'
        }
    },
    methods:{
        getRating(shopDetails){
            return parseInt(parseInt(shopDetails.rate)/parseInt(shopDetails.rated));
        },
        getReverseRating(shopDetails){
            return (parseInt(5)-parseInt(parseInt(shopDetails.rate)/parseInt(shopDetails.rated)));
        }
    }
}
</script>

<style scoped>
.vendor-card{
    width:275px;
    height:135px;
    background:white;
}
.shop-name{
    font-weight: bold;
    font-size: 1.2rem;
}
.image-text-overflow{
    position:relative;
}
.image-text-overflow img{
    width:275px;
    height:105px;
    object-fit: contain;
}
.overflow-text{
    position:absolute;
    top:0;
    padding:5px 15px;
    color:rgb(138, 135, 131);
}
.vendor-icon-title{
    width:35px;
    height:35px;
    border-radius:50%;
    background:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid #E0E0E0;
    position:absolute;
    right:10px;
    bottom:-12.5px;
    text-transform: uppercase;
    font-weight: bold;
}
.visit-store-btn{
    padding:0 10px;
    font-size: .9rem;
    display: flex;
    align-items: center;
}
.right-arrow{
    font-size: 1.2rem;
    margin-left: 5px;
}
</style>
