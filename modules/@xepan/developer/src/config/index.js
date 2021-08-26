export default {
  name: '@xepan/developer',
  order: 900,
  aliases: {
    '@xepan/developer': '/',
  },
  plugins: [
    { ssr: false, src: './plugins/file-menu' },
    { ssr: false, src: './plugins/vue-draggable-resizable' },
    { ssr: false, src: './plugins/vue-drag-resize' },
    { ssr: false, src: './plugins/pan-zoom' },
  ],
}
