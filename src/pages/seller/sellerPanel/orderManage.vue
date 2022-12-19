<template>
    <div class="order-manage loyel-seller-box">
        <br>
        <!-- <pre>{{dataList}}</pre> -->
        <div class="data-tables">
            <DataTables 
            :tableHeads="tableHeadList" 
            @getTableInfo="getTableDetails"
            :totalItem="tableBodyRow.length"
            :pagination="false"
            :caption="false"
            :perPageSelection="false"
            >
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
                            <div class="button-group">
                                <!-- <div class="delete">
                                    <b-icon icon="trash"/>
                                </div> -->
                                <div class="view">
                                    <b-icon icon="eye"/>
                                </div>
                            </div>
                        </td>
                    </tr>
            </DataTables>
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
import DataTables from '@/components/seller/data-table'
export default {
    name: 'order-manage',
    components: {
        DataTables
    },
    data() {
        return {
            dataList:[],
            rows: 7,
            perPage: 1,
            currentPage: 2,
            orderList:[],
            pastPage:1,
            pageNo:1,
            lastPage:1,
            numOfData:50,
            tableInfo: null,
            tableHeadList: [
                'Date',
                'Order Id',
                'Price',
                'Discount',
                'Delivery Charge',
                'Total Amount',
                'Status',
                'Action',
            ],
            tableBodyRow: [
                {
                    'orderCode':'LYB000000001', 
                    'name': 'Women Long Dress', 
                    'customer': 'Md. Salam Khan',
                    'mobile': '+8801895644342', 
                    'amount': '৳ 5700',
                    'orderTracking': 'View Order Details',
                    'deliveredStatus': 'Delivery',
                    'paymentStatus': 'Paid',
                },
                {
                    'orderCode':'LYB000000001', 
                    'name': 'Women Long Dress', 
                    'customer': 'Md. Salam Khan',
                    'mobile': '+8801895644342', 
                    'amount': '৳ 5700',
                    'orderTracking': 'View Order Details',
                    'deliveredStatus': 'Delivery',
                    'paymentStatus': 'Paid',
                },
                {
                    'orderCode':'LYB000000001', 
                    'name': 'Women Long Dress', 
                    'customer': 'Md. Salam Khan',
                    'mobile': '+8801895644342', 
                    'amount': '৳ 5700',
                    'orderTracking': 'View Order Details',
                    'deliveredStatus': 'Confirmed',
                    'paymentStatus': 'Unpaid',
                },
                {
                    'orderCode':'LYB000000001', 
                    'name': 'Women Long Dress', 
                    'customer': 'Md. Salam Khan',
                    'mobile': '+8801895644342', 
                    'amount': '৳ 5700',
                    'orderTracking': 'View Order Details',
                    'deliveredStatus': 'Confirmed',
                    'paymentStatus': 'Unpaid',
                },
                {
                    'orderCode':'LYB000000001', 
                    'name': 'Women Long Dress', 
                    'customer': 'Md. Salam Khan',
                    'mobile': '+8801895644342', 
                    'amount': '৳ 5700',
                    'orderTracking': 'View Order Details',
                    'deliveredStatus': 'Pending',
                    'paymentStatus': 'Paid',
                },
                {
                    'orderCode':'LYB000000001', 
                    'name': 'Women Long Dress', 
                    'customer': 'Md. Salam Khan',
                    'mobile': '+8801895644342', 
                    'amount': '৳ 5700',
                    'orderTracking': 'View Order Details',
                    'deliveredStatus': 'Pending',
                    'paymentStatus': 'Unpaid',
                },
                {
                    'orderCode':'LYB000000001', 
                    'name': 'Women Long Dress', 
                    'customer': 'Md. Salam Khan',
                    'mobile': '+8801895644342', 
                    'amount': '৳ 5700',
                    'orderTracking': 'View Order Details',
                    'deliveredStatus': 'Pending',
                    'paymentStatus': 'Unpaid',
                },
                {
                    'orderCode':'LYB000000001', 
                    'name': 'Women Long Dress', 
                    'customer': 'Md. Salam Khan',
                    'mobile': '+8801895644342', 
                    'amount': '৳ 5700',
                    'orderTracking': 'View Order Details',
                    'deliveredStatus': 'Confirmed',
                    'paymentStatus': 'Unpaid',
                },
                {
                    'orderCode':'LYB000000001', 
                    'name': 'Women Long Dress', 
                    'customer': 'Md. Salam Khan',
                    'mobile': '+8801895644342', 
                    'amount': '৳ 5700',
                    'orderTracking': 'View Order Details',
                    'deliveredStatus': 'Confirmed',
                    'paymentStatus': 'Unpaid',
                },
                {
                    'orderCode':'LYB000000001', 
                    'name': 'Women Long Dress', 
                    'customer': 'Md. Salam Khan',
                    'mobile': '+8801895644342', 
                    'amount': '৳ 5700',
                    'orderTracking': 'View Order Details',
                    'deliveredStatus': 'Confirmed',
                    'paymentStatus': 'Unpaid',
                }
            ]
        }
    },
    beforeMount(){
        this.getOrderList();
    },
    methods: {
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
            let token=window.localStorage.getItem("sellerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
                this.$http.get('/seller/get/order/list?page='+this.pageNo+'&numOfData='+this.numOfData,config)
                 .then(response=>{
                        this.orderList=response.data;
                        this.lastPage=this.orderList.last_page;
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
        },
        getTableDetails( info ) {
            this.tableInfo = info;
            console.log(info);
        }
    }
}
</script>

<style scoped>
.add-product-btn {
    width: 160px;
    height: 35px;
    margin-left: auto;
    color: white;
    font-weight: 500;
    cursor: pointer;
    background: #00A3FF;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}
a {
    color: white;
    text-decoration: none;
}

.button-group {
    width: 100%;
    display: flex;
    justify-content: center;
    grid-column-gap: 5px;
}
.button-group > * {
    cursor: pointer;
    border: 1px solid #767676;
    padding: 0 3px;
}
.button-group > :nth-child(1) {
    color: rgb(197, 54, 54);
}

table tbody tr td {
    height: 50px;
}
.bg-blue {
    background: #0094FF;
}
.bg-green {
    background: #00A711;
}
.bg-chocolate {
    background: #682500;
}
.bg-yellow {
    background: #EF8000;
}
</style>