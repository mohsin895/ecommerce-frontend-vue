<template>
    <div class="seller-dashboard">
        <div class="loyel-admin-container">
            <div class="dashboard-details-info">
                <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4" cols-xl="5">
                    <b-col>
                        <InfoCard
                        itemName="Total Product"
                        :item="0"
                        color="linear-gradient(90deg, #D1963E 0%, rgba(170, 136, 17, 0) 187.86%);"
                        image="shopping-icon-png-24.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Order"
                        :item="0"
                        color="linear-gradient(90deg, #01A211 0%, rgba(0, 255, 25, 0) 187.86%);"
                        image="126083 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Categories"
                        :item="0"
                        color="linear-gradient(90deg, #903ED1 0%, rgba(0, 26, 255, 0) 187.86%);"
                        image="layer 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Revenue"
                        :item="0"
                        color="linear-gradient(90deg, #1B46DE 0%, rgba(0, 71, 255, 0) 187.86%);"
                        image="revenue-icon-png-23 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Commission"
                        :item="0"
                        color="linear-gradient(90deg, #DC1010 0%, rgba(182, 0, 0, 0) 187.86%);"
                        image="69-691600_money-comments-dollars-icon-png 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Pending Order"
                        :item="0"
                        color="linear-gradient(90deg, #16BDB3 0%, rgba(0, 151, 142, 0) 187.86%);"
                        image="4987342 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Cancel Order"
                        :item="0"
                        color="linear-gradient(90deg, #A9D52B 0%, rgba(65, 148, 0, 0) 187.86%);"
                        image="256-2569066_cancel-order-comments-cancel-order-icon 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Pending Commission"
                        :item="0"
                        color="linear-gradient(90deg, #E826E0 0%, rgba(219, 0, 255, 0) 187.86%);"
                        image="333-3339949_pending-transaction-transaction-comments-pending-icon-svg 1.png"
                        />                        
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Refund Product"
                        :item="0"
                        color="linear-gradient(90deg, #AE0743 0%, rgba(238, 151, 177, 0) 187.86%);"
                        image="return-product-icon-28 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="***************"
                        :item="0"
                        color="linear-gradient(90deg, #827821 0%, rgba(255, 199, 0, 0.0364583) 181.01%, rgba(255, 199, 0, 0) 187.86%);"
                        image="Responding-Icon 1.png"
                        />
                    </b-col>
                </b-row>
            </div>
            <br>
            <br>
            <div class="middle-table">
                <b-row class="middle-row">
                    <b-col md="8" class="responsive-table">
                        <TableView/>
                    </b-col>
                    <b-col md="4">
                        Coming ....
                    </b-col>
                </b-row>
            </div>
            <br>
            <br>
            <div class="dashboard-final-part">
                <b-row>
                    <b-col>
                        
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<script>
import InfoCard from '@/components/seller/info-card'
import TableView from '@/components/seller/table'
export default {
    components: {
        InfoCard,
        TableView
    },
    data() {
        return {

        }
    }
}
</script>


<style scoped>
.responsive-table {
    overflow-x: auto;
    padding-top: 5px;
    padding-bottom: 5px;
}
</style>