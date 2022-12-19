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
                <h4>Sign Up in Account</h4>
            </div>
            <div class="form-part">
                <form @submit.prevent="myform" action="">
                    <InputField 
                    :value.sync="signupInfo.username"
                    type="text"
                    label="Name"
                    ref="name"
                    @checkfail="checker"
                    :iconFlag="false"
                    />

                    <InputField 
                    :value.sync="signupInfo.email"
                    type="email"
                    label="Email"
                    ref="email"
                    
                    :iconFlag="false"
                    />  
                    
                    <InputField 
                    :value.sync="signupInfo.phone"
                    type="text"
                    label="Phone"
                    ref="phone"
                     @checkfail="checker"
                    :iconFlag="false"
                    />
                    <!-- <div class="duble-input-field">
                        <div class="dob">
                            <div class="dob-title">
                                Date Of Birth
                            </div>    
                            <div class="date-picker">
                                <b-form-datepicker id="example-datepicker" v-model="signupInfo.DOB" class="mb-2"></b-form-datepicker>
                            </div>     
                        </div>
                        <div class="gender">
                            <div class="gender-title">
                                Gender
                            </div>
                            <v-select
                            placeholder="Select" 
                            :options="genders"  
                            :searchable="false"
                            :clearable="false"
                            v-model="signupInfo.gender"
                            ></v-select>
                        </div>
                    </div> -->
                    <InputField 
                    :value.sync="signupInfo.password"
                    type="password"
                    label="Password"
                    ref="password"
                     @checkfail="checker"
                    :iconFlag="false"
                    />
                    <InputField 
                    :value.sync="signupInfo.confirmPassword"
                    type="password"
                    label="Confirm Password"
                    ref="confirmPassword"
                     @checkfail="checker"
                    :iconFlag="false"
                    />
                    <div class="already-account">
                        <router-link to="login">
                            Already have an account 
                            <span>
                                <b-icon icon="arrow-right"/>
                            </span>
                        </router-link>
                    </div>
                    <button class="signup-btn" @click="signupFun" :disabled="checkfail ? true:false">
                        sign up
                    </button>                                      
                </form>
            </div>
            <div class="social-account">
                <div class="social-login">or sign up with social account</div>
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
            errMsg:null,
            errMsgFlag:false,
            msg:null,
            msgFlag:false,
            checkfail: true,
            signupInfo: {
                username:'',
                email: '',
                phone: '',
                DOB: '',
                gender: '',
                password:'',
                confirmPassword: '',
            },
            genders: [
                'Male',
                'Female'
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
            this.$http.post('customer/signup',formData)
             .then(response=>{
                this.msgFlag=response.data.msgFlag;
                this.errMsgFlag=response.data.errMsgFlag;
                this.msg=response.data.msg;
                this.errMsg=response.data.errMsg;
                if(response.data.msgFlag==true){
                    this.$toaster.success(response.data.msg);
                    this.$store.commit('storeTemporaryCustomer',dataInfo);
                    this.$router.push({name:'customerOtp'});
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
            // for (let index = 0; index < inputArray.length; index++) {
            //     const element = inputArray[index];
            //     if (element.value.length < 1) {
            //         element.focus();
            //         break;
            //     }                
            // }
            if (!this.checkfail) {
                if (password.value !== confirmPassword.value) {
                    toast.warning({
                        position: 'topRight',
                        message: 'Confirm password must be same as password'
                    });
                    return;
                }
                console.log(this.signupInfo);
            }
        }
    }
}
</script>


<style scoped>

.signup-form {
    width: 500px;
    min-height: 920px;
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
    height: 25%;
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
    height: 60%;  
    /* background: greenyellow; */
    padding: 10px 0;
}
.duble-input-field {
    display: flex;
    margin: 0 0 10px 0;
    justify-content: space-between;
}
.dob {
    width: 58%;
}
.gender {
    width: 32%;
}
.dob-title {
    width:150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F4F4F4;
    padding:5px 0;
    margin-bottom:10px;    
    border-radius: 5px;
}
.gender-title {
    width:150px;
    padding:5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F4F4F4;
    margin-left: auto;
    border-radius: 5px;
    margin-bottom: 10px;
}
.already-account {
    text-align: center;
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
/* form part css  */

/* .social part css  */
.social-account {
    width: 100%;
    height: 15%;   
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
