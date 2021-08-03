<template>
  <div @dblclick="toolsSelected">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
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
      this.$nuxt.$emit(
        'xepan-editor-tools-selected',
        this.props,
        this.toolbarOptions
        // modelProperty: 'variable in props' Optional, default props itself
        // formschema: 'variable in toolbarOptions' Optional, default toolbarOptions itself
      )
    },
  },
}
</script>