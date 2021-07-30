<template>
  <div>
    <ToolBar :tools-data="tools" />
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