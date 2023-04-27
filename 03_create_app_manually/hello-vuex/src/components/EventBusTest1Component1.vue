<template>
  <div>
    <div>
      EventBusTest1Component1.vue
      <button @click="testMethod">hello</button>
    </div>
  </div>
</template>

<script>
console.log('EventBusTest1Component1.vue')
export default {
  name: 'EventBusTest1Component1',
  created() {
    console.log('EventBusTest1Component1 - created')
  },
  methods: {
    testMethod() {
      const someWeirdPayload = { text: 'hello', samsung: 'galaxy'}
      this.EventBus.$emit('sayHello', someWeirdPayload)
    }
  }
}
</script>