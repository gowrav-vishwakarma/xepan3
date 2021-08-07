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
      right
    >
      <v-btn
        absolute
        left
        fab
        :style="{ top: '50%', transform: 'translate(-80%, -50%)' }"
        @click="drawer = !drawer"
      >
        <v-icon v-if="drawer">mdi-chevron-left</v-icon>
        <v-icon v-else>mdi-chevron-right</v-icon>
      </v-btn>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> Options Bar </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-card pd-2>
        <v-form-base :model="optionModel" :schema="optionSchema"> </v-form-base>
      </v-card>
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
      optionModel: {},
      optionSchema: {},
    }
  },
  created() {
    this.$nuxt.$on('xepan-editor-tools-selected', this.toolsSelectedCallBack)
  },

  methods: {
    toolsSelectedCallBack(
      component,
      toolProps,
      modelProperty = false,
      formschemaProperty = false
    ) {
      this.drawer = false
      this.optionModel = toolProps
      for (const key in this.toolsData) {
        if (Object.hasOwnProperty.call(this.toolsData, key)) {
          const element = this.toolsData[key]
          if (element.tools) {
            const opt = element.tools.find((o) => o.component === component)
            console.log('Found options', opt)
            if (opt) {
              this.optionSchema = opt.toolbarOptions
              break
            }
          }
        }
      }
      console.log('component', component, 'tools-data', this.toolsData)
      // this.optionSchema = toolbarOptions
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