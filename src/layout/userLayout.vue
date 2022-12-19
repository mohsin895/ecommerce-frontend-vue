<template>
  <div class="user-layout">
    <header-page/>
      <div class="user-pages">
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
      </div>
    <footer-page/>
  </div>
</template>

<script>
import headerPage from '@/layout/headerComponent'
import footerPage from '@/layout/footerComponent'
import UserSidebar from '@/components/user/userSidebar'
export default {
  name: 'userLayout',
  components:{
    headerPage,
    footerPage,
    UserSidebar
  },
  data() {
    return {
      msg:'appFile'
    }
  }
}
</script>

<style>
@import '../assets/css/style.css';
@import '../assets/css/normalize.css';
.user-content-wrapper{
    display: flex;
    padding:30px 0;
    grid-column-gap: 30px;
}
.user-left{
    max-width:250px;
}
.right-part{
    width: 100%;
    min-height: 800px;
}

@media (max-width: 800px) {
  .user-content-wrapper {
    flex-flow: row wrap;
  }
  .user-left {
    width:100%;
    margin: auto;
  }
}
</style>
