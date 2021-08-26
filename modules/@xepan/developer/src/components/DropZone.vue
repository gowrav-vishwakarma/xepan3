<template>
  <draggable
    v-model="items"
    :style="{
      width: w,
      height: h,
      border: '1px solid green',
      position: 'relative',
    }"
    group="webtools"
    :options="{ disabled: false }"
    @end="toolDragOrDropEnded"
    :move="checkMove"
  >
    <component
      v-for="(item, index) in items"
      :is="item.component"
      :key="index"
      :component="item.component"
      v-bind.sync="item.props"
      :toolbar-options.sync="item.toolbarOptions"
      :item="item"
    ></component>
  </draggable>
</template>

<script>
export default {
  props: {
    items: Array,
    w: { type: [Number, String], default: () => '100px' },
    h: { type: [Number, String], default: () => '100px' },
  },

  data() {
    return {}
  },

  methods: {
    toolDragOrDropEnded(evt) {
      /* eslint vue/no-mutating-props:0 */
      const bounds = evt.target.getBoundingClientRect()
      const x = evt.originalEvent.clientX - bounds.left
      const y = evt.originalEvent.clientY - bounds.top

      console.log(evt)
      // console.log(this.items, evt.newIndex)
      // console.log(this.items[evt.newIndex].props.pos.x, x, rect)
      this.items[evt.newIndex].props.pos.x = x + 'px'
      this.items[evt.newIndex].props.pos.y = y + 'px'
      // a.item.pos.x = a.originalEvent.clientX
    },

    checkMove(evt) {
      console.log(evt)
      return evt.draggedContext.element.name !== 'apple'
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
