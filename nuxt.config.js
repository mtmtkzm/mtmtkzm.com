module.exports = {
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'portfolio desu' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,800' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inconsolata:400,700' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    build: {
      postcss: [
        // require('postcss-nested')(),
        // require('postcss-responsive-type')(),
        // require('postcss-hexrgba')(),
      ]
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    // プロジェクト内の SCSS ファイル
    'reset-css',
    '@/assets/css/style.scss',
  ],
  modules: [
    ['nuxt-sass-resources-loader', [
      '@/assets/css/_setting.scss',
      '@/assets/css/_mixin.scss',
    ]],
  ],
};
