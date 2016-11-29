const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: __dirname + "/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    port: 3000,
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './index.html' },
    ])
  ]
}