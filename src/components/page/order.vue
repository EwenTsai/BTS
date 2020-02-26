<template>
  <div>
    <!--=== home 2 ===-->
    <section id="home-2" class="header-intro-1 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header-intro-wrap">
              <div class="header-intro-tag"><h2>历史订单</h2></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--=== features ===-->
    <section class="features">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <div><a href="#">订单号</a></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <div><a href="#">时间</a></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <div><a href="#">订单金额</a></div>
            </div>
          </div>
        </div>
        <!-- 订单信息展示 -->
        <div v-for="order in orderMes">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div>
                  <a href="#" v-on:click="moveTo(order.id)">{{ order.id }}</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div>{{ order.createTime }}</div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div>{{ order.amount }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 分页 -->
      <div class="container" id="pagination">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <a href="#" v-on:click="changePage(-1)" v-if="hasLastPage"
                >上一页</a
              >
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">第{{ currPage }}页</div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <a href="#" v-on:click="changePage(1)" v-if="hasFirstPage"
                >下一页</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      orderMes: [],
      uid: "",
      currPage: 1,
      hasFirstPage: true,
      hasLastPage: false
    };
  },
  created: function() {
    this.$axios.get("/Order").then(response => {
      this.orderMes = response.data.content;
      this.currPage = response.data.pageable.pageNumber + 1;
      this.hasPreviousPage = response.data.last;
      this.hasNextPage = response.data.first;
    });
  },
  methods: {
    changePage(isNextPage) {
      this.$axios.get("/Order").then(data => {
        this.orderMes = data.data.list;
        this.currPage = data.data.pageNum;
      });
    },
    moveTo(orderId) {
      this.$router.push({
        path: "/orderDetails",
        query: {
          orderId: orderId
        }
      });
    }
  }
};
</script>
