<template>
  <div
    :style="{
      position: 'absolute',
      left: pos.x,
      top: pos.y,
      width: pos.w,
      height: pos.h,
      resize: 'both',
    }"
  >
    <v-card>
      <v-card-title primary-title> {{ item.name }} {{ item.id }} </v-card-title>
    </v-card>
    <dz v-if="allowDrop" :items="item.items"> </dz>
  </div>
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
    item: { type: Object, default: () => {} },
    cbType: { type: String, default: () => 'Generic' },
    title: { type: [String, Boolean], default: () => 'Code Block' },
    type: { type: [String, Object], default: () => 'ClientSideJS' },
    pos: {
      type: Object,
      default: () => {
        return { x: 0, y: 0, w: '100px', h: '100px' }
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
  data() {
    return {
      outer_active: true,
    }
  },
  methods: {
    selected(e) {
      console.log(e)
      this.outer_active = false
      // e.stopPropagation()
    },
    dropLink(a, b, c) {
      /* eslint vue/no-mutating-props:0 */
      this.children.push(JSON.parse(JSON.stringify(a)))
    },
    onResize(x, y, width, height) {
      this.pos.x = x
      this.pos.y = y
      this.pos.w = width
      this.pos.h = height
    },
    onDrag(x, y) {
      this.pos.x = x
      this.pos.y = y
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
