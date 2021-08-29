<template>
  <svg height="210" width="500" style="position: absolute">
    <line
      :x1="connection[0].pos.from.x"
      :y1="connection[0].pos.from.y"
      :x2="connection[1].pos.to.x"
      :y2="connection[1].pos.to.y"
      style="stroke: rgb(255, 0, 0); stroke-width: 2"
    />
  </svg>
</template>

<script>
export default {
  props: {
    connection: Array,
  },
}
</script>
