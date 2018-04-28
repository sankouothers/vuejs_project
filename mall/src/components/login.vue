<template>
  <h1>
    //引用 vuex store 的方法
    {{$store.state.login.username}}
    {{msg}}
  </h1>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      //引用 vuex store 的方法
      msg: this.$store.state.login.username
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
