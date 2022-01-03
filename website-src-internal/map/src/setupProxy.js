const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    let proxy = createProxyMiddleware({
        target: 'http://localhost:8080/',
        changeOrigin: true,
        logLevel: 'debug'
    });
    app.use('/map/api/', proxy);
    app.use('/gpx/', proxy);
};