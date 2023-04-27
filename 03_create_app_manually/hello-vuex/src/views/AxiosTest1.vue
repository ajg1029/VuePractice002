<template>
  <div class="home">
    <div>AxiosTest1.vue</div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'AxiosTest1',
  components: {

  },
  data() {
    return {

    }
  },
  created() {
    axios.defaults.baseURL = 'https://dev-orderservice.baedalgeek.kr'
    axios({
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
