<template>
  <web-component
    :props.sync="props"
    :toolbar-options.sync="toolbarOptions"
    :component="component"
    :isLoggedIn="isLoggedIn"
  >
    <draggable
      :list="items"
      style="
        width: 100%;
        min-height: 50px;
        border: 1px solid green;
        flex-direction: row;
      "
      @change="addedElement"
      group="webtools"
      :options="{ disabled: !isLoggedIn }"
    >
      <WebGeneric
        :item="item"
        v-for="(item, index) in items"
        :key="generateId(index)"
        class="item"
      />
    </draggable>
  </web-component>
</template>

<script>
import WebComponent from '~/components/WebComponent.vue'

// import _ from 'lodash'

export default {
  extends: WebComponent,
  props: {
    isLoggedIn: Boolean,
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addedElement(e) {
      if (e.added) {
        e.added.element = JSON.parse(JSON.stringify(e.added.element))
      }
      console.log(e)
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