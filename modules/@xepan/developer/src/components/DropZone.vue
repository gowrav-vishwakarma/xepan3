<template>
  <div
    class="drop-zone"
    :style="{ width: w + 'px', height: h + 'px' }"
    @click.prevent="dropZoneClicked"
  >
    <component
      v-for="(item, index) in items"
      :is="item.component"
      :key="index"
      :component="item.component"
      v-bind.sync="item.props"
      :toolbar-options.sync="item.toolbarOptions"
      :item="item"
      :parent="parent"
    ></component>
  </div>
</template>

<script>
/* eslint vue/no-mutating-props:0 */
export default {
  props: {
    items: Array,
    parent: Object,
    w: { type: [Number, String], default: () => '100%' },
    h: { type: [Number, String], default: () => '100%' },
  },

  mounted() {},
  methods: {
    dropZoneClicked(evt) {
      const isDropZoneClicked = evt.target.classList.contains('drop-zone')
      const selectedTool = this.$store.getters['editor/selectedTool']

      if (isDropZoneClicked && selectedTool !== false) {
        const bounds = evt.target.getBoundingClientRect()
        const x = evt.clientX - bounds.left
        const y = evt.clientY - bounds.top
        selectedTool.tool.props.pos.x = x
        selectedTool.tool.props.pos.y = y

        const oldParentIndex =
          selectedTool.parent.items !== undefined
            ? selectedTool.parent.items.findIndex(
                (o) => o.id === selectedTool.tool.id
              )
            : -1

        if (oldParentIndex > -1) {
          selectedTool.parent.items.splice(oldParentIndex, 1)
        }

        if (selectedTool.parent.id === '__toolbar')
          selectedTool.tool.id = this.generateId()
        this.items.push(JSON.parse(JSON.stringify(selectedTool.tool)))

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

    scaleAmountNeededToFit(el, margin = 0) {
      const parentSize = {
        width: el.parentElement.clientWidth - margin * 2,
        height: el.parentElement.clientHeight - margin * 2,
      }

      return Math.min(
        parentSize.width / el.clientWidth,
        parentSize.height / el.clientHeight
      )
    },

    fitToParent(element, margin) {
      const scale = this.scaleAmountNeededToFit(element, margin)
      element.style.transformOrigin = '0 0'
      element.style.transform = `translate(${margin}px, ${margin}px) scale(${scale})`
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
