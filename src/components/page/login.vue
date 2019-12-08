<template>
  <div>
    <div>
      用户名:<input type="text" v-model="loginInfoVo.username" placeholder="请输入用户名" />
      <br/>
      密码：<input type="password" v-model="loginInfoVo.password" placeholder="请输入密码" />
      <br/>
      验证码:<input type="text" v-model="loginInfoVo.vaildateCode" placeholder="请输入验证码"/>
      <img src='http://localhost/BTS/api/refreshCode'>
      <button v-on:click="login">登录</button>
      <br/>
      还没有帐户？<router-link to="/register">注册</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      loginInfoVo: { username: '', password: '',vaildateCode: '' },
    }
  },
  methods: {
    login () {
      this.$axios
      .post('/user/login', {
        uname: this.loginInfoVo.username,
        pwd: this.loginInfoVo.password,
        vaildateCode: this.loginInfoVo.vaildateCode,
      })
      .then(successResponse => {
        this.responseResult = JSON.stringify(successResponse.data)
        if (successResponse.data.code === 200) {
          //将登陆状态储存在localstorage
          localStorage.setItem('uid',this.$cookies.get('uid'))
          this.$router.go(0)
          this.$router.push({path: '/index'})
        }else{
          this.$router.push({
              path: '/error',
              query: {
                  message: successResponse.data.message
              }
          })
        }
      })
      .catch(failResponse => {})
    }
  }
}
</script>