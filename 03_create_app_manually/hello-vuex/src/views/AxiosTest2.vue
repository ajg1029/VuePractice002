<template>
  <div class="home">
    <div>AxiosTest2.vue</div>
  </div>
</template>

<script>
console.log('src/views/AxiosText2.vue')
// @ is an alias to /src

export default {
  name: 'AxiosTest2',
  components: {

  },
  data() {
    return {

    }
  },
  created() {
    console.log(this.DEON)
    this.axios({
      url: '/api/v1/orders/',
      method: 'get',
      params: {
        campusCode: '3A',
        targetDate: '2023-04-01',
        targetEndDate: '2023-04-30'
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
