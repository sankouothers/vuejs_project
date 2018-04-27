<template>
  <h1>
    {{$store.state.login.username}}
  </h1>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      // msg:$store.state.show
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
