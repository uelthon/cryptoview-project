import React from 'react'
import RecapChart from './RecapChart'
import RecapCoins from './RecapCoins'
import './Recap.css'

const Recap = () => {
  return (
    <div className='container-recap'>
      <div className='title'>
        <h2>Market summary</h2>
      </div>
      <div className='container-coins'>
        <RecapCoins />
      </div>
      <div className='container-chart'>
        <RecapChart />
      </div>
    </div>
  )
}

export default Recap