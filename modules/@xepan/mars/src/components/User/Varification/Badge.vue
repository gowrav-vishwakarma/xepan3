<template>
  <v-icon :color="color">mdi-shield-account</v-icon>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: () => {
        'none'
      },
    },
  },

  computed: {
    color() {
      switch (this.status) {
        case 'none':
          return 'red'
        case 'low':
          return 'orange'
        case 'mid':
          return 'yellow'
        case 'high':
          return 'green'
        default:
          return 'black'
      }
    },
  },
}
</script>
