<template>
  <div
    @click="toolSelected"
    :style="{ outline: isSelected ? '1px solid red' : '' }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    tool: { type: Object },
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
      const toolInstance = JSON.parse(JSON.stringify(this.tool))
      toolInstance.id = this.generateId()
      toolInstance.ports.in = toolInstance.ports.in.map((p) => ({
        ...p,
        id: this.generateId(),
        linkedTo: [],
      }))
      toolInstance.ports.out = toolInstance.ports.out.map((p) => ({
        ...p,
        id: this.generateId(),
        linkedTo: [],
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
