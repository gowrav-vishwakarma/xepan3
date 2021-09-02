<template>
  <code-block
    :component="item.component"
    v-bind.sync="item.props"
    :toolbar-options.sync="item.toolbarOptions"
    :item="item"
    :parent="parent"
    :allowDrop="item.allowDrop"
  >
    <template #title> Wohoo </template>
  </code-block>
</template>

<script>
import CodeBlock from '../../CodeBlock'
export default {
  components: {
    'code-block': CodeBlock,
  },
  props: {
    parent: Object,
    item: { type: Object, default: () => {} },
    pos: {
      type: Object,
      default: () => {
        return { x: 0, y: 0, w: '100', h: '100' }
      },
    },
    ports: {
      type: Object,
      default: () => {
        return { in: [], out: [] }
      },
    },
    allowDrop: { type: Boolean, default: () => true },
  },
}
</script>
