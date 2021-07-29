import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - xEpan3',
    title: 'xEpan3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    host: '0.0.0.0' // default: localhost
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@mdi/font/css/materialdesignicons.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components', // default level is 0
    { path: '~xepan-applications/xepan/components', prefix: 'xEpan' }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth-next'
  ],

  auth: {
    localStorage: true,
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
          autoFetch: false
        },
        endpoints: {
          login: { url: '/api/admin/login', method: 'post' },
          logout: false,
          user: false
        }
      }
    },
    redirect: {
      login: '/admin/login',
      logout: '/admin',
      // callback: '/admin',
      home: '/admin'
    }
  },

  router: {
    extendRoutes(routes, resolve) {
      const path = require('path');
      const { xepanApps } = require('./models');
      // Read all vue-routes
      xepanApps.forEach(xapp => {
        const vueroute = path.normalize(path.join(__dirname, 'xepan-applications/', xapp, '/vue-routes.js'));
        const _routes = require(vueroute).default;
        _routes.forEach(r => {
          r.component = resolve(__dirname, r.component);
          routes.push(r)
        });
      });
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/front.vue')
      })
    }
  },

  serverMiddleware: {
    '/api': '~/server.js'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
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
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    watch: ['~/xepan-applications/**/*.js', '~/api-routes/admin.js'],
    cache: false,
    extend(config, ctx) {
      // You can extend webpack config here
      config.resolve.alias.vue$ = "vue/dist/vue.esm.js";
    }
  }
}
