const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: resolve(__dirname, "./index.js"),
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, "dist"),
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test',
      template: './index.html',
      chunks: ['app']
    })
  ],
  resolve: {
    extensions: [".js", ".css"],
    alias: {
//    styles: resolve(__dirname, "src/styles"),
//    components: resolve(__dirname, "src/components"),
//    renderer: resolve(__dirname, "src/renderer"),
//    assets: resolve(__dirname, "assets"),
    }
  },
  module: {
    rules: [
       {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test:/\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react','stage-1'],
            plugins: ['transform-decorators-legacy','transform-runtime']
          }
        }
      },
    ]
  }
};

