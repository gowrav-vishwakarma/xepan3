<template>
  <xEpanWebcomponent
    :props.sync="props"
    :toolbar-options.sync="toolbarOptions"
    :component="component"
    :is-logged-in="isLoggedIn"
  >
    <div v-if="!isLoggedIn" v-html="content"></div>
    <tinymce
      v-else
      inline
      v-model="content"
      :init="{
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
      }"
      @onChange="contentChanged"
    />
  </xEpanWebcomponent>
</template>

<script>
import WebComponent from '@xepan/webbuilder/components/Webcomponent.vue'

export default {
  extends: WebComponent,
  // components: {
  // 'editor': Editor
  // },
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
      content: this.props.defaultcontent,
    }
  },
  methods: {
    contentChanged() {
      /* eslint vue/no-mutating-props:0 */
      this.props.defaultcontent = this.content
    },
  },
}
</script>
