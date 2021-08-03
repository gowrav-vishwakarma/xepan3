<template>
  <div class="generic">
    <component
      :is="comp"
      :key="generateId()"
      :props.sync="item.props"
      class="inner"
      :items="item.items"
    ></component>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Generic',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    comp() {
      return this.item.component
    },
    props() {
      return this.item
    },
  },
  methods: {
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
.generic {
  flex: 1;
  display: flex;
  align-items: stretch;
  margin: 20px;
}

.inner {
  width: 100%;
  height: 100%;
}
</style>