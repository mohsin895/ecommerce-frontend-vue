<template>
    <div class="input-field">
        <div class="without-icon" v-if="!iconFlag">
            <div class="form-floating mb-3">
                <input ref="input" 
                :type="type" 
                :value="value"
                @keyup="checker()"
                @focus="checker()"
                class="form-control" 
                :id="'floatingInput'+label" 
                placeholder="name@example.com"
                >
                <div class="helper-text">{{helper}}</div>
                <div class="eye-off-on" v-if="type == 'password'">
                    <b-icon icon="eye" v-if="eye" @click="eyechecking()"/>
                    <b-icon icon="eye-slash" v-else @click="eyechecking()"/>
                </div>
                <label for="floatingInput">{{label}}</label>
                <div class="input-icon" v-if="icon">
                    <b-icon 
                    icon="check2" 
                    variant="success" 
                    v-if="success"
                    />
                    
                    <b-icon 
                    icon="exclamation-circle" 
                    variant="danger" 
                    v-else
                    />
                </div>
            </div>
        </div>
        <div class="with-icon" v-else>
            <div class="form-floating mb-3">
                <input ref="input" 
                :type="type" 
                :value="value"
                @keyup="checker()"
                @focus="checker()"
                class="form-control" 
                :id="'floatingInput'+label" 
                placeholder="name@example.com"
                >
                <div class="helper-text">{{helper}}</div>
                <div class="eye-off-on" v-if="type == 'password'">
                    <b-icon icon="eye" v-if="eye" @click="eyechecking()"/>
                    <b-icon icon="eye-slash" v-else @click="eyechecking()"/>
                </div>
                <label for="floatingInput" class="icon-label">{{label}}</label>
                <div class="input-icon" v-if="icon">
                    <b-icon 
                    icon="check2" 
                    variant="success" 
                    v-if="success"
                    />
                    
                    <b-icon 
                    icon="exclamation-circle" 
                    variant="danger" 
                    v-else
                    />
                </div>
                <div class="icon-left">
                    <b-icon 
                    :icon="iconName" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
    name: 'input-field',
    props: {
        value: String,
        type: String,
        label: String,
        iconFlag: Boolean,
        iconName: String
    },
    data() {
        return {
            msg:'input',
            helpingText: false,
            success: true,
            icon: false,
            eye: true,
            helper: null,
        }
    },
    methods: {

        checker() {
            this.icon = true;
            let inputField = this.$refs.input;
            let values = this.$refs.input.value;
            let numberRegEx = /^(\+88|0088)?(01){1}[3456789]{1}(\d){8}$/;
            let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let OTPRegEx = /^\d{6}$/;

            if (this.label == 'Phone' || this.label == 'Phone Number') {
                if (!numberRegEx.test(values)) {
                    this.success = false;
                    inputField.style.border = '1px solid red';
                    this.helper = 'Not a valid phone number';
                    this.$emit('checkfail', true);
                    return;
                } else {
                    this.success = true;
                    inputField.style.border = '1px solid #CED4DA';
                    this.helper = null;
                }
            } else if (this.label == 'Email') {
                if (!emailRegEx.test(values)) {
                    this.success = false;
                    inputField.style.border = '1px solid red';
                    this.helper = 'Not a valid email address.\
                    Should be your@email.com';
                    this.$emit('checkfail', true);
                    return;
                } else {
                    this.success = true;
                    inputField.style.border = '1px solid #CED4DA';
                    this.helper = null;
                }                
            } else if (this.label == 'Name') {
                if (values.length < 1) {
                    this.success = false;
                    inputField.style.border = '1px solid red';
                    this.helper = 'Name can not be empty';
                    this.$emit('checkfail', true);
                    return;
                } else {
                    this.success = true;
                    inputField.style.border = '1px solid #CED4DA';
                    this.helper = null;
                }                
            } else if (this.label == 'Shop Name') {
                if (values.length < 1) {
                    this.success = false;
                    inputField.style.border = '1px solid red';
                    this.helper = 'Shop Name can not be empty';
                    this.$emit('checkfail', true);
                    return;
                } else {
                    this.success = true;
                    inputField.style.border = '1px solid #CED4DA';
                    this.helper = null;
                }                
            } else if (this.label == 'OTP') {
                if (!OTPRegEx.test(values)) {
                    this.success = false;
                    inputField.style.border = '1px solid red';
                    this.helper = 'Invalid OTP';
                    this.$emit('checkfail', true);
                    return;
                } else {
                    this.success = true;
                    inputField.style.border = '1px solid #CED4DA';
                    this.helper = null;
                }                
            } else if (this.label == 'Password' || this.label == 'Confirm Password'
            || this.label == 'Enter your old password' || this.label == 'Enter your new password' 
            || this.label == 'Confirm your password'
            ) {
                if (values.length < 6) {
                    this.success = false;
                    inputField.style.border = '1px solid red';
                    this.helper = 'Password must be at least 6 character';
                    this.$emit('checkfail', true);
                    return;                    
                } else {
                    this.success = true;
                    inputField.style.border = '1px solid #CED4DA';
                    this.helper = null;
                }
            }
            this.$emit('checkfail', false)
            this.$emit('update:value', values)
        },
        eyechecking() {
            let inputField = this.$refs.input;
            if (this.eye == true) {
                this.eye = false;
                inputField.type = 'text';
            } else {
                this.eye = true;
                inputField.type = 'password';
            }
        }
    }
}
</script>


<style scoped>
.without-icon .form-control:focus,
.with-icon .form-control:focus {
    box-shadow: none;
    border: 1px solid #CED4DA;
}
.without-icon .form-control {
    padding-right: 40px;
    background: #F4F4F4;
}
.without-icon,
.with-icon {
    position: relative;
}

.with-icon .form-control {
    padding-left: 40px !important;
}
.with-icon .icon-label {
    padding-left: 46px !important;
}

.with-icon .icon-left {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 20px;    
}





.input-icon {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
}

.eye-off-on {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 25px;
}
.eye-off-on > * {
    cursor: pointer;
}

.helper-text {
    font-size: .8rem;
    color: red;
    position:absolute;
}
.mb-3 {
    margin-bottom: 1.2rem !important;
}
</style>