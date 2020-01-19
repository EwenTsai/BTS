<template>
  <div>
    <!--=== home 3 ===-->
    <section id="home-3" class="header-intro-1 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header-intro-wrap">
              <div class="header-intro-title"><h1>个 人 信 息</h1></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="row">
        <div class="col-1"></div>
        <div class="justify-content-start">用户名:{{ updateUserVo.uname }}</div>
      </div>
      <br /><br />
      <div class="row">
        <div class="col-1"></div>
        <div class="col-2">性别:
          <select v-model="updateUserVo.sex">
            <option value="男">男</option>
            <option value="女">女</option>
          </select></div>
        <div class="col-3">出生日期:{{ updateUserVo.birthday }}
          <v-date-picker v-model="updateUserVo.birthday" format="yyyy-MM-dd"></v-date-picker>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-4"></div>
          <a class="btn btn-primary main-btn bg-main" v-on:click="update"
          >保存信息</a
        >
        <div class="col-2"></div>
        <a class="btn btn-primary main-btn bg-main" v-on:click="logout"
          >退出登陆</a
        >
      </div>
    </section>
  </div>
</template>

<script>

import atui from 'atui'
import 'atui/dist/greater-blue.css'

export default {
  
  name: "personalMes",
  components: {
    vButton: atui.Button,
    vDatePicker: atui.DatePicker
  },
  data() {
    return {
      updateUserVo: { uname: "", sex: "", birthday: ""},
      newBirthday: '',
      date: "2017-01-01"
    };
  },
  created: function() {
    //获取用户信息
    this.uid = localStorage.getItem("uid");
    this.$axios
      .get("/user/check", {
        params: {
          uid: this.uid
        }
      })
      .then(response => {
        if (response.data.code === 200) {
          this.updateUserVo.uname = response.data.data.uname;
          this.updateUserVo.sex = response.data.data.sex;
          this.updateUserVo.birthday = response.data.data.birthday;
        }
      })
  },
  methods: {
    logout() {
      //删除localstorage
      localStorage.removeItem("uid");
      //删除cookie
      this.$cookies.remove("uid");
      this.$router.go(0);
      this.$router.replace({ path: "/index" });
    },
    update () {
      console.log("newBirthday"+this.newBirthday);
      console.log("birthday"+this.updateUserVo.birthday);
      // if(this.updateUserVo.birthday==""){
      //   this.updateUserVo.birthday = this.birthday;
      // }
      this.$axios
      .get("/user/update",{
        params:{
          uname: this.updateUserVo.uname,
          sex: this.updateUserVo.sex,
          birthday: this.updateUserVo.birthday
        }
      })
      .then(response => {
        console.log(response.data);
      })
    }
  }
};
</script>
