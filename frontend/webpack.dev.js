const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist',
      historyApiFallback: true,
      proxy: {
          // 用户登录注册退出
          '/users/*':{
              target:'http://localhost:3000'
          },
          // 后台
          '/admin/*':{
              target:'http://localhost:3000'
          },
          // 前台
          '/index/*':{
              target:'http://localhost:3000'
          },
      },
  }
});
