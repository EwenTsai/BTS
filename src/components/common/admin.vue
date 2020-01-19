<template>
<!--=== navbar ===-->
<header class="header">
    <nav class="navbar navbar-expand-sm">
        <div class="container">
            <a class="navbar-brand" href="#">EShop-Admin</a>
            <div class="collapse navbar-collapse" id="example-navbar" data-nav-image="assets/img/blurred-image-1.jpg">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/admin.mian" class="nav-link" href="#">首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/books" class="nav-link" href="#">用户管理</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/eBook" class="nav-link" href="#">书籍管理</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart" class="nav-link" href="#">订单管理</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
export default {
  name: 'Admin',
  data(){
      return{
        username: '登陆',
        uid: -1,
        isLogin: ''
      }
  },
}
</script>