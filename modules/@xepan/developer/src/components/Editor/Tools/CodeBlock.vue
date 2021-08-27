<template>
  <vue-drag-resize :parentLimitation="true" :w="pos.w" :h="pos.h">
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
  data() {
    return {
      outer_active: true,
    }
  },
  methods: {
    moveComponent() {
      this.$store.commit('editor/setSelctedTool', {
        tool: this.item,
        parent: this.parent,
      })
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
