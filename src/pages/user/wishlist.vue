<template>
    <div class="wishlist">
        <div class="wishlist-wrapper">
            <div class="wishlit-info">
                Profile Information
            </div>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Availability</th>
                        <th>Purchase</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="index in 5" :key="index">
                        <td>{{index}}</td>
                        <td>
                            <img src="@/assets/images/user-wishlist/first.png" alt="">
                        </td>
                        <td> Garnier Skin Naturals, Micellar Cleansing Water, 125ml</td>
                        <td>৳790</td>
                        <td>
                            <button class="available-btn">Available</button>
                        </td>
                        <td>
                            <button class="addToCart-btn">
                                <b-icon icon="cart3" font-scale="1"></b-icon>
                                Add To Cart
                            </button>
                        </td>
                        <td class="icon">
                            <b-icon icon="trash" variant="danger"></b-icon>
                        </td>
                    </tr>
                </tbody>
            </table>            
        </div>
    </div>
</template>

<script>

export default {
    name: 'wishlist',
    data() {
        return {
            msg:'wishlist'
        }
    }
}
</script>

<style scoped>

.wishlit-info {
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
    width: 100%;
}
table thead  tr{
    background: #DCDCDC;
    height: 50px;
}
table thead tr th {
    text-align: center;
}
table tbody tr td {
    border: 1px solid #DDDDDD;
    text-align: center;
}

table tbody tr td:nth-child(1) {
    padding:0 5px;
}
table tbody tr td:nth-child(2) {
    padding:10px;
}
table tbody tr td:nth-child(3) {
    text-align: left;
    padding: 0 5px;
}

table tbody tr td:nth-child(4) {
    padding:0 10px;
}
/* table css  */


.available-btn  {
    border: none;
    border-radius: 5px;
    background: #00A64C;
    color: white;
    padding: 5px 10px;
}
.addToCart-btn {
    border: none;
    border-radius: 5px;
    background: #1F1F1F;
    color: white;
    padding: 8px;
}
.icon .b-icon{
    cursor: pointer;
    font-size: 25px;
}
</style>