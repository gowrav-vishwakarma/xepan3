export default {
  name: '@xepan/developer',
  order: 900,
  plugins: [
    { ssr: false, src: './plugins/file-menu' },
    { ssr: false, src: './plugins/vue-draggable-resizable' },
    { ssr: false, src: './plugins/v-drag-drop-diectives' },
  ],
}
