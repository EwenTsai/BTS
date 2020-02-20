<template>
  <div id="app">
    <Header v-if="isUser"></Header>
    <Admin v-if="isAdmin"></Admin>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

import Admin from "@/components/common/admin.vue";

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
  name: "App",
  data() {
    return {
      uid: -1,
      isAdmin: false,
      isUser: true
    };
  },
  components: { Header, Footer, Admin },
  created: function() {
    this.update;
  },
  mounted: function() {
    console.log("app mounted");
  },
  //监听器
  watch: {
    // 方法1
    $route(to, from) {
      this.update;
      console.log("change");
    },
    methods: {
      update() {
        this.uid = localStorage.getItem("uid");
        if (this.uid === null) {
          this.uid = -1;
          this.isUser = false;
          this.isAdmin = true;
        }
        this.$axios
          .get("/user/check", {
            params: {
              uid: this.uid
            }
          })
          .then(response => {
            if (response.data.code === 200) {
              this.isAdmin = response.data.data.admin;
              if (this.isAdmin) {
                this.isUser = false;
              } else {
                this.isUser = true;
              }
            } else {
              this.isRouterAlive = false;
              this.isUser = true;
              this.isAdmin = false;
              this.isRouterAlive = true;
            }
          })
          .catch(response => {
            this.isRouterAlive = false;
            this.isUser = true;
            this.isAdmin = false;
            this.isRouterAlive = true;
          });
      }
    }
  }
};
</script>
