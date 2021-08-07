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
      :isLoggedIn="isLoggedIn"
      class="item"
    />
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  async asyncData(context) {
    const pagePath = process.client ? context.route.path : context.req.url
    let pageContent = await context.$axios
      .$get('/api/web/page-content', {
        params: { page: pagePath },
      })
      .catch((err) => {
        if (err.response.status === 404) {
          context.error({ statusCode: 404, message: 'Page not found' })
        }
      })
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

    return { tools, pageContent, pageUrl: pagePath }
  },
  computed: {
    isLoggedIn() {
      console.log('this.$store.state.auth', this.$store.state.auth)
      return (
        this.$store.state.auth.loggedIn &&
        this.$store.state.auth.user.roles.includes('editor')
      )
    },
  },
  methods: {
    removeToolBarOptions(o) {
      if (Array.isArray(o)) {
        o = o.map((i) => this.removeToolBarOptions(i))
      } else {
        o = _.omit(o, 'toolbarOptions')
      }
      if (o.items) o.items = this.removeToolBarOptions(o.items)
      return o
    },
    savePageContent() {
      let content = JSON.parse(JSON.stringify(this.pageContent))
      content = this.removeToolBarOptions(content)
      console.log('content', content)

      const postOptions = {
        page: this.pageUrl,
        content,
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
