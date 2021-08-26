<template>
  <div class="drop-zone" @click.prevent="dropZoneClicked">
    <component
      v-for="(item, index) in items"
      :is="item.component"
      :key="index"
      :component="item.component"
      v-bind.sync="item.props"
      :toolbar-options.sync="item.toolbarOptions"
      :item="item"
    ></component>
  </div>
</template>

<script>
/* eslint vue/no-mutating-props:0 */
export default {
  props: {
    items: Array,
    w: { type: [Number, String], default: () => '100%' },
    h: { type: [Number, String], default: () => '100%' },
  },

  data() {
    return {}
  },

  methods: {
    dropZoneClicked(evt) {
      const isDropZoneClicked = evt.target.classList.contains('drop-zone')
      const selectedTool = this.$store.getters['editor/selectedTool']

      if (isDropZoneClicked && selectedTool !== false) {
        console.log(evt)
        selectedTool.props.pos.x = evt.x
        selectedTool.props.pos.y = evt.y
        this.items.push(selectedTool)
        this.$store.commit('editor/deselectTool')
      }
    },

    generateId() {
      return (
        'id' +
        Math.random().toString(36).substring(2) +
        new Date().getTime().toString(36)
      )
    },
  },
}
</script>

<style scoped>
.developer-stage {
  width: 100%;
  min-height: 100vh;
  background-color: blanchedalmond;
  position: relative;
}
</style>
