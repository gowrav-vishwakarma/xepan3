<template>
  <div>
    <NuxtLogo />
    <div>{{ `${randNumber} Hi` }}</div>
    <button @click="showMessageFromBackend">Show message from backend</button>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  // auth: false,
  data() {
    return {
      randNumber: 0,
    }
  },
  created() {
    // this.$router.push('/admin/login')
  },
  mounted() {},
  methods: {
    async showMessageFromBackend() {
      try {
        const response = (await this.$axios.get('/api/_base/admin/user')).data
        this.randNumber = response.number
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>