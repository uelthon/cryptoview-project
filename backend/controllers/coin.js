const router = require('express').Router()
const coin = require('../services/coin')
const cache = require('../utils/cache')

router.get('/:id/history', cache.withTtl('5 minute'), async (req, res) => {
  const id = req.params.id
  const params = req.query
  const data = await coin.getCoinHistory(id, params)
  res.json(data)
})

router.get('/:id', cache.withTtl('5 minute'), async (req, res) => {
  const id = req.params.id
  const params = req.query
  const data = await coin.getCoin(id, params)
  res.json(data)
})

module.exports = router
