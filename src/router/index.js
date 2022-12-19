import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import fallback from '@/layout/404'
import mainLayout from '@/layout/mainLayout'
import userLayout from '@/layout/userLayout'
import sellerLayout from '@/layout/sellerLayout'
import heropage from '@/pages'
import profile from '@/pages/user/profile'
import addressAdd from '@/pages/user/addressAdd'
import addressEdit from '@/pages/user/addressEdit'
import wishlist from '@/pages/user/wishlist'
import orderManage from '@/pages/user/orderManage'
import customerInvoice from '@/pages/user/invoice'
import manageAddress from '@/pages/user/manageAddress'
import myBank from '@/pages/user/myBank'
import changePassword from '@/pages/user/changePassword'
import reqForSeller from '@/pages/user/requestForSeller'
import categoryPage from '@/pages/categoryPage'
import signup from '@/pages/user/signup'
import login from '@/pages/user/login'
import signinforCheckout from '@/pages/user/signinforCheckout'
import forgetPassword from '@/pages/user/forgetPassword'
import sellerWelcome from '@/pages/seller/welcome'
import sellerLogin from '@/pages/seller/sellerLogin'
import sellerSignup from '@/pages/seller/sellerSignup'
import sellerOtp from '@/pages/seller/sellerOtp'
import customerOtp from '@/pages/user/customerOtp'
import cartView from '@/pages/cart/cartView'
import checkOut from '@/pages/cart/checkOut'
import orderSuccess from '@/pages/cart/orderSuccess'
import productPage from '@/pages/product/productView'
// import cart from '@/pages/cart'
import sellerDashboard from '@/pages/seller/sellerPanel/dashboard'
import sellerProfile from '@/pages/seller/sellerPanel/profile'
import sellerStore from '@/pages/seller/sellerPanel/store'
import sellerOrderManage from '@/pages/seller/sellerPanel/orderManage'
import sellerOfferRequest from '@/pages/seller/sellerPanel/offer'
import sellerSale from '@/pages/seller/sellerPanel/sale'
import sellerAdminPayment from '@/pages/seller/sellerPanel/adminPayment'
import sellerPackageHistory from '@/pages/seller/sellerPanel/profile'
import sellerDiscount from '@/pages/seller/sellerPanel/discountCoupon'
import sellerSliderSettings from '@/pages/seller/sellerPanel/sliderSetting'
import sellerSetting from '@/pages/seller/sellerPanel/sliderSetting'
import sellerPackage from '@/pages/seller/sellerPanel/upgradePackage'
import sellerAllProducts from '@/pages/seller/sellerPanel/products/allProducts'
import sellerProductBulk from '@/pages/seller/sellerPanel/products/productBulk'
import sellerProductManage from '@/pages/seller/sellerPanel/products/productManage'
import sellerProductStock from '@/pages/seller/sellerPanel/products/productStock'
import sellerProductCompareReport from '@/pages/seller/sellerPanel/reports/productCompare'
import sellerProductStockReport from '@/pages/seller/sellerPanel/reports/productStock'
import sellerProductWisheskReport from '@/pages/seller/sellerPanel/reports/productWishes'
import sellerProductCreate from '@/pages/seller/sellerPanel/products/productCreate'


Vue.use(Router)

export default new Router({
  routes: [
    // main layout routes
    {
      path: '/',
      // name: 'mainLayout',
      component: mainLayout,
      children:[
        {
          path: 'signup',
          name: 'signup',
          component: signup
        },
        {
          path: 'login',
          name: 'login',
          component: login
        },
        {
          path: 'checkout/login',
          name: 'signinfor.checkout',
          component: signinforCheckout
        },
        {
          path: 'forget-password',
          name: 'forgetPassword',
          component: forgetPassword
        },
        {
          path: 'seller-welcome',
          name: 'sellerWelcome',
          component: sellerWelcome
        },
        {
          path: 'seller-login',
          name: 'sellerLogin',
          component: sellerLogin
        },
        {
          path: 'seller-signup',
          name: 'sellerSignup',
          component: sellerSignup
        },
        {
          path: 'seller-otp',
          name: 'sellerOtp',
          component: sellerOtp
        },
        {
          path: 'customer-otp',
          name: 'customerOtp',
          component: customerOtp
        },
        {
          path: '',
          name: 'heropage',
          component: heropage
        },
        {
          path: 'category/:slug',
          name: 'categoryPage',
          component: categoryPage
        },
        {
          path: 'product/:slug',
          name: 'productPage',
          component: productPage
        },
        {
          path: 'cart/view',
          name: 'cartView',
          component: cartView
        },
        {
          path: 'checkout',
          name: 'checkOut',
          component: checkOut
        },
        {
          path: '/order/:orderId/success',
          name: 'Order.Success',
          component: orderSuccess
        }
      ]
    },
    // profile layout routes

    {
      path:'/customer/:name',
      // name: 'userLayout',
      component: userLayout,
      redirect: {path: 'profile'},
      children:[
        {
          path:'profile',
          name: 'profile',
          component: profile
        },
        {
          path:'wishlist',
          name: 'wishlist',
          component: wishlist
        },
        {
          path:'order-manage',
          name: 'orderManage',
          component: orderManage
        },
        {
          path:':dataId/order-invoice',
          name: 'customerInvoice',
          component: customerInvoice
        },
        {
          path:'manage-address',
          name: 'manageAddress',
          component: manageAddress
        },
        {
          path:'manage-address/add',
          name: 'addressAdd',
          component: addressAdd
        },
        {
          path:'manage-address/:dataId/edit',
          name: 'addressEdit',
          component: addressEdit
        },
        {
          path:'my-bank',
          name: 'myBank',
          component: myBank
        },
        {
          path:'change-password',
          name: 'changePassword',
          component: changePassword
        },
        {
          path:'request-for-seller',
          name: 'reqForSeller',
          component: reqForSeller
        },
      ]
    },


      //seller layout 
    {
      path: '/seller',
      name: 'sellerLayout',
      component: sellerLayout,
      redirect: {name: 'sellerDashboard'},
      children: [
        {
          path: 'dashboard',
          name: 'sellerDashboard',
          component: sellerDashboard
        },
        {
          path: 'profile',
          name: 'sellerProfile',
          component: sellerProfile
        },
        {
          path: 'store',
          name: 'sellerStore',
          component: sellerStore
        },
        {
          path: 'order-management',
          name: 'sellerOrderManage',
          component: sellerOrderManage
        },{
          path: 'offer-request',
          name: 'sellerOfferRequest',
          component: sellerOfferRequest
        },
        {
          path: 'sale',
          name: 'sellerSale',
          component: sellerSale
        },
        {
          path: 'admin-payment',
          name: 'sellerAdminPayment',
          component: sellerAdminPayment
        },
        {
          path: 'package-history',
          name: 'sellerPackageHistory',
          component: sellerPackageHistory
        },
        {
          path: 'discount',
          name: 'sellerDiscount',
          component: sellerDiscount
        },
        {
          path: 'slider-settings',
          name: 'sellerSliderSettings',
          component: sellerSliderSettings
        },
        {
          path: 'settings',
          name: 'sellerSetting',
          component: sellerSetting
        },
        {
          path: 'upgrade-package',
          name: 'sellerPackage',
          component: sellerPackage
        },
        {
          path: 'all-products',
          name: 'sellerAllProducts',
          component: sellerAllProducts
        },
        {
          path: 'products-bulk',
          name: 'sellerProductBulk',
          component: sellerProductBulk
        },
        {
          path: 'products-manage',
          name: 'sellerProductManage',
          component: sellerProductManage
        },
        {
          path: 'products-stock',
          name: 'sellerProductStock',
          component: sellerProductStock
        },
        {
          path: 'product-compare-report',
          name: 'sellerProductCompareReport',
          component: sellerProductCompareReport
        },
        {
          path: 'product-stock-report',
          name: 'sellerProductStockReport',
          component: sellerProductStockReport
        },
        {
          path: 'products-wishes-report',
          name: 'sellerProductWisheskReport',
          component: sellerProductWisheskReport
        },
        {
          path: 'product-create',
          name: 'sellerProductCreate',
          component: sellerProductCreate
        },
      ]
    },

    {
      path: '*',
      name: 'catchAll',
      component: fallback
    }
  ],
  mode:'history',
})
