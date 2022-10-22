import axios from 'axios'

const baseUrl = '/api/coins'

const getRecap = async (params) => {
  const { data } = await axios.get(`${baseUrl}/recap`,{
    params:{
      ...params
    }
  })
  return data
}

const getAll = async (params) => {
  const { data } = await axios.get(baseUrl, {
    params:{
      ...params
    }
  })
  return data
}

export default {
  getRecap,
  getAll
}