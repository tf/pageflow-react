module.exports = {
  context: __dirname + '/src',
  entry: './index.js',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?stage=0'],
      }
    ],
  },

  output: {
    path: __dirname + '/../app/assets/javascripts/pageflow',
    filename: 'react.js',

    libraryTarget: 'assign',
    library: ['pageflow', 'react']
  },

  externals: {
    pageflow: 'pageflow',
    react: 'React',
    underscore: '_',
    backbone: 'Backbone',
    jquery: 'jQuery'
  }
};