<template>
  <div>{{ text }}</div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    text: {
      default: () => {
        'HI'
      },
    },
  },
}
</script>
