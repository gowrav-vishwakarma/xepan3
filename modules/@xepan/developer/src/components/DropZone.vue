<template>
  <div style="padding: 10px; border: 1px sold orange; resize: both">
    <draggable
      :list="items"
      :style="{
        width: w,
        height: h,
        border: '1px solid green',
        position: 'absolute',
      }"
      group="webtools"
      :options="{ disabled: false }"
      @end="toolDragOrDropEnded"
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
  </div>
</template>

<script>
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
    toolDragOrDropEnded(evt) {
      /* eslint vue/no-mutating-props:0 */
      const bounds = evt.to.getBoundingClientRect()
      const x = evt.originalEvent.clientX - bounds.left
      const y = evt.originalEvent.clientY - bounds.top

      console.log(evt)
      // console.log(this.items, evt.newIndex)
      // console.log(this.items[evt.newIndex].props.pos.x, x, rect)
      if (!this.items[evt.newIndex]) return
      this.items[evt.newIndex].props.pos.x = x + 'px'
      this.items[evt.newIndex].props.pos.y = y + 'px'
      // a.item.pos.x = a.originalEvent.clientX
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
