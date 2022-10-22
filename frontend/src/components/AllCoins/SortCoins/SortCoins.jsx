import React from 'react'
import SortCoin from './SortCoin'
import './SortCoins.css'

const SortCoins = () => {

  return (
    <div className='container-sort-coins'>
      <SortCoin 
        name='timePeriod' 
        options={['3h','24h','7d','30d','3m','1y','3y','5y']}
        />
      <SortCoin 
        name='orderBy' 
        options={['price','marketCap','change']}
        />
      <SortCoin 
        name='orderDirection'
        options={['desc','asc']} 
        />
      <SortCoin 
        name='limit' 
        options={[10, 20, 30, 40, 50]}
        />
    </div>
  )
}

export default SortCoins