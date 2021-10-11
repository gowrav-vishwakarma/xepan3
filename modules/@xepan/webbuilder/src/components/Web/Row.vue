<template>
  <xEpanWebcomponent
    :props.sync="props"
    :toolbar-options.sync="toolbarOptions"
    :component="component"
    :is-logged-in="isLoggedIn"
  >
    <draggable
      :list="items"
      style="
        width: 100%;
        min-height: 50px;
        border: 1px solid green;
        flex-direction: row;
      "
      group="webtools"
      :options="{ disabled: !isLoggedIn }"
      @change="addedElement"
    >
      <xEpanWebGeneric
        v-for="(item, index) in items"
        :key="generateId(index)"
        :item="item"
        class="item"
        :is-logged-in="isLoggedIn"
      />
    </draggable>
  </xEpanWebcomponent>
</template>

<script>
import WebComponent from '@xepan/webbuilder/components/Webcomponent.vue'

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
