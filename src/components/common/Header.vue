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
                        <router-link to="/" class="nav-link" href="#">电子书</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link" href="#">{{username}}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" href="#">购物车</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" href="#">订单管理</router-link>
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
        username: '登陆'
      }
  },
}
</script>