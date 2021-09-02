<template>
  <client-only>
    <div>
      <v-tabs v-model="selectedTab" background-color="primary" dark>
        <v-tab v-for="tab in tabs" :key="tab.name">
          {{ tab.name }}
          <v-icon left @click="alert('Closing')">mdi-close</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="selectedTab">
        <v-tab-item v-for="tab in tabs" :key="tab.name">
          {{ tab.type }}
        </v-tab-item>
      </v-tabs-items>
      <stage :items="pageContent" class="stage" />
    </div>
  </client-only>
</template>

<script>
import stage from '../components/Editor/Stage.vue'

export default {
  components: {
    stage,
  },
  layout: 'developer',
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
      selectedTab: 0,
      pageContent: [
        {
          name: 'Block',
          component: 'xEpanDeveloperEditorCodeBlock',
          id: 'a1',
          props: {
            cbType: 'Generic',
            title: 'ServerSide',
            type: 'ClientSideJS',
            allowDrop: true,
            toolbarOptions: {},
          },
          pos: { x: 57, y: 16, w: 961, h: 311 },
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
              component: 'xEpanDeveloperEditorCodeBlock',
              id: 'idfamvzvg39kksucl92j',
              fn: 'nothing',
              props: {
                cbType: 'Generic',
                title: 'ServerSide',
                type: 'ClientSideJS',
                allowDrop: true,
              },
              pos: { x: 43, y: 29, w: 390, h: 207 },
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
                  component: 'xEpanDeveloperEditorCodeBlock',
                  id: 'idr238cdg3l8ksucp3wb',
                  fn: 'nothing',
                  props: {
                    cbType: 'Generic',
                    title: 'ServerSide',
                    type: 'ClientSideJS',
                    allowDrop: true,
                  },
                  pos: { x: 31, y: 61, w: 313, h: 75 },
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
              component: 'xEpanDeveloperEditorCodeBlock',
              id: 'id6id0wlgroiqksucozcn',
              fn: 'nothing',
              props: {
                cbType: 'Generic',
                title: 'ServerSide',
                type: 'ClientSideJS',
                allowDrop: true,
              },
              pos: { x: 568, y: 67, w: 312, h: 110 },
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
  computed: {
    tabs() {
      return this.$store.getters['editor/tabs']
    },
  },
  methods: {
    alert(msg) {
      alert(msg)
    },
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
