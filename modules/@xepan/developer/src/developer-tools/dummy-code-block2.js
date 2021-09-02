module.exports = {
  toolBlock: 'Basic',
  title: 'Block 2',
  component: 'xEpanDeveloperEditorCodeBlock',
  namespace: 'com.xepan',
  fn: 'nothing2',
  ui: {
    icon: 'cogs',
    class: 'green',
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
