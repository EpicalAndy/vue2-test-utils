<template>
  <div>
    <div id="result">{{ value }}</div>
    <button id="add" @click="add">+</button>
    <button id="subtraction" @click="subtraction">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    }
  },
  methods: {
    add() {
      this.value ++;

      this.$emit('add', this.value);
    },
    subtraction() {
      this.value --;

      this.$emit('subtraction', this.value);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
