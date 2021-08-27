<template>
  <div>
    <client-only>
      <menu-bar />
      <tool-bar />
      <v-main>
        <v-container fluid style="height: 100vh">
          <stage :items="pageContent" class="stage" />
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
          id: 'a1',
          props: {
            cbType: 'Generic',
            title: 'ServerSide',
            type: 'ClientSideJS',
            pos: { x: 100, y: 30, w: 100, h: 100 },
            ports: { in: [], out: [] },
            allowDrop: true,
            toolbarOptions: {},
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
  min-height: 100px;
  min-width: 50px;
  outline: 1px solid red;
}
</style>
