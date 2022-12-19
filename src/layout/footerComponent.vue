<template>
    <div class="footer">
        <div class="footer-head">
            <div class="loyel-container subscrbe-app">
                <div class="subscribe">
                    <Subscribe/>
                </div>
                <div class="app-link">
                    <img class="apple-img" src="@/assets/images/apple.png" alt="">
                    <img class="google-img" src="@/assets/images/google.png" alt="">
                </div>
            </div>
        </div>
        <div class="footer-body">
            <div class="loyel-container">
                <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="4">
                    <b-col>
                        <div class="heading">about us</div>
                        <div class="foot-body">
                            <div class="item">Careers</div>
                            <div class="item">Privacy Policy</div>
                            <div class="item">Terms of Use</div>
                            <div class="item">Press</div>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="heading">help</div>
                        <div class="foot-body">
                            <div class="item">Customer Care</div>
                            <div class="item">FAQ</div>
                            <div class="item">Return Policy</div>
                            <div class="item">Request for Question</div>
                        </div>                        
                    </b-col>
                    <b-col>
                        <div class="heading">Business</div>
                        <div class="foot-body">
                            <div class="item">Sell On Loyel Shopping</div>
                            <div class="item">Buy Wholesell</div>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="heading">Company</div>
                        <div class="foot-body">
                            <div class="item">Loyel Online Shop</div>
                            <div class="item">
                                <b-icon icon="phone"></b-icon>
                                <a href="tel:+8801775086266">01775086266</a>
                            </div>
                            <div class="item">
                                Raj Place, Padma Mor, Hemaetpur, Savar, Dhaka
                            </div>
                            <div class="item">
                                Sat-Fri 8:00 to 19:00
                            </div>
                            <div class="item">
                                <b-icon icon="envelope"></b-icon>
                                <a href="mailto:info@loyal.com">info@loyal.com</a>
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <div class="social-bank">
                    <div class="social-group">
                        <img src="@/assets/images/footer/facebook.png" alt="facebook">
                        <img src="@/assets/images/footer/instagram.png" alt="instagram">
                        <img src="@/assets/images/footer/twitter.png" alt="twitter">
                        <img src="@/assets/images/footer/youtube.png" alt="youtube">
                    </div>
                    <div class="bank-group">
                        <img src="@/assets/images/footer/pay-1.png" alt="facebook">
                        <img src="@/assets/images/footer/pay-2.png" alt="instagram">
                        <img src="@/assets/images/footer/pay-3.png" alt="twitter">
                        <img src="@/assets/images/footer/pay-5.png" alt="youtube">
                    </div>
                </div>
                <b-row>
                    <b-col>
                        Welcome to Loyel Shopping! <br>
                        Loyel Online Shop is a B2C marketplace network for fashion and lifestyle buyers and sellers in categories including fashion, <br>
                        and health & <br>
                        beauty to buy and sell effortlessly online. Browse the vast digital catalog with a huge in style selection at the most competitive prices from trusted seller. Easily, enjoy our fast delivery services and benefit from flexible and secure online payments.
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<script>
import Subscribe from '@/components/layout/subscribe.vue';
export default {
    name:'footerComponent',
    components:{
        Subscribe,
    },
    data() {
        return {
            msg:'footer',
        }
    }
}
</script>

<style scoped>
.footer{
    width:100%;
    min-height:500px;
}
.footer-head{
    width:100%;
    min-height:60px;
    background:#1F1F1F;
}
.subscrbe-app{
    /* height:100%; */
    display: flex;
    flex-flow:row wrap;
    justify-content: space-between;
    align-items: center;
}
.subscrbe-app > * {
    padding: 10px 0px;
}
.subscribe{
    position: relative;
    flex-basis:600px;
}

.apple-img{
    height:60px;
}
.google-img{
    height:40px;
}


.footer-body{
    padding:20px 0;
}
.footer-body .heading{
    text-transform:uppercase;
    font-weight: bold;
    font-size:1rem;
}
.foot-body .item{
    font-weight:300;
    cursor:pointer;
}
.foot-body .item a{
    color:black;
    text-decoration: none;
}
.foot-body .item a:hover{
    color:rgb(172, 159, 159);
    text-decoration: none;
}
.social-bank{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 0;
}
</style>