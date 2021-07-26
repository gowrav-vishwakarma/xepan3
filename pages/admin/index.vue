<template>
  <div>
    <NuxtLogo />
    <div>{{ `${randNumber} Hi` }}</div>
    <button @click="showMessageFromBackend">Show message from backend</button>
  </div>
</template>

<script>
export default {
  layout: 'center',
  data() {
    return {
      randNumber: 0,
    }
  },
  mounted() {},
  methods: {
    async showMessageFromBackend() {
      try {
        const response = (await this.$axios.get('/api/test')).data
        this.randNumber = response.number
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>