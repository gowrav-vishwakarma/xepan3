<template>
  <div class="Flex">
    <drop-list
      :items="items"
      class="dl"
      :style="{ flexDirection: direction }"
      @insert="onInsert"
      @reorder="onReorder"
      :row="direction === 'row'"
      :column="direction === 'column'"
      no-animations
      mode="cut"
    >
      <template v-slot:item="{ item }">
        <drag
          tag="WebGeneric"
          :item="item"
          :key="generateId()"
          :data="item"
          @cut="remove(item)"
        >
          <template v-slot:drag-image>
            <div class="drag-image">DRAG</div>
          </template>
        </drag>
      </template>
      <template v-slot:feedback="{ data }">
        <div class="feedback" :key="generateId(data)" />
      </template>
      <template v-slot:reordering-feedback="{}">
        <div class="reordering-feedback" key="feedback"></div>
      </template>
    </drop-list>
  </div>
</template>

<script>
export default {
  name: 'Flex',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    direction: String,
  },
  methods: {
    generateId(data = false) {
      return (
        'id' +
        Math.random().toString(36).substring(2) +
        new Date().getTime().toString(36)
      )
    },
    onInsert(event) {
      /* eslint vue/no-mutating-props:0 */
      this.items.splice(event.index, 0, JSON.parse(JSON.stringify(event.data)))
    },
    onReorder(event) {
      event.apply(this.items)
    },
    remove(item) {
      const index = this.items.indexOf(item)
      /* eslint vue/no-mutating-props:0 */
      this.items.splice(index, 1)
    },
  },
}
</script>

<style scoped>
.Flex {
  border: 1px dashed black;
}
.dl {
  display: flex;
  align-items: stretch;
  min-height: 50px;
}

.drag-image {
  background-color: orangered;
  width: 75px;
  height: 75px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reordering-feedback,
.feedback {
  flex: 0 0 0;
  outline: 1px solid blue;
  align-self: stretch;
}

.drag-source {
  outline: 2px dashed black;
}
</style>