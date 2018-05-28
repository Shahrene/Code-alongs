// webpack will look for filenames from the starting point

// will recursively scan content for requires and imports

// then bundles everything together into a destination

// the file it generates is the file you add with a single script tag

const path = require('path')

const config = {

  mode: 'development',

  entry: {
    src: './src' // src/index.js is the convention
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  devServer: {
    port: 4000

  }
}

module.exports = config
