<template>
    <div class="user">
        <headerPage/>
            <div class="loyel-container">
                <div class="user-content-wrapper">
                    <div class="user-left">
                        <UserSidebar/>
                    </div>
                    <div class="right-part">
                        <router-view/>
                    </div>
                </div>
            </div>
        <footerPage/>
    </div>
</template>

<script>
import UserSidebar from '@/components/user/userSidebar'
import headerPage from '@/layout/headerComponent'
import footerPage from '@/layout/footerComponent'
export default {
    name: 'user',
    components:{
        UserSidebar,
        headerPage,
        footerPage
    },
    data() {
        return {
            msg:'profilePage',
        }
    }
}
</script>

<style scoped>

.user-content-wrapper{
    display: flex;
    padding:30px 0;
}
.user-left{
    width:250px;
}
.right-part{
    width: calc(100%-250px);
}

</style>

<style scoped>
@import '../../assets/css/style.css';
@import '../../assets/css/normalize.css';
</style>