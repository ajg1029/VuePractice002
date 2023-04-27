<template>
  <div>
    <div>EventBusTest1Component2.vue</div>
  </div>
</template>

<script>
console.log('EventBusTest1Component2.vue')
export default {
  name: 'EventBusTest1Component2',
  created() {
    console.log('EventBusTest1Component2 - created')
    this.EventBus.$on('sayHello', (payload) => {
      console.log(payload.text)
    })
  }
}
</script>