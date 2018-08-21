const path = require('path');
const spriteSvg = require('nuxt-sprite-svg-inline');

module.exports = {
  head: {
    title: 'portfolio',
    meta: [
      {charset: 'utf-8'},
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'portfolio desu',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,800',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Inconsolata:400,700',
      },
    ],
  },
  loading: {color: '#3B8070'},
  build: {
    postcss: [
      require('postcss-sass-color-functions')(),
      require('postcss-custom-properties')(),
      require('autoprefixer')(),
      require('postcss-nested')(),
    ],
    /*
     ** Run ESLint on save
     */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
    extend(config, ctx) {
      if (ctx.isServer) {
        spriteSvg.run(path.join(__dirname, 'assets/svg/icons.svg'),
          path.join(__dirname, '.nuxt/views/app.template.html'))
      }
    },
  },
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-59102929-1'
    }]
  ],
  css: [
    'reset-css',
    '@/assets/css/style.css',
  ],
};
