const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
const main = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            //options: { minimize: true }
          },
        ],
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
       }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/public/index.html",
      favicon: './src/public/favicon.ico',
      filename: "./index.html",
      excludeChunks: ["server"],
    }),
  ],
};

const server = {
  entry: {
    server: './src/server/server.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'node',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
}

module.exports = [
  main, server
];
