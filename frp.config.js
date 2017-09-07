'use strict';
// https://github.com/frontainer/frontplate-cli/wiki/6.%E8%A8%AD%E5%AE%9A

module.exports = function(production) {
  global.FRP_SRC = 'src';
  global.FRP_DEST = 'docs';
  return {
    clean: {},
    html: { src: `${FRP_SRC}/view/**/*.{ejs,svg,html}` },
    style: production ? {} : {},
    script: production ? require('./config/webpack.config.production') : require('./config/webpack.config'),
    server: {},
    copy: { 'src/svg/**/*': FRP_DEST + '/assets/svg' },
    sprite: [],
    test: {}
  }
};
