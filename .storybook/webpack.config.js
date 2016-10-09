const path = require('path');

module.exports = {
  resolve: {
    alias: {
      src: path.join(__dirname, '../src'),
      lib: path.join(__dirname, '../lib'),
      root: path.join(__dirname, '../'),
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.(css|scss)$/,
        loaders: ["style", "css", 'sass'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.json$/,
        loader: ['json'],
        include: path.resolve(__dirname, '../'),
     },
     {
       test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
       exclude: /\/favicon.ico$/,
       loader: 'file'
     }
    ]
  }
}
