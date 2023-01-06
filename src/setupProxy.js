const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/auth"], {
      target: "https://api-dev.quicklyinc.com/",
      changeOrigin: true
    })
  );
};