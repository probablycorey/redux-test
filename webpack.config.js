module.exports = {
  entry: "./index.js",
  module: {
    loaders: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "dist/bundle.js"
  }
}
