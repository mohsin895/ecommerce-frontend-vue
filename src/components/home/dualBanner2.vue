<template>
    <div class="dual-banner">
        <div class="banner-wrapper">
            <slot v-for="(bannerInfo,bannerIndex) in bannerList" >
                <img v-lazy="bannerInfo.base_url+bannerInfo.banner_url" :alt="bannerInfo.title">
            </slot>
        </div>
    </div>
</template>

<script>

export default {
    name:'dual-banner2',
    data() {
        return {
            bannerList:[],
            msg:'dual-banner2'
        }
    }, 
    beforeMount() {
        this.getDualBanner();
    },
    methods:{
        getDualBanner(){
           this.$http.get("get/random/banner/list")
           .then(response=>{ 
                this.bannerList=response.data;
           })
           .catch(error=>{console.dir(error)})
           .finally();
        },
    }
}
</script>

<style scoped>
.banner-wrapper{
    width:100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding:0 10px;
}
.banner-wrapper img {
    display: block;
    width:49.3%;
    object-fit: contain;
}
</style>
