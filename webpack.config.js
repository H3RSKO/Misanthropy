const path = require('path');

module.exports = {
  entry: './App/App.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                "@babel/preset-env",
                "@babel/preset-react"
            ]
         },
       }
      },
      {
          test: /\.css$/i,
          use: 'css-loader',
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
};
