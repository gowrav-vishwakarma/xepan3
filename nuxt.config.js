import colors from 'vuetify/es5/util/colors'

export default {
  // ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - xEpan3',
    title: 'xEpan3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
    host: 'xepan3.loc', // default: localhost
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@mdi/font/css/materialdesignicons.css',
    // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' },
    // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' },
    // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.4.95/css/materialdesignicons.min.css' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.client.js' },
    { src: '~plugins/vuedraggable.js', ssr: false },
    { src: '~/plugins/tinymce.js' },
    { src: '~/plugins/v-form-base.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components', // default level is 0
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/router',
    '@ergonode/vuems',
  ],
  vuems: {
    modules: {
      local: ['@xepan/core', '@xepan/api-gateway', '@xepan/webbuilder'],
    },
    required: ['@xepan/core', '@xepan/api-gateway'],
    vuex: true,
    logLoadedModules: true,
    isDev: process.env.NODE_ENV !== 'production',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth-next',
  ],

  auth: {
    strategies: {
      adminlogin: {
        scheme: 'local',
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/api/admin/login', method: 'post' },
          logout: false,
          user: { url: '/api/admin/user', method: 'get' },
        },
      },
    },
    redirect: {
      login: '/admin/login',
      logout: '/admin',
      // callback: '/admin',
      home: '/admin',
    },
  },

  router: {
    middleware: [
      // '~/middleware/modulesMiddlewareLoader.js',
    ],
  },

  serverMiddleware: [
    // '/api': '~/server.js'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    axios: {
      baseURL: process.env.API_GATEWAY_URL || 'http://localhost', // Used as fallback if no runtime config is provided
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    watch: [
      '~/models/*.js',
      '~/api-routes/*.js',
      '~/xepan-applications/**/*.js',
      '~/api-routes/admin.js',
    ],
    transpile: ['vuetify/lib', 'tiptap-vuetify'],
    cache: false,
    // extend(config, ctx) {
    //   // You can extend webpack config here
    //   config.resolve.alias.vue$ = "vue/dist/vue.esm.js";
    // }
  },
}
