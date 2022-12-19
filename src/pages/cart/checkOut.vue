<template>
    <div class="cart">
        <div class="loyel-container">
            <b-row cols="1" cols-md="2" cols-lg="2">
                <b-col>
                    <!-- <div class="loyel-cart-box">
                        <h5>Shopping Cart (2)</h5>
                    </div> -->
                    <div class="loyel-cart-box">
                        <div class="shipping-info-wrapper">
                            <div class="shipping-info">
                                <h5>Shipping Information</h5>
                                <div class="shipping-address">
                                   <!--  <pre>{{addressList}}</pre> -->
                                    <ul v-for="addressInfo,addressIndex in addressList" :key="addressIndex" :for="'address_id'+addressInfo.id">
                                        <!-- <li>
                                            <div class="info">
                                                <input type="radio" name="address" v-model="Address" :value="addressInfo.id">
                                            </div>
                                        </li> -->
                                        <li>
                                            <div class="info">
                                                <input type="radio" name="address" v-model="Address" :value="addressInfo.id" :id="'address_id'+addressInfo.id">
                                                {{addressInfo.name}}
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon" >
                                                <v-icon
                                                name="map-marker-alt"
                                                />
                                            </div>
                                            <div class="info" >
                                                {{addressInfo.address}}
                                                <slot v-if="addressInfo.union_info!=null">
                                                    {{addressInfo.union_info.name}}
                                                </slot>
                                                <slot v-if="addressInfo.thana_info!=null">
                                                    {{addressInfo.thana_info.name}}
                                                </slot>
                                                <slot v-if="addressInfo.district_info!=null">
                                                    {{addressInfo.district_info.name}}
                                                </slot>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon" >
                                                <v-icon name="phone-alt"/>
                                            </div>
                                            <div class="info" >
                                               {{addressInfo.phone}}
                                            </div>
                                        </li>
                                        <!-- <li>
                                            <div class="icon">
                                                <v-icon name="envelope"/>
                                            </div>
                                            <div class="info">
                                                anwarkhan0678@gmail.com
                                            </div>
                                        </li> -->
                                    </ul>
                                </div>
                            </div>
                            <div class="edit-btn">
                                <router-link class="edit-icon pointer" :to="{name:'addressAdd',params:{name:$store.state.customerInfo.name}}">
                                    <v-icon name="edit"/>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </b-col>
                <b-row >
                    <b-col>
                        <div class="loyel-cart-box">
                            <h5>Payment Methods</h5>
                            <br>
                            <div class="payment-wrapper">
                                <div class="left-img">
                                    <input class="form-check-input" type="radio" name="payMethod" v-model="payMethod" value="2" id="cashPayment">
                                        <label class="form-check-label" for="cashPayment">
                                           <img src="@/assets/images/COD.jpg" alt="" height="30">
                                        </label>
                                    <input class="form-check-input" type="radio"  name="payMethod" v-model="payMethod" value="1" id="onlinePayment">
                                     <label class="form-check-label" for="onlinePayment">
                                        <!-- Online Payment -->
                                        <img src="@/assets/images/OP.png" height="30" alt="">
                                    </label>
                                    
                                   
                                </div>
                                <!-- <div class="right-part">
                                    <div class="change-btn">Change</div>
                                </div> -->
                            </div>
                        </div>
                        <div class="loyel-cart-box">
                            <!-- <div class="select-all">
                                <a-checkbox @click="selectAll()">
                                    Select All
                                </a-checkbox>
                            </div>
                            <br> -->
                            <!-- <table class="table-spacing">
                                <tbody>
                                    <tr v-for="index in 2" :key="index">
                                        <td>
                                            <a-checkbox :checked="checkAll" @change="checkAll = !checkAll"/>
                                        </td>
                                        <td>
                                            <img src="@/assets/images/product.png" alt="">
                                        </td>
                                        <td>
                                            <div class="title">
                                                Men Jackets
                                            </div>
                                            <div class="color">
                                                <span>Color:</span>
                                                Blue
                                            </div>
                                            <div class="price">
                                                ৳ 1200
                                            </div>
                                            <div class="free-shipping">
                                                Free Shipping
                                            </div>
                                        </td>
                                        <td>
                                            <div class="quantity-increase-decrease">
                                                <div class="icons-group">
                                                    <b-icon icon="heart-fill"></b-icon>
                                                    <b-icon icon="trash"></b-icon>
                                                </div>
                                                <Quantity 
                                                v-model="quantity" 
                                                :min="1" 
                                                :max="10"
                                                @input="calculationPrice"
                                                />
                                            </div>                                        
                                        </td>
                                    </tr>
                                </tbody>
                            </table> -->
                            <div class="loyel-cart-box">
                            <h5>Order Summary</h5>
                            <br>
                            <div class="subtotal">
                                <div class="title">
                                    Voucher Code
                                </div>
                                <div class="amount">
                                    <input type="text" placeholder="Enter Voucher Code">
                                </div>
                            </div>
                            <div class="subtotal">
                                <div class="title">
                                    Voucher Discount
                                </div>
                                <div class="amount">
                                   ৳ {{promoDiscount}}
                                </div>
                            </div><div class="subtotal">
                                <div class="title">
                                    Total Price
                                </div>
                                <div class="amount">
                                    ৳ {{totalPrice}}
                                </div>
                            </div>
                            <div class="subtotal">
                                <div class="title">
                                    Delivery Charge
                                </div>
                                <div class="amount">
                                    ৳ {{deliveryCharge}}
                                </div>
                            </div>
                            <div class="shipping">
                                <div class="title">
                                    Delivery Charge Discount
                                </div>
                                <div class="amount">
                                    ৳ {{deliveryChargeDiscount}}
                                </div>
                            </div>
                            <div class="shipping">
                                <div class="title">
                                    Total Discount
                                </div>
                                <div class="amount">
                                    ৳ {{(totalDiscount)}}
                                </div>
                            </div>
                            <hr>
                            <div class="total">
                                <div class="title">
                                  Grand Total
                                </div>
                                <div class="amount">
                                    ৳ {{grandTotal}}
                                </div>                           
                            </div>
                            <button class="proceed-to-checkout" :disabled="$store.state.cartInfos.totalItem<1 || countDown>0" v-on:click="orderPlaced">Confirm Order</button>
                        </div>
                        </div>
                    </b-col>
                   <!--  <b-col>
                        ssl commerce popup will be integrate here
                    </b-col> -->
                </b-row>
                
            </b-row>
           
        </div>
    </div>
</template>

<script>
import Quantity from "@/components/product/Quantity";

export default {
    name: 'cart',
    components: {
        Quantity
    },
    data() {
        return {
            msg: 'cart',
            quantity: 1,
            cart_list: [],
            indeterminate: false,
            checkAll: false,
            totalPrice: '0.00',
            
            disabled:false,
            addressList:[],
            newAddressFlag:false,
            upazilaList:null,
            districtList:null,
            voucher:null,

            payMethod:null,
            deliveryAddressForm:false,
            errMsgFlag:false,
            msgFlag:false,
            msg:null,
            errMsg:null,
            name:null,
            phone:null,
            address:null,
            upazila:null,
            district:null,
            deliveryAddressId:null,
            upazilaName:null,
            districtName:null,
            newName:null,
            newPhone:null,
            newAddress:null,
            newUpazila:null,
            newDistrict:null,
            insideDhaka:0,
            bkashPayment:null,
            onlinePayment:null,
            cashPayment:null,
            payMethod:null,
            areaId:null,
            note:null,
            invoiceDiscount:0,
            promoDiscount:0,
            productDiscount:0,
            totalPrice:0,
            grandTotal:0,
            deliveryCharge:0,
            totalDiscount:0,
            countDown:0,
            isPreOrder:0,
            deliveryChargeDiscount:0,
            Address:null,
        }
    },
   
 mounted(){
    this.totalPrice = 500;
    this.customerAuthCheck();
    this.loadCustomerAddress();
    // this.getAreaList();
    this.getCartInfo();
    this.getCustomerLastAddress();
    // this.voucher=this.$store.state.cartInfos.promoCode;
  },
  methods: {
    async getDeliveryCharge(addressId){
    
     let formData=new FormData();
     let cartInfos = this.$store.state.cartInfos;
     let flag=false;
    
        cartInfos.forEach(cartInfo => {
          if(cartInfo.isFreeProduct != true ) {
            // let quantity = parseFloat(cartInfo.quantity) + 1;
            formData.append("productId[]", cartInfo.product_id);
            formData.append("quantity[]", cartInfo.quantity);
            formData.append("isFreeProduct[]", false);
            formData.append("colorCode[]", cartInfo.color_id);
            formData.append("sizeCode[]", cartInfo.size_id);
            flag = true;
          }
        });
      formData.append("addressId",addressId);
      await this.$http.post('get/delivery/charge',formData)
             .then(response=>{
                if(response.data.msgFlag==true)
                  this.deliveryCharge=response.data.deliveryCharge;
             })
             .catch(error=>{console.dir(error)})
             .finally();
        this.getDeliveryChargeDiscount();
        this.getPriceInfo();
     
    },
    selectAll() {
        this.checkAll = !this.checkAll
    },
    calculationPrice() {
        let productPrice = 500;
        this.totalPrice = productPrice*this.quantity;
        console.log('Total price: ',this.totalPrice);
    },
    checkcurrent(event) {
        event.currentTarget.checked = true;
    },
    async getDeliveryChargeDiscount(){
      let formData=new FormData();
     let cartInfos = this.$store.state.cartInfos;
     let flag=false;
    
        cartInfos.forEach(cartInfo => {
          if(cartInfo.isFreeProduct != true ) {
            // let quantity = parseFloat(cartInfo.quantity) + 1;
            formData.append("productId[]", cartInfo.product_id);
            formData.append("quantity[]", cartInfo.quantity);
            formData.append("isFreeProduct[]", false);
            formData.append("colorCode[]", cartInfo.color_id);
            formData.append("sizeCode[]", cartInfo.size_id);
            flag = true;
          }
        });
      formData.append("areaId",this.areaId);
      formData.append("deliveryCharge",this.deliveryCharge);
      await this.$http.post('get/delivery/charge/discount',formData)
             .then(response=>{
                if(response.data.msgFlag==true)
                  this.deliveryChargeDiscount=response.data.deliveryChargeDiscount;
             })
             .catch(error=>{console.dir(error)})
             .finally();
      this.getPriceInfo();
    },
    getCustomerLastAddress(){
      if(this.$store.state.customerInfo!=null){
       let token=window.localStorage.getItem("customerToken");
           
        let config = {
               headers: {
                  'Authorization': 'Bearer '+token
              }   
          };
        this.$http.get("customer/get/last/address",config)
         .then(response=>{
            if(response.data.msgFlag){
              this.deliveryAddressForm=true;
              this.selectCustomerAddress(response.data.lastAddressId);
            }
            else{
              this.deliveryAddressForm=false;
            }
         }).
         catch(error=>{console.dir(error)})
         .finally();
       }
    },
    getVoucherDiscount(){
      let customerInfo=this.$store.state.customerInfo;
        let formData=new FormData();
        formData.append("promoCode",this.voucher);
        formData.append("phone",this.customerPhone);
        formData.append("token",this.token);
        formData.append("remember",this.remember);
        let cartInfos = this.$store.state.cartInfos;
        let flag=false;
      
            cartInfos.forEach(cartInfo => {
            if(cartInfo.isFreeProduct != true ) {
              let quantity = parseFloat(cartInfo.quantity) + 1;
              formData.append("productId[]", cartInfo.product_id);
              formData.append("quantity[]", cartInfo.quantity);
              formData.append("isFreeProduct[]", false);
              formData.append("colorCode[]", cartInfo.color_id);
              formData.append("sizeCode[]", cartInfo.size_id);
              flag = true;
            }
          });
          let config = {
                 headers: {
                    'Content-Type': 'multipart/form-data'
                }   
            }; 
        
        this.$http.post("get/promo/discount",formData,config)
         .then(response=>{
            if(response.data.msgFlag==true){
              this.$store.commit("storeCartInfos",response.data.cartInfos);
              this.$store.commit("storePriceInfos",response.data);
              this.getPriceInfo();
            }
         })
         .catch(error=>{console.dir(error)})
         .finally();
         this.getPriceInfo();
    },
    resetOrderForm(){
        this.name=null; 
        this.phone=null; 
        this.address=null;  
        this.deliveryAddressId=null; 
        this.onlinePayment=null; 
        this.cashPayment=null;  
        this.bkashPayment=null;
        this.note=null;
        this.payMethod=null;
    },
    orderFormValidation(){
      if(this.deliveryAddressId!=null){
         if(this.payMethod!=null){
            return true;
         }
         else{
              this.errMsg="Please Select A Payment Method.";
              this.errMsgFlag=true;
              this.$toaster.warning(this.errMsg);
              return false;
         }
      }
      else{
          this.errMsg="Please Select An Address or Add New Address.";
          this.errMsgFlag=true;
          this.$toaster.warning(this.errMsg);
          return false;
      }
    },
    sendOrderSms(orderId){
      let formData=new FormData();
      formData.append("dataId",orderId);
      this.$http.post("sent/order/sms",formData)
       .then(response=>{
       })
       .catch(error=>{console.dir(error)})
       .finally();
    },
    countDownTimer() {
                if(this.countDown > 0) {
                  if(this.countDown%10==0)
                    this.$toaster.warning("Your Order Is Processing.Please Wait.");
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
         },
    orderPlaced(){
      if(this.orderFormValidation()){
        if(this.$store.state.customerInfo!=null){
           let token=window.localStorage.getItem("customerToken");
               
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token,
                      'Content-Type': 'multipart/form-data'
                  }   
              };

              this.countDown=2;
              this.countDownTimer();
              let formData=new FormData();

              formData.append("addressId",this.deliveryAddressId);
              formData.append("areaId",this.areaId);

              formData.append("payMethod",this.payMethod);
              formData.append("deliveryCharge",(this.deliveryCharge-this.deliveryChargeDiscount));
              if(this.note!=null)
                formData.append("orderNote",this.note);
              let customerInfo = this.$store.state.customerInfo;

              formData.append("promoCode",this.voucher);
              let cartInfos = this.$store.state.cartInfos;
              let flag=false;
          
                cartInfos.forEach(cartInfo => {
                if(cartInfo.isFreeProduct != true ) {
                  // let quantity = parseFloat(cartInfo.quantity) + 1;
                  formData.append("productId[]", cartInfo.product_id);
                  formData.append("quantity[]", cartInfo.quantity);
                  formData.append("isFreeProduct[]", false);
                  formData.append("colorCode[]", cartInfo.color_id);
                  formData.append("sizeCode[]", cartInfo.size_id);
                  flag = true;
                }
              });
           
            this.$http.post("customer/order/placed",formData,config)
             .then(response=>{
                if(response.data.msgFlag==true && response.data.isOrderPlaced==true){
                  this.countDown=0;
                  let orderId=response.data.orderId;
                  if(response.data.isOnlinePayment==true){
                    this.countDown=0;
                    this.sendOrderSms(orderId);
                     window.open(this.$store.state.onlinePaymentUrl+orderId+"/online/payment","_self");
                  }
                  else{
                    this.countDown=0;
                    this.sendOrderSms(orderId);
                    this.$toaster.success(response.data.msg);
                    this.$router.push({name:'Order.Success',params:{orderId:orderId}});
                  }
                }
             })
             .catch(error=>{console.dir(error)})
             .finally();
         }
         else{

         }
       }
    },
    updatePaymentMethod(status){
      
      // if(status==1){
      //   this.onlinePayment=2;
      //   this.bkashPayment=0;
      //   this.cashPayment=0;
      // }
      // if(status==2){
      //  this.onlinePayment=0;
      //   this.bkashPayment=0;
      //   this.cashPayment=1;
      // }
      // if(status==3){
      //   this.onlinePayment=0;
      //   this.bkashPayment=2;
      //   this.cashPayment=0;
      // }
      // console.dir(this.onlinePayment);
    },
    deleteAddress(addressId){
        this.errMsgFlag=false;
        this.msgFlag=false;
        this.$http.get("customer/address/delete",{params:{dataId:addressId}})
          .then(response=>{
              this.errMsgFlag=response.data.errMsgFlag;
              this.msgFlag=response.data.msgFlag;
              this.errMsg=response.data.errMsg;
              this.msg=response.data.msg;
              if(response.data.errMsgFlag)
                this.$toaster.warning(this.errMsg);
              if(response.data.msgFlag)
                this.$toaster.success(this.msg);
              this.loadCustomerAddress();
          })
          .catch(error=>{console.dir(error)})
          .finally();
      },
    isValidPhoneNumber(){
      let pattern=/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
        let flag=pattern.test(this.newPhone);
        if(flag)
          return true;
        else
          return false;
    },
    newAddressFormValidation(){
      if(this.newName!=null && this.newPhone!=null && this.newAddress!=null && this.newUpazila!=null && this.newDistrict!=null){
          if(this.isValidPhoneNumber()){
            return true;
          }
          else{
            this.errMsg="Please Enter Valid Bangladeshi Number.";
            this.errMsgFlag=true;
            this.$toaster.warning(this.errMsg);
            return false;
          }
      }
      else{
          if(this.newName==null){
            this.errMsg="Please Enter Your Name";
            this.$toaster.warning(this.errMsg);
          }
          if(this.newPhone==null){
            this.errMsg="Please Enter Phone Number.";
            this.$toaster.warning(this.errMsg);
          }
          if(this.newAddress==null){
            this.errMsg="Please Write Address.";
            this.$toaster.warning(this.errMsg);
          }
          if(this.newDistrict==null){
            this.errMsg="Please Select Your District.";
            this.$toaster.warning(this.errMsg);
          }
          if(this.newUpazila==null){
            this.errMsg="Please Select Your Upazila.";
            this.$toaster.warning(this.errMsg);
          }
          this.errMsgFlag=true;
          return false;
      }
    },
    addNewAddress(){
      if(this.newAddressFormValidation()){
         let customerInfo = this.$store.state.customerInfo;
        let formData=new FormData();
        formData.append("customerPhone",customerInfo.phone);
        formData.append("token",customerInfo.phone);
        formData.append("remember",customerInfo.remember);
        formData.append("name",this.newName);
        formData.append("phone",this.newPhone);
        formData.append("address",this.newAddress);
        formData.append("upazila",this.newUpazila);
        formData.append("district",this.newDistrict);
       
        this.$http.post("add/new/address",formData)
         .then(response=>{
            if(response.data.msgFlag==true){
              this.selectCustomerAddress(response.data.dataId);
              this.resetNewAddressForm();
              this.loadCustomerAddress();
            }
            else{
              this.errMsgFlag=response.data.errMsgFlag;
              this.errMsg=response.data.errMsg;
              this.$toaster.warning(this.errMsg);
            }
         })
         .catch(error=>{console.dir(error)})
         .finally();
      }
    },
    async selectCustomerAddress(addressId){
      
      if(this.$store.state.customerInfo!=null){
       let token=window.localStorage.getItem("customerToken");
           
        let config = {
               headers: {
                  'Authorization': 'Bearer '+token
              }   
          };

        await this.$http.get("customer/selected/address/info?dataId="+addressId,config)
           .then(response=>{
              if(response.data.msgFlag==true){
                this.Address=addressId;
                this.deliveryAddressId=addressId;
                this.getDeliveryCharge(addressId);
              }
              else
              {
                this.deliveryAddressForm=false;
                this.errMsgFlag=response.data.errMsgFlag;
                this.errMsg=response.data.errMsg;
                this.$toaster.warning(this.errMsg);
              }
           })
           .catch(error=>{console.dir(error)})
           .finally();
           this.getDeliveryChargeDiscount();
           this.getPriceInfo();
     }
    },
    getCartInfo(){
            
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
              if(response.data.msgFlag==true){
                // console.dir(response.data);
                 this.$store.commit("storeCartInfos",response.data.cartInfos);
                 this.$store.commit("storePriceInfos",response.data);
                 this.getPriceInfo();
              }
              else{
                 // this.$toaster.warning(response.data.errMsg);
              }
            })
            .catch(error=>{console.dir(error)})
            .finally();
    },
    resetNewAddressForm(){
      this.newName=null;
      this.newPhone=null;
      this.newAddress=null;
      this.newUpazila=null;
      this.newDistrict=null;
    },
    async loadCustomerAddress(){
      if(this.$store.state.customerInfo!=null){
          let token=window.localStorage.getItem("customerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
          this.errMsgFlag=false;
          this.msgFlag=false;
        await  this.$http.get("customer/get/addresses",config)
          .then(response=>{
          if(response.data.msgFlag==true)
            this.addressList=response.data.addresses;
          })
          .catch(error=>{console.dir()})
          .finally();
          this.getPriceInfo();
      }
    },
    customerAuthCheck(){
        if(this.$store.state.customerInfo==null){
           this.$router.push({name:'signinfor.checkout'});
        }
    },
    getAreaList(){
        this.$http.get("all/area/list")
         .then(response=>{
            if(response.data.msgFlag==true){
              this.upazilaList=response.data.upazilaList; 
              this.districtList=response.data.districtList; 
            }
         })
         .catch(error=>{console.dir(error)})
         .finally();
      },
      getPriceInfo(){
          this.invoiceDiscount=this.$store.state.priceInfos.invoiceDiscount;       
          this.promoDiscount=this.$store.state.priceInfos.promoDiscount;
          this.productDiscount=this.$store.state.priceInfos.productDiscount;
          this.totalPrice=this.$store.state.priceInfos.totalPrice;
          this.totalDiscount=this.invoiceDiscount+this.promoDiscount+this.productDiscount;
          this.grandTotal=((parseInt(this.totalPrice)+(parseInt(this.deliveryCharge)-parseInt(this.deliveryChargeDiscount)))-this.totalDiscount);
          // this.deliveryCharge=this.$store.state.cartInfos.invoiceDiscount;
      },
       signinFunction(){
            if(this.formValidation()){
                let formData=new FormData();
                formData.append("userName",this.userName);
                formData.append("password",this.password);
                axios.post("website/customer/signin",formData)
                 .then(response=>{
                    if(response.data.msgFlag==true){
                        this.$toaster.success(response.data.msg);
                        this.$store.commit('storeCustomerInfo',response.data.customerInfo);
                        this.userName=null;
                        this.password=null;
                        this.$router.push({name:'checkout'});
                    }
                    else{
                        this.errMsgFlagA=response.data.errMsgFlag;
                        this.errMsg=response.data.errMsg;
                        this.$toaster.warning(this.errMsgA);
                    }
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
            }
        },
        formSubmitPrevent(e){
             e.preventDefault();
        },
        formValidation(){
            if(this.userName!=null && this.password!=null){
                return true;
            }
            else{
                if(this.userName==null){
                    this.errMsg="Please Enter Your Phone  First.";
                    this.$toaster.warning(this.errMsg);
                }
                if(this.password==null){
                    this.errMsg="Please Enter Password.";
                    this.$toaster.warning(this.errMsg);
                }
                this.errMsgFlagA=true;
                return false;
            }
        },
        resetRegistrationForm(){
            this.name=null;
            this.phone=null;
            this.email=null;
            this.password=null;
            this.conPassword=null;
            this.otp=null;
            this.otpForm=false;
            this.signUpForm=true;
        },
        countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
         },
        emailValidation() 
        {
            let pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let flag=pattern.test(this.email);
            if(flag)
                return true;
            else
                return false;
        },
       signUpFormValidation(){
        if(this.name!=null  && this.phone!=null && this.newPassword!=null && this.conPassword!=null){
            if(this.phoneNumberValidation() ){
                if(this.newPassword==this.conPassword){
                    return true;
                }
                else{
                    this.errMsg="Please Confirm Password.";
                    this.errMsgFlagB=true;
                    this.$toaster.warning(this.errMsg);
                    
                    return false;
                }
            }
            else{
                if(!this.phoneNumberValidation()){
                    this.errMsg="Please Enter A Valid Bangladeshi Phone Number.";
                    this.$toaster.warning(this.errMsg);
                }
                // if(!this.emailValidation()){
                //  this.errMsg="Please Enter An Valid Email Address.";
                //  this.$toaster.warning(this.errMsg);
                // }
                this.errMsgFlagB=true;
                return false;
            }
        }
        else{
            if(this.name==null){
                this.errMsg="Please Enter Your Name.";
                this.$toaster.warning(this.errMsg);
            }
            // if(this.email==null){
            //  this.errMsg="Please Enter Your Mail Address.";
            //  this.$toaster.warning(this.errMsg);
            // }
            if(this.newPassword==null){
                this.errMsg="Please Enter Password.";
                this.$toaster.warning(this.errMsg);
            }
            if(this.conPassword==null){
                this.errMsg="Please Confirm Password.";
                this.$toaster.warning(this.conPassword);
            }
            this.errMsgFlagB=true;
            return false;
        }
      },
      verifyCustomerInfo(){
        if(this.signUpFormValidation()){
            let formData=new FormData();
            formData.append("name",this.name);
            formData.append("phone",this.phone);
            // formData.append("email",this.email);
            formData.append("password",this.newPassword);
            formData.append("conPassword",this.conPassword);
            formData.append("otp",this.otp);
            this.countDown=180;
            this.countDownTimer();
            axios.post("website/verify/customer/info",formData)
             .then(response=>{
                this.errMsgFlagB=response.data.errMsgFlag;
                this.errMsg=response.data.errMsg;
                this.msgFlagB=response.data.msgFlag;
                this.msg=response.data.msg;
                if(response.data.msgFlag==true){
                    this.$toaster.success(this.msg);
                    this.signUpForm=false;
                    this.otpForm=true;
                    
                }
                if(response.data.errMsgFlag==true){
                    this.$toaster.warning(this.errMsg);
                }
             })
             .catch(error=>{console.dir(error)})
             .finally();
        }
       },
       signUpFunction(){
        if(this.signUpFormValidation()){
            let formData=new FormData();
            formData.append("name",this.name);
            formData.append("phone",this.phone);
            formData.append("email",this.email);
            formData.append("password",this.newPassword);
            formData.append("conPassword",this.conPassword);
            formData.append("otp",this.otp);
            axios.post("website/verify/customer/phone",formData)
             .then(response=>{
                this.errMsgFlagB=response.data.errMsgFlag;
                this.errMsg=response.data.errMsg;
                this.msgFlagB=response.data.msgFlag;
                this.msg=response.data.msg;
                if(response.data.msgFlag==true){
                    this.$toaster.success(this.msg);
                    this.signUpForm=false;
                    this.otpForm=true;
                    if(response.data.loginFlag){
                        this.$store.commit('storeCustomerInfo',response.data.customerInfo);
                        this.$router.push({name:'checkout'});
                        this.resetRegistrationForm();
                    }
                    this.resetRegistrationForm();
                }
                if(response.data.errMsgFlag==true){
                    this.$toaster.warning(this.errMsg);
                }
             })
             .catch(error=>{console.dir(error)})
             .finally();
        }
       },
       phoneNumberValidation()
       {
          let pattern=/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
          let flag=pattern.test(this.phone);
          if(flag)
            return true;
          else
            return false;
       },
  }
    
}
</script>

<style scoped>
/* global css  */
li{
    cursor:pointer;
}
.loyel-cart-box {
    width: 100%;
    border-radius: 15px;
    border: 1px solid #DEDEDE;
    padding: 15px 20px;
    background: white;
    margin: 15px 0;
}
h5 {
    margin: 0;
}

 /* address info css */
.shipping-info-wrapper {
    display: flex;
    justify-content: space-between;
}
ul {
    padding: 0;
    list-style: none;
}
ul li {
    display: flex;
    grid-column-gap: 5px;
    color: #999999;
}
ul li:nth-child(1) .info {
    color: #454545;
    margin-left: 17px;
}

/* total subtotal css  */
.subtotal,
.shipping,
.total {
    display: flex;
    justify-content: space-between;
    color: #999999;
}
.total {
    color: black;
    font-weight: 500;
}
.proceed-to-checkout {
    border: none;
    background: black;
    width: 100%;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    padding: 8px 0;
    margin-top: 18px;
}


/* payment option css  */

.payment-wrapper {
    display: flex;
    justify-content: space-between;
}
.left-img {
    display: flex;
    grid-column-gap: 60px;
}
.left-img img {
    width: 100px;
    display: block;
}
.change-btn {
    cursor: pointer;
    color: #10A9FF;
}


/* selection checkout css  */

/* .table-spacing{
   border-collapse: separate;
   border-spacing:0 5px;
} */
table tr td{
    padding:10px;
}
table tr td:nth-child(1) {
    padding: 0;
}
table tr td img {
    width: 100px;
    height: 100px;
    object-fit: cover;
}
table tr td:nth-child(3) {
    width: 290px;
}
.title {
    font-weight: 500;
}
.color span{
    color: #999999;
}
.free-shipping {
    color: #10A9FF;
}

.icons-group {
    color: red;
    text-align: right;
    font-size: 1.3rem;
    margin-bottom: 10px;
}
.icons-group > :nth-child(2) {
    margin-left: 20px;
}
</style>