import React from 'react'
import RecapCoin from '../RecapCoin'
import Loader from '../../Loader'
import './RecapCoins.css'
import { useSelector } from 'react-redux'

const RecapCoins = () => {
  const coins = useSelector((state) => state.recap.recapCoins)
  
  if(!coins) return <Loader height='50vh' />

  return (
      <div className='container-recap-items'>
        {coins.map(coin => <RecapCoin key={coin.uuid} coin={coin} />)}
      </div>
  )
}

export default RecapCoins