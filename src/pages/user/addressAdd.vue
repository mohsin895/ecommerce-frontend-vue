<template>
    <div class="address">
        <div class="loyel-container">
            <div class="form-wrapper">
                <form @submit.prevent="formSubmitPrevent()">
                    <div class="row">
                        <div class="col-lg-6">
                        <div class="form-group">
                            <label for="line1">Name</label>
                            <input type="text" class="form-control" placeholder="Your Name" v-model="name"/>
                        </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                        <div class="form-group">
                            <label for="line1">Phone</label>
                            <input type="text" class="form-control" placeholder="Your Phone No" v-model="phone" />
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-lg-4">
                            <div class="form-group">
                                <label for="line1">District</label>
                                <v-select :options="districtList" :reduce="districtList => districtList.id" label="name" v-model="district" >
                                    <template v-slot:option="option">
                                        {{option.name}}
                                    </template>
                                 </v-select>
                            </div>
                        </div>
                        
                        <div class="col-md-12 col-lg-4">
                            <div class="form-group">
                                <label for="line1">Thana</label>
                                <select class="form-control" v-model="thana">
                                    <slot v-for="thanaInfo in thanaList">
                                        <option :value="thanaInfo.id" v-if="thanaInfo.district_id==district">{{thanaInfo.name}}</option>
                                    </slot>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <div class="form-group">
                                <label for="line1">Union</label>
                                <select class="form-control" v-model="union">
                                    <slot v-for="unionInfo in unionList">
                                        <option :value="unionInfo.id" v-if="unionInfo.thana_id==thana">{{unionInfo.name}}</option>
                                    </slot>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-lg-12">
                            <div class="form-group">
                                <label for="line1">Address</label>
                                <textarea class="form-control" rows="4" placeholder="house no,flat-no" v-model="address"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="submit-btn mt-2">
                        <button class="btn btn-sm btn-primary" @click="addAddress()">
                            Add Address
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addres-form',
    data() {
        return {
            districtList:[],
            thanaList:[],
            unionList:[],
            district:null,
            thana:null,
            union:null,
            name:null,
            phone:null,
            address:null,
        }
    },
    beforeMount(){
        this.getDistrictList();
        this.getThanaList();
        this.getUnionList();
    },
    methods:{
        formSubmitPrevent(e){
            // e.preventDefault();
        },
        resetForm(){
            this.name=null;
            this.phone=null;
            this.address=null;
            this.district=null;
            this.thana=null;
            this.union=null;
        },
        formValidation(){
            if(this.name!=null && this.phone!=null && this.address!=null && this.district!=null && this.thana!=null){
                return true;
            }
            else{
                if(this.name==null)
                    this.$toaster.warning("Please Enter a Name.");
                if(this.phone==null)
                    this.$toaster.warning("Please Enter a Phone Number.");
                if(this.address==null)
                    this.$toaster.warning("Please Enter An Address.");
                if(this.district==null)
                    this.$toaster.warning("Please Select a District.");
                if(this.thana==null)
                    this.$toaster.warning("Please Select a Thana.");
                return false;
            }
        },
        async addAddress(){
            if(this.formValidation()){
                let token=window.localStorage.getItem("customerToken");
           
                let config = {
                       headers: {
                          'Authorization': 'Bearer '+token
                      }   
                  };
                   
                    let formData=new FormData();
                    formData.append("name",this.name);
                    formData.append("phone",this.phone);
                    formData.append("address",this.address);
                    formData.append("district",this.district);
                    formData.append("thana",this.thana);
                    formData.append("union",this.union);

                 await  this.$http.post('/customer/address/add',formData,config)
                     .then(response=>{
                        if(response.data.msgFlag==true){
                            this.$toaster.success(response.data.msg);
                            this.resetForm();
                        }
                        if(response.data.errMsgFlag==true)
                            this.$toaster.warning(response.data.errMsg);
                     })
                     .catch(error=>{console.dir(error)})
                     .finally();
            }
        },
        getDistrictList(){
            this.$http.get('get/district/list')
              .then(response=>{
                this.districtList=response.data;
              })
              .catch(error=>{console.log(error)})
              .finally();
        },
        getThanaList(){
            this.$http.get('get/thana/list')
              .then(response=>{
                this.thanaList=response.data;
              })
              .catch(error=>{console.log(error)})
              .finally();
        },
        getUnionList(){
            this.$http.get('get/union/list')
              .then(response=>{
                this.unionList=response.data;
              })
              .catch(error=>{console.log(error)})
              .finally();
        }
    }
}
</script>


<style scoped>
.address {
    padding: 20px;
}
.form-wrapper {
    width: 70%;
    padding: 20px;
    border:1px solid #767676;
    border-radius: 10px;
    margin: auto;
    
}
.submit-btn {
    display: flex;
    justify-content: center;
}
</style>