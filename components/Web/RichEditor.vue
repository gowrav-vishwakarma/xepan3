<template>
  <web-component
    :props.sync="props"
    :toolbar-options.sync="toolbarOptions"
    :component="component"
    :isLoggedIn="isLoggedIn"
  >
  <div v-html="content" v-if="!isLoggedIn">
  </div>
    <tinymce
      v-else
       inline
       :init="{
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
       v-model="content"
       @onChange="contentChanged" 
     />
  </web-component>
</template>

<script>
import WebComponent from '~/components/WebComponent.vue'

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
  methods:{
    contentChanged(){
      /* eslint vue/no-mutating-props:0 */
      this.props.defaultcontent=this.content;
    }
  }
}
</script>