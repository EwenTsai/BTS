<template>
  <div>
    <!--=== home 2 ===-->
    <section id="home-2" class="header-intro-1 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header-intro-wrap"><h1>书籍管理</h1>
              <div class="header-intro-tag">
                <input type="text" v-model="searchText" />
              </div>
              <div>
                <a
                  v-on:click="searchBook"
                  class="btn btn-primary main-btn bg-main"
                  >搜索</a
                >
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
              <div><a href="#">书名</a></div>
            </div>
          </div>
        </div>
        <div v-for="book in booksMes">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div>
                  <a href="#" v-on:click="moveToBook(book.id)">{{
                    book.id
                  }}</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div>{{ book.bookname }}</div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div><button href="#" v-on:click="updateBook(book.id)">修改</button>
                </div>
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
              <a href="#" v-on:click="changePage(-1)" v-if="hasPreviousPage">上一页</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">第{{ currPage }}页</div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <a href="#" v-on:click="changePage(1)" v-if="hasNextPage">下一页</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "admin.books",
  data() {
    return {
      booksMes: [],
      searchText: "",
      currPage: 1,
      hasPreviousPage: true,
      hasNextPage: false,
    };
  },
  created: function() {
    this.$axios
      .get("/Admin/Book")
      .then(data => {
        this.booksMes = data.data.list;
        this.currPage = data.data.pageNum;
        this.hasPreviousPage = data.data.hasPreviousPage;
        this.hasNextPage = data.data.hasNextPage;
      });
  },
  methods: {
    searchBook() {
      this.$axios
        .get("/Book/search", {
          params: {
            searchText: this.searchText
          }
        })
        .then(data => {
          this.booksMes = data.data;
        });
    },
    changePage(isNextPage) {
      this.$axios
        .get("/Admin/Book", {
          params: {
            pageNum: this.currPage+isNextPage
          }
        })
        .then(data => {
          this.booksMes = data.data.list;
          this.currPage = data.data.pageNum;
          this.hasPreviousPage = data.data.hasPreviousPage;
          this.hasNextPage = data.data.hasNextPage;
        });
    },
    moveToBook(bookId) {
      this.$router.push({
        path: "/book",
        query: {
          bookId: bookId
        }
      });
    },
    updateBook(bookId){
      this.$router.push({
        path: "/Admin/Book",
        query: {
          bookId: bookId
        }
      });
    }
  }
};
</script>
