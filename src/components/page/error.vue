<template>
  <div>{{ message }}</div>
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
