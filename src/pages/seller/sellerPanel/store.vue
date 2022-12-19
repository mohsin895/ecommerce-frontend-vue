<template>
    <div class="seller-store">
        <div class="loyel-seller-box">

            <div class="banner">
                <StoreBanner
                :shopLogo="shop_logo"
                :rating="(parseInt(rate/rated)>5) ? 5:parseInt(rate/rated)"
                :bannerImage="shop_banner"
                :sellerImage="$store.state.sellerInfo.avatar"
                :sellerName="$store.state.sellerInfo.name"
                
                />
            </div>
            <br>
            <!-- store details part -->
           <!--  <div class="loyel-seller-box-item" v-if="!editStoreDetails">
                <div class="header">
                    <div class="details">
                        Store Details
                        
                    </div>
                    <div class="details-edit pointer" @click="editStoreDetails=true">
                        <b-icon icon="pencil-square"/>
                    </div>
                </div>
                <hr>
                <div class="bnk-inner-part">
                    <b-row cols="1" cols-md="2" cols-lg="3">
                        <b-col>
                            <p>Store Name: {{shop_name}}</p>
                            <p>Store Description: {{shop_description}}</p>
                            
                            <p>Trade License: 
                                <span class="license-img">
                                    <img :src="trade_license" alt="">
                                </span>
                            </p>
                        </b-col>
                        <b-col>
                            <p> Phone Number: +8801954377683</p>
                            <p>Store Logo: 
                                <span class="license-img">
                                    <img :src="shop_logo" alt="">
                                </span>
                            </p>
                            <p>
                                Shop Photos:
                                <span class="license-img">
                                    <img :src="shop_photo" alt="">
                                </span>
                            </p>
                        </b-col>
                        <b-col>
                           
                            <p>
                                Store Banner:
                                <span class="license-img">
                                    <img :src="shop_banner" alt="">
                                </span>
                            </p>
                            <p>
                                Trade License No: {{trade_license_no}}     
                            </p>
                        </b-col>
                    </b-row>
                </div>
                <hr>
            </div> -->

            <div class="loyel-seller-box-item" >
                <div class="header">
                    <div class="details">
                        Store Details
                    </div>
                    <!-- <div class="details-edit pointer" @click="editStoreDetails=false">
                        <h4 style="color:red;">X</h4>
                    </div> -->
                </div>
                <hr>
                <div class="bnk-inner-part">
                    <b-row cols="1" cols-md="2" cols-lg="2">
                        <b-col>
                            <p>Store Name: 
                                <input type="text" placeholder="Store Name" class="form-control" v-model="shop_name">
                            </p>
                            <p>Store Description: 
                                <textarea class="form-control" placeholder="Store Description" rows="6" v-model="shop_description"></textarea>
                            </p>
                            <p>
                                Trade License No: 
                                <input type="text"  placeholder="Trade License No" class="form-control">   
                            </p>
                            <!-- <p>Business type: 
                                <span class="wholeseller-style status-box">
                                    Wholesalers
                                </span>
                            </p> -->
                            
                        </b-col>
                        <b-col>
                            <p>Trade License: 
                                <span class="license-img">
                                    <img :src="trade_license" alt="">
                                    <input type="file"  ref="trade_license" class="form-control" accept="image/*"  @change="loadTradeLicence">
                                </span>
                            </p>
                            <p>Store Logo: 
                                <span class="license-img">
                                    <img :src="shop_logo" alt="">
                                    <input type="file" ref="shop_logo"  class="form-control" accept="image/*"  @change="loadLogo">
                                </span>
                            </p>
                            <p>
                                Shop Photos:
                                <span class="license-img">
                                    <img :src="shop_photo" alt="">
                                    <input type="file" ref="shop_photo"  class="form-control" accept="image/*"  @change="loadShopPhoto">
                                </span>
                            </p>
                            <p>
                                Store Banner:
                                <span class="license-img">
                                    <img :src="shop_banner" alt="">
                                    <input type="file" ref="shop_banner"  class="form-control" accept="image/*"  @change="loadBanner">
                                </span>
                            </p>
                        </b-col>
                       
                    </b-row>
                    <b-row cols="1" cols-md="2" cols-lg="3">
                        
                        <b-col class="text-right">
                            <button class="btn btn-sm btn-info" @click="changeShopInfo">
                                Save Changes
                            </button>
                        </b-col>
                    </b-row>
                </div>
                <hr>
            </div>


            <!-- Financial details part -->
            <br>
            <!-- <div class="loyel-seller-box-item">
                <div class="header">
                    <div class="details">
                        Financial Details
                    </div>
                    <div class="details-edit pointer">
                        <b-icon icon="pencil-square"/>
                    </div>
                </div>
                <hr>
                <div class="bnk-inner-part">
                    <b-row cols="1" cols-md="2" cols-lg="3">
                        <b-col>
                            <p>Type of ID: Voter ID</p>
                            <p>Branch Name: Agent Banking</p>
                            <p>Bank Routing Number: 12564</p>
                        </b-col>
                        <b-col>
                            <p>ID Code: 284126449</p>
                            <p>Bank Account Name: Anower Hossen</p>
                            <p class="account-cheque">
                                <pre>Upload Account Cheque copy: </pre>
                                <span>
                                    <img src="@/assets/images/seller-store/image 7.png" alt="">
                                </span>
                            </p>
                        </b-col>
                        <b-col>
                            <p>Bank Name: Bank Asia</p>
                            <p>Bank Account Number: 1083426036551</p>
                        </b-col>
                    </b-row>
                </div>
                <br>
                <div class="header">
                    <div class="details">
                        Mobile Banking Details
                    </div>
                    <div class="details-edit pointer">
                        <b-icon icon="pencil-square"/>
                    </div>
                </div>
                <hr>
                <b-row cols="1" cols-md="2" cols-lg="2">
                    <b-col>
                        <p>Account Name: <span class="name-span">Anower Hossen</span></p>
                        <p>Account Number: <span class="number-span">0177508266</span></p>
                    </b-col>     
                    <b-col>
                        <div class="bank-wrapper">
                            <div class="bank-select">
                                <div class="addBank-title">
                                    Add Only One
                                </div>
                                <v-select
                                :options="bankList"  
                                :searchable="false"
                                :clearable="false"
                                v-model="user.bank"
                                ></v-select>  
                            </div>
                            <div class="image-bank">
                                <img src="@/assets/images/image 8.png" alt="">
                            </div>
                        </div>
                    </b-col>         
                </b-row>
            </div> -->

            <!-- social links -->
            <br>
            <div class="loyel-seller-box-item">
                <div class="header">
                    <div class="details">
                        Social Media Link
                    </div>
                    <!-- <div class="details-edit pointer">
                        <b-icon icon="pencil-square"/>
                    </div> -->
                </div>
                <hr>
                <div class="bnk-inner-part">
                    <b-row>
                        <b-col>
                            <a-input placeholder="https://www.facebook.com/" v-model="facebook">
                                <div slot="addonBefore">
                                    <b-icon icon="facebook"/>
                                </div>
                            </a-input>
                            <br>
                            <br>
                            <a-input placeholder="https://www.youtube.com/" v-model="youtube">
                                <div slot="addonBefore">
                                    <b-icon icon="youtube"/>
                                </div>
                            </a-input>
                        </b-col>
                        <b-col>
                            <a-input placeholder="https://www.twitter.com/" v-model="twitter">
                                <div slot="addonBefore">
                                    <b-icon icon="twitter"/>
                                </div>
                            </a-input>
                            <br>
                            <br>
                            <a-input placeholder="https://www.instagram.com/" v-model="instagram">
                                <div slot="addonBefore">
                                    <b-icon icon="instagram"/>
                                </div>
                            </a-input>
                        </b-col>
                    </b-row>
                    <b-row cols="1" cols-md="2" cols-lg="3" class="mt-2">
                        <b-col class="text-right">
                            <button class="btn btn-sm btn-info" @click="changeSocialInfo"> 
                                Save Changes
                            </button>
                        </b-col>
                    </b-row>
                </div> 
                <hr>               
            </div>

        <!-- shop and return address  -->
            <br>
            <div class="loyel-seller-box-item">
                <div class="header">
                    <div class="details">
                        Shop And Return Address:
                    </div>
                    <!-- <div class="details-edit pointer">
                        <b-icon icon="pencil-square"/>
                    </div> -->
                </div>
                <hr>
                <div class="bnk-inner-part">
                    <b-row cols="1" cols-md="1" cols-lg="1">
                        <b-col>
                            <p>
                                <textarea class="form-control" rows="4" placeholder="Shop Address" v-model="address"></textarea>
                            </p>
                            <p><strong>Email:</strong>
                                <input type="text"  class="form-control" placeholder="Shop Email" v-model="email">
                            </p>
                            <p><strong>Phone:</strong>
                                <input type="text"  class="form-control" placeholder="Shop Phone" v-model="phone">
                            </p>
                        </b-col>
                        <!-- <b-col>
                            <p>City: Dhaka - North</p>
                            <p>Address: Mohammadpur</p>
                            <p></p>
                        </b-col>
                        <b-col>
                            <p>Holding No: 21/4 road no 5, block A</p>
                        </b-col> -->
                    </b-row>
                    <b-row cols="1" cols-md="2" cols-lg="3" class="mt-2">
                        <b-col class="text-right">
                            <button class="btn btn-sm btn-info" @click="changeAddressInfo">
                                Save Changes
                            </button>
                        </b-col>
                    </b-row>
                </div>
            </div>        
        </div>
    </div>
</template>


<script>
import StoreBanner from '@/components/seller/seller-store-banner'
export default {
    name: 'seller-store',
    components: {
        StoreBanner
    },
    data() {
        return {
            // msg: 'store is coming',
            // user: {
            //     bank:'Nogod'
            // },
            // bankList: [
            //     'Nogod',
            //     'Roket',
            //     'Bkash',
            //     'MyCash',
            //     'Tap',
            //     'Upay'
            // ],
            // shopInfo:{},
            // editStoreDetails:false,
            msgFlag:false,
            errMsgFlag:false,
            errMsg:null,
            msg:null,
            shop_name:null,
            shop_description:null,
            shop_logo:null,
            shop_banner:null,
            trade_license:null,
            trade_license_no:null,
            shop_photo:null,
            email:null,
            phone:null,
            facebook:null,
            twitter:null,
            youtube:null,
            instagram:null,
            address:null,
            rate:null,
            rated:null,
            vacation:null,
        }
    },
    beforeMount(){
        this.getShopInfo();
    },
    methods:{
         loadShopPhoto(e){
            this.errMsgFlag=false;
            this.msgFlag=false;
            const file= e.target.files[0];
            let Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            if ( Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg" || Extension=='gif') {
                this.shop_photo = URL.createObjectURL(file);
               // this.sliderImage=this.$refs.slider.files[0];
               
            }
            else
            {
                this.errMsg="Photo only allows file types of  PNG, JPG, JPEG , GIF and BMP.";
                this.errMsgFlag=true;
                this.msgFlag=false;
                this.$toaster.warning(this.errMsg);
            }
        },
        loadTradeLicence(e){
            this.errMsgFlag=false;
            this.msgFlag=false;
            const file= e.target.files[0];
            let Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            if ( Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg" || Extension=='gif') {
                this.trade_license = URL.createObjectURL(file);
               // this.sliderImage=this.$refs.slider.files[0];
               
            }
            else
            {
                this.errMsg="Photo only allows file types of  PNG, JPG, JPEG , GIF and BMP.";
                this.errMsgFlag=true;
                this.msgFlag=false;
                this.$toaster.warning(this.errMsg);
            }
        },
        loadLogo(e){
            this.errMsgFlag=false;
            this.msgFlag=false;
            const file= e.target.files[0];
            let Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            if ( Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg" || Extension=='gif') {
                this.shop_logo = URL.createObjectURL(file);
               // this.sliderImage=this.$refs.slider.files[0];
               
            }
            else
            {
                this.errMsg="Photo only allows file types of  PNG, JPG, JPEG , GIF and BMP.";
                this.errMsgFlag=true;
                this.msgFlag=false;
                this.$toaster.warning(this.errMsg);
            }
        },
        loadBanner(e){
            this.errMsgFlag=false;
            this.msgFlag=false;
            const file= e.target.files[0];
            let Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            if ( Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg" || Extension=='gif') {
                this.shop_banner = URL.createObjectURL(file);
               // this.sliderImage=this.$refs.slider.files[0];
               
            }
            else
            {
                this.errMsg="Photo only allows file types of  PNG, JPG, JPEG , GIF and BMP.";
                this.errMsgFlag=true;
                this.msgFlag=false;
                this.$toaster.warning(this.errMsg);
            }
        },
        async changeShopInfo(){
            let token=window.localStorage.getItem("sellerToken");
               
                let config = {
                       headers: {
                          'Authorization': 'Bearer '+token,
                           'Content-Type': 'multipart/form-data'
                      }   
                  };
                let formData=new FormData();
                formData.append('shop_name',this.address);
                formData.append('shop_description',this.email);
                formData.append('trade_license_no',this.phone);

                if(this.$refs.trade_license.files[0]!=null)
                    formData.append('trade_license',this.$refs.trade_license.files[0]);

                if(this.$refs.shop_logo.files[0]!=null)
                    formData.append('shop_logo',this.$refs.shop_logo.files[0]);

                if(this.$refs.shop_photo.files[0]!=null)
                    formData.append('shop_photo',this.$refs.shop_photo.files[0]);

                if(this.$refs.shop_banner.files[0]!=null)
                    formData.append('shop_banner',this.$refs.shop_banner.files[0]);


                await this.$http.post('seller/update/shop/info',formData,config)
                    .then(response=>{
                        if(response.data.msgFlag==true)
                            this.$toaster.success(response.data.msg);
                        if(response.data.errMsgFlag==true)
                            this.$toaster.warning(response.data.errMsg);
                        this.getShopInfo();
                    })
                    .catch(error=>{console.dir(error)})
                    .finally();
        },
        async changeSocialInfo(){

            let token=window.localStorage.getItem("sellerToken");
               
                let config = {
                       headers: {
                          'Authorization': 'Bearer '+token
                      }   
                  };
                let formData=new FormData();
                formData.append('facebook',this.facebook);
                formData.append('twitter',this.twitter);
                formData.append('youtube',this.youtube);
                formData.append('instagram',this.instagram);


                await this.$http.post('seller/update/shop/info',formData,config)
                    .then(response=>{
                        if(response.data.msgFlag==true)
                            this.$toaster.success(response.data.msg);
                        if(response.data.errMsgFlag==true)
                            this.$toaster.warning(response.data.errMsg);
                        this.getShopInfo();
                    })
                    .catch(error=>{console.dir(error)})
                    .finally();
        },
        addressFormValidate(){
            if(this.address!='' && this.phone!='' && this.email!='' )
                return true;
            else
               return false;
        },
        async changeAddressInfo(){
            if(this.addressFormValidate()){

                let token=window.localStorage.getItem("sellerToken");
               
                let config = {
                       headers: {
                          'Authorization': 'Bearer '+token
                      }   
                  };
                let formData=new FormData();
                formData.append('address',this.address);
                formData.append('email',this.email);
                formData.append('phone',this.phone);


                await this.$http.post('seller/update/shop/info',formData,config)
                    .then(response=>{
                        if(response.data.msgFlag==true)
                            this.$toaster.success(response.data.msg);
                        if(response.data.errMsgFlag==true)
                            this.$toaster.warning(response.data.errMsg);
                        this.getShopInfo();
                    })
                    .catch(error=>{console.dir(error)})
                    .finally();
            }
            else{
                 if(this.address=='')
                    this.$toaster.success("Please Shop Address.");
                if(this.email=='')
                    this.$toaster.warning("Please Shop Email Address.");
                if(this.phone=='')
                    this.$toaster.warning("Please Shop Phone No.");
            }
        },
        async getShopInfo(){
            let token=window.localStorage.getItem("sellerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
            await this.$http.get('seller/get/shop/info',config)
                .then(response=>{
                    if(response.data.msgFlag==true){
                        this.shop_name=response.data.dataInfo.shop_name;
                        this.shop_description=response.data.dataInfo.shop_description;
                        this.shop_logo=response.data.dataInfo.shop_logo;
                        this.shop_banner=response.data.dataInfo.shop_banner;
                        this.trade_license=response.data.dataInfo.trade_license;
                        this.trade_license_no=response.data.dataInfo.trade_license_no;
                        this.shop_photo=response.data.dataInfo.shop_photo;
                        this.email=response.data.dataInfo.email;
                        this.phone=response.data.dataInfo.phone;
                        this.facebook=response.data.dataInfo.facebook;
                        this.twitter=response.data.dataInfo.twitter;
                        this.youtube=response.data.dataInfo.youtube;
                        this.instagram=response.data.dataInfo.instagram;
                        this.address=response.data.dataInfo.address;
                        this.rate=response.data.dataInfo.rate;
                        this.rated=response.data.dataInfo.rated;
                        this.vacation=response.data.dataInfo.vacation;
                    }
                })
                .catch(error=>{console.dir(error)})
                .finally();
        },
    }
}
</script>

<style scoped>

.banner img{
  width: 100%;
}
.account-cheque pre{
    display: inline-block;

}
.account-cheque img{
    width: 100px;
    position: relative;
    top: -10px;

}

.wholeseller-style {
    background: #0094FF;
}
.license-img img {
    max-width: 60px;
}

/* bank css  */

hr {
    margin: 5px 0;
}

.header {
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
}

.bnk-inner-part {
    padding: 15px 10px;
}
.name-span {
    color: #62BD5F;
}
.number-span {
    color: red;
}


.bank-wrapper {
    display: flex;
    justify-content: space-between;
}
.addBank-title {
    font-weight: 500;
}
.bank-select {
    width: 40%;
}

/* bank css  */

</style>
