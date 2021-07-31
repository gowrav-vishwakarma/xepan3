<template>
  <WebFlex
    :items="items"
    direction="column"
    style="border: 1px solid green; min-width: 50px"
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