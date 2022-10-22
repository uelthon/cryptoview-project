import { setCoinInfo, setCoinStats } from '../reducers/coinInfoReducer'
import { useDispatch, useSelector } from 'react-redux'
import coin from '../services/coin'
import { useEffect, useState } from 'react'

export const useCoinInfo = (id) => {
  const [coinInfoLoading, setCoinInfoLoading] = useState(true)
  const dispatch = useDispatch()

   const fetchData = async () => {
    const data = await coin.getCoin(id)
    dispatch(setCoinInfo(data.coin))
     setCoinInfoLoading(false)
   }

   useEffect(() => {
    setCoinInfoLoading(true)
    fetchData();
   }, [id])

   return {
    coinInfoLoading
   }
}

export const useCoinStats = (id) => {
  const [ coinStatsLoading, setCoinStatsLoading ] = useState(true) 
  const params = useSelector((state) => state.coin.params)
  const dispatch = useDispatch()

  const fetchData = async () => {
    const data = await coin.getCoinHistory(id, params)
    dispatch(setCoinStats(data))
     setCoinStatsLoading(false)
   }

   useEffect(() => {
    setCoinStatsLoading(true)
    fetchData()
   },[id, params])

   return {
    coinStatsLoading
   }
}
