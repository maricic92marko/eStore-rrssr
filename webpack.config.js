var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");

var browserConfig = {
    entry: './src/browser/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
          {
            test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: "file-loader",
            options: {
              name: "public/media/[name].[ext]",
              publicPath: url => url.replace(/public/, "")
            }
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              use: [
                {
                  loader: "css-loader",
                  options: { importLoaders: 1 }
                },
                {
                  loader: "postcss-loader",
                  options: { plugins: [autoprefixer()] }
                }
              ]
            })
          },
            {test: /\.(js)$/, use: 'babel-loader'},
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        }),
        new ExtractTextPlugin({
          filename: "/[name].css"
        })
    ]
}

var serverConfig = {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: 'server.js',
        publicPath: '/'
    },
    module: {
        rules: [
          {
            test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: "file-loader",
            options: {
              name: "public/media/[name].[ext]",
              publicPath: url => url.replace(/public/, ""),
              emit: false
            }
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: "css-loader"
              }
            ]
          },
          {test: /\.(js)$/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        })
    ]
}

module.exports = [browserConfig, serverConfig]