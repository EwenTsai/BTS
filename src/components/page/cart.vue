<template>
  <div>
    <!--=== home 2 ===-->
    <section id="home-2" class="header-intro-1 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header-intro-wrap">
              <div class="header-intro-tag"><h1>购物车</h1></div>
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
              <div><a href="#">书名</a></div>
            </div>
          </div>
          <!-- 数量 -->
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <div><a href="#">单价</a></div>
            </div>
          </div>
        </div>
        <div v-for="book in cartMes">
          <div class="row">
            <!-- 书名 -->
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div>
                  <a href="#">{{ book.bookname }}</a>
                </div>
              </div>
            </div>
            <!-- 数量 -->
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div>
                  <a href="#">{{ book.price }}</a>
                </div>
              </div>
            </div>
            <!-- 删除链接 -->
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div><a href="#" v-on:click="delBook(book.id)">删除</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6"></div>
          <div class="col-lg-4 col-md-4 col-sm-6"></div >
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">总价：</div>
            <div class="feature-wrap">{{ amount }}</div>
            <div>
              <a
                href="#"
                v-on:click="settleAccount()"
                class="btn btn-primary main-btn bg-main"
                >结算</a
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
  name: "cart",
  data() {
    return {
      cartMes: [],
      amount: 0,
      bookId: ""
    };
  },
  mounted: function() {
    this.$nextTick(() => {
      this.$axios
      .get("/Cart")
      .then(response => {
        console.log(response.data)
        this.cartMes = response.data.data;
        for(var book in this.cartMes){
          this.amount+=this.cartMes[book].price;
        }
      });
    });
  },
  methods: {
    delBook(bookId) {
      this.$axios
      .get("/Cart/delete", {
        params: {
          bookId: bookId
        }
      })
      .then(response=>{
        this.$router.go(0)
      })
    },
    settleAccount(){
      this.$axios
      .get("/Cart/settle",{
        params: {
          amount: this.amount
        }
      })
    }
  }
};
</script>
