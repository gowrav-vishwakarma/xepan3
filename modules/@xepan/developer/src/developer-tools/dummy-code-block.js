module.exports = {
  toolBlock: 'Basic',
  title: 'Block',
  component: 'xEpanDeveloperEditorCodeBlock',
  namespace: 'com.xepan',
  fn: 'nothing',
  ui: {
    icon: 'cogs',
    class: 'orange',
  },
  props: {
    type: 'ClientSideJS',
  },
  toolbarOptions: {
    type: {
      type: 'icon',
      large: true,
      label: 'print',
      color: 'blue',
      tooltip: 'Icon Print',
    },
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