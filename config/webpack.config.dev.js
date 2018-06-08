import path from 'path'

const entry = {
  'dist/js/app.js': ['babel-polyfill', './src/index.ts',]
}

module.exports = {
  mode: 'development',
  entry,
  output: {
    filename: '[name]',
    path: path.join(__dirname, './www/')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts'
    ]
  }
}
