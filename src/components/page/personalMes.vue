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
            <div class="col-2">头像</div>
            <div class="justify-content-start">用户名:{{username}}</div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-2">性别:{{sex}}</div>
            <div class="col-3">出生日期:{{birthday}}</div>
        </div>
        <div class="row">
            <div class="col-7"></div>
            <a class="btn btn-primary main-btn bg-main" v-on:click="logout">退出登陆</a>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'personalMes',
    data (){
        return{
            username: '',
            sex: '',
            birthday: ''
        }
    },
    created: function(){
      //获取用户信息
        this.uid = localStorage.getItem('uid')
        this.$axios
        .get('/user/check',{
            params:{
                uid: this.uid
            }
        })
        .then(response=>{
            if(response.data.code === 200){
                this.username = response.data.data.uname
                this.sex = '男'
                this.birthday = response.data.data.birthday
            }
        })
    },
    methods:{
        logout(){
            //删除localstorage
            localStorage.removeItem('uid')
            //删除cookie
            this.$cookies.remove('uid')
            this.$router.go(0)
            this.$router.replace({path: '/index'})
        }
    }
}
</script>