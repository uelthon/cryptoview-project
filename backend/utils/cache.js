const getExpeditiousCache = require('express-expeditious')

const defaultoptions = {
  namespace: 'expresscache',
  defaultTtl: '1 minute',
  statusCodeExpires: {
    404: '5 minute'
  }
}

const cache = getExpeditiousCache(defaultoptions)

module.exports = cache
