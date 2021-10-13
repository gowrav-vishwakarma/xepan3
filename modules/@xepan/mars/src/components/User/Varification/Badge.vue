<template>
  <v-icon :color="color">mdi-shield-account</v-icon>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: () => {
        ''
      },
    },
  },

  computed: {
    color() {
      return this.status === 'biometic'
        ? 'green'
        : this.status === 'govtId'
        ? 'yellow'
        : this.status === 'mobile'
        ? 'orange'
        : this.status === 'email'
        ? 'red'
        : 'black'
    },
  },
}
</script>
