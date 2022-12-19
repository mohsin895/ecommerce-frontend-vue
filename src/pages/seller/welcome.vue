<template>
    <div class="seller-welcome">
        <div class="loyel-container">
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
            <div class="faq-wrapper">
                <div class="faq">
                    <div class="faq-heading">
                        frequently asked questions
                    </div>
                </div>
                <br>
                <br>
                <div class="faq-detils">
                    <ol type="1">
                        <li>
                            <div class="title">
                                What documents do I need to sing-up?
                            </div>
                            <div class="description">
                                Individual Seller - National identity card, Bank cheque (MRI/Digital). Business Seller - Trade License,
                                Bank cheque (MRI/Digital)
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                What is the commission rate on Loyel?
                            </div>
                            <div class="description">
                                Click here to <span class="clickable">learn more.</span>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                Can I become a Seller within 24 hours after registering?
                            </div>
                            <div class="description">
                                Yes! If the correct documents & information has been provided, you will be a seller on the platform in 24 hours.
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                What should I do after singing up?
                            </div>
                            <div class="description">
                                Provide information & documentation as required in the steps shown on your Seller Center dashboard.
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                What if I submit incorrect information or documents by mistake?
                            </div>
                            <div class="description">
                                No worries, our verification team will contact and support you in correcting any errors made.
                            </div>
                        </li>
                    </ol> 
                </div>               
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'seller-welcome',
    data() {
        return {
            msg:'seller'
        }
    }
}
</script>


<style scoped>


/* faq css  */

.faq {
    display: flex;
    justify-content: center;
}

.faq-heading {
    font-weight: bold;
    font-size: 1.8rem;
    color: white;
    background: #F12323;
    padding: 10px 15px;
    border-radius: 5px;
    text-transform: uppercase;
}

.faq-detils {
    padding: 0 20px;
    margin-bottom: 50px;
}

.faq-detils ol li .title,
.faq-detils ol li span {
    color: #F12323;
}
.faq-detils ol {
    font-weight: bold;
    font-size: 1.3rem;
}
.faq-detils ol li .title {
    font-weight: 500;
}
.faq-detils ol li .description {
    font-weight: initial;
}
/* faq css  */
</style>
