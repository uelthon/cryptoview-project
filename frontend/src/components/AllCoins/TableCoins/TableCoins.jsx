import React from 'react'
import Table from 'react-bootstrap/Table'
import { useSelector } from 'react-redux'
import { useGetCoins } from '../../../hooks/coinsHooks'
import Loader from '../../Loader'
import RowCoin from './RowCoin'
import './TableCoins.css'

const TableCoins = () => {
  const { coins, coinsLoading } = useGetCoins() 
  const pagination = useSelector((state) => state.coins.pagination) 

  return (
    <Table className='table-coins' responsive>
      <thead>
        <tr>
          <th>
            Coin
          </th>
          <th>
            Price
          </th>
          <th>
            Market cap
          </th>
          <th>
            {pagination.timePeriod}
          </th>
        </tr>
      </thead>
      <tbody>
        {coinsLoading ? 
          <tr>
            <td colSpan={4}>
              <Loader height='30vh' />
            </td>
          </tr> : 
          coins.map(coin => <RowCoin key={coin.uuid} coin={coin} />)
        }
      </tbody>
    </Table>
  )
}

export default TableCoins