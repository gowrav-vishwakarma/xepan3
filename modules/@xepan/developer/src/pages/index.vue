<template>
  <div>
    <client-only>
      <menu-bar />
      <tool-bar />
      <v-main>
        <v-container>
          <stage :items="pageContent" />
        </v-container>
      </v-main>
    </client-only>
  </div>
</template>

<script>
import ToolBar from '../components/Editor/ToolBar.vue'
import MenuBar from '../components/Editor/MenuBar.vue'
import Stage from '../components/Editor/Stage.vue'

export default {
  layout: 'developer',
  components: {
    ToolBar,
    MenuBar,
    Stage,
  },
  // auth: false,
  // asyncData(context) {
  //   let pageContent = false
  //   if (!pageContent) {
  //     pageContent = [
  //       {
  //         name: 'xEpanDeveloperEditorToolsCircle',
  //         component: 'xEpanDeveloperEditorToolsCircle',
  //         props: {},
  //         toolbarOptions: {},
  //         icon: 'Row',
  //         items: [],
  //       },
  //     ]
  //   }

  // const tools = await context.$axios
  //   .$get('/api/web-editor/tools')
  //   .catch((err) => console.log(err))

  // return { pageContent }
  // },
  data() {
    return {
      pageContent: [
        {
          name: 'Block',
          component: 'xEpanDeveloperEditorToolsCodeBlock',
          props: {
            id: '1',
            cbType: 'Generic',
            title: 'ServerSide',
            type: 'ClientSideJS',
            pos: { x: 10, y: 10, w: 'auto', h: 'auto' },
            ports: { in: [], out: [] },
            allowDrop: true,
            toolbarOptions: {},
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.wrapper11 {
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
