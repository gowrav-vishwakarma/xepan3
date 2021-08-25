<template>
  <client-only>
    <div v-droppable @drag-drop="dropLink" class="developer-stage">
      <component
        v-for="(item, index) in items"
        :is="item.component"
        :key="index"
        :component="item.component"
        v-bind.sync="item.props"
        :toolbar-options.sync="item.toolbarOptions"
        :children="item.children"
      ></component>
    </div>
  </client-only>
</template>

<script>
export default {
  props: {
    items: Array,
  },

  methods: {
    dropLink(a, b, c) {
      /* eslint vue/no-mutating-props:0 */
      this.items.push(a)
    },
    generateId() {
      return (
        'id' +
        Math.random().toString(36).substring(2) +
        new Date().getTime().toString(36)
      )
    },
  },
}
</script>

<style scoped>
.developer-stage {
  width: 100%;
  min-height: 100vh;
  background-color: blanchedalmond;
  position: relative;
}
</style>
