<template>
  <dz
    :items="items"
    w="100%"
    h="100vh"
    :parent="thisAsParentItem"
    :item="thisAsParentItem"
    :connections="[]"
  >
  </dz>
</template>

<script>
import DZ from './CodeBlock/DropZone.vue'

export default {
  components: { dz: DZ },
  props: {
    items: Array,
  },
  data() {
    return {
      thisAsParentItem: {
        props: {},
        pos: {
          w: 100,
          h: 100,
        },
        connections: [],
      },
    }
  },

  mounted() {
    this.thisAsParentItem.pos.w = this.$el.clientWidth
    this.thisAsParentItem.pos.h = this.$el.clientHeight
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
