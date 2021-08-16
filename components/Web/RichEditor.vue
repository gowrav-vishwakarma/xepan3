<template>
  <web-component
    :props.sync="props"
    :toolbar-options.sync="toolbarOptions"
    :component="component"
    :isLoggedIn="isLoggedIn"
  >
    <ckeditor :editor="editor" v-model="content" :config="editorConfig"></ckeditor>
  </web-component>
</template>

<script>


import WebComponent from '~/components/WebComponent.vue'

export default {
  extends: WebComponent,
  // components: { ckeditor: CKEditor.component },
  props: {
    isLoggedIn: Boolean,
    props: {
      type: Object,
      default: () => {
        return { defaultcontent: 'H<b>I</b>I' }
      },
    },
    toolbarOptions: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      editor:this.$InlineEditor,
      content: this.props.defaultcontent,
      editorConfig: {}
    }
  },
}
</script>