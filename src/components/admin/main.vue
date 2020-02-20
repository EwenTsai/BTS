<template>
  <div>
    <section id="home-2" class="header-intro-1 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header-intro-wrap">
              <h1>后台管理系统</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header-intro-wrap">
              <a
                v-on:click="logout"
                class="btn btn-primary main-btn bg-main"
                >登出</a
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
  name: "admin.main",
  data() {
    return {
      bookId: "",
      book: []
    };
  },
  methods: {
    logout() {
      //删除localstorage
      localStorage.removeItem("uid");
      //删除cookie
      this.$cookies.remove("uid");
      this.$router.go(0);
      this.$router.replace({ path: "/index" });
    }
  }
};
</script>
