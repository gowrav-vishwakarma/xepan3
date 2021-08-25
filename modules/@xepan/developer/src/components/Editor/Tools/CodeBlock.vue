<template>
  <vue-draggable-resizable
    :x="pos.x"
    :y="pos.y"
    :w="pos.w"
    :h="pos.h"
    @dragging="onDrag"
    @resizing="onResize"
    :parent="true"
    @mousedown.stop.prevent
    @mouseup.stop.prevent
  >
    <v-card>
      <v-card-title primary-title> {{ title }} {{ type }} </v-card-title>
    </v-card>
    <div
      v-droppable
      @drag-drop="dropLink"
      @mousedown.stop.prevent
      @mouseup.stop.prevent
      class="dropzone"
    >
      <component
        v-for="(item, index) in children"
        :is="item.component"
        :key="index"
        :component="item.component"
        v-bind.sync="item.props"
        :toolbar-options.sync="item.toolbarOptions"
        :children="item.children"
        @click.stop="selected"
      ></component>
    </div>
  </vue-draggable-resizable>
</template>

<script>
/* eslint vue/no-mutating-props:0 */

import DC from './DeveloperComponent.vue'

export default {
  extends: DC,
  name: 'CodeBlock',
  props: {
    cbType: { type: String, default: () => 'Generic' },
    title: { type: [String, Boolean], default: () => 'Code Block' },
    type: { type: [String, Object], default: () => 'ClientSideJS' },
    pos: {
      type: Object,
      default: () => {
        return { x: 0, y: 0, w: 100, h: 100 }
      },
    },
    ports: {
      type: Object,
      default: () => {
        return { in: [], out: [] }
      },
    },
    allowDrop: { type: Boolean, default: () => true },
    children: {
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
