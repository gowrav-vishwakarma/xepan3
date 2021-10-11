export default {
  name: '@xepan/core',
  order: 10,
  aliases: {
    '@xepan/core': '/',
  },
  plugins: [{ ssr: false, src: './plugins/v-form-base' }],
}
