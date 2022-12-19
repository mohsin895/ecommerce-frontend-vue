<template>
  <div class="layout">
    <header-page/>
      <div class="all-pages">
        <router-view/>
      </div>
    <footer-page/>
  </div>
</template>

<script>
import headerPage from '@/layout/headerComponent'
import footerPage from '@/layout/footerComponent'
export default {
  name: 'App',
  components:{
    headerPage,
    footerPage
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
</style>
