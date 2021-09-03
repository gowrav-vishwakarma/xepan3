<template>
  <v-navigation-drawer floating app clipped-left permanent color="#EFEFEF">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          {{
            $store.getters['project/selectedProject']
              ? $store.getters['project/selectedProject'].name
              : 'No Project Selected'
          }}
        </v-list-item-title>
        <v-list-item-subtitle>
          <v-chip x-small label @click="reCompileTools">
            <v-icon left color="red">mdi-hammer-wrench</v-icon>ReCompile Tools
          </v-chip>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-expansion-panels :accordion="true" :flat="true" dense :multiple="true">
      <v-expansion-panel v-for="(toolKey, i) in toolsKey" :key="i" expand>
        <v-expansion-panel-header dense>
          {{ toolKey }}
        </v-expansion-panel-header>
        <v-expansion-panel-content expand>
          <v-card class="d-flex flex-row">
            <tool
              v-for="element in toolsList[toolKey].tools"
              :key="element.id"
              :tool="element"
            >
              {{ element.title }}
            </tool>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-navigation-drawer>
</template>

<script>
import Tool from './ToolBarTool.vue'

export default {
  components: { tool: Tool },

  async fetch() {
    await this.fetchTools()
  },

  data() {
    return {
      drawer: false,
      toolsList: [],
    }
  },

  computed: {
    toolsKey() {
      return Object.keys(this.toolsList)
    },
  },
  methods: {
    async fetchTools() {
      this.toolsList = await this.$axios.$get('/api/xepan/developer/tools/list')
    },

    reCompileTools() {
      this.$axios
        .$get('/api/xepan/developer/tools/recompile')
        .then(() => this.fetchTools())
    },
  },
}
</script>

<style scoped>
.v-navigation-drawer--mini-variant,
.v-navigation-drawer {
  overflow: visible !important;
}
</style>
