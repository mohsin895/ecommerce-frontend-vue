<template>
    <div class="header">
        <div class="menu-part">
            <div class="menu-top">
                <div class="container-width">
                    <div class="mune-top-left">
                        <router-link to="">
                            <b-icon icon="gift"></b-icon>
                            Premium Package
                        </router-link>
                    </div>
                    <div class="menu-top-right">
                    <slot v-if="$store.state.sellerInfo!=null">
                        <router-link :to="{name:'sellerDashboard'}">Sell On Loyel</router-link>
                    </slot>
                    <slot v-else>
                        <router-link to="/seller-welcome">Sell On Loyel</router-link>
                    </slot>
                        <router-link to="">BDT</router-link>
                        <router-link to="">English</router-link>
                    </div>
                </div>
            </div>
            <div class="loyel-container">
                <div class="menu-bottom">
                    <div class="menu-bottom-first">
                        <div class="logo">
                            <span ckass="logo">
                               <!-- <router-link to="/">LOYEL</router-link>-->
                            </span>   <img src="@/assets/images/logo-demo-1.png" alt="Loyer Logo"> 
                        </div>
                        <div class="search-bar">
                            <Search/>
                        </div>
                        <div class="righ-part">
                            <div class="news-feed">
                                <router-link to="/">NewsFeed</router-link>
                            </div>
                            <div class="offer-zone">
                                <router-link to="/">OfferZone</router-link>
                            </div>
                            <div class="icon-list">
                                <router-link class="cart" :to="{name:'cartView'}">
                                    <b-icon icon="cart-dash-fill"></b-icon>
                                </router-link>
                                <div class="wishlist">
                                    <b-icon icon="heart-fill"></b-icon>
                                </div>
                                <div class="notification">
                                    <b-icon icon="bell-fill"></b-icon>
                                </div>
                                <div class="login-profile">
                                <slot v-if="$store.state.customerInfo!=null">
                                    <router-link :to="{name:'profile',params:{id: $store.state.customerInfo.name}}">
                                        <b-icon icon="person-circle"></b-icon>
                                    </router-link>
                                </slot>
                                <slot v-else>
                                    <router-link :to="{name:'login'}">
                                        <b-icon icon="person-circle"></b-icon>
                                    </router-link>
                                </slot>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-bottom-second">
                        <ul>
                            <li>
                            <router-link to="">Whole Sale</router-link>
                            </li>
                            <li>
                            <router-link to="">Featured Products</router-link>
                            </li>
                            <li>
                            <router-link to="">Todays Deal</router-link>
                            </li>
                            <li>
                            <router-link to="">Combo Offer</router-link>
                            </li>
                            <li>
                            <router-link to="">All Vendors</router-link>
                            </li>
                            <router-link to="/category-page">
                                <li>
                                    All Brands
                                </li>
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Search from '@/components/layout/search'
export default {
    name:'headerComponent',
    components:{
        Search
    },
    data() {
        return {
            msg:'header',
        }
    },
    beforeMount(){
        this.getUserInfo();
    },
    methods:{
        getUserInfo(){

            let token=window.localStorage.getItem("customerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
                this.$http.get('/customer/get/info',config)
                 .then(response=>{
                    if(response.data.msgFlag==true){
                      window.localStorage.setItem('customerInfo',JSON.stringify(response.data.customerInfo));
                      this.$store.commit('storeCustomerInfo',response.data.customerInfo);
                    }
                    else{
                      window.localStorage.setItem('customerInfo',null);
                      window.localStorage.setItem('customerToken',null);
                    }
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
        },
    }
}
</script>

<style scoped>
.menu-part{
  width: 100%;
  height:140px;
  background:#F12323;
}

.menu-top{
  width: 100%;
  height:32px;
  background: #D02E2E;
  display:flex;
  justify-content: space-between;
  padding: 0 10px;
}
.menu-bottom{
  height: 108px;
}
.logo img{
    height:45px;
}
.menu-top-right a{
  margin-left:20px;
}
.mune-top-left > *:hover{
    color:var(--action-btn-hover-color);
    transition:.2s;
}
.menu-top-right > *:hover{
    color:var(--action-btn-hover-color);
    transition:.3s;
}
.menu-bottom-first{
  height: 50%;
  display: flex;
  grid-column-gap:20px;
  /* flex-flow: row wrap; */
  justify-content: space-between;
  align-items: center;
}
.search-bar{
  position: relative;
  flex-basis:585px;
}
.menu-bottom-second{
  height: 50%;
}

/* bottom menu ul li  start*/
.menu-bottom-second ul{
    height:100%;
    padding:0;
    list-style: none;
    display: flex;
    /* flex-flow: row wrap; */
    grid-column-gap:30px;
    align-items: flex-end;
    justify-content: center;
}
.menu-bottom-second ul li {
    padding:8px 10px;
    transition: .1s;
    cursor: pointer;
}
.menu-bottom-second ul li:hover{
    background:#373737;
}

/* bottom menu ul li  end*/

.container-width{
    width:1200px;
    margin:auto;
    display: flex;
    justify-content: space-between;
}
.righ-part{
    display: flex;
    grid-column-gap:20px;
    align-items: center;
}
.icon-list{
    display: flex;
    font-size: 25px;
    color:white;
    grid-column-gap:15px;
}
.icon-list > * {
    cursor: pointer;
}
.news-feed a:hover{
    color:var(--action-btn-hover-color);
    transition: .3s;
}
.offer-zone a:hover{
    color:var(--action-btn-hover-color);
    transition: .3s;    
}
.icon-list >*:hover {
    color:var(--action-btn-hover-color);
    transition: .3s;
}






a{
  color:white;
  text-decoration: none;
}
a:hover{
  color:white;
  text-decoration: none;
}
</style>