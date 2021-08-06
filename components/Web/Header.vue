<template>
  <web-component :props.sync="props" :toolbar-options.sync="toolbarOptions">
    <component
      :is="headerType"
      type="text"
      v-text="props.defaultcontent"
    ></component>
    <v-btn color="success" @click="changedefaultcontent">update me</v-btn>
  </web-component>
</template>

<script>
import WebComponent from '~/components/WebComponent.vue'

export default {
  // extends: WebComponent,
  components: {
    WebComponent,
  },
  props: {
    props: {
      type: Object,
      default: () => {
        return { defaultcontent: 'HII', headerType: 'h1' }
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
  computed: {
    headerType() {
      return this.props.headerType ? this.props.headerType : 'h1'
    },
  },
  methods: {
    changedefaultcontent() {
      /* eslint vue/no-mutating-props:0 */
      this.props.defaultcontent = this.content = Math.random()
    },
  },
}
</script>