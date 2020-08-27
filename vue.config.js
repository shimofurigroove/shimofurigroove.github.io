const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: () => {
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'docs'),
          routes: [
            '/',
            '/2019-12-08',
            '/2020-01-31',
            '/2020-07-22',
            '/2020-08-26'
          ]
        })
      ]
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/prepends.scss";'
      }
    }
  },
  publicPath: './',
  outputDir: 'docs'
};