const router = require('express').Router()
const coinServices = require('../services/coins')
const cache = require('../utils/cache')

router.get('/', cache.withTtl('5 minute'), async (req, res) => {
  const query = req.query
  const data = await coinServices.getAll({
    ...query,
    'tiers[0]': '1'
  })
  res.json(data)
})

router.get('/recap', cache.withTtl('5 minute'), async (req, res) => {
  const query = req.query
  const data = await coinServices.getRecap(query)
  res.json(data)
})

module.exports = router
