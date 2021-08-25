<template>
  <vue-draggable-resizable
    :w="100"
    :h="100"
    @dragging="onDrag"
    @resizing="onResize"
    :parent="true"
  >
    <p>
      {{ color }}
      Hello! I'm a flexible component. You can drag me around and you can resize
      me.<br />
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}
    </p>
  </vue-draggable-resizable>
</template>

<script>
export default {
  data() {
    return {
      color: ['red', 'green', 'blue'][Math.floor(Math.random() * 2)],
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    }
  },
  methods: {
    onResize(x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag(x, y) {
      this.x = x
      this.y = y
    },
  },
}
</script>

<style scoped>
.tool {
  position: relative;
  top: 10px;
}
</style>
