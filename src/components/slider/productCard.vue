<template>
    <div class="card">
        <div class="product-box">
            <div class="image">
                <slot v-if="productInfo.thumbnail_img!=null">
                    <img v-lazy="productInfo.thumbnail_img" alt="productInfo.name">
                </slot>
            </div>
            <div class="description">
                <router-link class="name" :to="{name:'productPage',params:{slug:productInfo.slug}}" >

                    {{(productInfo.name.length > 15)? productInfo.name.substr(0,15)+'...' : productInfo.name}}
                </router-link>
                <div class="price" v-if="productInfo.has_discount==1 && isDiscountTimeExpire(productInfo.discount_start,productInfo.discount_end)">
                    <div class="dicount-price">
                        &#2547; {{getDiscountPrice(getSellPrice(productInfo.stock_info),productInfo.discount)}}
                    </div>
                    <div class="main-price">
                        <del>{{getSellPrice(productInfo.stock_info)}}</del>
                    </div>
                </div>
                <div class="price" v-else>
                    <div class="dicount-price">
                        &#2547; {{getSellPrice(productInfo.stock_info)}}
                    </div>
                </div>                
            </div>
            <div class="product-btn">
                <div class="add-view-btn pointer" v-if="productInfo.quantity>0" @click="addToCart(productInfo)">
                    Add to cart
                </div>
                <div class="wish pointer">
                    <b-icon icon="heart"/>
                </div>
            </div>
        </div>
        <slot v-if="productInfo.has_discount==1 && isDiscountTimeExpire(productInfo.discount_start,productInfo.discount_end)">
            <div class="discount-sticker" >
                {{productInfo.discount}}%
            </div>
        </slot>
    </div>
</template>

<script>
import moment from "moment";

export default {
    name:'card',
    props:{
        productName: String,
        imageName: String,
        discountPrice: Number,
        price: Number,
        productInfo:Object,
    },
    data() {
        return {
            msg:'card'
        }
    },
    methods:{
        async addToCart(productInfo){
            // this.$toaster.warning(productInfo);
            if(productInfo.has_color==0 || productInfo.has_size==0){
                
                let cartInfos = this.$store.state.cartInfos;
            
                let formData=new FormData();
                let flag=false;
          
                cartInfos.forEach(cartInfo => {
                if(
                  cartInfo.productId ==productId &&
                  cartInfo.isFreeProduct != true &&
                  parseInt(cartInfo.colorId)==0 && 
                  parseInt(cartInfo.sizeId)==0
                ) {
                  let quantity = parseFloat(cartInfo.quantity) + 1;
                  formData.append("productId[]", productId);
                  formData.append("quantity[]", quantity);
                  formData.append("isFreeProduct[]", false);
                  formData.append("colorCode[]", cartInfo.colorId);
                  formData.append("sizeCode[]", cartInfo.sizeId);
                  formData.append("addedToCart[]", true);
                  flag = true;
                } 
                else 
                if( cartInfo.isFreeProduct != true ){
                  formData.append("productId[]", cartInfo.productId);
                  formData.append("quantity[]", cartInfo.quantity);
                  formData.append("isFreeProduct[]", cartInfo.isFreeProduct);
                  formData.append("colorCode[]", cartInfo.colorId);
                  formData.append("sizeCode[]", cartInfo.sizeId);
                   formData.append("addedToCart[]", false);
                }
              });
              if (flag != true) {
                formData.append("productId[]", productId);
                formData.append("quantity[]", 1);
                formData.append("isFreeProduct[]", false);
                formData.append("colorCode[]",0);
                formData.append("sizeCode[]", 0);
                formData.append("addedToCart[]", true);
              }
                // let formData=new FormData();
                //  formData.append("productId",productId);
                //  formData.append("colorCode",this.colorCode);
                //  formData.append("sizeCode",this.sizeCode);
                //  formData.append("quantity",1);
                let config = {
                       headers: {
                          'Content-Type': 'multipart/form-data'
                      }   
                  }; 
            
              await this.$http.post("product/add/to/cart",formData,config)
                .then(response=>{
                  if(response.data.msgFlag==true){
                    // console.dir(response.data);
                     this.$store.commit("storeCartInfos",response.data.cartInfos);
                     this.$store.commit("storePriceInfos",response.data);
                      this.$toaster.success(response.data.msg);
                  }
                  if(response.data.errMsgFlag==true){
                      this.$store.commit("storeCartInfos",response.data.cartInfos);
                      this.$store.commit("storePriceInfos",response.data);
                      this.$toaster.warning(response.data.errMsg);
                  }
                })
                .catch(error=>{console.dir(error)})
                .finally();
            }
            else{
                this.$router.push({name:'productPage',params:{slug:productInfo.slug}});
            }
        },
        getDiscountPrice(price,discount){
            return parseInt((parseInt(price)*parseInt(discount))/100);
        },
        getSellPrice(stockInfos){
             let sellPrice=0;
              stockInfos.forEach(stockInfo=>{
                  sellPrice=parseInt(stockInfo.sell_price);
              });
            return parseInt(sellPrice);
        },
        getQuantityLabel(quantityType){
         let label="1 PCS";
          if(quantityType!=null){
            label=quantityType.smallQuantity+" "+quantityType.label;
          }
          return label;
       },
        isDiscountTimeExpire(startAt,endAt){
            endAt = moment(endAt); //Date format
            startAt = moment(startAt); //Date format
            let today = moment();
            let isAfter = moment(endAt).isAfter(today);
            let isBefore = moment(startAt).isBefore(today);
            if(isAfter && isBefore)
                return true;
            else
             return false;
        },
    }
}
</script>


<style scoped>
.description .name{
  text-decoration:none;
  color:inherit;
}

.product-box{
    display: flex;
    flex-flow: column wrap;
    width: 180px;
    height:270px;
    background: white;
    padding:2px;
    border:1px solid #CECECE;
    position:relative;
}
.discount-sticker{
    position: absolute;
    right:-.1px;
    top:10px;
    width:50px;
    height:25px;
    font-size: .8rem;
    color:white;
    background:#FF4141;
    display: flex;
    justify-content: center;
    align-items: center;

}
/* product image  */
.product-box .image{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 62%;
}
.product-box .image img{
    width:150px;
    height:100%;
    object-fit: contain;
}
/* product description  */
.product-box .description{
    width:100%;
    height:22%;
    padding:2px 10px;
    font-size: 1rem;
    border-bottom: 1px solid black;
}
.product-box .description .price{
    display: flex;
    grid-column-gap: 60px;
}
.product-box .description .price .main-price{
    color:#FF0000;
}

/* product btn  */
.product-box .product-btn{
    width:100%;
    height: 16%;
    padding:0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.product-box .product-btn .add-view-btn{
    width:100px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color:white;
    background: #464545;
    padding-left:5px;
}

</style>