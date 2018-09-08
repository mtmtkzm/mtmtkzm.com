const path = require('path');
const spriteSvg = require('nuxt-sprite-svg-inline');

const general = {
  title: 'MTMTKZM - Front-End Developer ライダーのポートフォリオサイト',
  description: '東京で働くフロントエンドエンジニア、ライダーのポートフォリオサイトです。じっくりひとつの技術極めることが得意ではない一方、サービスの案を考えたり作ったりすることが好きで得意です。',
  url: 'https://mtmtkzm.com',
  account: '@mtmtkzm'
};

module.exports = {
  head: {
    title: general.title,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      // Basic
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: general.description },
      { name: 'apple-mobile-web-app-title', content: 'maner' },
      // Open Graph
      { property: 'og:title', content: general.title },
      { property: 'og:description', content: general.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: general.url },
      { property: 'og:image', content: `${general.url}/ogp.png` },
      // Twitter Card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: general.url },
      { name: 'twitter:title', content: general.title },
      { name: 'twitter:creator', content: general.account },
      { name: 'twitter:description', content: general.description },
      { name: 'twitter:image:src', content: `${general.url}/twitter-card.png` },
      { name: 'twitter:image:alt', content: general.title }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
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
  loading: {color: '#ffffff'},
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
