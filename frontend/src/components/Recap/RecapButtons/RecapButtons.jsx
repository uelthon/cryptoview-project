import React from 'react'
import RecapButton from './RecapButton'
import './RecapButtons.css'

const RecapButtons = () => {
  
  return (
    <div className='container-btns-recap'>
      {['3h','24h','7d','30d','3m','1y','3y','5y'].map(e => <RecapButton key={e} time={e} />)}
    </div>
  )
}

export default RecapButtons