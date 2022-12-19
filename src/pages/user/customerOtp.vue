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
                        <h4>Account Verification</h4>
                    </div>
                    <div class="form-part">
                        <form @submit.prevent="myform" action="">
                            <InputField 
                            type="text"
                            :value.sync="customer.otp"
                            label="OTP"
                            ref="otp"
                            :iconFlag="false"
                            /> 
                            
                            

                            <button class="signup-btn" @click="verifyOtp">
                                confirm
                            </button>                     
                            <div class="already-account">
                                <div class="already-account-left">
                                    <router-link :to="{name:'login'}">
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
            errMsg:null,
            errMsgFlag:false,
            msg:null,
            msgFlag:false,
            checkfail: false,
            customer: {
                otp:'',
            },
        }
    },
    mounted() {
    	if(this.$store.state.temporaryCustomer==null)
    		this.$router.push({name:'signup'})
    },
    methods: {
    	verifyOtp(){
  			
  			let phone=this.$store.state.temporaryCustomer.phone;
  			let email=this.$store.state.temporaryCustomer.email;
  			let otp =this.$refs.otp.value;

            let formData=new FormData();
            formData.append("email",email);
            formData.append("phone",phone);
            formData.append("otp",otp);
            this.$http.post('customer/otp/verify',formData)
             .then(response=>{
                this.msgFlag=response.data.msgFlag;
                this.errMsgFlag=response.data.errMsgFlag;
                this.msg=response.data.msg;
                this.errMsg=response.data.errMsg;
                if(response.data.msgFlag==true){
                    this.$toaster.success(response.data.msg);
                    this.$router.push({name:'login'});
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
            let otp = this.$refs.otp.$refs.input;
            const inputArray = [
                otp,
            ];
            for (let index = 0; index < inputArray.length; index++) {
                const element = inputArray[index];
                if (element.value.length < 1) {
                    element.focus();
                    break;
                }                
            }
            if (!this.checkfail) {
                console.log(this.seller);
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
    background: #00A341;
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
