const path = require('path')

module.exports = {
  entry: './src/app.js', // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, 'dist'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: 'bundle.js', // string
    // the filename template for entry chunks

    publicPath: 'http://ualibr-summon.s3-website-us-west-2.amazonaws.com/', // string
    // the url to the output directory resolved relative to the HTML page

    library: 'ual-summon', // string,
    // the name of the exported library

    libraryTarget: 'umd' // universal module definition
    // the type of the exported library
  },

  module: {
    // configuration regarding modules

    rules: [
      // rules for modules (configure loaders, parser options, etc.)

      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'url-loader?limit=8000&name=assets/[name].[ext]'
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader' // runs CSS through PostCSS
          }
        ]
      }
    ]

    /* Advanced module configuration (click to show) */
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: ['node_modules', path.resolve(__dirname, 'app')],
    // directories where to look for modules

    extensions: ['.js', '.json', '.jsx', '.css']
    // extensions that are used
  },

  performance: {
    hints: 'warning', // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function (assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    }
  },

  devtool: 'source-map', // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: 'web', // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  stats: 'errors-only',
  // lets you precisely control what bundle information gets displayed

  devServer: {
    proxy: {
      // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true // only errors & warns on hot reload
  }
}
