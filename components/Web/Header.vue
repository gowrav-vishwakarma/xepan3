<template>
  <div>
    <h1 type="text" v-text="componentprops.defaultcontent"></h1>
    <v-btn color="success" @click="changedefaultcontent">update me</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    componentprops: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      content: this.componentprops.defaultcontent,
    }
  },
  methods: {
    changedefaultcontent() {
      /* eslint vue/no-mutating-props:0 */
      this.componentprops.defaultcontent = this.content = Math.random()
    },
  },
}
</script>