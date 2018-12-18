const path = require('path')
const methodFiles = require('fs').readdirSync(path.join(__dirname, 'api'))
const _ = require('lodash')

module.exports = methodFiles.map(filename => {
  return _.camelCase(filename.replace('.js', ''))
})
