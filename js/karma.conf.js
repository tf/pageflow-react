var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: false,
    frameworks: ['mocha', 'chai', 'chai-sinon', 'phantomjs-shim'],
    files: [
      'spec/*spec.js',
      'spec/**/*spec.js'
    ],
    exclude: [
      'flycheck_*.js',
      '**/flycheck_*.js',
      '*/**/flycheck_*.js',
    ],
    preprocessors: {
      'spec/*spec.js': ['webpack', 'sourcemap'],
      'spec/**/*spec.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    plugins: [
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha',
      'karma-chai',
      'karma-chai-sinon',
      require('karma-phantomjs-shim'),
      'karma-phantomjs-launcher'
    ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {test: /\.jsx?$/, loader: 'babel-loader?stage=0&optional[]=runtime'}
        ]
      },
      resolve: {
        root: path.resolve('./src')
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};