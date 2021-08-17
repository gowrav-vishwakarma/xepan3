<template>
  <div>
    <NuxtLogo />
    <div>{{ `${randNumber} Hi` }}</div>
    <button @click="showMessageFromBackend">Show message from backend</button>
    <button @click="logout">LOGOUT</button>
    <div>
      <xEpanAppsList />
    </div>
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
        const response = (await this.$axios.get('/api/admin/user')).data
        this.randNumber = response.number
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    async logout() {
      await this.$auth.logout()
      this.$router.push('/admin/login')
    },
  },
}
</script>