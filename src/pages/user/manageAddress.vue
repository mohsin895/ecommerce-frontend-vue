<template>
    <div class="manage-address">
        <div class="managa-address-wrapper">
            <div class="header">
                Address Book
            </div>
            <hr>
            <br>
            <!-- <div class="set-default-shipping">
                Make default shipping address
            </div> -->
            <br>
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <td>Full Name</td>
                            <td>Phone</td>
                            <td>Address</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="dataInfo,dataIndex in addressList" :key="dataIndex">
                            <td>{{dataInfo.name}}</td>
                            <td>
                                {{dataInfo.phone}}
                            </td>
                            <td>
                               {{dataInfo.address}}
                            </td>
                            <!-- <td>
                                +8801824009784
                            </td> -->
                            <td class="text-right">
                                <router-link class="edi-icon pointer" :to="{name:'addressEdit',params:{dataId:dataInfo.id}}">
                                    <b-icon icon="pencil-square"/>
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <div class="add-new-address" >
                    <router-link class="add-new-address-btn" :to="{name:'addressAdd'}" style="max-width:200px; text-decoration: none;">
                        <b-icon icon="plus"/>
                        ADD NEW ADDRESS
                    </router-link>
                </div>
            </div>
            <br>
            <br>
            <br>
            <hr>
        </div>
    </div>
</template>

<script>

export default {
    name: 'manageAddress',
    data() {
        return {
            msg:'manageAddress',
            addressList:[],
        }
    },
    beforeMount(){
        this.getCustomerAddress();
    },
    methods: {
        getCustomerAddress(){
            let token=window.localStorage.getItem("customerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
                this.$http.get('/customer/get/addresses',config)
                 .then(response=>{
                    if(response.data.msgFlag==true){
                        this.addressList=response.data.addresses;
                    }
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
        },
    }
}
</script>


<style scoped>
.managa-address-wrapper {
    width: 100%;
    min-height: 400px;
    background: white;
    padding: 20px;
}
hr {
    margin: 5px 0;
}
.header {
    font-weight: 500;
    font-size: 1.2rem;
}
.set-default-shipping {
    text-align: right;
    color: #2079FF;
    cursor: pointer;
}

table {
    width: 100%;
}
table thead tr{
    height: 50px;
    background: #F6F6F6;
}
table thead tr td {
    padding: 0 5px;
    font-weight: 500;
    border-bottom: 1px solid black;
}
table tbody tr{
    height: 50px;
}
table tbody tr td {
    padding: 0 5px;
    border-bottom: 1px solid black;
}
.add-new-address-btn {
    border: none;
    display: block;
    margin-left: auto;
    background: #00A64C;
    color: white;
    border-radius: 4px;
    padding: 3px 5px;
}

.icon-status {
    display: inline;
    background: #0075FF;
    padding: 0 2px;
    border-radius: 4px;
    color: white;
}
</style>