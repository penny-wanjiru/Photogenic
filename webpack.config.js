// module.exports = {
//   context: __dirname + "/",
//   entry: "./static/js/app.js",
//   output: {
//     filename: "bundle.js",
//     path: __dirname + "/static/js/build",
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loaders: 'babel-loader',
//       },
//       {
//         test: /\.html$/,
//         loader: "file?name=[name].[ext]",
//       },
//     ]
//   }
// }
module.exports = {
  context: __dirname + "/",
  entry: "./static/js/app.js",
  output: {
    path: __dirname + "/static/js/build",
    filename: "bundle.js"
  },
  module: {
    loaders:[{
      test:/\.js?$/,
      exclude: /(node_modules| server.js)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}

