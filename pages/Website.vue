<template>
  <div class="wrapper">
    <Editor :tools="tools" />
    <!-- OPTIONS BAR -->
    <draggable
      :list="pageContent"
      style="width: 100%; min-height: 50px; border: 1px solid red"
      @change="addedElement"
      group="webtools"
    >
      <WebGeneric
        :item="item"
        v-for="(item, index) in pageContent"
        :key="index"
        class="item"
      />
    </draggable>
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
          pageContent: [
            {
              name: 'Header',
              component: 'WebHeader',
              icon: 'H1 icon',
              props: { options: {}, defaultcontent: 'I am header' },
            },
            {
              name: 'Medium Editor',
              component: 'WebRichEditor',
              props: { options: {}, defaultcontent: '' },
              icon: 'TextEditor',
            },
            // {
            //   name: 'Column',
            //   component: 'WebColumn',
            //   props: { options: {}, defaultcontent: '' },
            //   icon: 'Col',
            // },
          ],
        }
      })
      .catch((err) => console.log(err))
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
<style lang="scss">
.wrapper {
  .list {
    margin: 0;
    width: 100%;
    min-height: 100px;
    .item {
      padding: 20px;
      margin: 10px;
      background-color: rgb(220, 220, 255);
      display: flex;
      align-items: center;
      justify-content: center;

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
