export default {
  name: '@xepan/webbuilder',
  order: 100000,
  aliases: {
    '@xEpanWebBuilder': '~/modules/@xepan/webbuilder/components',
  },
  plugins: [
    { ssr: false, src: './plugins/vuedraggable' },
    { ssr: false, src: './plugins/tinymce' },
  ],
  relations: ['@xepan/core'],
}
