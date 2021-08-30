<template>
  <svg width="100%" height="100%" style="position: absolute">
    <line
      :x1="from.x"
      :y1="from.y"
      :x2="to.x"
      :y2="to.y"
      style="stroke: rgb(255, 0, 0); stroke-width: 2"
    />
  </svg>
</template>

<script>
export default {
  props: {
    connection: Array,
  },

  computed: {
    from() {
      return this.connection[0].type === 'In'
        ? this.connection[0].pos.internal
        : this.connection[0].pos.parent
    },

    to() {
      return this.connection[1].type === 'Out'
        ? this.connection[1].pos.internal
        : this.connection[1].pos.parent
    },
  },
}
</script>
