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
            <drag
              v-for="n in toolsList[toolKey].tools"
              :key="n.name"
              class="drag"
              :data="n"
            >
              {{ n.name }}
            </drag>
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
      numbers: [1, 2, 3, 4, 5],
      toolsList: this.toolsData,
    }
  },
  computed: {
    toolsKey() {
      return Object.keys(this.toolsData)
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