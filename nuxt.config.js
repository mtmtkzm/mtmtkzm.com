import general from './config/head';
import customizeAppTemplate from './config/customize-app-template';

module.exports = {
  generate: {
    fallback: true,
  },
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: general.title,
    meta: [
      // Basic
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: general.description },
      { name: 'apple-mobile-web-app-title', content: 'mtmtkzm' },
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
        href: 'https://fonts.googleapis.com/css?family=Montserrat:800',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Inconsolata:400,700',
      },
    ],
  },
  loading: {color: '#ffffff'},
  build: {
    publicPath: '/mtmtkzm/',
    postcss: [
      require('postcss-sass-color-functions')(),
      require('postcss-custom-properties')(),
      require('autoprefixer')(),
      require('postcss-nested')(),
    ],
    extend(config, {isDev, isClient, isServer}) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/,
      //   })
      // }
      if (isServer) {
        customizeAppTemplate();
      }
    },
  },
  plugins: [
    { src: "~/plugins/app-icon.js", ssr: true },
  ],
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-59102929-1'
    }],
    'nuxt-clipboard2',
  ],
  css: [
    'reset-css',
    '@/assets/css/style.css',
  ],
};
