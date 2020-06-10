const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware([process.env.REACT_APP_API], {  //`api`是需要转发的请求 
      target: process.env.REACT_APP_BASE_URL,  // 这里是接口服务器地址，配置你要请求的服务器地址
      changeOrigin: true,
      pathRewrite: {
          [`^${process.env.REACT_APP_API}`]: ""
      }
    })
  )
};