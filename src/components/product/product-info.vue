<template>
    <div class="product-info">
        <br>
        <h2>{{$store.state.productInfos.name}}</h2>
        <div class="rating">
            <Rating
            size="15px" 
            :value="3"
            />
            <span> {{$store.state.productInfos.rating}} Ratings</span>           
        </div>
        <div class="brand-social-container">
            <div class="brand-shop-weight">
            <slot v-if="$store.state.productInfos.brand_info!=null">
                <div class="brand">
                    <label for="">Brand:</label>
                    <span>{{$store.state.productInfos.brand_info.name}}</span>
                </div>
            </slot>
            <slot v-if="$store.state.productInfos.shop_info!=null">
                <div class="shop">
                    <label for="">Shop:</label>
                    <span>{{$store.state.productInfos.shop_info.shop_name}}</span>
                </div>
            </slot>
                <!-- <div class="weight">
                    <label for="">Weight:</label>
                    <span> No....</span>
                </div> -->
            </div>
            <div class="social">
                <div class="share">
                    <b-icon 
                    icon="share-fill"
                    />
                </div>
                <div class="wishlist">
                    <b-icon 
                    icon="heart"
                    />
                </div>
            </div>
        </div>
        <hr>
        <div class="pricing">
            <slot v-if="$store.state.productInfos.has_discount==1 && isDiscountTimeExpire($store.state.productInfos.discount_start,$store.state.productInfos.discount_end)">
                <div class="main-price">
                    ৳ {{getDiscountPrice(getSellPrice($store.state.productInfos.stock_info),$store.state.productInfos.discount)}}
                </div>
                <div class="discount-price" v-if="$store.state.productInfos.has_discount==1 && isDiscountTimeExpire($store.state.productInfos.discount_start,$store.state.productInfos.discount_end)">
                    <div class="del-price">
                        <del>৳ {{getSellPrice($store.state.productInfos.stock_info)}}</del>
                    </div>
                    <div class="percent-dicount">
                        {{$store.state.productInfos.discount}}%
                    </div>
                </div>
            </slot>
            <slot v-else>
                <div class="main-price">
                    ৳ {{getSellPrice($store.state.productInfos.stock_info)}}
                </div>
            </slot>
        </div>
        <hr>
        <div class="color-size">
        <slot v-if="$store.state.productInfos.has_color==1">
            <div class="color-details">
                <label for="">Color</label>
                <div class="color-plate">
                <slot v-for="colorInfo in  uniqueColors($store.state.productInfos.stock_info)">
                    <div class="color-div" :style="{background: colorInfo.color_info.color_code}" :id="'color_id'+colorInfo.color_id" @click="setColor(colorInfo)">
                        {{colorInfo.color_info.color}}
                    </div>
                </slot>
                </div>
            </div>
        </slot>
        <slot v-if="$store.state.productInfos.has_size==1">
            <div class="size-details">
                <label for="">Size</label>
                <div class="size-plate">
                    <slot v-for="sizeInfo in  uniqueSizes($store.state.productInfos.stock_info)">
                        <div  class="size-div" >
                           <!--  <div class="size-name size-active">S</div> -->
                            <div class="size-name" v-on:click="setSize(sizeInfo)" :id="'size_id'+sizeInfo.size_id">{{sizeInfo.size_info.size}}</div>
                            <!-- <div class="size-number">28</div> -->
                        </div>
                    </slot>
                </div>                
            </div>
        </slot>
            <div class="quantity">
                <Quantity 
                v-model="quantity" 
                :min="1" 
                :max="10"
                @input="calculationPrice"
                /> 
                <!-- <div class="available-quantity">
                    <label for="">Quantity:
                    <span> 50 available</span>
                    </label>
                </div> -->
            </div>
            <br>
            <div class="btn-group">
                <div class="buy-btn" @click="addToCartSpecificProduct($store.state.productInfos);gotoCheckoutPage()">buy now</div>
                <div class="atc-btn" @click="addToCartSpecificProduct($store.state.productInfos)">add to cart</div>
            </div>
        </div>
    </div>
</template>

<script>
import Quantity from "@/components/product/Quantity";
import Rating from '@/components/product/rating-view'
import moment from "moment";
export default {
    name: 'product-info',
    components: {
        Quantity,
        Rating
    },
    props:{
        productInfo:Object,
    },
    data() {
        return {
            quantity: 1,
            productId:null,
            colorCode:0,
            sizeCode:0,
        }
    },
    methods: {
        setColor(colorInfo){
          $('.color-div').removeClass('color-active');
          $('#color_id'+colorInfo.color_id).addClass('color-active');
          this.colorCode=colorInfo.color_id;
        },
        setSize(sizeInfo){
          $('.size-name').removeClass('size-active');
          $('#size_id'+sizeInfo.size_id).addClass('size-active');
          this.sizeCode=sizeInfo.size_id;
        },
        gotoCheckoutPage(){
            this.$router.push({name:'cartView'});
        },
        async addToCartSpecificProduct(productInfo){
           if(this.addToCartValidation(productInfo)){
                
                let cartInfos = this.$store.state.cartInfos;
                let formData=new FormData();
                let flag=false;
                this.productId=productInfo.id;
          
                cartInfos.forEach(cartInfo => {
                if(
                  cartInfo.productId ==this.productId &&
                  cartInfo.isFreeProduct != true  &&
                  parseInt(cartInfo.colorId)==this.colorCode &&
                  parseInt(cartInfo.sizeId)==this.sizeCode
                ) {
                  let quantity = parseFloat(cartInfo.quantity) + 1;
                  formData.append("productId[]", this.productId);
                  formData.append("quantity[]", this.quantity);
                  formData.append("isFreeProduct[]", false);
                  formData.append("colorCode[]", this.colorCode);
                  formData.append("sizeCode[]", this.sizeCode);
                  formData.append("addedToCart[]", true);
                  flag = true;
                } 
                else 
                if(cartInfo.isFreeProduct != true ){
                  formData.append("productId[]", cartInfo.product_id);
                  formData.append("quantity[]", cartInfo.quantity);
                  formData.append("isFreeProduct[]", cartInfo.isFreeProduct);
                  formData.append("colorCode[]", cartInfo.color_id);
                  formData.append("sizeCode[]", cartInfo.size_id);
                  formData.append("addedToCart[]", false);
                }
              });
            
            if(!flag){
                formData.append("productId[]", this.productId);
                formData.append("quantity[]", this.quantity);
                formData.append("isFreeProduct[]", false);
                formData.append("colorCode[]",this.colorCode);
                formData.append("sizeCode[]", this.sizeCode);
                formData.append("addedToCart[]", true);
            }
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
          },
        addToCartValidation(productInfo){
          if(productInfo.has_size==1 && productInfo.has_color==1){
            if(this.colorCode!=0 && this.sizeCode!=0){
                return true;
            }
            else{
                if(this.sizeCode==0)
                      this.$toaster.warning("Choose A Size First.");
                if(this.colorCode==0)
                    this.$toaster.warning("Choose A Color First.");
                return false;
            }
          }
          else{
            if(productInfo.has_size==1){
                if(this.sizeCode!=0){
                  return true;
                }
              else{
                  this.$toaster.warning("Choose A Size First.");
                  return false;
              }
            }
            else
              if(productInfo.has_color==1){
                if(this.colorCode!=0){
                    return true;
                }
                else{
                    this.$toaster.warning("Choose A Color First.");
                    return false;
                }
            }
            else{
              this.colorCode=0;
              this.sizeCode=0;
              return true;
            }
          }
          // if(hasSizeColorVarity==1){
          //   if(this.colorCode!=0 && this.sizeCode!=0){
          //     return true;
          //   }
          //   else{
          //     if(this.colorCode==0)
          //       this.$toaster.warning("Choose A Color First.");
          //     if(this.sizeCode==0)
          //       this.$toaster.warning("Choose A Size First.");
          //     return false;
          //   }
          // }
          // else{
          //   return true;
          // }
        },

         productQuantityChange(value){
            if(value==-1 && parseInt(this.quantity)>1){
                this.quantity=parseInt(this.quantity)-1;
            }
            if(value==1){
                this.quantity=parseInt(this.quantity)+1;
            }
            this.addToCartSpecificProduct();
        },
        getSizeAndColorWisePrice(){
             this.productId=this.$store.state.productId;
            this.$http.get("product/details/size/color/wise",{params:{productId:this.productId,colorId:this.colorCode,sizeId:this.sizeCode}})
              .then(response=>{
                if(response.data.msgFlag==true)
                   this.$store.commit("storeProductDetails",response.data.dataInfos);
                // if(response.data.errMsgFlag==true)
                //   // this.$toaster.warning(response.data.errMsg);
              })
              .catch(error=>{console.dir(error)})
              .finally();
        },
        uniqueSizes(quantityInfos) {   
            let sizes=[];      
            quantityInfos.forEach(quantityInfo=>{
              if(!sizes.some(size => size.size_id === quantityInfo.size_id))
                sizes.push(quantityInfo);
            });
            return sizes;
        },
         uniqueColors(quantityInfos) {
           let colors=[];   
            quantityInfos.forEach(quantityInfo=>{
              if(!colors.some(color => color.color_id === quantityInfo.color_id))
                colors.push(quantityInfo);
            }); 
            return colors;
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
        calculationPrice() {

        }
    }
}   
</script>

<style scoped>
.product-info {
    width: 100%;
}

h2 {
    margin-bottom: 5px;
}
hr {
    margin: 5px;
}
.brand-social-container {
    display: flex;
    justify-content: space-between;
    padding-right: 15px;
}
.brand-shop-weight {
    display: flex;
    grid-column-gap: 10px;
}

.social {
    display: flex;
    grid-column-gap: 15px;
}
.social .b-icon {
    font-size: 25px;
    cursor: pointer;
}
.discount-price {
    display: flex;
    grid-column-gap: 10px;
}

.main-price {
    color: #44B201;
    font-size: 1.8rem;
    font-weight: 600;
}
.discount-price {
    font-size: 0.9rem;
}
.brand-shop-weight label,
.del-price {
    color: #8A8A8A;
}
.brand,
.percent-dicount {
    color: #FF4040;
}
.shop {
    color: #4ED77D;
}



.color-size label {
    font-weight: bold;
    margin: 5px 0;
    font-size: 1.1rem;
}
.color-plate {
    max-width: 80%;
    display: flex;
    flex-flow: row wrap;
    grid-column-gap: 15px;
}
.color-div {
    min-width: 65px;
    min-height: 25px;
    border-radius: 6px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 5px 0;
}

.size-plate {
    max-width: 50%;
    display: flex;
    flex-flow: row wrap;   
    grid-column-gap: 10px; 
}
.size-div > *{
    width: 30px;
    height: 30px;
    border: 1px solid #c0c0c0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
}
.size-div > :nth-child(1) {
    cursor: pointer;
}
.size-active {
    background: #D4D4D4;
}
.quantity {
    margin-top: 10px;
    display:flex;
    grid-column-gap: 15px;
}
.available-quantity{
    display: flex;
    justify-content: center;
    align-items: center;
}
.available-quantity label {
    color: #767676;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    margin-top: -2px;
}
.available-quantity span {
    font-weight: initial;
    color: #FF4040;
    margin-left: 6px;
}

.btn-group {
    display: flex;
    grid-column-gap: 15px;
}
.btn-group > *{
    width: 150px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
}

.buy-btn {
    background: #FF4040;
}
.atc-btn {
    background: #363636;
}
</style>
