const axios = require('axios')
const options = require('../utils/coinrankConfig')

const baseUrl = 'https://coinranking.com/api/v2/coin'

const getCoin = async (id, params) => {
  const { data } = await axios.get(`${baseUrl}/${id}`, {
    ...options,
    params: {
      ...params
    }
  })

  return data
}

const getCoinHistory = async (id, params) => {
  const { data } = await axios.get(`${baseUrl}/${id}/history`, {
    ...options,
    params: {
      ...params
    }
  })
  return data
}

module.exports = {
  getCoin,
  getCoinHistory
}
