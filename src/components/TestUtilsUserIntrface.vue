<template>
  <div>
    <test-utils-counter :value="value"
                        @updateValue="updateValue($event)"></test-utils-counter>

    <div id="result"
         class="result">
      Value: {{ value }}
    </div>
  </div>
</template>

<script>
import TestUtilsCounter from "@/components/TestUtilsCounter.vue";

export default {
  components: { TestUtilsCounter },
  data() {
    return {
      value: 0
    }
  },
  methods: {
    updateValue(event) {
      this.value = +event;
    }
  }
}
</script>

<style scoped>
.result {
  margin-top: 1em;
  border: steelblue solid 1px;
}
</style>
