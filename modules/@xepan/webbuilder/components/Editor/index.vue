<template>
  <div>
    <xEpanEditorToolBar :tools-data="tools" v-on="$listeners" />
    <xEpanEditorOptionBar :tools-data="tools" v-on="$listeners" />
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