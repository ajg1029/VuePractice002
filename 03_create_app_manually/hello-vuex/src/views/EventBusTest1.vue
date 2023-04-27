<template>
  <div>
    <EventBusTest1Component1 />
    <EventBusTest1Component2 />
  </div>
</template>

<script>
import EventBusTest1Component1 from "@/components/EventBusTest1Component1.vue";
import EventBusTest1Component2 from "@/components/EventBusTest1Component2.vue";

export default {
  name: 'EventBusTest1',
  components: {EventBusTest1Component2, EventBusTest1Component1},
  created() {
    // console.log(this.DEON)
  }
}
</script>