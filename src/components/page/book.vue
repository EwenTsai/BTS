<template>
  <!--=== single blog post ===-->
  <section class="blog-post single-post">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-12-12 col-sm-12 mx-auto">
          <div class="post post-card">
            <div class="single-post-header">
              <div>出版时间</div>
              <div class="post-tag">{{ book.releaseTime }}</div>
              <ul class="list-inline blog-item-links">
                <li class="list-inline-item">
                  <a
                    v-on:click="addcart"
                    class="btn btn-primary main-btn bg-main"
                    >加入购物车</a
                  >
                </li>
              </ul>
              <h1 id="nameAndauthor">
                {{ book.bookname }} -- {{ book.author }}
              </h1>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card-details">
                  <h2>书本简介</h2>
                  <p>{{ book.intro }}</p>
                  <p></p>
                  <h2>作者简介</h2>
                  <p>{{ book.aboutAuthor }}</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="card-details">
                  <h2>价格</h2>
                  <p>{{ book.price }}</p>
                  <h2>评分</h2>
                  <p>{{ book.rate }}</p>
                </div>
              </div>
              <div class="col-6">
                <div class="card-details">
                  <h2>销量</h2>
                  <p>{{ book.sales }}</p>
                  <h2>库存</h2>
                  <p>{{ book.stock }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "book",
  data() {
    return {
      bookId: "",
      book: []
    };
  },
  created() {
    //获取路由传参
    this.bookId = this.$route.query.bookId;
    this.$axios
      .get("/Book/searchBook", {
        params: {
          id: this.bookId
        }
      })
      .then(data => {
        this.book = data.data;
      });
  },
  methods: {
    addcart() {
      this.$axios
        .get("/Cart/add", {
          params: {
            bookId: this.bookId
          }
        })
        .then(response => {
          setTimeout(() => {
            this.$router.push("/cart");
          }, 1000);
        });
    }
  }
};
</script>
