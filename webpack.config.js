var webpack = require('webpack')
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
var isProduction = process.env.NODE_ENV === "production"
var htmlPlugin = new htmlWebpackPlugin({
  title: "QuietTime Coordinator",
  filename: "index.html",
  template: "src/index.html.ejs",
  inject: 'head',
  isProduction: isProduction,
  minify: minifyConfig,
  hash: false
})

var minifyConfig = {
  // Use the defaults
  // Options can be found at https://github.com/kangax/html-minifier#options-quick-reference
}

// Add the name of package files (as you see them in the package.json manifest) here:
var vendorFiles = ['react', 'react-dom', 'react-redux', 'redux', 'react-router']

// Everything that is excluded in vendorFiles must be referenced here
// The keys are the same package names as you used in vendorFiles
// The values are the object names you'll find in the external file
// { [package name]: [name of object in the external file] }
var externals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'react-redux': 'ReactRedux',
  'redux': 'Redux',
  'react-router': 'ReactRouter'
}

var entryOptions = isProduction ? './src/index.js' : ['./src/index.js', 'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server']

var outputOptions = Object.assign({}, { path: path.join(__dirname, 'build'), filename: 'scripts/bundle.[hash].js' }, isProduction ? {} : { publicPath: 'http://localhost:8080/' })

module.exports = {
  entry: entryOptions,
  output: outputOptions,
  devtool: isProduction ? 'cheap-module-source-map' : 'eval',
  devServer: {
    historyApiFallback: true
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'source-map'
      }
    ],
    loaders: [
    {
      test: /\.less$/,
      loaders: [
        'style',
        'css',
        'less'
      ]
    },
      {
        test: /\.s?css$/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|)$/i,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'react-hot',
          'babel'
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)($|\?)/,
        loaders: ['file?fonts/[name].[ext]']
      }
    ]
  },
  externals: isProduction ? externals : {},
  plugins: [
    htmlPlugin
  ]
}
