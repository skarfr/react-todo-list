/**
 * This is the web application server.
 * It is based on ExpressJs (lightweight framework for NodeJs)
 * And it uses webpack
 *  • PROD: to compile all sources into 1 bundle.js file
 *  • STAGING: to automatically recompile all sources in the memory at each modification
 *  • STAGING/PROD?: to "hot reload" the browser upon re-compilation
 *
 * To start it, execute in the command line: npm run serve
 * To launch tests, execute in the command line: npm run test
 */

/**
 * Node.js web application server framework
 * http://expressjs.com/
 */
var express = require('express');

/**
 * This NodeJs module contains utilities for handling and transforming file paths.
 * https://nodejs.org/api/path.html
 */
var path = require('path');

/**
 * This is a JavaScript module bundler. Webpack takes all dependencies and generates 1 big static javascript representing those modules.
 * In this application, WebPack generates ./dist/bundle.js file from React Sources and all our modules js source file, in prod. Due to webpack-dev-middleware, the file is no longer written on disk (staging only)
 *
 * webpack-dev-middleware: https://github.com/webpack/webpack-dev-middleware
 * Wrapper middleware for webpack. TO BE REMOVED IN PROD, FOR STAGING ONLY !
 *  • No files are written to disk, it handles the files in memory.
 *  • If files changed in watch mode, the middleware no longer serves the old bundle, but delays requests until the compiling has finished.
 *  • You don't have to wait before refreshing the page after a file modification.
 *
 * webpack-hot-middleware: https://github.com/glenjamin/webpack-hot-middleware
 * This allows you to add hot reloading into an existing server. It can basically update changed modules (Js & CSS) without a full page reload (in the browser)
 *
 * We require the webpack config file, as well.
 */
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

// we instantiate the web server
var app = express();

// we instantiate the "compiler" (aka generate bundle.js)
var compiler = webpack(config);

// we give webpack to the web server
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// the web server should just care about compiled files which are located in './dist/ folder (bundle.js)
app.use(express.static('./dist'));

// routing: if a client query http://<domain>/, he will get served 'client/index.html'
app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

// we start the server on localhost:3000
var port = 3000;
app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
