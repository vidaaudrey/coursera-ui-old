// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.
// Use `.storybook/user/modify_webpack_config.js instead`.

const path = require('path');
const updateConfig = require('./user/modify_webpack_config');

const config = {
  module: {
    resolve: {
      extensions: ['', '.js', '.styl'],
    },
    output: {
      publicPath: '/build',
    },
    loaders: [
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: path.resolve(__dirname, '../'),
      },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      {
        test: /\.json$/,
        loader: ['json'],
        include: path.resolve(__dirname, '../'),
     },
     {
        test: /\.jsx/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['airbnb']
        }
      }
    ],
  },
};

updateConfig(config);
module.exports = config;
