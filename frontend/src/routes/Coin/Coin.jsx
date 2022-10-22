import React from 'react'
import CoinFetch from './CoinFetch'
import CoinChart from '../../components/Coin/CoinChart'
import CoinButtons from '../../components/Coin/CoinButtons'
import CoinHeader from '../../components/Coin/CoinHeader'
import './Coin.css'
import CoinChartChange from '../../components/Coin/CoinChart/CoinChartChange'
import CoinStats from '../../components/Coin/CoinStats'
import CoinDesc from '../../components/Coin/CoinDesc'
import CoinLinks from '../../components/Coin/CoinLinks'
import Calculator from '../../components/Coin/Calculator'

const Coin = () => {

  return (
    <CoinFetch>
      <div className='container-coin'>
        <div className='container-coin-components'>
          <CoinHeader />
          <CoinChartChange />
          <CoinChart />
          <CoinButtons />
          <div className='container-grid'>
            <CoinStats />
            <Calculator />
            <CoinDesc />
            <CoinLinks />
          </div>
        </div>
      </div>
    </CoinFetch>
  )
}

export default Coin