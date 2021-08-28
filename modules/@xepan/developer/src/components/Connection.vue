<template>
  <svg height="210" width="500">
    <line
      :x1="connection[0].pos.x"
      :y1="connection[0].pos.y"
      :x2="connection[1].pos.x"
      :y2="connection[1].pos.y"
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
