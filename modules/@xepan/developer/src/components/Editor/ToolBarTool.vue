<template>
  <div
    :style="{ outline: isSelected ? '1px solid red' : '' }"
    @click="toolSelected"
  >
    <slot />
  </div>
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
    isSelected() {
      return (
        this.$store.getters['editor/selectedTool'].tool &&
        this.$store.getters['editor/selectedTool'].tool.fn === this.tool.fn
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
        ...p,
        id: this.generateId(),
      }))
      toolInstance.ports.out = toolInstance.ports.out.map((p) => ({
        ...p,
        id: this.generateId(),
      }))
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
