<template>
    <div class="wish">
        <!-- <div class="select-and-add-all">
            <div class="selectall">
                <a-checkbox style="overflow: hidden">
                    Select All
                </a-checkbox>
            </div>
            <div class="add-all pointer">
                ADD ALL TO CART
            </div>
        </div> -->
        <br>
        <div class="wish-product">
            <!-- <div class="wish-product-item" v-for="cartInfo,cartIndex in $store.state.cartInfos" :key="cartIndex">
                <div class="shop-name">
                    A.K.P Fashion
                </div>
                <hr>
                <b-row cols="1" cols-md="1" cols-lg="2">
                    <b-col lg="7">
                        <div class="product-wrap">
                            <div class="product-img">
                                <img :src="cartInfo.productImage" :alt="cartInfo.name" height="70" width="70">
                            </div>
                            <div class="product-details">
                                <p>{{cartInfo.name}}</p>
                                 <slot v-if="cartInfo.hasSizeVarity==1">
                                  <h6>Size: {{cartInfo.size}}</h6>
                                </slot>
                                <slot v-if="cartInfo.hasColorVarity==1">
                                  <h6>Color: {{cartInfo.color}}</h6>
                                </slot>
                                
                            </div>
                        </div>
                    </b-col>
                    <b-col lg="5">
                        <div class="money-cart">
                            <div class="money">
                                 <slot v-if="cartInfo.discountFlag==true">
                                    <div class="product-price">৳ {{(cartInfo.rate*cartInfo.quantity)}}</div>
                                    <div class="product-discount">
                                        <del>৳ {{(cartInfo.rate*cartInfo.quantity)-cartInfo.discount}}</del>
                                    </div>
                                    <div class="discount-sticker">
                                        Discount
                                    </div>
                                </slot>
                                <slot v-else>
                                    <div class="product-price">৳ {{cartInfo.price}}</div>
                                </slot>
                            </div>
                            <div class="wish-cart-icon">
                                <div class="delete-icon">
                                    <b-icon icon="trash"/>
                                </div>
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <hr>
            </div> -->
            <table class="table">
                  <thead>
                    <tr>
                     <!--  <th scope="col">#</th> -->
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Rate</th>
                      <th scope="col">Price</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="cartInfo,index in $store.state.cartInfos" :key="index">
                      <!-- <th scope="row">{{++index}}</th> -->
                      <td>
                          <img :src="cartInfo.productImage" :alt="cartInfo.name" height="70" width="70">
                      </td>
                      <td>
                          {{(cartInfo.name.length > 30)? cartInfo.name.substr(0,30)+'...' : cartInfo.name}}
                          <slot v-if="cartInfo.hasSizeVarity==1">
                                <br>
                              <h6>Size: {{cartInfo.size}}</h6>
                          </slot>
                        <slot v-if="cartInfo.hasColorVarity==1">
                          <h6>Color: {{cartInfo.color}}</h6>
                        </slot>
                      </td>
                      <td class="text-right">
                           <button type="button" v-on:click="productQuantityDecrease(index)">
                                <!-- <b-icon icon="reduct"/> -->-
                            </button>
                            <input type="number" min="1" :value="cartInfo.quantity" readonly style="width:60px;">
                            <button type="button" v-on:click="productQuantityIncrease(index)">
                                <b-icon icon="plus"/>
                            </button>
                      </td>
                      <td>৳ {{(cartInfo.rate)}}</td>
                      <td> <slot v-if="cartInfo.discountFlag==true">
                                ৳ {{(cartInfo.rate*cartInfo.quantity)}}<br>
                                <del style="color:red;">৳ {{(cartInfo.rate*cartInfo.quantity)-cartInfo.discount}}</del>
                            </slot>
                            <slot v-else>
                                ৳ {{cartInfo.price}}
                            </slot>
                      </td>
                      <td>
                          <div class="delete-icon" style="color:red;" @click="removeProduct(index)">
                                <b-icon icon="trash"/>
                            </div>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                      <tr>
                        <td colspan="5" ></td>
                          <td>
                              <router-link style="background-color:#F12323;padding:5px; color:white;border-color:#f1d8d8b8" :to="{name:'checkOut'}">Checkout</router-link>
                          </td>
                      </tr>
                  </tfoot>
                </table>
        </div>
    </div>
</template>

<script>

export default {
    name: 'wisht',
    data() {
        return {

        }
    },
    methods:{
          isCartVisiable(){
          if(this.$route.name=='PreOrder' || this.$route.name=='signinfor.preOrderCheckout' || this.$route.name=='PreOrderCheckout')
            return true;
          else
            return false;
        },
        productQuantityDecrease(index){
           
            let product_id=this.$store.state.cartInfos[index]['product_id'];
            let color_id=this.$store.state.cartInfos[index]['color_id'];
            let size_id=this.$store.state.cartInfos[index]['size_id'];
            let cartInfos = this.$store.state.cartInfos;
            let formData=new FormData();
            let flag=false;
      
            cartInfos.forEach(cartInfo => {
            if(
              cartInfo.product_id ==product_id &&
              cartInfo.isFreeProduct != true && 
              parseInt(cartInfo.color_id)==color_id && 
              parseInt(cartInfo.size_id)==size_id
            ) {
                 let quantity = parseInt(cartInfo.quantity);
                if(quantity>1){
                   quantity=quantity-1;
                }
              formData.append("productId[]", product_id);
              formData.append("quantity[]", quantity);
              formData.append("isFreeProduct[]", false);
              formData.append("colorCode[]", cartInfo.color_id);
              formData.append("sizeCode[]", cartInfo.size_id);
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
          
            // let formData=new FormData();
            //  formData.append("product_id",product_id);
            //  formData.append("colorCode",this.colorCode);
            //  formData.append("sizeCode",this.sizeCode);
            //  formData.append("quantity",1);
            let config = {
                   headers: {
                      'Content-Type': 'multipart/form-data'
                  }   
              }; 
        
           this.$http.post("product/add/to/cart",formData,config)
            .then(response=>{
              if(response.data.msgFlag==true){
                // console.dir(response.data);
                 this.$store.commit("storeCartInfos",response.data.cartInfos);
                 this.$store.commit("storePriceInfos",response.data);
                  this.$toaster.success(response.data.msg);
              }
              if(response.data.errMsgFlag==true){
               this.$toaster.warning(response.data.errMsg);
              }
            })
            .catch(error=>{console.dir(error)})
            .finally();
        },
        productQuantityIncrease(index){
           
            let product_id=this.$store.state.cartInfos[index]['product_id'];
            let color_id=this.$store.state.cartInfos[index]['color_id'];
            let size_id=this.$store.state.cartInfos[index]['size_id'];
            let cartInfos = this.$store.state.cartInfos;
            let formData=new FormData();
            let flag=false;
      
            cartInfos.forEach(cartInfo => {
            if(
              cartInfo.product_id ==product_id &&
              cartInfo.isFreeProduct != true && 
              parseInt(cartInfo.color_id)==color_id && 
              parseInt(cartInfo.size_id)==size_id
            ) {
              let quantity = parseFloat(cartInfo.quantity) + 1;
              formData.append("productId[]", product_id);
              formData.append("quantity[]", quantity);
              formData.append("isFreeProduct[]", false);
              formData.append("colorCode[]", cartInfo.color_id);
              formData.append("sizeCode[]", cartInfo.size_id);
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
          
            // let formData=new FormData();
            //  formData.append("product_id",product_id);
            //  formData.append("colorCode",this.colorCode);
            //  formData.append("sizeCode",this.sizeCode);
            //  formData.append("quantity",1);
            let config = {
                   headers: {
                      'Content-Type': 'multipart/form-data'
                  }   
              }; 
        
           this.$http.post("product/add/to/cart",formData,config)
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
        },
        removeProduct(index){
            
            this.$store.commit('removeProductFromCart',index);
            let cartInfos = this.$store.state.cartInfos;
            let formData=new FormData();
            let flag=false;
      
            cartInfos.forEach(cartInfo => {
            if(cartInfo.isFreeProduct != true ) {
              let quantity = parseFloat(cartInfo.quantity) + 1;
              formData.append("productId[]", cartInfo.product_id);
              formData.append("quantity[]", cartInfo.quantity);
              formData.append("isFreeProduct[]", false);
              formData.append("colorCode[]", cartInfo.color_id);
              formData.append("sizeCode[]", cartInfo.size_id);
              formData.append("addedToCart[]", false);
              flag = true;
            }
          });
            let config = {
                   headers: {
                      'Content-Type': 'multipart/form-data'
                  }   
              }; 
        
           this.$http.post("product/add/to/cart",formData,config)
            .then(response=>{
              // if(response.data.msgFlag==true){
              //   // console.dir(response.data);
              //    this.$store.commit("storeCartInfos",response.data.cartInfos);
              //    this.$store.commit("storePriceInfos",response.data);
              //    // this.$toaster.success('A Product Removed Successfully');
              // }
              // if(response.data.errMsgFlag==true){
              //   this.$store.commit("storeCartInfos",response.data.cartInfos);
              //   this.$store.commit("storePriceInfos",response.data);
              //    // this.$toaster.warning(response.data.errMsg);
              // }
              this.$store.commit("storeCartInfos",response.data.cartInfos);
                this.$store.commit("storePriceInfos",response.data);
               this.$toaster.success('A Product Removed Successfully');
            })
            .catch(error=>{console.dir(error)})
            .finally();
        },
        gotoCheckOutPage(){
            this.$router.push({name:'Checkout'});
        }
    
    }
}
</script>

<style scoped>

.select-and-add-all {
    width: 100%;
    height: 60px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}


.shop-name {
    font-weight: bold;
}
.wish-product {
    width: 100%;
    min-height: 300px;
    background: white;
    padding: 10px 15px;
}
.product-wrap {
    display: flex;
    grid-column-gap: 15px;
}
.product-wrap > :nth-child(1) {
    display: flex;
    align-items: center;
}
.product-wrap > :nth-child(3) p:nth-child(1) {
    font-weight: 500;
    margin: 0;
}
.product-wrap > :nth-child(3) p:nth-child(2) {
    font-size: 0.9rem;
}
.delete-icon {
    display: inline-block;
    cursor: pointer;
    font-size: 20px;
}



.money-cart {
    display: flex;
    justify-content: space-between;
}
.product-price {
    color: #F12323;
}
.discount-sticker {
    color: #6DAF68;
}
.product-discount del {
    margin-right: 5px;
}
.wish-cart-icon {
    display: flex;
    align-items: center;
}
.icon-wrapper {
    width: 60px;
    height: 35px;
    display: flex;
    color: white;
    font-size: 20px;
    background: #F12323;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>
