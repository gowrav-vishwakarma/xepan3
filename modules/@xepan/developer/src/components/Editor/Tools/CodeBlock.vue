<template>
  <div
    class="code-block pointer-events"
    :style="{ top: pos.y, left: pos.x }"
    draggable
    @dragstart="onDragStart($event)"
    @dragover="onDragMove($event, item)"
  >
    <v-card>
      <v-card-title primary-title> {{ item.name }} {{ item.id }} </v-card-title>
    </v-card>
    <dz v-if="allowDrop" :parent="item" :items="item.items"> </dz>
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
    onDragMove(event, item) {
      console.log(event)
      // const bounds = event.path[1].getBoundingClientRect()
      // const x = event.clientX - bounds.left
      // const y = event.clientY - bounds.top

      // item.props.pos.x = x + 'px'
      // item.props.pos.y = y + 'px'
      event.stopPropagation()
      event.preventDefault()
    },

    onDragStart(evt) {
      evt.target.evt.dataTransfer.dropEffect = 'all'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('dragData', JSON.stringify(this.item))
      evt.stopPropagation()
      // evt.preventDefault()
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
