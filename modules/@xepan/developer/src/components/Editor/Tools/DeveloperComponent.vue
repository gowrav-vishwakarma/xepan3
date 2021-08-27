<template>
  <div @dblclick.prevent="toolsSelected">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DeveloperComponent',
  props: {
    component: {
      type: String,
    },
    props: {
      type: Object,
      default: () => {},
    },
    toolbarOptions: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    toolsSelected() {
      if (!this.isLoggedIn) return
      this.$nuxt.$emit(
        'xepan-editor-tools-selected',
        this.component,
        this.props
        // modelProperty: 'variable in props' Optional, default props itself
        // formschema: 'variable in toolbarOptions' Optional, default toolbarOptions itself
      )
    },
  },
}
</script>
