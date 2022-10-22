import axios from 'axios'

const baseUrl = '/api/coin'

const getCoin = async (id, params) => {
  const { data } = await axios.get(`${baseUrl}/${id}`,{
    params:{
      ...params
    }
  })
  return data.data
}

const getCoinHistory = async (id, params) => {
  const { data } = await axios.get(`${baseUrl}/${id}/history`,{
    params:{
      ...params
    }
  })
  return data.data
}

export default {
  getCoin,
  getCoinHistory
}