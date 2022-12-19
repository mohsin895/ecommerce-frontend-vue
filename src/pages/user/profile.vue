<template>
    <div class="profile">
        <div class="profile-wrapper">
            <div class="profile-firstPart">
                <div class="profile-img-ful-part">
                    <div class="profile-img">
                        <img v-lazy="$store.state.customerInfo.avatar" alt="" style="height:150px; width:150px; border-radius:50%;">
                        <div class="upload-img">
                            <label for="upload-img" class="upload">
                                <input type="file" id="upload-img">
                                Change Profile
                            </label>
                        </div>
                    </div>
                    <!-- <div class="verified-status">
                        Not verified profile ?
                    </div> -->
                </div>

                <div class="profile-table">
                    <div class="profile-info">
                        Profile Information
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{{$store.state.customerInfo.name}}</td>
                                <!-- <td>Last Name</td>
                                <td>Ahamed</td> -->
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{{$store.state.customerInfo.email}}</td>
                                <!-- <td>Contact No</td>
                                <td>+8801769367392</td> -->
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{{$store.state.customerInfo.phone}}</td>
                                <!-- <td>Country</td>
                                <td>Bangladesh</td> -->
                            </tr>
                            <tr>
                                <td>Date Of Birth</td>
                                <td>{{$store.state.customerInfo.dob}}</td>
                                <!-- <td>Country</td>
                                <td>Bangladesh</td> -->
                            </tr>
                            <!-- <tr>
                                <td>State</td>
                                <td>Tn</td>
                                <td>City</td>
                                <td>Dhaka</td>
                            </tr>
                            <tr>
                                <td>Default Currency</td>
                                <td>BDT</td>
                                <td>Pakage</td>
                                <td class="platinum-color">Platinum</td>
                            </tr> -->
                        </tbody>
                    </table>
                </div>
            </div>
            <br>
            <br>
            <div class="profile-secondPart">
                <div class="purchase-head">
                    <p>purchase Summary</p>
                    <div class="hr-box">
                        <div class="hr"></div>
                    </div>
                    <p>purchase Summary</p>
                </div>
                <br>
                <div class="two-box">
                    <!-- <pre>{{purchaseHistory}}</pre> -->
                    <div class="box-one">
                        <p>Total Purchase : ৳ {{purchaseHistory.totalPurchase}}</p>
                        <p>Last 7 Days : ৳ {{purchaseHistory.last7Days}}</p>
                        <p>Last 30 Days : ৳ {{purchaseHistory.last30Days}}</p>
                    </div>
                    <div class="box-two">
                        <p>Wished Purchase : 12</p>
                        <p>User Since : 29 Oct, 2021</p>
                        <p>Last Login : 26 Dec, 2021</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'profile',
    data() {
        return {
            msg:'profile',
            purchaseHistory:[],
        }
    },
    mounted(){
        this.getCustomerPurchaseHistory();
    },
    methods:{
        getCustomerPurchaseHistory(){
             let token=window.localStorage.getItem("customerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };

                this.$http.get('/customer/get/purchase/history',config)
                 .then(response=>{
                    if(response.data.msgFlag==true){
                        this.purchaseHistory=response.data.purchaseHistory;
                    }
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
        }
    }
}
</script>


<style scoped>

.profile-firstPart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


/* profile image css */
.profile-img {
    width: 180px;
    min-height: 225px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.profile-img img {
    width: 150px;
    padding: 20px 0;
}
#upload-img {
    display: none;
}
.upload-img {
    width: 100%;
    text-align: center;
}
.upload {
    width: 100%;
    height: 30px;
    display: block;
    background: black;
    padding: 0;
    color: white;
    margin: 0;
    cursor: pointer;
}
.verified-status {
    color: red;
    margin: 5px auto;
    text-align: center;
    cursor: pointer;
}
/* profile image css */


/* profile info  */
.profile-table {
    width: calc(97% - 180px);
}
.profile-info {
    width: 100%;
    height: 50px;
    border: 1px solid #999999;
    display: flex;
    background: white;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
}
table {
    width: 100%;
}
table tr td:nth-child(1),
table tr td:nth-child(3) {
    font-weight: bold;
}
table tr td:nth-child(2),
table tr td:nth-child(4) {
    color: #020202;
}
table tr {
    border-bottom: 1px solid #999999;
}
table tr td {
    padding: 5px 0;
}
.platinum-color {
    color: #00A64C;
}
/* profile info */

/* purchase head css  */
.purchase-head {
    display: flex;
    width: 80%;
    margin: auto;
    grid-column-gap: 30px;
    font-size: 1.2rem;
}
.purchase-head p {
    margin: 0;
    padding: 0;
}
.hr-box {
    display: flex;
    height: auto;
    align-items: center;
}
.hr {
    width: 300px;
    border-bottom: 2px solid #989898;
}
/* purchase head css  */

/* purchase body css  */
.two-box {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;

}
.box-one,
.box-two {
    width: 350px;
    height: 180px;
    border: 2px solid #989898;
    padding: 35px;
    font-size: 1.03rem;
}
.box-one {
    text-align: left;
}
.box-two {
    text-align: right;
}
/* purchase body css  */
</style>