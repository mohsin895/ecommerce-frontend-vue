<template>
    <div class="seller-store-banner">
        <div class="first-step">
            <div class="shop-logo">
                <img :src="shopLogo" alt="" style="border-radius:50%;">
            </div>
            <br>
            <div class="shop-rating">
                <div class="rating">
                    <label for="">Rating: </label>
                    <b-icon 
                    v-for="index in parseInt(rating)" 
                    :key="index+Math.random()" 
                    icon="star-fill" 
                    font-scale="1" 
                    variant="warning"
                    ></b-icon>

                    <b-icon 
                    v-for="index in (5-rating)" 
                    :key="index+Math.random()" 
                    icon="star-fill" 
                    font-scale="1" 
                    ></b-icon>                    
                </div>
                <div class="category">
                    <!-- <label for="">Category: </label>
                    {{category}} -->
                </div>
            </div>
        </div>
        <div class="second-step">
            <div class="shop-banner">
                <img :src="bannerImage" alt="">
            </div>
        </div>
        <div class="third-step">
            <div class="seller-image">
                <img :src="sellerImage" alt="">
            </div>
            <div class="seller-info">
                <div class="seller-name">
                    <h5>{{sellerName}}</h5>
                </div>
                <div class="seller-location">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'store-banner',
    props: {
        shopLogo:String,
        rating:  Number,
        bannerImage: String,
        sellerImage: String,
        sellerName: String,

    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.seller-store-banner {
    width: 100%;
    min-height: 40px;
    background: white;
    border: 1px solid #767676;
    padding: 10px 20px;
    display: flex;
    flex-flow: row wrap;
}

.shop-logo {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 1px solid #767676;
    display: flex;
    justify-content: center;
    align-items: center;
}
.shop-logo img {
    width: 90%;
    object-fit: cover;
}
.shop-rating label {
    font-weight: 500;
}

.seller-store-banner > :nth-child(1) {
    width: 25%;
}
.seller-store-banner > :nth-child(2) {
    width: 50%;
}
.seller-store-banner > :nth-child(3) {
    width: 25%;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom: 30px;
}
.shop-banner {
    display: flex;
    justify-content: center;
    align-items: center;
}
.shop-banner img {
    height: 250px;
    object-fit: contain;
}
.seller-image img {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}
.seller-info h5 {
    margin: 0;
}
.seller-info {
    text-align: center;
}
</style>