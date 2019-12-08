<template>
    <div>
        <!--=== home 3 ===-->
        <section id="home-3" class="header-intro-1 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="header-intro-wrap">
                            <div class="header-intro-title"><h1>订 单 详 情</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="row">
                <div class="col-1"></div>
                订单号：<div class="justify-content-start">{{orderId}}</div>
                <div class="col-3">金额:{{amount}}</div>
            </div>
            <br><br>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-3">订单内包含的书本</div>
            </div>
            <div class="row">
                <div class="col-1"></div>
            </div>
            <div class="row">
                <div class="col-8"></div>
                <div><a onclick="doDelete()" class="btn btn-primary main-btn bg-main">删除订单</a></div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'orderDetailss',
    data(){
        return{
            id: '',
            orderMes: [],
            bookNameArray: [],
            orderId: '',
            amount: ''
        }
    },
    created: function(){
        this.id = this.$route.query.orderId
        this.$axios
        .get('/Order/get',{
            params:{
                orderId: this.id
            }
        })
        .then(response=>{
            this.orderMes = response.data
            this.orderId = this.orderMes[0].orderId
            this.amount = this.orderMes[1].amount
            // console.log(response.data)
        })
        this.getBookMes()
        // for (let i = 0; i < this.orderMes.length-1; i++) {
            // this.$axios
            // .get('/Book/searchBook',{
            //     params:{
            //         id: this.orderMes[0].bookId
            //     }
            // })
            // .then(response=>{
            //     console.log(this.orderMes[0].bookId)
            //     console.log(response)
            // })
        // }
    },
    methods:{
        getBookMes(){
            this.$axios
            .get('/Book/searchBook',{
                params:{
                    id: this.orderMes[0].bookId
                }
            })
            .then(response=>{
                // console.log('bookId',this.orderMes[0].bookId) 
                console.log(response.data)
            })
        }
    }
}
</script>