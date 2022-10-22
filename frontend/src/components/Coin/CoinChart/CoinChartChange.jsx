import React from 'react'
import { useSelector } from 'react-redux'

const CoinChartChange = () => {
  const coinStats = useSelector((state) => state.coin.coinStats)
  const time = useSelector((state) => state.coin.params)
  
  if(!coinStats) return null

  const change = coinStats.change
  const timePeriod = time.timePeriod

  return (
    <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
      <h2>Price Chart</h2>
      <div style={{display:'flex', alignItems:'center', gap:'0.375rem'}}>
        <p style={{marginBottom:0, color:'#6a6d78'}}>{timePeriod}</p>
        <p style={{color: change >= 0 ? 'green' : 'red', marginBottom:0}}>
          {change >= 0 ? `+${change}%` : `${change}%`}
        </p>
      </div>
    </div>
  )
}

export default CoinChartChange