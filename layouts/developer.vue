<template>
  <v-app dark>
    <v-app-bar app clipped-right fixed outlined color="white" height="80">
      <menu-bar />
    </v-app-bar>
    <tool-bar />
    <v-container fluid style="height: 100vh">
      <v-main>
        <Nuxt />
      </v-main>
    </v-container>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import MenuBar from '@xepan/developer/components/Editor/MenuBar.vue'
import ToolBar from '@xepan/developer/components/Editor/ToolBar.vue'

export default {
  name: 'DeveloperDashboard',
  components: {
    'menu-bar': MenuBar,
    ToolBar,
  },
  middleware: ['auth'],

  data() {
    return {
      fixed: false,
    }
  },
}
</script>
