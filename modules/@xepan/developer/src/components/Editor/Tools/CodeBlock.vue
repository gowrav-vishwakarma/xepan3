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
    @dragging="dragging"
    dragCancel=".no-drag"
    style="z-index: 1"
  >
    <div
      class="code-block d-flex flex-row"
      :style="{ width: pos.w + 'px', height: pos.h + 'px' }"
    >
      <div
        class="in-ports-area d-flex flex-column mt-10 no-drag"
        style="position: absolute; left: -15px; z-index: 1"
        ref="in-ports-area"
      >
        <port
          class="no-drag"
          v-for="inp in item.ports.in"
          :key="inp.name"
          :port="inp"
          :parent="parent"
          :item="item"
          type="In"
          :ref="inp.id"
        />
      </div>
      <div class="center-area">
        <div class="grey lighten-2">
          <v-icon @click.stop.prevent="moveComponent">mdi-cogs</v-icon>
          {{ item.id }}
        </div>
        <dz
          v-if="allowDrop"
          :items="item.items"
          :w="pos.w"
          :h="pos.h"
          :parent="item"
          :item="item"
          :connections="item.connections"
        >
        </dz>
      </div>
      <div
        class="out-ports-area d-flex flex-column mt-10 no-drag"
        :style="{ position: 'absolute', left: pos.w - 10 + 'px', 'z-index': 1 }"
        ref="out-ports-area"
      >
        <port
          class="no-drag"
          v-for="outp in item.ports.out"
          :key="outp.name"
          :port="outp"
          :parent="parent"
          :item="item"
          type="Out"
          :ref="outp.id"
        />
      </div>
    </div>
  </vue-drag-resize>
</template>

<script>
/* eslint vue/no-mutating-props:0 */

import DZ from '../../DropZone.vue'
import Port from '../Port.vue'
import DC from './DeveloperComponent.vue'

export default {
  extends: DC,
  name: 'CodeBlock',
  components: { dz: DZ, port: Port },
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
    // items: {
    //   type: Array,
    //   default: () => [],
    // },
  },
  mounted() {
    this.updatePortsInternalXY()
    this.updatePortsParentXY()
  },
  methods: {
    updatePortsParentXY() {
      // port.offsetParent.offsetParent.offsetParent
      this.item.ports.in.forEach((p) => {
        p.pos.parent = {
          // From parent referance
          x:
            this.$refs[p.id][0].$el.offsetLeft +
            this.$refs[p.id][0].$el.offsetParent.offsetLeft +
            this.$refs[p.id][0].$el.offsetParent.offsetParent.offsetLeft +
            this.$refs[p.id][0].$el.offsetParent.offsetParent.offsetParent
              .offsetLeft +
            10,

          y:
            this.$refs[p.id][0].$el.offsetTop +
            this.$refs[p.id][0].$el.offsetParent.offsetTop +
            this.$refs[p.id][0].$el.offsetParent.offsetParent.offsetTop +
            this.$refs[p.id][0].$el.offsetParent.offsetParent.offsetParent
              .offsetTop +
            10,
        }
      })

      this.item.ports.out.forEach((p) => {
        p.pos.parent = {
          // From parent referance
          x:
            this.$refs[p.id][0].$el.offsetLeft +
            this.$refs[p.id][0].$el.offsetParent.offsetLeft +
            this.$refs[p.id][0].$el.offsetParent.offsetParent.offsetLeft +
            this.$refs[p.id][0].$el.offsetParent.offsetParent.offsetParent
              .offsetLeft +
            10,

          y:
            this.$refs[p.id][0].$el.offsetTop +
            this.$refs[p.id][0].$el.offsetParent.offsetTop +
            this.$refs[p.id][0].$el.offsetParent.offsetParent.offsetTop +
            this.$refs[p.id][0].$el.offsetParent.offsetParent.offsetParent
              .offsetTop +
            10,
        }
      })
    },

    updatePortsInternalXY() {
      this.item.ports.in.forEach((p, i) => {
        p.pos.internal = {
          // From local referance
          x: this.$refs[p.id][0].$el.offsetLeft,
          y:
            this.$refs[p.id][0].$el.offsetParent.offsetTop +
            this.$refs[p.id][0].$el.offsetTop -
            10,
        }
      })

      this.item.ports.out.forEach((p) => {
        p.pos.internal = {
          // From local referance
          x:
            this.$refs[p.id][0].$el.offsetParent.offsetLeft +
            this.$refs[p.id][0].$el.offsetLeft +
            10,
          y:
            this.$refs[p.id][0].$el.offsetParent.offsetTop +
            this.$refs[p.id][0].$el.offsetTop -
            10,
        }
      })
    },
    moveComponent() {
      this.$store.commit('editor/setSelctedTool', {
        tool: this.item,
        parent: this.parent,
      })
    },

    resizing(newRect) {
      this.item.props.pos.x = newRect.left
      this.item.props.pos.y = newRect.top
      this.item.props.pos.w = newRect.width
      this.item.props.pos.h = newRect.height
      this.updatePortsInternalXY()
      this.updatePortsParentXY()
    },

    dragging(position) {
      // console.log('position', position)
      this.updatePortsParentXY()
      this.updatePortsInternalXY()
    },

    createConnection() {
      const selctedPorts = this.$store.getters['editor/selectedPorts']
      this.item.connections.push(selctedPorts)
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
