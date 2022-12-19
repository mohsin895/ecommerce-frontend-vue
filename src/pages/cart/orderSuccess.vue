<template>
     <div id="invoice">
        <div class="invoice overflow-auto">
            <div class="container">
                <div style="min-width: 600px">
                <header>
                    <div class="row">
                        <div class="col company-details">
                            <h2 class="name">LOYEL</h2>
                        </div>
                    </div>
                </header>
                <main>
                    <div class="row contacts">
                        <div class="col invoice-no">
                            <div class="invoice_no text-gray-light">
                                <span>Invoice No: </span>#LTS-{{orderInfo.id}}</div>
                            <div class="name text-gray-light">
                                <span>Name: </span>
                                <slot v-if="orderInfo.address_info!=null">
                                   Name: {{orderInfo.address_info.name}}
                                </slot>
                            </div>
                            <div class="phone text-gray-light">
                                <span>Phone: </span>
                                <slot v-if="orderInfo.address_info!=null">
                                    {{orderInfo.address_info.phone}}
                                </slot>
                            </div>
                            <div class="address text-gray-light">
                                <span>Address: </span>
                                {{orderInfo.address_info.address}}
                            </div>

                        </div>
                        <div class="col invoice-details">
                            <div class="date">
                                <span>Date:</span>
                                 {{orderInfo.created_at | formatDate}}
                             </div>
                        </div>
                    </div>
                    <table >
                        <thead class="table-light">
                            <tr>
                                <th class="text-center">Reference</th>
                                <th class="text-center">Image</th>
                                <th class="text-center">Product Name</th>
                                <th class="text-center">Qty</th>
                                <th class="text-center">Rate</th>
                                <th class="text-center">Price</th>
                                <th class="text-center">Discount</th>
                                <th class="text-center">Sub Total</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center" v-for="orderItem,orderItemIndex in orderInfo.order_items" :key="orderItemIndex">
                                <td class="reference">{{orderItem.product_id}}</td>
                                <td class="image">
                                    <img :src="orderItem.product_info.thumbnail_img" :alt="orderItem.product_info.name" height="50" width="50">
                                </td>
                                <td class="product_name">
                                    <slot v-if="orderItem.product_info!=null">
                                       {{(orderItem.product_info.name.length > 70)? orderItem.product_info.name.substr(0,70)+'...' : orderItem.product_info.name}}
                                   </slot>
                                </td>
                                <td class="qty text-center">
                                    {{orderItem.quantity}}
                                </td>
                                <td class="rate">
                                 ৳ {{orderItem.sell_rate | formatNumberWithOutDecimal }}
                                </td>
                                <td class="price">
                                    ৳ {{(parseFloat(orderItem.sell_rate)*parseFloat(orderItem.quantity)) | formatNumberWithOutDecimal }}
                                </td>
                                <td class="discount">
                                    ৳ {{orderItem.discount | formatNumberWithOutDecimal }}
                                </td>
                                <td class="sub_total">
                                    ৳ {{orderItem.sell_price | formatNumberWithOutDecimal }}
                                </td>
                            </tr>
                            
                        </tbody>
                        <tfoot>
                             <tr>
                            <td colspan="6"></td>
                            <td >SUB TOTAL:</td>
                            <td>৳ {{orderInfo.price | formatNumberWithOutDecimal}}</td>
                        </tr>
                        <tr>
                            <td colspan="6"></td>
                            <td >Product Discount:</td>
                            <td>৳ {{orderInfo.discount | formatNumberWithOutDecimal}}</td>
                        </tr>
                        <tr>
                            <td colspan="6"></td>
                            <td >Invoice Discount:</td>
                            <td>৳ {{(parseFloat(orderInfo.invoice_discount)+parseFloat(orderInfo.promo_discount)) | formatNumberWithOutDecimal}}</td>
                        </tr>
                        <tr>
                            <td colspan="6"></td>
                            <td >Shipping Cost:</td>
                            <td>৳ {{orderInfo.delivery_charge | formatNumberWithOutDecimal}}</td>
                        </tr>
                        <tr>
                            <td colspan="6"></td>
                            <td >Total:</td>
                            <td>৳ {{((parseFloat(orderInfo.price)+parseFloat(orderInfo.delivery_charge))-(parseFloat(orderInfo.discount)+parseFloat(orderInfo.invoice_discount)+parseFloat(orderInfo.promo_discount))) | formatNumberWithOutDecimal}}</td>
                        </tr>
                        </tfoot>
                    </table>
                </main>
                <footer>
                    <p><span>Phone:</span> 01979955001, <span>Email:</span> info@loyel.com.bd</p>
                </footer>
            </div>
            </div>
            <div></div>
        </div>
    </div>

</template>

<script>
export default{
    data(){
        return{
            orderId:null,
            message:null,
            orderInfo:[],
        }
    },
    beforeMount(){
        let orderId=this.$route.params.orderId;
        this.message="Your Order Has Been Successfully.<br>Your Order ID Is: MWBD-"+orderId;
        // this.getCartInfos();
        this.resetCartInfo();
        this.getOrderDetails(orderId);
  },
  methods:{
    getPaymentMessage(dataInfo){
        if(dataInfo.isCashOn==1){
                return "Cash On Delivery";
            }
            else{
                if(dataInfo.isBkashPaid==1 || dataInfo.isBkashPaid==2){
                    if(dataInfo.isBkashPaid==1){
                        return "Bkash Paid.";
                    }
                    else{
                        return "Waiting For Bkash Payment.";
                    }
                }
                else
                {
                    if(dataInfo.isOnlinePaid==1){
                        return "Online Paid.";
                    }
                    else{
                        
                        if(dataInfo.isOnlinePaid==3){
                            return "Online Payment Cancelled.";
                        }
                        else
                            if(dataInfo.isOnlinePaid==4){
                                return "Online Payment Failed."
                            }
                        else if(dataInfo.isOnlinePaid==2){
                            return "Waiting For Online Payment";
                        }
                    }
                }
            }
        },
    getOrderDetails(orderId){
        let token=window.localStorage.getItem("customerToken");
               
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token,
                      'Content-Type': 'multipart/form-data'
                  }   
              };

        this.$http.get("customer/get/order/details?dataId="+orderId,config)
         .then(response=>{
            if(response.data.msgFlag==true)
                this.$store.commit("storeOrderDetails",response.data);
                this.orderInfo=response.data.orderInfo;
         })
         .catch(error=>{console.dir(error)})
         .finally();
    },
    resetCartInfo(){
        let formData=new FormData();
        formData.append("nothing",null);
        this.$http.post("product/add/to/cart",formData)
         .then(response=>{
            this.$store.commit("storeCartInfos",response.data.cartInfos);
            this.$store.commit("storePriceInfos",response.data);
         })
         .catch(error=>{console.dir(error)})
         .finally();
    }
  }
}
</script>


<style scoped>

.invoice {
    position: relative;
    background-color: #FFF;
    min-height: 680px;
    padding: 15px;
}
.invoice .container{
    border: #DFE0E1 solid 1px;
}

.invoice header {
    padding: 10px 0;
    margin-bottom: 40px;
    border-bottom: 1px solid #DFE0E1;
}

.invoice .company-details h2{
    text-align: left;
    color: #53db50;
    padding-bottom: 20px;
    padding-top: 10px;
}

.invoice .company-details .name {
    margin-top: 0;
    margin-bottom: 0;
}

.invoice .contacts {
    margin-bottom: 20px;
}

.invoice .invoice-no .invoice_no{
    padding-bottom: 10px;
}
.invoice .invoice-no .name{
    padding-bottom: 10px;
}
.invoice .invoice-no .phone{
    padding-bottom: 10px;
}

.invoice .invoice-no span{
    font-weight: 700;
}


.invoice .invoice-details {
    text-align: right;
    margin-right: 10px;
}
.invoice .invoice-details span{
    font-weight: 700;
}
.invoice .invoice-details .invoice-id {
    margin-top: 0;
    color: #000000;
}

.invoice main {
    padding-bottom: 50px;
}


.invoice main .notices .notice {
    font-size: 1.2em
}

.invoice table {
    width: 100%;
    margin-bottom: 20px
}

.invoice table thead tr th{
    text-align: center;
    padding: 15px;
    background: #DFE0E1;
    border-bottom: 1px solid #DFE0E1;
    border: #DFE0E1 1px solid;
    font-weight: 700;
}

.invoice table tbody tr td{
    text-align: center;
    font-size: 15px;
    border: #DFE0E1 1px solid;
    padding-top: 20px;
    padding-bottom: 20px;
}
.invoice table th {
    font-weight: 400;
    font-size: 16px;
}


.invoice table tfoot td {
    background: #DFE0E1;
    border: #DFE0E1 1px solid;
    white-space: nowrap;
    text-align: right;
    padding: 10px 20px;
    font-size: 1.2em;
    border-top: 1px solid #aaa;
}

.invoice table tfoot tr:first-child td {
    border-top: none
}

.invoice table tfoot tr:last-child td {
    color: #000000;
    font-weight: 600;
    font-size: 1.4em;
    border-top: 1px solid #3989c6
}

.invoice table tfoot tr td:first-child {
    border: none
}

.invoice footer {
    width: 100%;
    text-align: center;
    color: rgb(0, 0, 0);
    border-top: 1px solid #DFE0E1;
    padding-top: 15px;
}
.invoice footer span{
    font-weight: 600;
}

@media print {
    .invoice {
        font-size: 11px!important;
        overflow: hidden!important
    }

    .invoice footer {
        position: absolute;
        bottom: 10px;
        page-break-after: always
    }

    .invoice>div:last-child {
        page-break-before: always
    }
}
</style>