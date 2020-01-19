<template>
  <div id="app">
    <!-- <Header></Header> -->
    <Admin></Admin>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

import Admin from '@/components/common/admin.vue'

//js
import "../static/js/jquery-3.2.1.slim.min.js";
import "../static/js/popper.min.js";
import "../static/js/app.js";
import "../static/js/util.js";

//bootstrap css
import "../static/bootstrap-4.0.0-beta/css/bootstrap.min.css";
import "../static/bootstrap-4.0.0-beta/css/bootstrap.css";
import "../static/bootstrap-4.0.0-beta/css/bootstrap-grid.css";
import "../static/bootstrap-4.0.0-beta/css/bootstrap-grid.min.css";
import "../static/bootstrap-4.0.0-beta/css/bootstrap-reboot.css";
import "../static/bootstrap-4.0.0-beta/css/bootstrap-reboot.min.css";

//css
import "../static/css/ionicons.css";
import "../static/css/app.css";
//font
import "../static/fonts/ionicons.eot";
import "../static/fonts/ionicons.svg";
import "../static/fonts/ionicons.ttf";
import "../static/fonts/ionicons.woff";

export default {
  name: 'App',
  data(){
    return{
      isAdmin: false
    }
  },
  components:{Header,Footer,Admin},
  created: function(){

  }
}
</script>