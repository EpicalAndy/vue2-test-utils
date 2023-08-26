<template>
  <div id="app">
    <img alt="Vue logo" src="assets/logo.png">
    <test-utils-counter></test-utils-counter>
  </div>
</template>

<script>
import TestUtilsCounter from "@/components/TestUtilsCounter.vue";

export default {
  name: 'App',
  components: {
    TestUtilsCounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
