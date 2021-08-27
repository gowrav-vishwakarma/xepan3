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
        this.$store.getters['editor/selectedTool'].tool.component ===
          this.tool.component
      )
    },
  },

  methods: {
    toolSelected() {
      this.$store.commit('editor/setSelctedTool', {
        tool: this.tool,
        parent: { id: '__toolbar' },
      })
    },
  },
}
</script>
