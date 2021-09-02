<template>
  <div
    class="drop-zone"
    :style="{ width: w + 'px', height: h + 'px' }"
    @click.stop.prevent="dropZoneClicked"
  >
    <component
      :is="item.component"
      v-for="(item, index) in items"
      :key="index"
      :component="item.component"
      v-bind.sync="item.props"
      :toolbar-options.sync="item.toolbarOptions"
      :item="item"
      :allowDrop="item.allowDrop"
      :parent="parent"
    ></component>
    <connection
      v-for="conn in connections"
      :key="conn[0].id + conn[1].id"
      :connection="conn"
    />
  </div>
</template>

<script>
/* eslint vue/no-mutating-props:0 */
import connection from './Connection.vue'

export default {
  components: { connection },

  props: {
    items: Array,
    parent: Object,
    connections: Array,
    allowDrop: { type: Boolean, default: () => true },
    w: { type: [Number, String], default: () => '100%' },
    h: { type: [Number, String], default: () => '100%' },
  },

  data() {
    return {}
  },

  mounted() {},
  methods: {
    dropZoneClicked(evt) {
      const isDropZoneClicked = evt.target.classList.contains('drop-zone')
      const selectedTool = this.$store.getters['editor/selectedTool']

      if (isDropZoneClicked && selectedTool !== false) {
        if (this.allowDrop) {
          const bounds = evt.target.getBoundingClientRect()
          const x = evt.clientX - bounds.left
          const y = evt.clientY - bounds.top
          selectedTool.tool.pos.x = x
          selectedTool.tool.pos.y = y

          const oldParentIndex =
            selectedTool.parent.items !== undefined
              ? selectedTool.parent.items.findIndex(
                  (o) => o.id === selectedTool.tool.id
                )
              : -1

          if (oldParentIndex > -1) {
            selectedTool.parent.items.splice(oldParentIndex, 1)
          }
          this.items.push(selectedTool.tool)
          this.$store.commit('editor/deselectTool')
        }
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
