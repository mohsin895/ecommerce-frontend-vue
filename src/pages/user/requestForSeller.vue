<template>
    <div class="request-for-seller">
        <div class="already-seller">
            <p>Already a Seller</p>
            <router-link to="/seller-login">
                <button>Login</button>
            </router-link>
        </div>
        <div class="welcome-banner">
            <img src="@/assets/images/seller/welcome/Banner.png" alt="">
            <div class="seller-signup-btn">
                <router-link to="/seller-signup">
                    <button>signup</button>
                </router-link> 
            </div>
        </div>
        <br>
        <br>
        <br>
        <div class="three-steps">
            <div class="steps-title">
                <div class="title-head">
                    selling 3 easy steps!
                </div>
                <br>
                <div class="title-slogan">
                    your success story starts here
                </div>
            </div>
            <br>
            <br>
            <br>
            <div class="steps-flow">
                <img src="@/assets/images/seller/welcome/Register.png" alt="">
                <img src="@/assets/images/seller/welcome/Process order.png" alt="">
                <img src="@/assets/images/seller/welcome/Get Paid.png" alt="">
            </div>
        </div>
        <br>
        <br>
        <br>
        <div class="why-sell">
            <div class="why-sell-title">
                why sell with loyel?
            </div>
            <br>
            <br>
            <div class="why-sell-flow">
                <img src="@/assets/images/seller/welcome/Why sell with loyel under.png" alt="">
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <button class="more-info">
            More Information
        </button>
    </div>
</template>

<script>

export default {
    name: 'rfs',
    data() {
        return {
            msg:'rfs'
        }
    }
}
</script>

<style scoped>
.more-info {
    min-width: 200px;
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    display: block;
    margin: auto;
    color: white;
    background: red;
}
</style>
