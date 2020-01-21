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
                </li>
              </ul>
              <h1 id="nameAndauthor">
                <input type="text" v-model="book.bookname"/><br><br>
                <input type="text" v-model="book.author"/>
              </h1>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card-details">
                  <h2>书本简介</h2>
                  <textarea cols="100%" rows="5">{{ book.intro }}</textarea>
                  <h2>作者简介</h2>
                  <textarea cols="100%" rows="5">{{ book.aboutAuthor }}</textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="card-details">
                  <h2>价格</h2>
                  <input type="text" v-model="book.price">
                  <h2>评分</h2>
                  <input type="text" v-model="book.rate">
                </div>
              </div>
              <div class="col-6">
                <div class="card-details">
                  <h2>库存</h2>
                  <input type="text" v-model="book.stock">
                  <h2>销量</h2>
                  <input type="text" v-model="book.sales">
                </div>
              </div>
            </div>
            <br><br><br>
            <div class="row">
              <div class="col-9"></div>
              <div><button v-on:click="update">提交</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { formatDate } from '../../../static/js/date.js'

export default {
  name: "admin.book",
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
      update(){
          this.$axios
          .get("/Admin/updateBook",{
              params:{
                  id: this.book.id,
                  bookname: this.book.bookname,
                  author: this.book.author,
                  releaseTime: this.book.releaseTime,
                  intro: this.book.intro,
                  price: this.book.price,
                  rate: this.book.rate,
                  aboutAuthor: this.book.aboutAuthor,
                  stock: this.book.stock,
                  sales: this.book.sales
              }
          })
      }
  }
};
</script>