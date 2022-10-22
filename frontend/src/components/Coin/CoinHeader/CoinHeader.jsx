import React from 'react'
import { useSelector } from 'react-redux'
import CoinStatHeader from './CoinStatHeader'
import TableChart from '../../AllCoins/TableChart'
import './CoinHeader.css'

const CoinHeader = () => {
  const coin = useSelector((state) => state.coin.coin)

  if(!coin) return null

  return (
    <div className='container-header-coin'>
      <div className='container-title'>
        <div className='title'>
          <img width='56px' height='56px' src={coin.iconUrl}/>
          <div className='name'>
            <h1 style={{marginBottom:0}}>{coin.name}</h1>
            <p style={{marginBottom:0,fontSize:'16px',color:'#6a6d78'}}>{coin.symbol}</p>
          </div>
        </div>
        <div className='container-chart'>
          <div style={{color:coin.change > 0 ? 'green' : 'red', fontSize:'18px', fontWeight:'bold'}}>
            {coin.change > 0 ? `+${coin.change}%` : `${coin.change}%`}
          </div>
          <div className='chart'>
            <TableChart coin={coin} />
          </div>
        </div>
      </div>
      <div className='container-stats'>
        <div className='price'>
          <h1>${parseFloat(coin.price).toFixed(4)}<span>USD</span></h1>
        </div>
        <div className='stats'>
          <CoinStatHeader symbol='$' quantity={coin.marketCap} type='Market Cap' />
          <CoinStatHeader symbol='$' quantity={coin.fullyDilutedMarketCap} type='FD Market Cap' />
          <CoinStatHeader symbol='$' quantity={coin['24hVolume']} type='Trading Volume 24h' />
          <CoinStatHeader quantity={coin.supply.circulating} type='Circulating Supply' />
          <CoinStatHeader quantity={coin.supply.total} type='Max supply' />
        </div>
      </div>
    </div>
  )
}

export default CoinHeader