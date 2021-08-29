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
            pos: { x: 57, y: 16, w: 961, h: 311 },
            allowDrop: true,
            toolbarOptions: {},
          },
          connections: [],
          ports: {
            in: [
              {
                id: 'x1',
                name: 'X',
                pos: { internal: { x: 0, y: 0 }, parent: { x: 0, y: 0 } },
              },
              {
                id: 'y1',
                name: 'Y',
                pos: { internal: { x: 0, y: 0 }, parent: { x: 0, y: 0 } },
              },
            ],
            out: [
              {
                id: 'po1',
                name: 'Sum',
                pos: { internal: { x: 0, y: 0 }, parent: { x: 0, y: 0 } },
              },
            ],
          },
          items: [
            {
              name: 'Block',
              component: 'xEpanDeveloperEditorToolsCodeBlock',
              id: 'idfamvzvg39kksucl92j',
              fn: 'nothing',
              props: {
                cbType: 'Generic',
                title: 'ServerSide',
                type: 'ClientSideJS',
                pos: { x: 43, y: 29, w: 390, h: 207 },
                allowDrop: true,
              },
              connections: [],
              ports: {
                in: [
                  {
                    name: 'v',
                    id: 'idrzu37e5ovviksucl92j',
                    pos: { internal: { x: 0, y: 0 }, parent: { x: 0, y: 0 } },
                  },
                  {
                    name: 'v2',
                    id: 'idxxxxxe5ovviksucl92j',
                    pos: { internal: { x: 0, y: 0 }, parent: { x: 0, y: 0 } },
                  },
                  {
                    name: 'v3',
                    id: 'idyyyyye5ovviksucl92j',
                    pos: { internal: { x: 0, y: 0 }, parent: { x: 0, y: 0 } },
                  },
                ],
                out: [
                  {
                    name: '2x',
                    id: 'idpavmvjo469sksucl92k',
                    pos: { internal: { x: 0, y: 0 }, parent: { x: 0, y: 0 } },
                  },
                ],
              },
              items: [
                {
                  name: 'Block',
                  component: 'xEpanDeveloperEditorToolsCodeBlock',
                  id: 'idr238cdg3l8ksucp3wb',
                  fn: 'nothing',
                  props: {
                    cbType: 'Generic',
                    title: 'ServerSide',
                    type: 'ClientSideJS',
                    pos: { x: 31, y: 61, w: 313, h: 75 },
                    allowDrop: true,
                  },
                  connections: [],
                  ports: {
                    in: [
                      {
                        name: 'v',
                        id: 'idnrilsgi8bnksucp3wb',
                        pos: {
                          internal: { x: 0, y: 0 },
                          parent: { x: 0, y: 0 },
                        },
                      },
                    ],
                    out: [
                      {
                        name: '2x',
                        id: 'idqceqokiu97ksucp3wb',
                        pos: {
                          internal: { x: 0, y: 0 },
                          parent: { x: 0, y: 0 },
                        },
                      },
                    ],
                  },
                  items: [],
                },
              ],
            },
            {
              name: 'Block',
              component: 'xEpanDeveloperEditorToolsCodeBlock',
              id: 'id6id0wlgroiqksucozcn',
              fn: 'nothing',
              props: {
                cbType: 'Generic',
                title: 'ServerSide',
                type: 'ClientSideJS',
                pos: { x: 568, y: 67, w: 312, h: 110 },
                allowDrop: true,
              },
              connections: [],
              ports: {
                in: [
                  {
                    name: 'v',
                    id: 'idkav5997eh7ksucozco',
                    pos: { internal: { x: 0, y: 0 }, parent: { x: 0, y: 0 } },
                  },
                ],
                out: [
                  {
                    name: '2x',
                    id: 'id4qwexnkw8v5ksucozco',
                    pos: { internal: { x: 0, y: 0 }, parent: { x: 0, y: 0 } },
                  },
                ],
              },
              items: [],
            },
          ],
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
