export default {
  name: '@xepan/webbuilder',
  order: 100000,
  aliases: {
    '@xepan/webbuilder': '/',
  },
  plugins: [
    { ssr: false, src: './plugins/vuedraggable' },
    { ssr: false, src: './plugins/tinymce' },
  ],
  relations: ['@xepan/core'],
}
