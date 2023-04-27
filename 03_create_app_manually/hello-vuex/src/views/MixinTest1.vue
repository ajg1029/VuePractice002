<template>
  <div>
    <div>MixinTest1.vue</div>
    <button @click="testMethod1">mixin tst 1</button>
    <button @click="testMethod2">mixin tst 2</button>
  </div>
</template>

<script>
import mixin001 from "@/mixins/mixin001.vue";

export default {
  name: 'MixinTest1',
  mixins: [mixin001],
  methods: {
    testMethod1() {
      this.wakMethod()
    },
    testMethod2() {
      console.log(this.wakMessage)
    }
  }
}
</script>