const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    popup: './src/popup.jsx',
    // background: './src/background.js'
    //other scripts
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve:{
    alias:{
      components: path.resolve(__dirname, './src/components')
    },
    extensions:['.js','.jsx']
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options:{
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        } 
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ 
    template: './src/popup.html',
    filename: 'popup.html'
  }),
  new CopyPlugin({
    patterns: [
      { from: "public"},
    ],
  })
]
};


