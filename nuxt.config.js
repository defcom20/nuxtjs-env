//import colors from 'vuetify/es5/util/colors'

require("./config");

export default {
  ssr: false,
  env: process.env,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Acceso',
    //title: 'Oficina Virtual',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui,user-scalable=0',
      },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'google',
        content: 'notranslate',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
    ],
  },

  loading: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style/own.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/vuelidate',
    '~plugins/store-helpers',
    {
      src: '@/plugins/vue-the-mask.js',
      ssr: true,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    //'nuxt-vite'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  icon: {
    iconSrc: '@/static/icon.png',
  },
  manifest: {
    name: 'Oficina Virtual',
    short_name: 'Oficina Virtual',
    theme_color: '#ffffff',
    background_color: '#fff',
    display: 'standalone',
    Scope: '/',
    start_url: '/login',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
  },
  server: {
    //port: 8000 // default: 3000
  },

  // proxy: {
  //   '/api/': { target: process.env.BASE_URL, pathRewrite: {'^/api/': ''} },
  //    '/kong/': { target: process.env.BASE_URL_KONG, pathRewrite: {'^/kong/': ''} },
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    /* module options */
    optionsPath: '~/assets/js/options.js',
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Exo 2',
      },
    },
  },
  webfontloader: {
    google: {
      families: ['Exo+2:400,700,800&display=swap'],
    },
  },
  /*vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: '~/assets/js/options.js',
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
  },*/

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
