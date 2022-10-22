import React from 'react'
import { useMatch } from 'react-router-dom'
import { useCoinInfo, useCoinStats } from '../../hooks/coinHooks'
import Loader from '../../components/Loader'

const CoinFetch = ({children}) => {
  const match = useMatch('/coin/:id')
  const id = match.params.id
  const { coinInfoLoading } = useCoinInfo(id)
  const { coinStatsLoading } = useCoinStats(id)

  if(coinInfoLoading) return <Loader height='80vh' />

  return children
}

export default CoinFetch
