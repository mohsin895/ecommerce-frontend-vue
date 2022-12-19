<template>
    <div class="user-sidebar">
        <div class="sidebar-wrapper">
            <div class="user-sidebar-heading">
                <h3>My Profile</h3>
            </div>
            <ul>
                <li>
                    <router-link :to="{name:'profile', params: { name :$store.state.customerInfo.name.split(' ').join('-')}}">
                    Profile
                    </router-link>
                </li>
                <!-- <li>
                    <router-link :to="{name:'wishlist', params: { name :'anwar-khan'}}">
                        Wishlist
                    </router-link>
                </li> -->
                <li>
                    <router-link :to="{name:'orderManage', params: { name :$store.state.customerInfo.name.split(' ').join('-')}}">
                        Order Manage
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'manageAddress', params: { name :$store.state.customerInfo.name.split(' ').join('-')}}">
                        Manage Address
                    </router-link>
                </li>
                <!-- <li>
                    <router-link :to="{name:'myBank', params: { name :'anwar-khan'}}">
                        My Bank Account
                    </router-link>
                </li> -->
                <li>
                    <router-link :to="{name:'changePassword', params: { name :$store.state.customerInfo.name.split(' ').join('-')}}">
                        Change Password
                    </router-link>
                </li>
                <!-- <li>
                    <router-link :to="{name:'reqForSeller', params: { id :'anwar-khan'}}">
                        Request For Seller
                    </router-link>
                </li> -->
                <li class="signout" @click="logout()">Sign Out</li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            msg:'sidebar'
        }
    },
    beforeMount(){
        this.getUserInfo();
    },
    methods: {
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
                 .catch(error=>{console.dir(error); this.$router.push({name:'login'});})
                 .finally();
        },
       async logout() {
            
            await this.$http.get('/customer/logout')
                 .then(response=>{
                     this.$toaster.success(response.data.msg);
                      window.localStorage.setItem('customerInfo',null);
                      window.localStorage.setItem('customerToken',null);
                      this.$store.commit('storeCustomerInfo',null);
                      this.$router.push({name: 'heropage'});
                    
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
            
        }
    }
}
</script>

<style scoped>
.user-sidebar-heading{
    text-align: center;
    padding:5px;
}
.sidebar-wrapper{
    min-height:468px;
    width:234px;
    border:1px solid rgba(0,0,0,0.2);
    background: white;
}
ul{
    list-style:none;
    padding:0;
}

ul li a,.signout{
    display: block;
    padding: 10px;
    font-size: 1rem;
    border-bottom:1px solid black;
    cursor:pointer;
    text-decoration: none;
    color:black;
}
a.router-link-active,ul li a:hover,.signout:hover{
    background:#323232;
    color:white;
}
</style>
