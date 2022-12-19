<template>
    <div class="product-view">
      <div class="loyel-container">
        <div class="products-all-details">
          <b-row class="product-rows" cols="1" cols-md="1" cols-lg="3">
            <b-col lg="4" class="white-bg">
              <ProductSlider />
            </b-col>
            <b-col lg="5" class="white-bg">
              <ProductInfo  />
         
            </b-col>
            <b-col lg="3" class="white-of-bg">
                <DeliveryInfo/>
            </b-col>
          </b-row>
        </div>
        <br>
        <!-- <div class="product-overview">
          <div class="tab-buttons">
            <b-row cols="1" cols-md="1" cols-lg="3">
              <b-col class="overview-col">
                <h5 
                @click="currentTab = 0"
                >
                  OVERVIEW
                </h5>
              </b-col>
              <b-col class="reviews-col">
                <h5 
                @click="currentTab = 1"
                >
                  CUSTOMER REVIEWS
                </h5>
              </b-col>
              <b-col class="video-col">
                <h5 
                @click="currentTab = 2"
                >
                  VIDEO
                </h5>
              </b-col>
            </b-row>
          </div>
          <br>
          <div class="tabs-section">
            <Overview 
            v-if="currentTab === 0"
            />
            <Review 
            v-if="currentTab === 1"
            />
            <Video 
            v-if="currentTab === 2"
            />
          </div>
        </div> -->
        <br>
        <RelatedProduct
        title="Related Products" 
        :initialQuantity="6"
        />
        <br>
      </div>
    </div>
</template>

<script>
import ProductInfo from '@/components/product/product-info'
import ProductSlider from '@/components/product/product-slider'
import DeliveryInfo from '@/components/product/delivery-info'
import Overview from '@/components/product/overview-tab'
import Review from '@/components/product/reviews-tab'
import Video from '@/components/product/video-tab'
import RelatedProduct from '@/components/slider/relatedProducts'
import Quantity from "@/components/product/Quantity";
import Rating from '@/components/product/rating-view'
import moment from "moment";
export default {
  components: {
    ProductSlider,
    ProductInfo,
    DeliveryInfo,
    Overview,
    Review,
    Video,
    RelatedProduct,
    Rating,
    Quantity
  },
  data() {
    return {
      currentTab: 1,
      productInfo:{},
      relatedProducts:[],
      quantity:1,
    };
  },
  beforeMount(){
    this.getProductInfo();
  },
  watch:{
        $route (to, from){ this.getProductInfo(); }
    },
  methods: {
     // uniqueSizes(quantityInfos) {   
     //        let sizes=[];      
     //        quantityInfos.forEach(quantityInfo=>{
     //          if(!sizes.some(size => size.size_id === quantityInfo.size_id))
     //            sizes.push(quantityInfo);
     //        });
     //        return sizes;
     //    },
     //     uniqueColors(quantityInfos) {
     //       let colors=[];   
     //        quantityInfos.forEach(quantityInfo=>{
     //          if(!colors.some(color => color.color_id === quantityInfo.color_id))
     //            colors.push(quantityInfo);
     //        }); 
     //        return colors;
     //    },
     //    getDiscountPrice(price,discount){
     //        return parseInt((parseInt(price)*parseInt(discount))/100);
     //    },
     //    getSellPrice(stockInfos){
     //         let sellPrice=0;
     //          stockInfos.forEach(stockInfo=>{
     //              sellPrice=parseInt(stockInfo.sell_price);
     //          });
     //        return parseInt(sellPrice);
     //    },
     //    getQuantityLabel(quantityType){
     //     let label="1 PCS";
     //      if(quantityType!=null){
     //        label=quantityType.smallQuantity+" "+quantityType.label;
     //      }
     //      return label;
     //   },
     //    isDiscountTimeExpire(startAt,endAt){
     //        endAt = moment(endAt); //Date format
     //        startAt = moment(startAt); //Date format
     //        let today = moment();
     //        let isAfter = moment(endAt).isAfter(today);
     //        let isBefore = moment(startAt).isBefore(today);
     //        if(isAfter && isBefore)
     //            return true;
     //        else
     //         return false;
     //    },
     //    calculationPrice() {

     //    },
    async getProductInfo(){
      let slug=this.$route.params.slug;
      await this.$http.get("product/details?slug="+slug)
             .then(response=>{
                this.productInfo=response.data.productInfo;
                this.$store.commit("storeProductDetails",response.data.productInfo);
                this.relatedProducts=response.data.relatedProducts;
                // console.dir(response.data.productInfo);
             })
             .catch(error=>{console.dir(error)})
             .finally();
    }
  },
};
</script>


<style scoped>

.white-bg {
  background: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
.white-of-bg {
  background: #F9F9F9;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 0px;
}

/* overview css  */
.tab-buttons {
  width: 100%;
  min-height: 40px;
  border: 1px solid #DEDEDE;
  background: white;
  padding: 5px 20px 0px 20px;
}
.tab-buttons > * h5{
  display: inline-block;
  cursor: pointer;
}
/* .overview-col {} */
.reviews-col {
  text-align: center;
}
.video-col {
  text-align: right;
}


.tabs-section {
  width: 100%;
  min-height: 200px;
  border: 1px solid #DEDEDE;
  background: white;
}




/* responsive part  */
@media (max-width: 1000px) {
  .white-bg {
    padding: 20px;
  }
  .white-of-bg {
    padding: 20px;
  }
  .overview-col,
  .reviews-col,
  .video-col {
    text-align: center;
  }
}
</style>