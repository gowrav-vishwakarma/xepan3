<template>
  <web-component :props.sync="props" :toolbar-options.sync="toolbarOptions">
    <h1 type="text" v-text="props.defaultcontent"></h1>
    <v-btn color="success" @click="changedefaultcontent">update me</v-btn>
  </web-component>
</template>

<script>
import WebComponent from '~/components/WebComponent.vue'

export default {
  extends: WebComponent,
  // components: {
  //   WebComponent,
  // },
  props: {
    props: {
      type: Object,
      default: () => {
        return { defaultcontent: 'HII' }
      },
    },
    toolbarOptions: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      content: this.props.defaultcontent,
    }
  },
  methods: {
    changedefaultcontent() {
      /* eslint vue/no-mutating-props:0 */
      this.props.defaultcontent = this.content = Math.random()
    },
  },
}
</script>