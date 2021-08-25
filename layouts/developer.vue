<template>
  <v-app dark>
    <Nuxt />
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DeveloperDashboard',
  middleware: ['auth'],
  data() {
    return {
      fixed: false,
    }
  },
}
</script>
