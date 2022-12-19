<template>
    <div class="order-manage">
        <div class="order-wrapper">
            <div class="order-info">
                My Orders
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Order Date</th>
                        <th>Order Id</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Delivery Charge</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="dataInfo,dataIndex in orderList.data" :key="dataIndex">
                        <td>{{dataInfo.created_at | formatDate}}</td>
                        <th>{{'#LTS-'+dataInfo.id}}</th>
                        <td><p>৳ {{dataInfo.price | formatNumberWithOutDecimal }}</p></td>
                        <td><p>৳ {{(dataInfo.discount+dataInfo.invoice_discount+dataInfo.promo_discount) |formatNumberWithOutDecimal }}</p></td>
                        <td><p>৳ {{dataInfo.delivery_charge |formatNumberWithOutDecimal }}</p></td>
                        <td><p>৳ {{getTotalPrice(dataInfo.price,dataInfo.delivery_charge,dataInfo.discount,dataInfo.invoice_discount,dataInfo.promo_discount)}}</p></td>
                        <!-- <td><p>৳ 790</p></td>
                        <td><p>৳ 790</p></td> -->
                        <td>
                            <slot v-if="dataInfo.status_info!=null">
                                <span class="badge " :style="{backgroundColor:dataInfo.status_info.bg_color,color:dataInfo.status_info.font_color}">{{dataInfo.status_info.label_seller}}</span>
                            </slot>
                        </td>
                        <td>
                            <router-link  :to="{name:'customerInvoice',params:{name:$store.state.customerInfo.name,dataId:dataInfo.id}}">view</router-link>
                        </td>
                    </tr>
                    <br>
                   
                </tbody>
            </table>
            <div class="overflow-auto">
                <div class="mt-3">
                    <paginate
                          :page-count="lastPage"
                          :click-handler="dataByPaginate"
                          :prev-text="'<'"
                          :next-text="'>'"
                          :container-class="'pagination justify-content-end'"
                          :page-class="'page-item'"
                          :page-link-class="'page-link'"
                          :prev-class="'page-item'"
                          :prev-link-class="'page-link'"
                          :next-class="'page-item'"
                          :next-link-class="'page-link'"
                          :first-last-button="true"
                          :first-button-text="'<<'"
                          :last-button-text="'>>'"
                         
                          >

                         <span slot="prevContent">Changed previous button</span>
                          <span slot="nextContent">Changed next button</span>
                          <span slot="breakViewContent">
                            <svg width="16" height="4" viewBox="0 0 16 4">
                              <circle fill="#999999" cx="2" cy="2" r="2" />
                              <circle fill="#999999" cx="8" cy="2" r="2" />
                              <circle fill="#999999" cx="14" cy="2" r="2" />
                            </svg>
                          </span>
                        </paginate>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'order-manage',
    data() {
        return {
            msg:'order-manage',
            rows: 7,
            perPage: 1,
            currentPage: 2,
            orderList:[],
            pastPage:1,
            pageNo:1,
            lastPage:1,
            numOfData:50,
        }
    },
    beforeMount(){
        this.getOrderList();
    },
    methods:{
         getTotalPrice(price,deliveryCharge,productDiscount,invoiceDiscount,promoDiscount){
                let totalPrice=0;
                let totalDiscount=0;
                price=parseInt(price);
                deliveryCharge=parseInt(deliveryCharge);
                productDiscount=parseInt(productDiscount);
                invoiceDiscount=parseInt(invoiceDiscount);
                promoDiscount=parseInt(promoDiscount);
                totalPrice=price+deliveryCharge;
                totalDiscount=productDiscount+invoiceDiscount+promoDiscount;
                return totalPrice-totalDiscount;
      },
       
         dataByPaginate(pageIndex){
            this.pageNo=pageIndex;
            this.getOrderList();
        },
        getOrderList(){
            let token=window.localStorage.getItem("customerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
                this.$http.get('/customer/get/order/list?page='+this.pageNo+'&numOfData='+this.numOfData,config)
                 .then(response=>{
                        this.orderList=response.data;
                        this.lastPage=this.orderList.last_page;
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
        }
    }
}
</script>

<style scoped>
.order-info {
    width: 100%;
    height: 50px;
    border: 1px solid #999999;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
}


/* table css  */
table {
    width: 99.9%;
}
table thead  tr{
    background: #DCDCDC;
    height: 50px;
}
table thead  tr th {
    text-align: center;
}
table tbody tr{
    border: 1px solid #999999;
    background: white;
}
table tbody tr td {
    padding: 10px;
}
table tbody tr td:nth-child(1) {
    padding-left: 30px;
}
table tbody tr td:nth-child(2),
table tbody tr td:nth-child(4) {
    white-space: nowrap;
}

/* table css  */
.info-details p:nth-child(2){
    color: #999999;
}
.product-details-wrapper {
    display: flex;
    grid-column-gap: 10px;
}


/* status & btn css  */
.order-btn-group > *{
    display: block;
}
.order-btn-group {
    display: flex;
    height: 100px;
    flex-direction: column;
    justify-content: space-between;
}

.status {
    display: flex;
    grid-column-gap: 10px;
    align-items: center;
}
.cancel-status-icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #F12323;
}
.pending-status-icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #FF9900;
}
.placed-status-icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #00A64C;    
}




.cancel-btn {
    border: none;
    padding: 5px;
    background: #F12323;
    color: white;
    font-size: .9rem;
}
.track-btn {
    border: none;
    padding: 5px;
    background: #424242;
    color: white;
    font-size: .9rem;
}
.regular-cancel-btn,
.pending-track-btn {
    border: 1px solid #424242;
    padding: 5px;
    background: white;
    font-size: .9rem;   
}


/* status & btn css  */
</style>
