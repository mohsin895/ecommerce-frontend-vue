<template>
    <div class="seller-signup">
        <div class="loyel-container seller-background">
            <div class="seller-signup-form">
                <div class="signup-form-inner-content">
                    <div class="heading">
                        <div class="logo-signup">
                            <img src="@/assets/images/signuplogo.png" alt="">
                            <div class="tag-line">
                                WELCOME, BE A PART OF US
                            </div>
                        </div>
                        <br>
                        <h4>SIGN UP SELLER ACCOUNT</h4>
                    </div>
                    <div class="form-part">
                        <form @submit.prevent="myform" action="">
                            <InputField 
                            :value.sync="shopInfo.shopName"
                            type="text"
                            label="Shop Name"
                            ref="name"
                            @checkfail="checker"
                            :iconFlag="false"
                            /> 
                            
                            <!-- <div class="duble-input-field">
                                <div class="business-model">
                                    BUSINESS MODEL
                                </div>
                                <div class="business-model-select">
                                    <v-select
                                    placeholder="Select" 
                                    :options="genders"  
                                    :searchable="false"
                                    :clearable="false"
                                    ></v-select>
                                </div>
                            </div> -->

                            <InputField 
                            :value.sync="shopInfo.phone"
                            type="text"
                            label="Phone Number"
                            ref="phone"
                            @checkfail="checker"
                            :iconFlag="false"
                            />
                            
                            <InputField 
                            :value.sync="shopInfo.email"
                            type="email"
                            label="Email"
                            ref="email"
                            @checkfail="checker"
                            :iconFlag="false"
                            /> 

                            <InputField 
                            :value.sync="shopInfo.password"
                            type="password"
                            label="Password"
                            ref="password"
                            @checkfail="checker"
                            :iconFlag="false"
                            />
                            <InputField 
                            :value.sync="shopInfo.confirmPassword"
                            type="password"
                            label="Confirm Password"
                            ref="confirmPassword"
                            @checkfail="checker"
                            :iconFlag="false"
                            />

                            <button class="signup-btn" @click="signupFun">
                                sign up
                            </button>                     
                            <div class="already-account">
                                <div class="already-account-left">
                                    <router-link to="seller-login">
                                        Already have an account 
                                        <span>
                                            <b-icon icon="arrow-right"/>
                                        </span>
                                    </router-link>
                                </div>
                                <div class="not-you pointer">
                                    Not You?
                                </div>
                            </div>                
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputField from '@/components/user/inputField';
export default {
    components: {
        InputField,
    },
    data() {
        return {
            msg:'signup',
            checkfail: false,
            shopInfo: {
                shopName:'',
                email: '',
                phone: '',
                password:'',
                confirmPassword: '',
            },
            genders: [
                'Individual',
                'Retailer',
                'Wholeseller',
                'Manufacturer',
                'Importer/ Exporter',
                'Distributor'
            ],
        }
    },
    mounted() {

    },
    methods: {
        signupFun(){
            let name = this.$refs.name.value;
            let email = this.$refs.email.value;
            let phone = this.$refs.phone.value;
            let password = this.$refs.password.value;
            let confirmPassword = this.$refs.confirmPassword.value;

            let dataInfo={
                name:name,
                email:email,
                phone:phone,
            }

            let formData=new FormData();
            formData.append("name",name);
            formData.append("email",email);
            formData.append("phone",phone);
            formData.append("password",password);
            formData.append("confirmPassword",password);
            this.$http.post('seller/signup',formData)
             .then(response=>{
                this.msgFlag=response.data.msgFlag;
                this.errMsgFlag=response.data.errMsgFlag;
                this.msg=response.data.msg;
                this.errMsg=response.data.errMsg;
                if(response.data.msgFlag==true){
                    this.$toaster.success(response.data.msg);
                    this.$store.commit('storeTemporarySeller',dataInfo);
                    this.$router.push({name:'sellerOtp'});
                }
                if(response.data.errMsgFlag==true)
                    this.$toaster.warning(response.data.errMsg);
             })
             .catch(error=>{console.dir(error)})
             .finally();
        },
        checker(payload) {
            this.checkfail = payload;
        },
        myform() {
            let name = this.$refs.name.$refs.input;
            let email = this.$refs.email.$refs.input;
            let phone = this.$refs.phone.$refs.input;
            let password = this.$refs.password.$refs.input;
            let confirmPassword = this.$refs.confirmPassword.$refs.input;
            const inputArray = [
                name,
                email,
                phone
            ];
            for (let index = 0; index < inputArray.length; index++) {
                const element = inputArray[index];
                if (element.value.length < 1) {
                    element.focus();
                    break;
                }                
            }
            if (!this.checkfail) {
                if (password.value !== confirmPassword.value) {
                    toast.warning({
                        position: 'topRight',
                        message: 'Confirm password must be same as password'
                    });
                    return;
                }
                console.log(this.shopInfo);
            }
        }
    }
}
</script>


<style scoped>

.seller-signup-form {
    max-width: 700px;
    min-height: 700px;
    background: white;
    padding: 0px 10px;
    box-shadow: 5px 5px 15px rgb(0, 0, 0, 0.2), -5px -5px 15px rgb(0, 0, 0, 0.2);
    border-radius: 15px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.seller-background {
    width: 100%;
    min-height: 650px;
    background-image: url('../../assets/images/seller/login/bg-image.png');
    background-size: cover;
    background-repeat: no-repeat;
}
.signup-form-inner-content {
    width: 450px;
    max-width: 100%;
    margin: 30px auto;
}
 /* heading part css  */
.heading {
    width: 100%;
    height: 15%;
    padding-top:50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logo-signup {
    position: relative;
}
.tag-line {
    position: absolute;
    bottom: 20px;
    left: 15px;
    color: #8E8E8E;
}
 /* heading part css  */

/* form part css  */
.form-part {
    width: 100%;
    height: 85%;  
    /* background: greenyellow; */
    padding: 10px 0;
}
.duble-input-field {
    display: flex;
    margin: 0 0 10px 0;
    justify-content: space-between;
}
.business-model {
    width: 58%;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.business-model-select {
    width: 32%;
}


.already-account {
    text-align: left;
    margin-bottom:10px;
}
.already-account span {
    color: #DB3022;
    cursor: pointer;
}
.signup-btn {
    background: #DB3022;
    width:100%;
    height:40px;
    font-size: 1rem;
    color:white;
    border-radius:5px;
    text-transform: uppercase;
    border:none;
}

.already-account {
    display: flex;
    justify-content: space-between;
}
/* form part css  */




a {
    text-decoration: none;
    color:black;
}

</style>
