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
        订单号：
        <div class="justify-content-start">{{ orderId }}</div>
        <div class="col-3">金额:{{ amount }}</div>
      </div>
      <br /><br />
      <div class="row">
        <div class="col-1"></div>
        <div class="col-3">
          订单内包含的书本
          <div v-for="name in bookNameArray">
            {{ name }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-1"></div>
      </div>
      <div class="row">
        <div class="col-8"></div>
        <div>
          <a v-on:click="doDelete(orderId)" class="btn btn-primary main-btn bg-main"
            >删除订单</a
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "orderDetailss",
  data() {
    return {
      bookNameArray: [],
      orderId: "",
      amount: "",
      bookId: []
    };
  },
  created: function() {
    this.orderId = this.$route.query.orderId;
    this.$axios
      .get("/Order/get", {
        params: {
          orderId: this.orderId
        }
      })
      .then(response => {
        console.log(response.data)
        this.orderId = response.data.data.orderId
        this.amount = response.data.data.amount
        this.bookNameArray = response.data.data.booknames
      });
  },
  methods:{
    doDelete(orderId){
      this.$axios
      .get("/Order/remove",{
        params:{
          orderId: orderId
        }
      })
    }
  }
};
</script>
