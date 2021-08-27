<template>
  <dz
    :items="items"
    w="100%"
    h="100vh"
    :parent="{ ...thisAsParentItem, items }"
  >
  </dz>
</template>

<script>
import DZ from '../DropZone.vue'

export default {
  components: { dz: DZ },
  props: {
    items: Array,
  },
  data() {
    return {
      thisAsParentItem: {
        props: {
          pos: {
            w: 100,
            h: 100,
          },
        },
      },
    }
  },

  mounted() {
    this.thisAsParentItem.props.pos.w = this.$el.clientWidth
    this.thisAsParentItem.props.pos.h = this.$el.clientHeight
  },

  methods: {
    toolDragOrDropEnded(evt) {
      /* eslint vue/no-mutating-props:0 */
      const selfRect = evt.item
      const parentRect = evt.target
      const x =
        evt.originalEvent.clientX - parentRect.offsetLeft - selfRect.offsetLeft
      const y =
        evt.originalEvent.clientY - parentRect.offsetTop - selfRect.offsetTop

      console.log(evt)
      // console.log(this.items, evt.newIndex)
      // console.log(this.items[evt.newIndex].props.pos.x, x, rect)
      this.items[evt.newIndex].props.pos.x = x
      this.items[evt.newIndex].props.pos.y = y
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
