<template>
  <v-app light>
    <v-main>
      <v-container bg grid-list-md text-xs-center fill-height fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="4">
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      title: 'Center Layout',
    }
  },
}
</script>
