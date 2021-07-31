<template>
  <WebFlex
    :items="items"
    direction="row"
    style="border: 1px solid orange; min-height: 50px"
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