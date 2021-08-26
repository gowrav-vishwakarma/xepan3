<template>
  <div
    v-droppable
    @drag-drop="handleDrop"
    @drag-enter="onDragEnter"
    @drag-leave="onDragLeave"
    class="drop-zone"
    :class="[isDragOver ? 'drop-zone-hovering' : '']"
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
  </div>
</template>

<script>
export default {
  props: {
    parent: Object,
    items: Array,
    w: { type: [Number, String], default: () => '100%' },
    h: { type: [Number, String], default: () => '100%' },
  },

  data() {
    return {
      isDragOver: false,
    }
  },

  methods: {
    onDragEnter(e) {
      this.isDragOver = true
    },
    onDragLeave() {
      this.isDragOver = false
    },
    handleDrop(item, isDroppable, event) {
      console.log('Dropped', item, event, isDroppable)
      if (item.parent.id !== this.parent.id) {
        item.parent = this.parent
        this.items.push(item)
      }
    },
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
