const axios = require('axios')
const options = require('../utils/coinrankConfig')

const baseUrl = 'https://api.coinranking.com/v2/coins'

const getAll = async (params) => {
  const { data } = await axios.get(baseUrl, {
    ...options,
    params: {
      ...params
    }
  })
  return data.data
}

const getRecap = async (params) => {
  const { data } = await axios.get(baseUrl, {
    ...options,
    params: {
      ...params,
      limit: 10
    }
  })
  return data.data
}

module.exports = {
  getRecap,
  getAll
}
