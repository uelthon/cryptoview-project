import React from 'react'
import LineChart from '../../Charts/LineChart'

const TableChart = ({ coin }) => {

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip:{
        enabled: false
      }
    },
    elements:{
      point:{
       radius: 0
      }
    },
    scales: {
      x: {
         display: false,
      },
      y: {
         display: false,
      }
   }
  };

  const data = {
    labels: coin.sparkline.map((e, i) => i),
    datasets: [{
      data: coin.sparkline.map(e => e ),
      borderColor: coin.color || 'rgb(53, 162, 235)',
      backgroundColor: coin.color  || 'rgba(53, 162, 235, 0.5)'
    }]
  }
  
  return <LineChart data={data} options={options} />
}

export default TableChart