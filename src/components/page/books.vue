<template>
  <div>
    <!--=== home 2 ===-->
    <section id="home-2" class="header-intro-1 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header-intro-wrap">
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
              <div><a href="#">书名</a></div>
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
        <div v-for="book in booksMes">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div>
                  <a href="#" v-on:click="moveToBook(book.id)">{{
                    book.bookname
                  }}</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div>{{ book.author }}</div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="feature-wrap">
                <div
                  v-bind:style="{
                    overflow: style.first,
                    'text-overflow': style.second,
                    'white-space': style.third
                  }"
                >
                  {{ book.intro }}
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
              <a href="#" v-on:click="changePage(-1)">上一页</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <a href="#" id="pageNum">{{ currPage }}</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="feature-wrap">
              <a href="#" v-on:click="changePage(1)">
                下一页
              </a>
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
      currPage: 1
    };
  },
  created: function() {
    this.$axios
      .get("/pagination", {
        params: {
          paginationClass: "newBook"
        }
      })
      .then(data => {
        this.booksMes = data.data;
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
          console.log(data.data);
          this.booksMes = data.data;
        });
    },
    changePage(isNextPage) {
      this.$axios
        .get("/pagination", {
          params: {
            paginationClass: "newBook",
            isNextPage: isNextPage
          }
        })
        .then(data => {
          this.booksMes = data.data;
          this.currPage = this.currPage + isNextPage;
        });
    },
    moveToBook(bookId) {
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
