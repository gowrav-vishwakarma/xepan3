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
        <v-list-item-subtitle>Tools</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-expansion-panels dense>
      <v-expansion-panel v-for="(toolKey, i) in toolsKey" :key="i" expand>
        <v-expansion-panel-header> {{ toolKey }} </v-expansion-panel-header>
        <v-expansion-panel-content>
          <tool
            v-for="element in toolsList[toolKey].tools"
            :key="element.id"
            :tool="element"
          >
            {{ element.name }}
          </tool>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-navigation-drawer>
</template>

<script>
import Tool from './ToolBarTool.vue'

export default {
  components: { tool: Tool },

  data() {
    return {
      drawer: false,
      toolsList: {
        Basic: {
          tools: [
            {
              name: 'Block',
              component: 'xEpanDeveloperEditorCodeBlock',
              id: 'Dummy',
              fn: 'nothing',
              props: {
                cbType: 'Generic',
                title: 'ServerSide',
                type: 'ClientSideJS',
                pos: { x: 0, y: 0, w: 100, h: 100 },
                allowDrop: true,
              },
              ports: {
                in: [
                  {
                    name: 'v',
                    pos: { internal: { x: 0, y: 0 }, parent: { x: 0, y: 0 } },
                  },
                ],
                out: [
                  {
                    name: '2x',
                    pos: { internal: { x: 0, y: 0 }, parent: { x: 0, y: 0 } },
                  },
                ],
              },
              items: [],
              connections: [],
            },
          ],
        },
      },
    }
  },

  computed: {
    toolsKey() {
      return Object.keys(this.toolsList)
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
