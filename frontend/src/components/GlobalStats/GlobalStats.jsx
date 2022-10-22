import React from 'react'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table'
import { toBillion } from '../../utils/operators'
import Loader from '../Loader'
import { TiWaves } from 'react-icons/ti'
import { ImDroplet } from 'react-icons/im'
import { ImCoinDollar }  from 'react-icons/im'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { RiCoinsFill } from 'react-icons/ri'
import './GlobalStats.css'

const GlobalStats = () => {
  const stats = useSelector((state) => state.recap.stats)

  return (
    <div className='container-globalstats'>
      <div className='title'>
        <h2>Cryptocurrency market statistics</h2><br/>
        <p>An overview of the complete cryptocurrency market, including the number of cryptocurrencies, the total market cap, and trading volume.</p> 
      </div>
      {!stats ? <Loader height='30vh' /> : 
      <Table>
        <tbody>
          <tr>
            <td><TiWaves /></td>
            <td>
              <p>Crypto market cap</p>
            </td>
            <td>
              <strong>$ {toBillion(stats.totalMarketCap)} billion</strong>
            </td>
          </tr>
          <tr>
            <td><ImDroplet /></td>
            <td>
              <p>24h Volume</p>
            </td>
            <td>
              <strong>$ {toBillion(stats.total24hVolume)} billion</strong>
            </td>
          </tr>
          <tr>
            <td><ImCoinDollar /></td>
            <td>
              <p>All coins</p>
            </td>
            <td>
              <strong>{stats.totalCoins}</strong>
            </td>
          </tr>
          <tr>
            <td><HiBuildingOffice2/></td>
            <td>
              <p>All crypto exchanges</p>
            </td>
            <td>
              <strong>{stats.totalExchanges}</strong>
            </td>
          </tr>
          <tr>
            <td><RiCoinsFill /></td>
            <td>
              <p>All crypto markets</p>
            </td>
            <td>
              <strong>{stats.totalMarkets}</strong>
            </td>
          </tr>
        </tbody>
      </Table>
      }
    </div>
  )
}

export default GlobalStats