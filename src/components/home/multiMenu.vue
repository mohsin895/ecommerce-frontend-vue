<template>
    <div class="multi-menu">
        <div class="mega-menu">
            <ul>

                <li v-for="(megaCategory,megaIndex) in categoryList" :key="megaIndex">
                    <!-- <pre>{{categoryList}}</pre> -->
                    <div class="item" @click="gotoCategoryPage(megaCategory)">
                        <div class="icon-div">
                        <slot v-if="megaCategory.category_image!=null">
                            <img v-lazy="megaCategory.category_image.base_url+megaCategory.category_image.category_image" :alt="megaCategory.title" height="15" width="15">
                        </slot>
                           <!--  <v-icon name="charging-station"/> -->
                        </div>
                        <div class="icon-text">
                            {{megaCategory.title}}
                            <div class="menu-arrow"> 
                                <img src="@/assets/images/arrow.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="details">
                        <div class="menu-wrapper">
                            <slot v-if="megaCategory.sub_category!=null">
                                <div class="menu-1" v-for="(subCategory,subCategoryIndex) in megaCategory.sub_category" :key="subCategoryIndex">
                                    <h6 @click="gotoCategoryPage(subCategory)">{{subCategory.title}}</h6>
                                    <div class="menu-1-body">
                                         <slot v-if="subCategory.sub_category!=null">    
                                            <div class="menu-1-item" v-for="(normalCategory,normalCategoryIndex) in subCategory.sub_category" :key="normalCategoryIndex" @click="gotoCategoryPage(normalCategory)">
                                                {{normalCategory.title}}
                                            </div>
                                        </slot>
                                    </div>
                                </div>
                            </slot>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'multi-menu',
    data() {
        return {
           categoryList:[],
        }
    },
    beforeMount() {
        this.getCategory();
    },
    methods:{
        gotoCategoryPage(dataInfo){
            this.$router.push({name:'categoryPage',params:{slug:dataInfo.slug.split(' ').join('-')}});
        },
        getCategory(){
           this.$http.get("get/category/list")
           .then(response=>{ 
                this.categoryList=response.data;
           })
           .catch(error=>{console.dir(error)})
           .finally();
        },
    }
}
</script>

<style scoped>
ul {
    position:relative;
    list-style: none;
    padding:8px 0 8px 5px;
}
ul li {
    height:40px;
    padding:0 0 0 10px;
    transition: .1s;
}
ul li:hover{
    background:rgb(248, 247, 247);
    box-shadow: 1px 1px 1px rgba(0,0,0,0.1),-1px -1px 1px rgba(0,0,0,.1);

}
ul li .item{
    height:100%;
    display: flex;
    cursor:pointer;
    align-items: center;
    border-bottom: 1px solid gray;
}
ul li .details{
    position:absolute;
    width:800px;
    background: #e5e5e5;
    left:300px;
    top:0;
    z-index:10;
    visibility: hidden;
    height:0;
}
ul li:hover  .details{
    visibility: visible;
    min-height: 470px;
}
.menu-wrapper{
    display: flex;
    flex-flow: row wrap;
    grid-column-gap:14px;
    padding: 10px;
}
.menu-1{
    height:auto;
    width:250px;
    padding:10px 0px;
    /* background:white;
    border:1px solid black; */
}
.menu-1{
    text-align: left;
}
.icon-div{
    width:30px;
}
.icon-text{
    margin-left:4px;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    width:calc(100% - 30px);
}
.menu-1 h6{
    cursor: pointer;
    font-weight: bold;
}
.menu-1-item{
    cursor: pointer;
}
</style>
