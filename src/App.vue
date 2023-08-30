<template>
  <div id="app">
    <img alt="Vue logo" src="assets/logo.png">

    <test-utils-user-intrface></test-utils-user-intrface>
  </div>
</template>

<script>
import TestUtilsUserIntrface from "@/components/TestUtilsUserIntrface.vue";

export default {
  name: 'App',
  components: {
    TestUtilsUserIntrface,
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
