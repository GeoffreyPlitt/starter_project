var ret = null

if(process.env.NODE_ENV==='production') {
  ret = require('./production.json')
} else {
  ret = require('./development.json')
}

module.exports = ret
