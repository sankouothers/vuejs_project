<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    if (process.env.NODE_ENV === "mock") {
      var Mock = require("./mock");// import mock
      Mock.mock('en'); // mock data
    }
  },
}
</script>

<style>
</style>
