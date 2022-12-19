<template>
    <div class="request-offer">
        <div class="loyel-seller-box">
            <h5>Create a new offer</h5>
            <div class="loyel-seller-box-item">
                <div class="offer-select">
                    <label for=""><h5>Title: </h5></label>
                    <div class="select-box">
                        <v-select
                        :options="titleList"  
                        :searchable="true"
                        placeholder="Select to type"
                        :clearable="false"
                        v-model="seller.title"
                        ></v-select>     
                    </div> 
                </div>
                <br>
                <br>
                <!-- deal  -->
                <div class="deal-type">
                    <label for=""><h5>Deal Type: </h5></label>
                    <div class="radio-box">
                        <div class="box-col-1">
                            <div class="shocking">
                                <label for="shocking">
                                    <input type="radio" 
                                    id="shocking"
                                    name="seller-offer"
                                    class="form-check-input"
                                    value="shocking"
                                    v-model="seller.dealType">
                                    Shocking
                                </label>
                            </div>
                            <div class="offer-zone">
                                <label for="offerZone">
                                    <input type="radio" 
                                    id="offerZone"
                                    name="seller-offer"
                                    class="form-check-input"
                                    value="offer-zone"
                                    v-model="seller.dealType">
                                    Offer Zone
                                </label>
                            </div>
                        </div>
                        <div class="box-col-2">
                            <div class="feature-offer">
                                <label for="featuredOffer">
                                    <input type="radio" 
                                    id="featuredOffer"
                                    name="seller-offer"
                                    class="form-check-input"
                                    value="featured-offer"
                                    v-model="seller.dealType">
                                    Featured Offer
                                </label>
                            </div>
                            <div class="todays-offer">
                                <label for="todaysOffer">
                                    <input type="radio" 
                                    id="todaysOffer"
                                    name="seller-offer"
                                    class="form-check-input"
                                    value="todays-offer"
                                    v-model="seller.dealType">
                                    Todays Offer
                                </label>
                            </div>                        
                        </div>
                        <div class="box-col-3">
                            <div class="super-asia">
                                <label for="superAsia">
                                    <input type="radio" 
                                    id="superAsia"
                                    name="seller-offer"
                                    class="form-check-input"
                                    value="super-asia"
                                    v-model="seller.dealType">
                                    Super Asia
                                </label>
                            </div>
                            <div class="super-64">
                                <label for="super64">
                                    <input type="radio" 
                                    id="super64"
                                    name="seller-offer"
                                    class="form-check-input"
                                    value="super-64"
                                    v-model="seller.dealType">
                                    Super 64
                                </label>
                            </div> 
                        </div>
                    </div>                    
                </div>
                <br>
                <br>
                <div class="offer-product-list">
                    <div class="heading">
                        <div class="left-head">
                            <h5>Product List</h5>
                        </div>
                        <div class="right-head">
                            <div class="category">
                                <v-select
                                :options="categoryList"  
                                :searchable="true"
                                placeholder="Categories"
                                :clearable="false"
                                v-model="seller.offerCategory"
                                ></v-select>                                 
                            </div>
                            <div class="search">
                                <a-input-search placeholder="Search" 
                                enter-button 
                                @search="onSearch" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- product showing table -->
                <div class="table-model">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Image</th>
                                <th> Name</th>
                                <th> Discount</th>
                                <th> Discount Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data,index in tableDummyDatas" :key="index">
                                <td>{{index+1}}</td>
                                <td>
                                    <img :src="require(`@/assets/images/seller/offer/${data.image}`)" alt="">
                                </td>
                                <td>
                                    {{data.productName}}
                                </td>
                                <td>
                                    <a-switch v-model="data.discount">
                                        <div class="yes" slot="checkedChildren">Yes</div>
                                        <div class="no" slot="unCheckedChildren">No</div>
                                    </a-switch>
                                </td>
                                <td>
                                    <div class="vealu-percent-wrapper" v-if="data.discount">
                                        <div class="value">
                                            <a-input placeholder="Discount" :value="data.discountValue"/>
                                        </div>
                                        <div class="percent-or-flat">
                                            <v-select
                                            :options="rate"  
                                            :searchable="false"
                                            :clearable="false"
                                            v-model="data.rateType"
                                            ></v-select> 
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br>
                <div class="update">
                    <button class="update-btn">Update</button>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            seller: {
                title:'',
                dealType: 'shocking',
                offerCategory: '',
            },
            product: {
                rate: 'Percent'
            },
            titleList: [
                'Shocking Deal',
                'Popular product',
                'Feature product',
                'Latest product',
                'Todays deal',
            ],
            categoryList: [
                'All',
                'Electronics',
                'Men',
                'Women',
                'Beauty',
                'Furniture',
                'Corona/ Flue Care',
                'Home & Kitchen',
                'Collectibles & Art',
                'Baby',
                'Gift Cards'
            ],
            rate: [
                'Percent',
                'Flat'
            ],
            tableDummyDatas: [
                {
                    image: 'dress-1.png',
                    productName: 'Women Pink color dress',
                    discount: true,
                    discountValue: '24.0',
                    rateType: 'Percent'
                },
                {
                    image: 'dress-2.png',
                    productName: 'Women Jince Pant',
                    discount: true,
                    discountValue: '15.0',
                    rateType: 'Percent'
                },
                {
                    image: 'dress-3.png',
                    productName: 'Women Shirt',
                    discount: false,
                    discountValue: '',
                    rateType: ''
                },
                {
                    image: 'dress-4.png',
                    productName: 'Women Dress',
                    discount: true,
                    discountValue: '5.0',
                    rateType: 'Percent'
                },
            ]
        }
    },
    methods: {
        onSearch() {

        }
    }
    // watch: {
    //     'seller.dealType':function() {
    //         console.log(this.seller);
    //     }
    // }
}
</script>

<style scoped>
.offer-select {
    display: flex;
    grid-column-gap: 20px;
}
/* vue select box  */
.v-select {
    min-width: 140px;
}

/* deal css  */
.deal-type {
    display: flex;
    grid-column-gap: 20px;
}
.deal-type h5 {
    width: 100px;
}
.radio-box label {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
}
.radio-box {
    width: calc(100% - 100px);
    display: flex;
    flex-flow: row wrap;
    grid-column-gap: 20px;
}

.box-col-1 > :nth-child(2),
.box-col-2> :nth-child(2),
.box-col-3> :nth-child(2) {
    margin-top: 10px;
}

/* change bootstrap checkbox*/
.form-check-input[type=radio] {
    width: 22px;
    height: 22px;
    border-radius: 50%;
}
.form-check-input:focus {
    outline: none;
    border: none;
    box-shadow: none;
}
.form-check-input:checked {
    background-color: #767676;
    border-color: #767676;
}


/* table part css  */

.heading {
    width: 100%;
    min-height: 45px;
    display: flex;
    flex-flow: row wrap;
    border: 1px solid #767676;
    border-radius: 5px;
}
.left-head {
    width: 65%;
    min-height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.right-head {
    width: 35%;
    min-height: 45px;
    display: flex;
    padding: 0 10px;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
}

/* product showing table css  */
.table-model {
    width: 100%;
    margin-top: 10px;
    border: 1px solid #767676;
    border-radius: 10px;
}
table tr {
    border-bottom: 1px solid #767676;
}
table tbody tr:last-child {
    border-bottom: none;
}
table tr th:not(th:last-child),
table tr td:not(td:last-child) {
    border-right: 1px solid #767676;
}
/* table img  */
table tbody img {
    width: 100px;
}
table tbody tr td img{
    display: block;
    margin: auto;
}
table tr td:first-child,
table tr th:first-child {
    text-align: center;
}
table tbody tr td:nth-child(1) {
    width: 3%;
}
table tbody tr td:nth-child(2) {
    width: 20%;
}
table tbody tr td:nth-child(3) {
    width: 37%;
}
table tbody tr td:nth-child(4) {
    width: 10%;
}
table tbody tr td:nth-child(4) > *{
    display: block;
    margin: auto;
}
table tbody tr td:nth-child(5) {
   width: 30%; 
   padding: 0 5px;
}
.vealu-percent-wrapper {
    display: flex;
    grid-column-gap: 10px;
}

.update-btn {
    border: none;
    background: var(--btn-color);
    border-radius: 4px;
    color: white;
    font-size: 1.2rem;
    width: 100px;
    height: 35px;
    display: block;
    margin-left: auto;
}

/* responsive part  */

@media (max-width: 800px) {
    .left-head,
    .right-head {
        width: 50%;
    }
}

@media (max-width: 500px) {
    .v-select {
        min-width: 110px;
    }
}
</style>
