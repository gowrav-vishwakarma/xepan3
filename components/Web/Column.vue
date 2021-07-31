<template>
  <WebFlex :items="items" direction="column"></WebFlex>
</template>

<script>
export default {
  name: 'Column',
  props: {
    items: null,
  },
}
</script>
