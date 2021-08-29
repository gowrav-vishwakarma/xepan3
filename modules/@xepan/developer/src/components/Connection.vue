<template>
  <svg height="210" width="500" style="position: absolute">
    <line
      :x1="toOut ? connection[0].pos.to.x : connection[0].pos.from.x"
      :y1="toOut ? connection[0].pos.to.y : connection[0].pos.from.y"
      :x2="toOut ? connection[1].pos.from.x : connection[1].pos.to.x"
      :y2="toOut ? connection[1].pos.from.y : connection[1].pos.to.y"
      style="stroke: rgb(255, 0, 0); stroke-width: 2"
    />
  </svg>
</template>

<script>
export default {
  props: {
    connection: Array,
    toOut: Boolean,
  },
}
</script>
