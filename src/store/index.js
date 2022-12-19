import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let cartInfos = window.localStorage.getItem("cartInfos");
let priceInfos = window.localStorage.getItem("priceInfos");
let customerInfo = window.localStorage.getItem("customerInfo");
let sellerInfo = window.localStorage.getItem("sellerInfo");
let sellerToken = window.localStorage.getItem("sellerInfo");
let customerToken = window.localStorage.getItem("sellerInfo");

const store = new Vuex.Store({
    state: {
    orderHistory:null,
    orderDetails:null,
    cartInfos: cartInfos ? JSON.parse(cartInfos) : [],
    priceInfos: priceInfos ? JSON.parse(priceInfos) : [],
    customerInfo: customerInfo ? JSON.parse(customerInfo) : null,
    sellerInfo: sellerInfo ? JSON.parse(sellerInfo) : null,
    temporaryCustomer:null,
    temporarySeller:null,
    productInfos:[],
    // onlinePaymentUrl: "https://loyeltrade.com/loyelApi/public/order/",
    onlinePaymentUrl: "http://localhost/loyelApi/public/order/",
  },
  mutations: {
    storeOrderHistory(state,datas){state.orderHistory=datas;},
    storeOrderDetails(state,datas){state.orderDetails=datas;},
    removeProductFromCart(state, index) {
        state.cartInfos.splice(index, 1);
        this.commit("storeCartInfos",state.cartInfos);
      //  this.commit("storePriceInfos",state.cartInfos);
    },
    storePriceInfos(state,datas){
        state.priceInfos=datas;
        window.localStorage.removeItem("priceInfos");
        window.localStorage.setItem("priceInfos", JSON.stringify(state.priceInfos));
    },
    storeCartInfos(state,datas){
        state.cartInfos=datas;
        window.localStorage.removeItem("cartInfos");
        window.localStorage.setItem("cartInfos", JSON.stringify(state.cartInfos));
    },
      storeProductDetails(state,datas){
              state.productInfos=datas;     
      },
      storeCustomerInfo(state,datas) { 
        state.customerInfo=datas;
        window.localStorage.removeItem("customerInfo");
        window.localStorage.setItem("customerInfo", JSON.stringify(state.customerInfo));
      },
      storeSellerInfo(state,datas) { 
        state.sellerInfo=datas;
        window.localStorage.removeItem("sellerInfo");
        window.localStorage.setItem("sellerInfo", JSON.stringify(state.sellerInfo));
      },
      storeTemporaryCustomer(state,datas){state.temporaryCustomer=datas},
      storeTemporarySeller(state,datas){state.temporarySeller=datas},
  }
})


export default store;