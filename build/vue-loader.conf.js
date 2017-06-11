const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  loaders: Object.assign({}, {
      i18n: '@kazupon/vue-i18n-loader'
    }, utils.cssLoaders({
      sourceMap: isProduction
        ? config.build.productionSourceMap
        : config.dev.cssSourceMap,
      extract: isProduction
    })
  )
}
