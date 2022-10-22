import React from 'react'
import { useSelector } from 'react-redux'
import LineChart from '../../Charts/LineChart'

const format = (timestamp) => {
  const date = new Date(timestamp * 1000).toISOString()
  const fecha =  date.slice(0,10) + ' ' + date.slice(11,16)
  return fecha
}

const CoinChart = () => {
  const coinData = useSelector((state) => state.coin.coinStats?.history) 
  const coinChange = useSelector((state) => state.coin.coinStats?.change) 
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      }
    },
    scales: {
      xAxes: {
            type: 'time',
        }
    }
  }
  

  const data = {
    labels: coinData?.map(e => format(e.timestamp)),
    datasets: [{
      data: coinData?.map(e => e.price ),
      borderColor: coinChange >= 0 ? 'green' : 'red' || 'rgb(53, 162, 235)',
      backgroundColor: coinChange >= 0 ? 'green' : 'red' || 'rgba(53, 162, 235, 0.5)',
    }]
  }
  
  return (
    <div style={{position:'relative', width:'100%', height:'80vh'}}>
      <LineChart data={data} options={options} />
    </div>
  )
}

export default CoinChart