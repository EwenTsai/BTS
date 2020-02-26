<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6"></div>
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="feature-wrap">
            <div>
              用户名:<input
                type="text"
                v-model="loginInfoVo.username"
                placeholder="请输入用户名"
              />
              <br />
              密 码：<input
                type="password"
                v-model="loginInfoVo.password"
                placeholder="请输入密码"
              />
              <br />
              验证码:<input
                type="text"
                v-model="loginInfoVo.vaildateCode"
                placeholder="请输入验证码"
              />
              <img
                src="http://localhost/BTS/api/kaptcha"
                title="图片看不清？点击重新得到验证码"
              />
              <button v-on:click="login">登录</button>
              <br />
              还没有帐户？<router-link to="/register">注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import store from "../../store"

export default {
  name: "login",
  data() {
    return {
      loginInfoVo: { username: "", password: "", vaildateCode: "" }
    };
  },
  methods: {
    login() {
      this.$axios
        .post("/user/login", {
          uname: this.loginInfoVo.username,
          pwd: this.loginInfoVo.password,
          kaptchaCode: this.loginInfoVo.vaildateCode
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            //将登陆状态储存在localstorage
            localStorage.setItem("uid", successResponse.data.data.uid);
            store.commit('login',successResponse.data.data.role)
            this.$router.push({ path: "/index" });
          } else {
            this.$router.push({
              path: "/error",
              query: {
                message: successResponse.data.message
              }
            });
          }
        })
        .catch(failResponse => {});
    }
  }
};
</script>
