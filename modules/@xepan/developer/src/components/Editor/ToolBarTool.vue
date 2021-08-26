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
    return {
      isSelected: false,
    }
  },

  methods: {
    toolSelected() {
      this.$store.commit('editor/setSelctedTool', this.tool)
      this.isSelected =
        this.$store.getters['editor/selectedTool'].component ===
        this.tool.component
    },
  },
}
</script>
