<template>
  <div>
    <!--=== home 2 ===-->
    <section id="home-2" class="header-intro-1 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header-intro-wrap">
              <div>
                  <h1>电子书</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--=== features ===-->
    <section class="features">
      <div class="container" id="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <div><a href="#">编号</a></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <div><a href="#">作者</a></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <div><a href="#">简介</a></div>
            </div>
          </div>
        </div>
        <div v-for="eBook in booksMes">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div>
                  {{eBook.id}}
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div>{{ eBook.bookname }}</div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <a href="#" v-on:click="download">
                  下载链接
                </a>
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
              <a href="#" v-on:click="changePage(-1)" v-if="hasPreviousPage"
                >上一页</a
              >
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">第{{ currPage }}页</div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <a href="#" v-on:click="changePage(1)" v-if="hasNextPage"
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
  name: "books",
  data() {
    return {
      style: {
        first: "hidden",
        second: "ellipsis",
        third: "nowrap"
      },
      booksMes: [],
      searchText: "",
      currPage: 1,
      hasPreviousPage: true,
      hasNextPage: false
    };
  },
  created: function() {
    this.$axios.get("/EBook").then(data => {
      this.booksMes = data.data.list;
      this.currPage = data.data.pageNum;
      this.hasPreviousPage = data.data.hasPreviousPage;
      this.hasNextPage = data.data.hasNextPage;
    });
  },
  methods: {
    changePage(isNextPage) {
      this.$axios
        .get("/EBook", {
          params: {
            pageNum: this.currPage + isNextPage
          }
        })
        .then(data => {
          this.booksMes = data.data.list;
          this.currPage = data.data.pageNum;
          this.hasPreviousPage = data.data.hasPreviousPage;
          this.hasNextPage = data.data.hasNextPage;
        });
    },
    download(bookId) {
      this.$router.push({
        path: "/book",
        query: {
          bookId: bookId
        }
      });
    }
  }
};
</script>
