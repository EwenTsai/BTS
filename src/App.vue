<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  name: 'App',
  components:{Header,Footer},
}
</script>

<style>
  @import "../static/bootstrap-4.0.0-beta/css/bootstrap.min.css";
  @import "../static/css/ionicons.css";
  @import "../static/css/app.css";
</style>
