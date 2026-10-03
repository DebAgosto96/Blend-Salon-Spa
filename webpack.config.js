const path = require("path");
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  mode: "development",

  /* ENTRY */

  entry: "./src/App.jsx",

  /* OUTPUT */

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
    clean: false,
  },

  devtool: "source-map",

  /* PLUGINS */

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
      API_URL: "http://localhost:8080",
      SOCKETS_URL: "ws://localhost:8080",
      REACT_APP_AUTH0_DOMAIN: "",
      REACT_APP_AUTH0_CLIENT_ID: "",
      REACT_APP_AUTH0_AUDIENCE: "",
    }),
  ],

  /* LOADERS */

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },

  /* RESOLVE */

  resolve: {
    extensions: [".js", ".jsx"],
  },

  /* DEVELOPMENT SERVER */

  devServer: {
    static: [
      {
        directory: path.join(__dirname, "dist"),
        publicPath: "/",
      },
      {
        directory: path.join(__dirname, "public"),
        publicPath: "/",
      },
    ],

    compress: true,
    historyApiFallback: true,
    port: 3000,
  },
};