<template>
  <v-app dark>
    <v-app-bar app clipped-right fixed outlined color="white" height="80">
      <menu-bar />
    </v-app-bar>
    <tool-bar />
    <option-bar />
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
import MenuBar from '@xepan/developer/components/Editor/IDE/MenuBar.vue'
import ToolBar from '@xepan/developer/components/Editor/IDE/ToolBar.vue'
import OptionBar from '@xepan/developer/components/Editor/IDE/OptionBar.vue'

export default {
  name: 'DeveloperDashboard',
  components: {
    'menu-bar': MenuBar,
    ToolBar,
    OptionBar,
  },
  middleware: ['auth'],

  data() {
    return {
      fixed: false,
    }
  },
}
</script>
