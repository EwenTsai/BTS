<template>
  <!--=== navbar ===-->
  <header class="header">
    <nav class="navbar navbar-expand-sm">
      <div class="container">
        <a class="navbar-brand" href="#">EShop</a>
        <div
          class="collapse navbar-collapse"
          id="example-navbar"
          data-nav-image="assets/img/blurred-image-1.jpg"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link"
                href="#"
                v-on:click="moveToPage('/')"
                >首页</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/books" class="nav-link" href="#"
                >纸质书</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/eBook" class="nav-link" href="#"
                >电子书</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-on:click="moveTo">{{
                username
              }}</a>
            </li>
            <li class="nav-item" v-show="isLogin">
              <router-link to="/cart" class="nav-link" href="#"
                >购物车</router-link
              >
            </li>
            <li class="nav-item" v-show="isLogin">
              <router-link to="/order" class="nav-link" href="#"
                >订单管理</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import store from '../../store'

export default {
  name: "Header",
  data() {
    return {
      username: "登陆",
      uid: -1,
      isLogin: ""
    };
  },
  created: function() {
    //登陆状态检查
    this.uid = localStorage.getItem("uid");
    this.$axios
      .get("/user/check", {
        params: {
          uid: this.uid
        }
      })
      .then(response => {
        if (response.data.code === 200) {
          this.isLogin = true;
          this.username = response.data.data.uname;
          console.log('Header.admin'+response.data.data.admin)
          store.commit('login',response.data.data.admin)
        }
      })
      .catch(response => {
        this.isLogin = false;
        this.username = "登陆";
      });
  },
  mounted: function() {
    console.log("mounted");
  },
  destroyed: function() {
    console.log("destroyed");
  },
  methods: {
    moveTo() {
      if (this.isLogin === false) {
        this.$router.push({ path: "/login" });
      } else {
        this.$router.push({ path: "/personalMes" });
      }
    }
  }
};
</script>
