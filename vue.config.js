const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'docs',
  baseUrl: process.env.NODE_ENV === 'production' ? '/pub/turnplate' : '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) 
      .set('_c', resolve('src/components'))
      .set('_conf', resolve('config'))
  },
  devServer: {
    proxy: {
      '/jwt': {
        target: 'http://192.168.1.40:8765',
        changeOrigin: true,
        pathRewrite: {
          '^/jwt': '/jwt'
        },
      },
      '/api':{
        target: 'http://192.168.1.40:8765',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        },
      },
      '/zuul':{
        target: 'http://192.168.1.40:8765',
        changeOrigin: true,
        pathRewrite: {
          '^/zuul': '/zuul'
        },
      }
    }
  }
};
