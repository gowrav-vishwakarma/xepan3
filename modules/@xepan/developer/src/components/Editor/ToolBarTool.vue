<template>
  <v-card
    @click="toolSelected"
    class="pa-1 mr-1 caption"
    :class="{ red: isSelected }"
  >
    <v-icon :class="toolClass" v-if="tool.ui && tool.ui.icon"
      >mdi-{{ tool.ui.icon }}</v-icon
    >
    <slot />
  </v-card>
</template>

<script>
export default {
  props: {
    tool: { type: Object, default: () => {} },
  },

  data() {
    return {}
  },

  computed: {
    toolClass() {
      return this.tool.ui && this.tool.ui.class ? this.tool.ui.class : ''
    },
    isSelected() {
      return (
        this.$store.getters['editor/selectedTool'].tool &&
        this.$store.getters['editor/selectedTool'].tool.fn === this.tool.fn &&
        this.$store.getters['editor/selectedTool'].tool.namespace ===
          this.tool.namespace
      )
    },
  },

  methods: {
    toolSelected() {
      if (this.isSelected) {
        this.$store.commit('editor/deselectTool')
        return
      }
      const toolInstance = JSON.parse(JSON.stringify(this.tool))
      toolInstance.id = this.generateId()
      toolInstance.ports.in = toolInstance.ports.in.map((p) => ({
        id: this.generateId(),
        ...p,
        pos: { internal: { x: 0, y: 0 }, parent: { x: 0, y: 0 } },
      }))
      toolInstance.ports.out = toolInstance.ports.out.map((p) => ({
        id: this.generateId(),
        ...p,
        pos: { internal: { x: 0, y: 0 }, parent: { x: 0, y: 0 } },
      }))
      toolInstance.pos = { x: 0, y: 0, w: 100, h: 100 }

      this.$store.commit('editor/setSelctedTool', {
        tool: toolInstance,
        parent: { id: '__toolbar' },
      })
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
