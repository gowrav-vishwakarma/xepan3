<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      floating
      clipped-right
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
    toolsSelectedCallBack(component) {
      this.drawer = false
      this.optionModel = component.props
      this.optionSchema = component.toolbarOptions
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
