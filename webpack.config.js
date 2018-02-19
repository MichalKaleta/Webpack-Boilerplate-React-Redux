//const path = require('path');

module.exports= {
  entry: "./src/index.js",
  
  output: {
  filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  }
}
