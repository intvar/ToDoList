const nconf = require('nconf'),
  join = require('path').join,
  configFile = join(__dirname, 'config.json')
  
nconf.argv()
  .env()
  .file({ file: configFile })

module.exports = nconf