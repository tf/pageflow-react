var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: false,
    frameworks: ['mocha', 'chai', 'chai-sinon', 'phantomjs-shim'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'spec/*spec.js',
      'spec/*spec.jsx',
      'spec/**/*spec.js',
      'spec/**/*spec.jsx'
    ],
    exclude: [
      'flycheck_*.*',
      '**/flycheck_*.*',
      '*/**/flycheck_*.*',
    ],
    preprocessors: {
      'spec/*.js': ['webpack', 'sourcemap'],
      'spec/*.jsx': ['webpack', 'sourcemap'],
      'spec/**/*.js': ['webpack', 'sourcemap'],
      'spec/**/*.jsx': ['webpack', 'sourcemap']
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
      plugins: [
        new webpack.DefinePlugin({
          PAGEFLOW_EDITOR: false
        })
      ],
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?stage=0&optional[]=runtime'
          },
          {
            test: require.resolve('react'),
            loader: 'expose?React'
          }
        ]
      },
      externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ReactContext': true,
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true
      },
      resolve: {
        extensions: ['', '.js', '.jsx'],
        root: [path.resolve('./src'), path.resolve('./spec')]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};