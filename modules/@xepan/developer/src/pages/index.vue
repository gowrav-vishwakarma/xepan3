<template>
  <div>
    <client-only>
      <v-container fluid style="height: 100vh">
        <tool-bar />
        <v-main>
          <menu-bar />
          <stage :items="pageContent" class="stage" />
        </v-main>
      </v-container>
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
          id: 'a1',
          props: {
            cbType: 'Generic',
            title: 'ServerSide',
            type: 'ClientSideJS',
            pos: { x: 100, y: 30, w: 300, h: 200 },
            allowDrop: true,
            toolbarOptions: {},
          },
          ports: {
            in: [
              {
                id: 'x1',
                name: 'X',
                linkedTo: [],
              },
              {
                id: 'y1',
                name: 'Y',
                linkedTo: [],
              },
            ],
            out: [
              {
                id: 'po1',
                name: 'Sum',
                linkedTo: [],
              },
            ],
          },
          items: [],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.stage.drop-zone {
  position: relative;
  outline: 1px dashed red;
  width: 100%;
  height: 500px;
}
.code-block .drop-zone {
  position: relative;
  min-height: 10px;
  min-width: 10px;
  outline: 1px solid rgb(105, 115, 160);
  background-color: azure;
}

@keyframes pulse {
  0% {
    background-color: #222;
  }
  50% {
    background-color: #f44242;
  }
  100% {
    background-color: #222;
  }
}
</style>
