<template>
    <div class="seller-login">
        <div class="loyel-container">
            <div class="seller-login-wrapper">
                <div class="seller-left-right">
                    <div class="seller-left">
                        <div class="seller-left-heading">
                            welcome to loyel seller
                        </div>
                        <br>
                        <div class="seller-left-slogan">
                            some step complete you become a
                            seller on loyel
                        </div>
                        <br>
                        <div class="three-flow">
                            <img src="@/assets/images/seller/login/group 1.png" alt="">
                            <img src="@/assets/images/seller/login/group 2.png" alt="">
                            <img src="@/assets/images/seller/login/group 3.png" alt="">
                        </div>
                        <br>
                        <div class="facilities">
                            <h4>SELLER FACILITIES</h4>
                            <hr>
                            <br>
                            <div class="facilites-details">
                                <p>Getting Sell more products</p>
                                <p>getting sell bonus and bundle offers</p>
                                <p>getting low commission rate products</p>
                            </div>
                        </div>
                    </div>
                    <div class="seller-right">
                        <div class="signup-form">
                            <div class="heading">
                                <div class="logo-signup">
                                    <img src="@/assets/images/signuplogo.png" alt="">
                                    <div class="tag-line">
                                        WELCOME, BE A PART OF US
                                    </div>
                                </div>
                                <h4>Log in Account</h4>
                            </div>
                            <div class="form-part">
                                <form @submit.prevent="myform" action="">
                                    
                                    <InputField 
                                    :value.sync="sellerLogin.email"
                                    type="email"
                                    label="Email"
                                    ref="email"
                                    @checkfail="checker"
                                    :iconFlag="true"
                                    iconName="envelope"
                                    />  
                                    
                                    <InputField 
                                    :value.sync="sellerLogin.password"
                                    type="password"
                                    label="Password"
                                    ref="password"
                                    @checkfail="checker"
                                    :iconFlag="true"
                                    iconName="file-lock2"
                                    />
                                    <button class="signup-btn" @click="login">
                                        log in
                                    </button>
                                    <div class="create-not-you">
                                        <p>
                                            <router-link to="seller-signup">Create Account</router-link>
                                        </p>    
                                        <p>Not You?</p>    
                                    </div>                                      
                                </form>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputField from '@/components/user/inputField';
export default {
    name: 'sellerLogin',
    components: {
        InputField,
    },
    data() {
        return {
            msg:'seller-login',
            checkfail: false,
            sellerLogin: {
                email: '',
                password:'',
            }
        }
    },
    methods: {
         login(){

            let email = this.$refs.email.value;
            let password = this.$refs.password.value;

            let formData=new FormData();
            formData.append("email",email);
            formData.append("password",password);
            this.$http.post('seller/login',formData)
             .then(response=>{
                this.msgFlag=response.data.msgFlag;
                this.errMsgFlag=response.data.errMsgFlag;
                this.msg=response.data.msg;
                this.errMsg=response.data.errMsg;
                if(response.data.msgFlag){
                    let sellerInfo=response.data.sellerInfo;
                    window.localStorage.setItem('sellerInfo',JSON.stringify(response.data.sellerInfo));
                    window.localStorage.setItem('sellerToken',response.data.token);
                    // window.localStorage.setItem('userType',response.data.userType);
                    // this.$store.commit('storeUserToken',response.data.token);
                    this.$store.commit('storeSellerInfo',response.data.sellerInfo);
                    this.$router.push({name:'sellerDashboard'});
                }
                else{
                    window.localStorage.setItem('sellerInfo',null);
                    window.localStorage.setItem('sellerToken',null);
                    this.$toaster.warning(this.errMsg);
                }
             })
             .catch(error=>{console.dir(error)})
             .finally();
        },
        checker(payload) {
            this.checkfail = payload;
        },
        myform() {
            let email = this.$refs.email.$refs.input;
            let password = this.$refs.password.$refs.input;
            const inputArray = [
                email,
                password
            ];
            // for (let index = 0; index < inputArray.length; index++) {
            //     const element = inputArray[index];
            //     if (element.value.length < 1) {
            //         element.focus();
            //         break;
            //     }                
            // }
            if (!this.checkfail) {
                console.log(this.sellerLogin);
            }
        }
    }
}
</script>

<style scoped>

.seller-login-wrapper {
    width: 100%;
    min-height: 650px;
    background-image: url('../../assets/images/seller/login/bg-image.png');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 50px 0;
}
.seller-left-right {
    width: 90%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
/* seller left css  */
.seller-left {
    max-width: 670px;
    min-height: 450px;
    border-radius: 10px;
    background: white;
    padding: 40px;
    margin: 20px 0;
}

.seller-left-heading {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2rem;
    color: #FF9900;
    text-align: center;
}
.seller-left-slogan {
    font-weight: bold;
    text-transform: capitalize;
    font-size: 1rem;
    color: #008905;
    text-align: center;
}

.three-flow {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.three-flow img {
    display: block;
    width: 150px;
}

.facilities h4 {
    color: #F12323;
    font-weight: bold;
    text-align: center;
}
.facilities  hr {
    max-width: 400px;
    margin: auto;
}
.facilites-details {
    display: flex;
    grid-column-gap: 10px;
}
.facilites-details > * {
    color: #6D6D6D;
    font-weight: 500;
    text-align: left;
}
/* seller left css  */


/* seller right css  */
.seller-right {
    max-width: 380px;
    width: 380px;
    min-height: 450px;
    border-radius: 10px;
    background: white;
    padding: 30px 20px;
    margin: 20px 0;
}



.signup-form {
    width: 100%;
    background: white;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

 /* heading part css  */
.heading {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logo-signup {
    position: relative;
}
.logo-signup img {
    width: 230px;
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
    height: 40%;  
    padding: 10px 0;
}

.already-account {
    text-align: right;
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
.create-not-you {
    margin-top:10px;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
}
.create-not-you > * {
    cursor: pointer;
}
/* form part css  */


/* seller right css  */

a {
    color: black;
    text-decoration: none;
}





 /* responsive start */

 @media (max-width: 400px) {
    .three-flow img {
        width: 250px;
        margin: auto;
    }
    .facilites-details {
        flex-flow: row wrap;
    }
    .facilites-details > * {
        text-align: center;
        margin: auto;
    }
 }
</style>