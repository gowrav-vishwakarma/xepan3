import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  // ssr: false,
  head: {
    titleTemplate: '%s - Frendy Managed Project - Refactor',
    title: 'Frendy Managed Project - Refactor',
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

  css: ['@mdi/font/css/materialdesignicons.css'],

  plugins: [{ src: '~/plugins/persistedState.client.js' }],

  components: [
    '~/components', // default level is 0
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/router',
    '@ergonode/vuems',
  ],
  vuems: {
    modules: {
      local: [
        '@xepan/core',
        '@xepan/api-gateway',
        '@xepan/webbuilder',
        '@xepan/developer',
      ],
    },
    required: ['@xepan/core', '@xepan/api-gateway'],
    vuex: true,
    logLoadedModules: true,
    isDev: process.env.NODE_ENV !== 'production',
  },

  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
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
          login: { url: '/api/xepan/core/admin/login', method: 'post' },
          logout: false,
          user: { url: '/api/xepan/core/admin/user', method: 'get' },
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
    baseURL: process.env.API_GATEWAY_URL || 'http://localhost', // Used as fallback if no runtime config is provided
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
    treeShake: {
      components: [
        'VRow',
        'VCol',
        'VTextField',
        'VTooltip',
        'VCheckbox',
        'VSelect',
      ],
      directives: ['Ripple', 'Intersect', 'Touch', 'Resize', 'ClickOutside'],
    },
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
