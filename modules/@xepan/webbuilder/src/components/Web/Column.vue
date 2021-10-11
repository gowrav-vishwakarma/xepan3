<template>
  <xEpanWebcomponent
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
        border: 1px solid orange;
        display: flex;
      "
      @change="addedElement"
      group="webtools"
      :options="{ disabled: !isLoggedIn }"
    >
      <xEpanWebGeneric
        :item="item"
        v-for="(item, index) in items"
        :key="generateId(index)"
        class="item"
        :isLoggedIn="isLoggedIn"
      />
    </draggable>
  </xEpanWebcomponent>
</template>

<script>
// import _ from 'lodash'
import WebComponent from '@xepan/webbuilder/components/Webcomponent.vue'

export default {
  name: 'xepan-web-column',
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
