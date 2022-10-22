import React from 'react'
import CoinButton from './CoinButton'
import './CoinButtons.css'

const CoinButtons = () => {
  return (
    <div className='container-btns-recap'>
    {['1h','3h','12h','24h','7d','30d','3m','1y','3y','5y','all'].map(e => <CoinButton key={e} time={e} />)}
  </div>
  )
}

export default CoinButtons