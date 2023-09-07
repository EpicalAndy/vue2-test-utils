<template>
  <div>
<!--    <div id="result">{{ value }}</div>-->
    <button id="add" @click="add">+</button>
    <button id="subtraction" @click="subtraction">-</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      localValue: this.value
    }
  },
  computed: {

  },
  methods: {
    add() {
      this.updateValue(+this.value + 1);
    },
    subtraction() {
      this.updateValue(+this.value - 1);
    },
    updateValue(value) {
      this.localValue = value;

      this.$emit('updateValue', +value);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
