import React from 'react'
import Table from 'react-bootstrap/Table'
import CoinStat from './CoinStat'
import { AiOutlineDollarCircle }  from 'react-icons/ai'
import { CiBitcoin } from 'react-icons/ci'
import { GiRank3 } from 'react-icons/gi'
import { ImDroplet } from 'react-icons/im'
import { TiWaves } from 'react-icons/ti'
import { TfiMedallAlt } from 'react-icons/tfi'
import { useSelector } from 'react-redux'
import { formatQuantity } from '../../../utils/operators'
import './CoinStats.css'

const CoinStats = () => {
  const coin = useSelector((state) => state.coin.coin)

  return (
    <div className='container-coin-stats'>
      <h2>Value statistics</h2>
      <p>An overview showing the statistics of {coin.name}, such as the base and quote currency, the rank, and trading volume</p>  
      <Table responsive>
          <tbody>
            <CoinStat icon={<AiOutlineDollarCircle />} 
              title='Price to USD' 
              quantity={`$ ${parseFloat(coin.price).toFixed(2)}`} 
            />
            <CoinStat icon={<CiBitcoin />} 
              title='Price to BTC' 
              quantity={`${parseFloat(coin.btcPrice).toFixed(4)} BTC`} 
            />
            <CoinStat icon={<GiRank3 />} 
              title='Rank' 
              quantity={coin.rank} />
            <CoinStat icon={<ImDroplet />} 
              title='24h volume' 
              quantity={formatQuantity(coin['24hVolume'])} 
            />
            <CoinStat icon={<TiWaves />} 
              title='Market cap' 
              quantity={formatQuantity(coin.marketCap)} 
            />
            <CoinStat icon={<TiWaves />}
              title='Fully diluted market cap'
              quantity={formatQuantity(coin.fullyDilutedMarketCap)}
            />
            <CoinStat icon={<TfiMedallAlt />}
              title='All-time high (daily avg.)'
              quantity={`$${parseFloat(coin.allTimeHigh.price).toFixed(2)}`}
            />
          </tbody>
      </Table>
    </div>
  )
}

export default CoinStats