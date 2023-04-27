<script>
export default {
  data() {
    return {
      wakMessage: 'anonymous W',
      wakVoice: 'Wakaloid'
    }
  },
  methods: {
    wakMethod() {
      console.log(`${this.wakVoice} : 우와 이게 뭐야`)
    }
  }
}
</script>