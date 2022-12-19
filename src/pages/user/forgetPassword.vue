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
                <h4>Forget In Your Password</h4>
            </div>
            <div class="form-part">
                <form @submit.prevent="myform" action="">
                    
                    <div class="alert-information mb-3">
                        Please enter your email address. You will receive
                        a link to create a new password via email
                    </div>
                    <br>
                    <InputField 
                    :value.sync="forgetUser.email"
                    type="email"
                    label="Email"
                    ref="email"
                     @checkfail="checker"
                     :iconFlag="false"
                    /> 
                    <br>
                    <button class="signup-btn">
                        send
                    </button>                                     
                </form>
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
            forgetUser: {
                email: ''
            }
        }
    },
    mounted() {
        
    },
    methods: {
        checker(payload) {
            this.checkfail = payload;
        },
        myform() {
            let email = this.$refs.email.$refs.input;
            const inputArray = [
                email,
            ];
            for (let index = 0; index < inputArray.length; index++) {
                const element = inputArray[index];
                if (element.value.length < 1) {
                    element.focus();
                    break;
                }                
            }
            if (!this.checkfail) {
                console.log(this.forgetUser);
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
    padding: 0 80px;
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
.heading h4 {
    color: red;
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
    border-radius:20px;
    text-transform: uppercase;
    border:none;
}


/* form part css  */


</style>
