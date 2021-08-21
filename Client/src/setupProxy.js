const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://ec2-3-34-4-159.ap-northeast-2.compute.amazonaws.com:8000/',
      changeOrigin: true,
    })
  );

  app.use(
    '/accounts',
    createProxyMiddleware({
      target:
        'http://ec2-3-34-4-159.ap-northeast-2.compute.amazonaws.com:8000/',
      changeOrigin: true,
    })
  );
};
