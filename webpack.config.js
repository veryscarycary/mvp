module.exports = {
  entry: "./index.js",
  output: {
      path: "./client",
      filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}