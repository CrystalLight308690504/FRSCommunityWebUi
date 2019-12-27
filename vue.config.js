
const webpack = require("webpack");
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ],
    resolve: {
        extensions :[],
        alias:{
          "assets": '@/assets',
          'common':"@/common",
          'components':"@/components",
          'network':'@/network',
          'views':'@/views',
        }
    }
  }
}
