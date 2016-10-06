module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.
   config.externals = {
     'jsdom': 'window',
     'cheerio': 'window',
     'react/lib/ExecutionEnvironment': true,
     'react/lib/ReactContext': 'window',
     'react/addons': true,
   }
};
