<template>
  <div class="seller-layout">
        <div id="wrapper" class="toggled" ref="wrapper">
          <div class="shadow-sidebar" ref="shadow"></div>
          <!-- Sidebar -->
          <div id="sidebar-wrapper">
              <div class="sidebar-nav">
                <img class="logo" src="@/assets/images/logo.png" alt="">
                <router-link to="dashboard">
                  <icon name="tachometer-alt" size="20px" color="white"/>
                  <span>Dashboard</span>
                </router-link>
                <router-link to="profile">
                  <icon name="user-circle" size="20px" color="white"/>
                  <span>Profile</span>
                </router-link>
                <!-- <a-collapse :bordered="false" expand-icon-position="right">
                  <a-collapse-panel key="1" header="Products" :style="customStyle">
                    <a-icon slot="extra" type="shopping" />
                    <p>
                      <ul>
                        <li> 
                          <router-link to="all-products">
                            <span class="li-bulet-point"></span>
                            All Products
                          </router-link>
                        </li>
                        <li>
                          <router-link to="products-bulk">
                            <span class="li-bulet-point"></span>
                            Product Bulk Upload
                          </router-link>
                        </li>
                        <li>
                          <router-link to="products-stock">
                            <span class="li-bulet-point"></span>
                            Product Stock
                          </router-link>
                        </li>
                        <li>
                          <router-link to="products-manage">
                            <span class="li-bulet-point"></span>
                            Product Management
                          </router-link>
                        </li>
                      </ul>
                    </p>
                  </a-collapse-panel>
                </a-collapse> -->
                <router-link to="store">
                  <icon name="store" size="20px" color="white"/>
                  <span>Your Store</span>
                </router-link>
                <router-link to="all-products">
                  <icon name="shopping-cart" size="20px" color="white"/>
                  <span>Product Management</span>
                </router-link> 
                <router-link to="order-management">
                  <icon name="shopping-cart" size="20px" color="white"/>
                  <span>Order Management</span>
                </router-link>
                <a href="#" @click="logout">
                  <icon name="door" size="20px" color="white"/>
                  <span>Logout</span>
                </a>
                <!-- <router-link to="offer-request">
                  <icon name="key" size="20px" color="white"/>
                  <span>Request For Offer</span>
                </router-link>
                <router-link to="sale">
                  <icon name="shopping-cart" size="20px" color="white"/>
                  <span>Sale</span>
                </router-link>
                <router-link to="admin-payment">
                  <icon name="dollar-sign" size="20px" color="white"/>
                  <span>Payment From Admin</span>
                </router-link>
                <router-link to="package-history">
                  <a-icon type="gift" />
                  <span>Package Upgrage History</span>
                </router-link>
                <router-link to="discount">
                  <icon name="tags" size="20px" color="white"/>
                  <span>Discount Coupon</span>
                </router-link>
                <a-collapse :bordered="false" expand-icon-position="right">
                  <a-collapse-panel key="1" header="Reports" :style="customStyle">
                    <a-icon slot="extra" type="rise" />
                    <p>
                      <ul>
                        <li> 
                          <router-link to="product-compare-report">
                            <span class="li-bulet-point"></span>
                            Product Compare
                          </router-link>
                          </li>
                        <li> 
                          <router-link to="product-stock-report">
                            <span class="li-bulet-point"></span>
                            Product Stock
                          </router-link>
                        </li>
                        <li> 
                          <router-link to="products-wishes-report">
                            <span class="li-bulet-point"></span>
                            Product Wishes
                          </router-link>
                        </li>
                      </ul>
                    </p>
                  </a-collapse-panel>
                </a-collapse>
                <router-link to="slider-settings">
                  <icon name="adjust" size="20px" color="white"/>
                  <span>Slider Settings</span>
                </router-link>
                <router-link to="settings">
                  <icon name="cog" size="20px" color="white"/>
                  <span>Settings</span>
                </router-link>
                <router-link to="upgrade-package">
                  <a-icon type="gift" />
                  <span>Upgrade Package</span>
                </router-link> -->
              </div>
          </div>
          <!-- /#sidebar-wrapper -->

          <!-- Page Content -->
          <div id="page-content-wrapper">
            <div class="topbar">
              <div class="top-first">
                <div class="top-left">
                  <b-icon icon="globe" />
                  <span> 
                    <router-link to="/"> Go To Home Page</router-link>
                  </span>
                </div>
                <div class="top-right">
                  <div class="notify pointer">
                    <icon name="bell" size="25px"/>
                  </div>
                  <div class="profile pointer">
                    <icon name="user-circle" size="25px" color="red"/>
                    <span>{{$store.state.sellerInfo.name}}</span>
                  </div>
                </div>
              </div>
              <div class="top-second">
                <div class="toggle-btn" @click="toggle()">
                  <icon name="bars" color="#000000" size="25px"/>
                </div>
                <hr>
              </div>
            </div>
              <div class="container-fluid">
                <!-- all pages -->
                <router-view/>
              </div>
          </div>
          <!-- /#page-content-wrapper -->

        </div>
    <!-- /#wrapper -->
  </div>
</template>

<script>
export default {
  name: 'seller-layout',
  data() {
      return {
          msg: 'seller',
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      customStyle:
        'background: #2B1F71;border-bottom: 1px solid #48426B;overflow: hidden;color: white !important;',
      }
  },
  mounted() {
      let shadow = this.$refs.shadow;
      shadow.addEventListener('click',() => {
          this.toggle();
      });
  },
  beforeMount(){
    this.getUserInfo();
  },
  methods: {
    async logout() {
            
            await this.$http.get('/seller/logout')
                 .then(response=>{
                     this.$toaster.success(response.data.msg);
                      window.localStorage.setItem('sellerInfo',null);
                      window.localStorage.setItem('sellerToken',null);
                      this.$store.commit('storeSellerInfo',null);
                      this.$router.push({name: 'heropage'});
                    
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
            
        },
     async getUserInfo(){

            let token=window.localStorage.getItem("sellerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
            await this.$http.get('/seller/get/info',config)
                 .then(response=>{

                    if(response.data.msgFlag==true){
                      window.localStorage.setItem('sellerInfo',JSON.stringify(response.data.sellerInfo));
                      this.$store.commit('storeSellerInfo',response.data.sellerInfo);
                    }
                    else{
                      window.localStorage.setItem('sellerInfo',null);
                      window.localStorage.setItem('sellerToken',null);
                      this.$router.push({name:'sellerLogin'});
                    }
                 })
                 .catch(error=>{console.dir(error); this.$router.push({name:'sellerLogin'});})
                 .finally();
        },
      toggle() {
          let wrapper = this.$refs.wrapper;
          wrapper.classList.toggle('toggled');
      }
  }
}
</script>

<style>
@import '../assets/css/style.css';
@import '../assets/css/normalize.css';
/* for ant color  */
.ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {
  color: white;
}
.ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
  color: white;
}
/* for ant icon in collapse  */
.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-extra {
  float: left;
  margin-top: -5px;
  margin-right:10px;
  font-size: 20px;
}
/* ant icon size  */
.anticon {
  font-size: 20px;
}
/* route-link  css  */
.sidebar-nav a {
  display: block;
  width: 250px;
  padding: 10px 15px;
  color: white;
  border-bottom: 1px solid #48426B;
  text-decoration:none;
}
.sidebar-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
/* remove li padding css  */
.ant-collapse-content > .ant-collapse-content-box {
  padding: 0;
}
.li-bulet-point {
  width: 10px;
  height: 10px;
  display: inline-block;
  background: white;
  border-radius: 50%;
  margin-right: 5px;
}
.sidebar-nav ul li a {
  display: block;
  padding: 2px 0px 2px 50px;
  border-bottom: initial;
  width: initial;
  color: white;
}
.top-first a {
  color: black;
}
.top-first a:hover {
  color: black;
}
.sidebar-nav a:hover {
  background: #241B5C;
}
.sidebar-nav a.router-link-active {
  background: #241B5C;
}

/* top bar css  */

.topbar {
  min-height: 50px;
  position: sticky;
  top: 0;
}



.top-first {
  height: 40px;
  background: #E5E5E5;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-first .top-right {
  display: flex;
  grid-column-gap: 15px;
}
.top-second {
  height: 50px;
  padding: 3px 15px;
  background: white;
}
.top-second hr {
  margin: 0;
  padding: 0;
  color: black;
}

.toggle-btn {
  width: 20px;
  height: 40px;
  border-radius: 5px;
  /* background: rgba(0,0,0,0.5); */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
/* .toggle-btn:hover {
  background: rgba(0,0,0,0.7);
} */
/* responsive sidebar close shadow  */
.shadow-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: none;
}
.sidebar-nav p {
  padding: 0;
}
.sidebar-nav ul li {
  line-height: initial;
  font-size: 1rem;
  text-indent: initial;
}

.logo {
  width: 200px;
  display: block;
  margin: 10px auto;
}
/* layout css  */

#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}


#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #2B1F71;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}


/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: white;
}

/* .sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
} */

.sidebar-nav li a:active, .sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav>.sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav>.sidebar-brand a {
  color: #999999;
}

.sidebar-nav>.sidebar-brand a:hover {
  color: #fff;
  background: none;
}

@media(min-width:768px) {
  #wrapper {
    padding-left: 0;
  }
  #wrapper.toggled {
    padding-left: 250px;
  }
  #sidebar-wrapper {
    width: 0;
  }
  #wrapper.toggled #sidebar-wrapper {
    width: 250px;
  }
  .toggled #page-content-wrapper {
    padding-right: 245px;
    position: relative;
  }
  #wrapper.toggled #page-content-wrapper {
    margin-right: 0;
  }

}

@media (max-width: 768px) {
    .toggled .shadow-sidebar{
        z-index: 10;
        display: block;
    }
}
</style>
