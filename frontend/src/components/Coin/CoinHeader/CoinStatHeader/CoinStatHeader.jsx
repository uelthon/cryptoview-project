import React from 'react'
import { formatQuantity } from '../../../../utils/operators'

const CoinStatHeader = ({quantity, type, symbol=''}) => {
  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'flex-start'}}>
      <div style={{fontSize:'18px',fontWeight:'bold'}}>
        {formatQuantity(quantity, true)}
      </div>
      <div style={{fontSize:'12px',color:'#6a6d78'}}>
        {type}
      </div>
    </div>
  )
}

export default CoinStatHeader