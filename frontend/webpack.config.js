const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  // Mode (development or production)
  mode: process.env.NODE_ENV || 'development',

  // Module rules
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js or .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile JavaScript files using Babel
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          'css-loader', // Resolve CSS imports
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Match image files
        type: 'asset/resource', // Handle assets like images
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Match font files
        type: 'asset/resource',
      },
    ],
  },

  // Plugins
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before building
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use a template for the HTML file
      favicon: './public/favicon.ico', // Optional favicon
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Name of the extracted CSS file
    }),
  ],

  // Resolve extensions
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .js and .jsx files without specifying extensions
  },

  // Development server configuration
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3002,
    open: true, // Automatically open the browser
    historyApiFallback: true, // Support React Router
  },
};
