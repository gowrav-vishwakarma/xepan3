<template>
  <div class="wrapper">
    <Editor
      v-if="isLoggedIn"
      :tools="tools"
      @save-page-content="savePageContent"
    />
    <WebGeneric
      v-for="(item, index) in pageContent"
      :key="generateId(index)"
      :item="item"
      class="item"
    />
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    console.log('context.req.url', context.req.url)
    let pageContent = await context.$axios
      .$get('/api/web/page-content', {
        params: { page: context.req.url },
      })
      .catch((err) => console.log(err))
    if (!pageContent) {
      pageContent = [
        {
          name: 'WebRow',
          component: 'WebRow',
          props: {},
          toolbarOptions: {},
          icon: 'Row',
          items: [],
        },
      ]
    }
    const tools = await context.$axios
      .$get('/api/web-editor/tools')
      .catch((err) => console.log(err))
    return { tools, pageContent, pageUrl: context.req.url }
  },
  computed: {
    isLoggedIn() {
      return true
    },
  },
  // created() {
  //   this.$nuxt.$on('xepan-editor-tools-selected', this.toolsSelectedCallBack)
  // },
  methods: {
    savePageContent() {
      const postOptions = {
        page: this.pageUrl,
        content: this.pageContent,
      }

      this.$axios
        .post('/api/web-editor/page-content-save', postOptions)
        .then(() => {
          alert('saved')
        })
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
