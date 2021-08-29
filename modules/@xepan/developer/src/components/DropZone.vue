<template>
  <div
    class="drop-zone"
    :style="{ width: w + 'px', height: h + 'px' }"
    @click.prevent="dropZoneClicked"
  >
    <component
      :is="item.component"
      v-for="(item, index) in items"
      :key="index"
      :component="item.component"
      v-bind.sync="item.props"
      :toolbar-options.sync="item.toolbarOptions"
      :item="item"
      :parent="parent"
    ></component>
    <connection
      v-for="conn in connections"
      :key="conn.selctedPorts[0].id + conn.selctedPorts[1].id"
      :connection="conn.selctedPorts"
      :toOut="conn.toOut"
    />
  </div>
</template>

<script>
/* eslint vue/no-mutating-props:0 */
import connection from './Connection.vue'

export default {
  components: { connection },

  props: {
    items: Array,
    parent: Object,
    connections: Array,
    w: { type: [Number, String], default: () => '100%' },
    h: { type: [Number, String], default: () => '100%' },
  },

  data() {
    return {}
  },

  mounted() {
    // this.drawConnections()
  },
  methods: {
    drawConnections() {
      this.items.forEach((item) => {
        item.ports.in.forEach((ip) => {
          this.drawConnection(ip)
        })
        item.ports.out.forEach((ip) => {
          this.drawConnection(ip)
        })
      })
    },
    drawConnection(port) {
      port.linkedTo.forEach((link) => {
        const exists = this.connections.find((o) => {
          return (
            (o.x === link && o.y === port.id) ||
            (o.y === link && o.x === port.id)
          )
        })
        if (!exists) {
          this.connections.push({ x: port.id, y: link, portX: port })
        } else {
          exists[exists.x === port.id ? 'portX' : 'portY'] = port
        }
      })
    },
    dropZoneClicked(evt) {
      const isDropZoneClicked = evt.target.classList.contains('drop-zone')
      const selectedTool = this.$store.getters['editor/selectedTool']

      if (isDropZoneClicked && selectedTool !== false) {
        const bounds = evt.target.getBoundingClientRect()
        const x = evt.clientX - bounds.left
        const y = evt.clientY - bounds.top
        selectedTool.tool.props.pos.x = x
        selectedTool.tool.props.pos.y = y

        const oldParentIndex =
          selectedTool.parent.items !== undefined
            ? selectedTool.parent.items.findIndex(
                (o) => o.id === selectedTool.tool.id
              )
            : -1

        if (oldParentIndex > -1) {
          selectedTool.parent.items.splice(oldParentIndex, 1)
        }

        this.items.push(selectedTool.tool)

        this.$store.commit('editor/deselectTool')
      }
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
