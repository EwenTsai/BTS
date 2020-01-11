<template>
<!--=== navbar ===-->
<header class="header">
    <nav class="navbar navbar-expand-sm">
        <div class="container">
            <a class="navbar-brand" href="index.html">EShop</a>
            <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
            </button>
            <div class="collapse navbar-collapse" id="example-navbar" data-nav-image="assets/img/blurred-image-1.jpg">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" href="#" v-on:click="moveToPage('/')">首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/books" class="nav-link" href="#">纸质书</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/eBook" class="nav-link" href="#">电子书</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" v-on:click="moveTo">{{username}}</a>
                    </li>
                    <li class="nav-item" v-show="isLogin">
                        <router-link to="/cart" class="nav-link" href="#">购物车</router-link>
                    </li>
                    <li class="nav-item" v-show="isLogin">
                        <router-link to="/order" class="nav-link" href="#">订单管理</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
export default {
  name: 'Header',
  data(){
      return{
        username: '登陆',
        uid: -1,
        isLogin: ''
      }
  },
  created:function () {
      //登陆状态检查
    this.uid = localStorage.getItem('uid')
    this.$axios
    .get('/user/check',{
        params:{
            uid: this.uid
        }
    })
    .then(response=>{
        if(response.data.code === 200){
            this.isLogin = true
            this.username = response.data.data.uname
        }
    })
    .catch(response=>{
        this.isLogin = false
        this.username = '登陆'
    })
  },
    methods:{
        moveTo(){
            if(this.isLogin===false){
                this.$router.push({path: '/login'})
            }else{
                this.$router.push({path: '/personalMes'})
            }
        }
    }
}
</script>