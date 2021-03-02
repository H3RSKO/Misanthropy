const path = require("path");
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");

module.exports = {
  entry: ['babel-regenerator-runtime', "./App/App.js"],
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'wpfonts/'
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // webpack@2.x and newer
              name: '[name].[ext]',
              outputPath: 'images/'
            },
          },
        ]
      }
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        {
          family: "Piazzolla",
          variants: ["400", "500", "500italic", "600bold", "700italic"],
        }
      ],
    }),
  ]
};
