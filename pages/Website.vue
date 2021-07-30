<template>
  <div class="wrapper">
    <Editor :tools="tools" />
    <!-- OPTIONS BAR -->
    <drop-list
      :items="pageContent"
      class="list"
      no-animations
      @insert="onInsert"
      @reorder="$event.apply(pageContent)"
    >
      <template #item="{ item }">
        <drag :key="generateId()" class="item" :tag="item.tag">
          {{ item.name }}
        </drag>
      </template>
      <template #feedback="{ data }">
        <div :key="generateId()" class="item feedback" :tag="data.tag">
          {{ data.name }}
        </div>
      </template>
      <template #reordering-feedback="{}">
        <div :key="generateId()" class="item feedback"></div>
      </template>
    </drop-list>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.$axios
      .$get('/api/web-editor/tools')
      .then((data) => {
        // console.log(data.basic.tools)
        return {
          tools: data,
          pageContent: [],
        }
      })
      .catch((err) => console.log(err))
  },
  methods: {
    onInsert(event) {
      this.pageContent.splice(event.index, 0, event.data)
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
<style scoped lang="scss">
.wrapper {
  .list {
    margin: 0;
    width: 100%;
    min-height: 100px;
    .item {
      // padding: 20px;
      // margin: 10px;
      // background-color: rgb(220, 220, 255);
      // display: flex;
      // align-items: center;
      // justify-content: center;

      &.feedback {
        flex: 0 0 0;
        align-self: strech;
        outline: 1px solid blue;
      }

      &.drag-image {
        background-color: rgb(220, 255, 220);
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
