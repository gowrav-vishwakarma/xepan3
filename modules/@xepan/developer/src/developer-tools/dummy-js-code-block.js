module.exports = {
  toolBlock: 'Js',
  title: 'Block JS',
  component: 'xEpanDeveloperEditorCodeBlock',
  namespace: 'com.xepan',
  fn: 'nothing1',
  ui: {
    icon: 'cogs',
    class: 'red',
  },
  props: {
    type: 'ClientSideJS',
  },
  allowDrop: ['.'],
  pos: { x: 0, y: 0, w: 100, h: 100 },
  ports: {
    in: [
      {
        name: 'v',
        type: ['.'],
      },
    ],
    out: [
      {
        name: '2x',
        type: ['com.xavoc.primary.number.integer', 'com.xavoc.primary.boolean'],
      },
    ],
  },
  items: [],
  connections: [],
}
