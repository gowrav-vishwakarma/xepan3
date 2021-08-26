<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    absolute
    permanent
    :mini-variant.sync="drawer"
    mini-variant-width="0"
    color="#EFEFEF"
  >
    <v-btn
      absolute
      right
      fab
      :style="{ top: '50%', transform: 'translate(75%, -50%)' }"
      @click="drawer = !drawer"
    >
      <v-icon v-if="drawer">mdi-chevron-right</v-icon>
      <v-icon v-else>mdi-chevron-left</v-icon>
    </v-btn>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Tools </v-list-item-title>
        <v-list-item-subtitle> Blocks </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-expansion-panels>
      <v-expansion-panel v-for="(toolKey, i) in toolsKey" :key="i">
        <v-expansion-panel-header> {{ toolKey }} </v-expansion-panel-header>
        <v-expansion-panel-content>
          <draggable
            :group="{ name: 'webtools', pull: 'clone', put: false }"
            :clone="clone"
            v-model="toolsList[toolKey].tools"
            @start="toolDragStarted"
            @end="toolDragOrDropEnded"
          >
            <div v-for="element in toolsList[toolKey].tools" :key="element.id">
              {{ element.name }}
            </div>
          </draggable>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      toolsList: {
        Basic: {
          tools: [
            {
              name: 'Block',
              component: 'xEpanDeveloperEditorToolsCodeBlock',
              props: {
                cbType: 'Generic',
                title: 'ServerSide',
                type: 'ClientSideJS',
                pos: { x: 0, y: 0, w: 100, h: 100 },
                ports: { in: [], out: [] },
                allowDrop: true,
              },
            },
          ],
        },
      },
      toolsData: {
        basic: {
          tools: [{ id: 1, name: 'Service' }],
        },
      },
    }
  },
  methods: {
    toolDragStarted() {
      this.drawer = true
    },
    toolDragOrDropEnded() {
      this.drawer = false
    },
    clone(original) {
      return JSON.parse(JSON.stringify(original))
    },
    rejectCut() {
      return false
    },
  },
  computed: {
    toolsKey() {
      return Object.keys(this.toolsList)
    },
  },
}
</script>

<style scoped>
.drag {
  color: black;
}

.v-navigation-drawer--mini-variant,
.v-navigation-drawer {
  overflow: visible !important;
}
</style>
