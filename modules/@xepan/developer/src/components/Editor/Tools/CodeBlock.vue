<template>
  <vue-drag-resize
    :parentLimitation="true"
    :x="pos.x"
    :y="pos.y"
    :w="pos.w"
    :h="pos.h"
    :parentW="parent.props.pos.w"
    :parentH="parent.props.pos.h"
    @resizing="resizing"
  >
    <div class="code-block">
      <div class="grey lighten-2">
        <v-icon @click.prevent="moveComponent">mdi-cogs</v-icon>
        {{ item.id }}
      </div>
      <dz v-if="allowDrop" :items="item.items" :parent="item"> </dz>
    </div>
  </vue-drag-resize>
</template>

<script>
/* eslint vue/no-mutating-props:0 */

import DZ from '../../DropZone.vue'
import DC from './DeveloperComponent.vue'

export default {
  extends: DC,
  name: 'CodeBlock',
  components: { dz: DZ },
  props: {
    parent: Object,
    item: { type: Object, default: () => {} },
    cbType: { type: String, default: () => 'Generic' },
    title: { type: [String, Boolean], default: () => 'Code Block' },
    type: { type: [String, Object], default: () => 'ClientSideJS' },
    pos: {
      type: Object,
      default: () => {
        return { x: 0, y: 0, w: '100', h: '100' }
      },
    },
    ports: {
      type: Object,
      default: () => {
        return { in: [], out: [] }
      },
    },
    allowDrop: { type: Boolean, default: () => true },
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    moveComponent() {
      this.$store.commit('editor/setSelctedTool', {
        tool: this.item,
        parent: this.parent,
      })
    },

    resizing(newRect) {
      console.log(newRect)
      this.item.props.pos.x = newRect.x
      this.item.props.pos.y = newRect.y
      this.item.props.pos.w = newRect.w
      this.item.props.pos.h = newRect.h
    },
  },
}
</script>

<style scoped>
.dropzone {
  min-width: 100%;
  min-height: 100px;
}
</style>
