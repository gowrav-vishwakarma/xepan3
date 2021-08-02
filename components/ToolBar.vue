<template>
  <div>
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
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-expansion-panels>
        <v-expansion-panel v-for="(toolKey, i) in toolsKey" :key="i">
          <v-expansion-panel-header> {{ toolKey }} </v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- <drag
              v-for="n in toolsList[toolKey].tools"
              :key="n.name"
              class="drag"
              :data="n"
              @cut="rejectCut"
            >
              {{ n.name }}
            </drag> -->
            <draggable
              :group="{ name: 'webtools', pull: 'clone', put: false }"
              :clone="clone"
              v-model="toolsList[toolKey].tools"
            >
              <div
                v-for="element in toolsList[toolKey].tools"
                :key="element.id"
              >
                {{ element.name }}
              </div>
            </draggable>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    toolsData: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      drawer: false,
      toolsList: this.toolsData,
    }
  },
  computed: {
    toolsKey() {
      return Object.keys(this.toolsData)
    },
  },
  methods: {
    clone(original) {
      return JSON.parse(JSON.stringify(original))
    },
    rejectCut() {
      return false
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