<template>
    <div class="seller-all-products loyel-seller-box">
        <br>
        <div class="add-product-btn">
            <router-link :to="{name:'sellerProductCreate'}">Add New Products</router-link>
        </div>
        <br>
        <div class="data-tables">
            <!-- <DataTables 
            :tableHeads="tableHeadList" 
            @getTableInfo="getTableDetails"
            :category="categories"
            :totalItem="tableBodyRow.length"
            >
                <tr v-for="dataInfo,dataIndex in orderList.data" :key="dataIndex">
                    <th scope="row">{{++index}}</th>
                      <td>
                        <img v-lazy="dataInfo.thumbnail_img" :alt="dataInfo.name" height="70" width="70">
                      </td>
                      <td>{{dataInfo.name.substring(0,15)}}</td>
                      <td>
                        <slot v-if="dataInfo.shop_info!=null">
                          <span class="badge bg-info">{{dataInfo.shop_info.shop_name}}</span>
                        </slot>
                      </td>
                      <td>{{dataInfo.sku }}</td>
                      <td>
                          <slot v-if="dataInfo.mega_category!=null">
                            {{dataInfo.mega_category.title}}
                          </slot>
                          <slot v-if="dataInfo.sub_category!=null">
                            {{dataInfo.sub_category.title}}
                          </slot>
                          <slot v-if="dataInfo.normal_category!=null">
                            {{dataInfo.normal_category.title}}
                          </slot>
                      </td>
                      
                      <td>
                          <slot v-if="dataInfo.brand_info!=null">
                            <img :src="dataInfo.brand_info.logo" style="height:50px;width:50px; border-radius:50%; border:1px solid green;">
                            {{dataInfo.brand_info.name.substring(0,10)}}
                          </slot>
                      </td>
               
                      <th>
                          <span class="badge bg-info h3">{{dataInfo.quantity}}</span>
                      </th>
                      <th>
                        <span class="badge bg-warning h3">{{dataInfo.total_view}}</span>
                      </th>
                      <td>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" :id="'is_b_to_b_'+dataInfo.id" :checked="(dataInfo.is_b_to_b==1) ? 'true':false" @click="changeBtoBStatus(dataInfo.id,dataInfo.is_b_to_b)">
                          <label class="form-check-label badge" :for="'is_b_to_b_'+dataInfo.id" :class="(dataInfo.is_b_to_b==1) ? 'bg-success':'bg-danger'"> {{dataInfo.is_b_to_b | yesNo}}</label>
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" :id="'is_b_to_c_'+dataInfo.id" :checked="(dataInfo.is_b_to_c==1) ? 'true':false" @click="changeBtoCStatus(dataInfo.id,dataInfo.is_b_to_c)">
                          <label class="form-check-label badge" :for="'is_b_to_c_'+dataInfo.id" :class="(dataInfo.is_b_to_c==1) ? 'bg-success':'bg-danger'"> {{dataInfo.is_b_to_c | yesNo}}</label>
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          
                            <span class="badge" :for="'published_'+dataInfo.id" :class="(dataInfo.published==1) ? 'bg-success':'bg-danger'"> {{dataInfo.published | yesNo}}</span>
                          
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" :id="'status_'+dataInfo.id" :checked="(dataInfo.status==1) ? 'true':false" @click="changeDataStatus(dataInfo.id,dataInfo.status)">
                          <label class="form-check-label badge" :for="'status_'+dataInfo.id" :class="(dataInfo.status==1) ? 'bg-success':'bg-danger'"> {{dataInfo.status | statusLabel}}</label>
                        </div>
                      </td> 
                    <td>
                        <div class="button-group">
                            <div class="edit">
                                <b-icon icon="pencil-square"/>
                            </div>
                            <div class="view">
                                <b-icon icon="eye"/>
                            </div>
                            <div class="delete">
                                <b-icon icon="trash"/>
                            </div>
                        </div>
                    </td>
                </tr>
            </DataTables> -->
           <div class="card" >
              <div class="card-body">
                <h5 class="card-title">Product List</h5>
                
                <table class="table">
                  <thead>
                    <tr>
                        <th colspan="2">
                            <input type="number" v-model="proCode" placeholder="Reference No" class="form-control">
                        </th>
                        <th>
                            <input type="number" v-model="name" placeholder="Product Name" class="form-control">
                        </th>
                        <th colspan="2">
                             <v-select :options="categoryList" :reduce="categoryList => categoryList.id" label="title" v-model="category" >
                                <template v-slot:option="option">
                                    {{option.title}}
                                </template>
                             </v-select>
                        </th>
                        <th colspan="2">
                             <v-select :options="brandList" :reduce="brandList => brandList.id" label="name" v-model="brand" >
                                <template v-slot:option="option">
                                    {{option.name}}
                                </template>
                             </v-select>
                        </th>
                        <th>
                            <select class="form-control" v-model="b2b">
                                <option value="1">Yes</option>
                                <option value="1">No</option>
                            </select>
                        </th>
                        <th>
                            <select class="form-control" v-model="b2c">
                                <option value="1">Yes</option>
                                <option value="1">No</option>
                            </select>
                        </th>
                        <th>
                            <select class="form-control" v-model="published">
                                <option value="1">Yes</option>
                                <option value="1">No</option>
                            </select>
                        </th>
                        <th>
                            <select class="form-control" v-model="status">
                                <option value="1">Active</option>
                                <option value="1">Inactive</option>
                            </select>
                        </th>
                        <th>
                            <a href="#" class="btn btn-sm btn-info" @click="getProductList()">Search</a>
                        </th>
                    </tr>
                    <tr>
                      <th scope="col">Ref No.</th>
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Category</th>
                      <th scope="col">Brand</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">View</th>
                      <th scope="col">B2B</th>
                      <th scope="col">B2C</th>
                      <th scope="col">Published</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                       <tr v-for="dataInfo,dataIndex in dataList.data" :key="dataIndex">
                        <th scope="row">{{dataInfo.id}}</th>
                          <td>
                            <img v-lazy="dataInfo.thumbnail_img" :alt="dataInfo.name" height="70" width="70">
                          </td>
                          <td>{{dataInfo.name.substring(0,50)}}</td>
                          
                          
                          <td>
                              <slot v-if="dataInfo.mega_category!=null">
                                {{dataInfo.mega_category.title}}
                              </slot>
                              <slot v-if="dataInfo.sub_category!=null">
                                {{dataInfo.sub_category.title}}
                              </slot>
                              <slot v-if="dataInfo.normal_category!=null">
                                {{dataInfo.normal_category.title}}
                              </slot>
                          </td>
                          
                          <td>
                              <slot v-if="dataInfo.brand_info!=null">
                                <img :src="dataInfo.brand_info.logo" style="height:50px;width:50px; border-radius:50%; border:1px solid green;">
                                {{dataInfo.brand_info.name.substring(0,10)}}
                              </slot>
                          </td>
                   
                          <th>
                              <span class="badge bg-info h3">{{dataInfo.quantity}}</span>
                          </th>
                          <th>
                            <span class="badge bg-warning h3">{{dataInfo.total_view}}</span>
                          </th>
                          <td>
                            <span class="form-check-label badge" :for="'is_b_to_b_'+dataInfo.id" :class="(dataInfo.is_b_to_b==1) ? 'bg-success':'bg-danger'"> {{dataInfo.is_b_to_b | yesNo}}</span>
                            
                          </td>
                          <td>
                            <span class="form-check-label badge" :for="'is_b_to_c_'+dataInfo.id" :class="(dataInfo.is_b_to_c==1) ? 'bg-success':'bg-danger'"> {{dataInfo.is_b_to_c | yesNo}}</span>
                          </td>
                          <td>
                            <span class="badge" :for="'published_'+dataInfo.id" :class="(dataInfo.published==1) ? 'bg-success':'bg-danger'"> {{dataInfo.published | yesNo}}</span>
                          </td>
                          <td>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" role="switch" :id="'status_'+dataInfo.id" :checked="(dataInfo.status==1) ? 'true':false" @click="changeDataStatus(dataInfo.id,dataInfo.status)">
                              <label class="form-check-label badge" :for="'status_'+dataInfo.id" :class="(dataInfo.status==1) ? 'bg-success':'bg-danger'"> {{dataInfo.status | statusLabel}}</label>
                            </div>
                          </td> 
                        <td>
                            <div class="button-group">
                                <div class="edit">
                                    <b-icon icon="pencil-square"/>
                                </div>
                                <div class="view">
                                    <b-icon icon="eye"/>
                                </div>
                                <div class="delete">
                                    <b-icon icon="trash"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'all-products',
    components: {

    },
    data() {
        return {
            dataList:[],
            rows: 7,
            perPage: 1,
            currentPage: 2,
            pastPage:1,
            pageNo:1,
            lastPage:1,
            numOfData:50,
            status:null,
            b2c:null,
            b2b:null,
            brandList:[],
            categoryList:[],
            brand:null,
            category:null,
            published:null,
            name:null,
            proCode:null,
        }
    },
    beforeMount(){
        this.getCategoryList();
        this.getBrandList()
        this.getProductList();
    },
    methods: {
        async getProductList(){
            let token=window.localStorage.getItem("sellerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                let url='/seller/get/product/list?page='+this.pageNo+'&numOfData='+this.numOfData;
                
                if(this.proCode!=null)
                    url=url+'&proCode='+this.proCode;
                if(this.name!=null)
                    url=url+'&name='+this.name;
                if(this.category!=null)
                    url=url+'&category='+this.category;
                if(this.brand!=null)
                    url=url+'&brand='+this.brand;
                if(this.b2b!=null)
                    url=url+'&b2b='+this.b2b;
                if(this.b2c!=null)
                    url=url+'&b2c='+this.b2c;
                if(this.published!=null)
                    url=url+'&published='+this.published;
                if(this.status!=null)
                    url=url+'&status='+this.status;

                this.$http.get(url,config)
                 .then(response=>{
                        this.dataList=response.data;
                        this.lastPage=this.dataList.last_page;
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
        }, 
        async getCategoryList(){
            let token=window.localStorage.getItem("sellerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
                this.$http.get('/seller/get/category/list',config)
                 .then(response=>{
                    this.categoryList=response.data;
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
        }, 
        async getBrandList(){
            let token=window.localStorage.getItem("sellerToken");
           
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };
                // let formData=new FormData();
                this.$http.get('/seller/get/brand/list',config)
                 .then(response=>{
                        this.brandList=response.data;
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
}
.button-group > :nth-child(3) {
    color: rgb(197, 54, 54);
}

</style>