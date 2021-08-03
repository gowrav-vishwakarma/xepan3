<template>
  <div>
    <EditorToolBar :tools-data="tools" v-on="$listeners" />
    <EditorOptionBar :tools-data="tools" v-on="$listeners" />
  </div>
</template>

<script>
export default {
  props: {
    tools: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>