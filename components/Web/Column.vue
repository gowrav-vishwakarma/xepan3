<template>
  <WebFlex
    :items="items"
    direction="column"
    style="border: 1px solid orange"
  ></WebFlex>
</template>

<script>
// import _ from 'lodash'

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>