<template>
    <div>
        <!-- <pre>{{categoryList}}</pre> -->
        <div class="tab-product-slider" v-for="(categoryInfo,categoryIndex) in categoryList" :key="categoryIndex">
            <div class="tab-slider">
                <div class="slider-heading">
                    <div class="caption pointer">
                        <div class="tabs">
                            <ul>
                                <li ref="tabUl" class="isActive" :id="'category_id_'+categoryInfo.id" v-on:click="tabChange(categoryInfo.id,1)">
                                    {{categoryInfo.title}}
                                </li>
                            <slot v-if="categoryInfo.single_sub_category!=null">
                                <li ref="tabUl" :id="'subCategory_id_'+categoryInfo.id" v-on:click="tabChange(categoryInfo.id,2)">
                                    {{categoryInfo.single_sub_category.title}}
                                </li>
                            </slot>
                            </ul>
                        </div>
                    </div>
                    <div class="seeall-btn pointer">
                        SEE ALL 
                        <span class="see-all-span"> 
                            <img src="@/assets/images/arrow-blue.png" alt="">
                        </span>
                    </div>
                </div>

                <hooper  :settings="hooperSettings" :play-speed="5000">
                <slot v-if="categoryInfo.category_products.length>0">  
                    <slide v-for="(productInfo,productIndx) in categoryInfo.category_products" :key="productIndx" :class="'category_product_'+categoryInfo.id">
                        <div class="product">
                            <Card :productInfo="productInfo"/>
                        </div>
                    </slide>
                </slot>
                <slot v-if="categoryInfo.single_sub_category!=null">  
                    <slot v-if="categoryInfo.single_sub_category.sub_category_products.length>0">  
                        <slide v-for="(productInfo,productIndx) in categoryInfo.single_sub_category.sub_category_products" :key="productIndx" :class="'subCategory_product_'+categoryInfo.id">
                            <div class="product">
                                <Card :productInfo="productInfo"/>
                            </div>
                        </slide>
                    </slot>
                </slot>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                    <!-- <hooper-pagination slot="hooper-addons"></hooper-pagination> -->
                </hooper>
            </div>
            <br>
        </div>
    </div>
</template>


<script>
import { 
    Hooper,
    Slide, 
    Navigation as HooperNavigation,
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
import Card from '@/components/slider/productCard'
export default {
    name:'tab-slider',
    props:{
        tabs:Array,
        selectedTabIndex:Number,
    },
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
        Card
    },
    data() {
        return {
            categoryList:[],
            msg:'tab-slider',
            hooperSettings: {
                itemsToShow: 6,
                itemsToSlide:1,
                infiniteScroll: true,
                centerMode: true,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
                breakpoints: {
                    380: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    650: {
                        itemsToShow: 4,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 5
                    },
                    1200: {
                        itemsToShow: 6
                    }
                }
            }
        }
    },
    beforeMount(){
        this.getDualCategory();
    },
    methods:{
        tabChange(categoryId,categoryType){
            // console.dir(categoryId);
            if(categoryType==1){
                $("#category_id_"+categoryId).addClass("isActive");
                $("#subCategory_id_"+categoryId).removeClass("isActive");  
                $(".category_product_"+categoryId).show();
                $(".subCategory_product_"+categoryId).hide(); 
            }
            else{
                $("#category_id_"+categoryId).removeClass("isActive");
                $("#subCategory_id_"+categoryId).addClass("isActive"); 
                $(".category_product_"+categoryId).hide();
                $(".subCategory_product_"+categoryId).show();
            }
            
        },
        async getDualCategoryProduct(categoryInfo){
            await this.$http.get("get/random/dual/category/product")
           .then(response=>{ 
                return response.data;
           })
           .catch(error=>{console.dir(error)})
           .finally();
        },
        async getDualCategory(){
          await this.$http.get("get/random/dual/category")
           .then(response=>{ 
                this.categoryList=response.data;
           })
           .catch(error=>{console.dir(error)})
           .finally();
        },
        cicktab(currentTab) {
            console.log(currentTab);
            let tabLits = this.$refs.tabUl;
            tabLits.forEach((tab,index) => {
                (currentTab == index) ? tab.classList.add('isActive') : tab.classList.remove('isActive');
            });


        }
    }
}
</script>

<style scoped>
.hooper{
    height:auto;
    max-width: 1177px;
    margin:auto;
}
.product{
    width: 180px;
    height:270px;
}
.see-all-span{
    margin-left:10px;
}
.see-all-span img{
    margin-top:-4px;
}
.tabs{
    height:40px;
    padding: 0;
    margin:0;
}
.tabs ul{
    height:40px;
    list-style:none;
    display: flex;
    grid-column-gap:5px;
    align-items: center;
    padding:0;
}
.tabs ul li{
    min-width:200px;
    padding:0 10px;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.isActive{
    background:red;
}

/* slider header style  start */
.slider-heading{
    height:40px;
    max-width:1177px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    border:1px solid rgb(167, 165, 165);
    margin-bottom:10px;
    padding:0 0px;
    background: #1F1F1F;
    color:white;
}
.caption{
    /* font-weight: bold; */
    font-size:1.2rem;
}
.seeall-btn:hover{
    color: var(--see-all-color);
}

/* slider header style end  */
</style>
