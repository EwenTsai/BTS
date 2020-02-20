<template>
    <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6"></div>
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="feature-wrap">
            <h1>{{ message }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "error",
  data() {
    return {
      message: ""
    };
  },
  created: function() {
    this.message = this.$route.query.message;
  }
};
</script>
