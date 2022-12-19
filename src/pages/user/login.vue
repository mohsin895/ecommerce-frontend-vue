<template>
    <div class="signup">
        <div class="signup-form">
            <div class="heading">
                <div class="logo-signup">
                    <img src="@/assets/images/signuplogo.png" alt="">
                    <div class="tag-line">
                        WELCOME, BE A PART OF US
                    </div>
                </div>
                <br>
                <h4>Log in Account</h4>
            </div>
            <div class="form-part">
                <form @submit.prevent="myform" action="">
                    

                    <InputField 
                    :value.sync="loginInfo.email"
                    type="email"
                    label="Email"
                    ref="email"
                     @checkfail="checker"
                     :iconFlag="true"
                     iconName="envelope"
                    />  
                    
                   
                    <InputField 
                    :value.sync="loginInfo.password"
                    type="password"
                    label="Password"
                    ref="password"
                     @checkfail="checker"
                     :iconFlag="true"
                     iconName="file-lock2"
                    /> 
                    <div class="already-account">
                        <router-link to="forget-password">
                            Forgot your password? 
                            <span>
                                <b-icon icon="arrow-right"/>
                            </span>
                        </router-link>
                    </div>
                    <button class="signup-btn" @click="login()">
                        log in
                    </button>
                    <div class="create-not-you">
                        <p>
                            <router-link to="signup">Create Account</router-link>
                        </p>    
                        <p>Not You?</p>    
                    </div>                                      
                </form>
            </div>
            <div class="social-account">
                <div class="social-login">or Log in with social account</div>
                <div class="social-icon">
                    <div class="google">
                        <img src="@/assets/images/group.png" alt="">
                    </div>
                    <div class="facebook">
                        <img src="@/assets/images/facebook.png" alt="">
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
            loginInfo: {
                email: '',
                password:'',
            }
        }
    },
    mounted() {
        
    },
    methods: {
        login(){

            let email = this.$refs.email.value;
            let password = this.$refs.password.value;

            let formData=new FormData();
            formData.append("email",email);
            formData.append("password",password);
            this.$http.post('customer/login',formData)
             .then(response=>{
                this.msgFlag=response.data.msgFlag;
                this.errMsgFlag=response.data.errMsgFlag;
                this.msg=response.data.msg;
                this.errMsg=response.data.errMsg;
                if(response.data.msgFlag){
                    let customerInfo=response.data.customerInfo;
                    window.localStorage.setItem('customerInfo',JSON.stringify(response.data.customerInfo));
                    window.localStorage.setItem('customerToken',response.data.token);
                    // window.localStorage.setItem('userType',response.data.userType);
                    // this.$store.commit('storeUserToken',response.data.token);
                    this.$store.commit('storeCustomerInfo',response.data.customerInfo);
                    this.$router.push({name:'profile',params:{name:customerInfo.name.split(' ').join('-')}});
                }
                else{
                    window.localStorage.setItem('customerInfo',null);
                    window.localStorage.setItem('customerToken',null);
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
            let name = this.$refs.name.$refs.input;
            let email = this.$refs.email.$refs.input;
            let phone = this.$refs.phone.$refs.input;
            const inputArray = [
                name,
                email,
                phone
            ];
            // for (let index = 0; index < inputArray.length; index++) {
            //     const element = inputArray[index];
            //     if (element.value.length < 1) {
            //         element.focus();
            //         break;
            //     }                
            // }
            if (!this.checkfail) {
                console.log(this.loginInfo);
            }
        }
    }
}
</script>


<style scoped>

.signup-form {
    width: 500px;
    min-height: 700px;
    background: white;
    padding: 0 10px;
    border: 1px solid #ADADAD;
    border-radius: 15px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

 /* heading part css  */
.heading {
    width: 100%;
    height: 30%;
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

/* .social part css  */
.social-account {
    width: 100%;
    height: 30%;   
}
.social-login {
    text-align: center;
}
.social-icon {
    display: flex;
    height:110px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-column-gap: 20px;
}
.social-icon > * {
    width:100px;
    height: 70px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #8E8E8E; */
    box-shadow: 5px 5px 8px rgba(0,0,0,0.1), -5px -5px 8px rgba(0,0,0,0.1);
    cursor: pointer;
}
/* .social part css  */
a {
    text-decoration: none;
    color:black;
}
</style>
