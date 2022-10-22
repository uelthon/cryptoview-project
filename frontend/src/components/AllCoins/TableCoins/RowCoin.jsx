import React from 'react'
import { Link } from 'react-router-dom'
import { formatQuantity } from '../../../utils/operators'
import TableChart from '../TableChart'
import './RowCoin.css'

const RowCoin = ({coin}) => {
  return (
    <tr>
      <td>
        <div className='row-coin'>
          <img src={coin.iconUrl} width='26px' height='26px' />
          <div>
            <div><Link to={`/coin/${coin.uuid}`}>{coin.name}</Link></div>
            <div className='symbol'>{coin.symbol}</div>
          </div>
        </div>
      </td>
      <td>${parseFloat(coin.price).toFixed(2)}</td>
      <td>${formatQuantity(coin.marketCap)}</td>
      <td style={{color: coin.change < 0 ? 'red' : 'green'}}>
        {coin.change < 0 ? `${coin.change}%` : `+${coin.change}%`}
        <div className='row-coin-chart'>
           <TableChart coin={coin} />
        </div>
      </td>
    </tr>
  )
}

export default RowCoin