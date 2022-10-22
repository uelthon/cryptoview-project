import React from 'react'

const CoinStat = ({icon, title, quantity}) => {
  return <tr>
          <td style={{textAlign:'start'}}>
            {icon}
          </td>
          <th style={{textAlign:'start'}}>
            {title}
          </th>
          <td style={{textAlign:'end'}}>
            <strong>{quantity}</strong>
          </td>
        </tr>
}

export default CoinStat