var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/client.js'],
    output: {
        path: require("path").resolve("./dist"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),//optimize all sources while compiling
        new webpack.HotModuleReplacementPlugin(),   //auto compile on change
        new webpack.NoErrorsPlugin()                //stop compiling if any error
    ],
    module: { //extra things to be done during the bundling
        loaders: [
            {
                test: /\.js$/,          //on .js files only, we want to run below loader: babel
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {                //with babel, we want to compile into javascript es2015
                    presets: ['react', 'es2015', 'react-hmre'] //loaded in package.json
                }
            }
        ]
    }
}