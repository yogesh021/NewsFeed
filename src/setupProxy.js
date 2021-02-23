const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/ndtvnews-trending-news", {
      target: "http://feeds.feedburner.com",
      secure: false,
      changeOrigin: true,
    })
  );
};
