<template>
  <WebFlex :items="items" direction="row"></WebFlex>
</template>

<script>
export default {
  name: 'Row',
  props: {
    items: null,
  },
}
</script>
