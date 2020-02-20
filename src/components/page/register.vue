<template>
  <div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6"></div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <div>
                用户名:<input
                  type="text"
                  v-model="registerInfoVo.username"
                  placeholder="请输入用户名"
                />
                <br />
                密码：<input
                  type="password"
                  v-model="registerInfoVo.password"
                  placeholder="请输入密码"
                />
                <br />
                再次输入：<input
                  type="password"
                  v-model="registerInfoVo.repassword"
                  placeholder="请输入密码"
                />
                <br />
                验证码:<input
                  type="text"
                  v-model="registerInfoVo.vaildateCode"
                  placeholder="请输入验证码"
                />
                <img src="http://localhost/BTS/api/kaptcha" />
                <button v-on:click="register">注册</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      registerInfoVo: {
        username: "",
        password: "",
        repassword: "",
        vaildateCode: ""
      }
    };
  },
  methods: {
    register() {
      this.$axios
        .post("/user/register", {
          uname: this.registerInfoVo.username,
          pwd: this.registerInfoVo.password,
          rePwd: this.registerInfoVo.repassword,
          kaptchaCode: this.registerInfoVo.vaildateCode
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$router.replace({ path: "/index" });
          } else {
            this.$router.push({
              path: "/error",
              query: {
                message: successResponse.data.message
              }
            });
          }
        })
        .catch(failresponse => {});
    }
  }
};
</script>
