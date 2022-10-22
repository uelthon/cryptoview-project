import React from 'react'
import { useSelector } from 'react-redux'
import LineChart from '../../Charts/LineChart'

const RecapChart = () => {
  const coin = useSelector((state) => state.recap.coinSelect)
  const now = useSelector((state) => state.recap.now)
  if(!coin || !now) return null

  const dataCoin = coin.sparkline
  const date = new Date(now)

  const subtractHours = (numOfHours) => {
    const dateCopy = new Date(date);

    dateCopy.setHours(dateCopy.getHours() - numOfHours);

    const horas = dateCopy.getHours() < 10 ? '0' + dateCopy.getHours() : dateCopy.getHours()
    const minutes = dateCopy.getMinutes() < 10 ? '0' + dateCopy.getMinutes() : dateCopy.getMinutes()

    return horas + ':' + minutes
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: date.toDateString(),
      },
    },
  };

  const data = {
    labels: dataCoin.map((e, i) => subtractHours(24 - i)),
    datasets: [{
      label: coin.name,
      data: dataCoin.map(e => e ),
      borderColor: coin.color || 'rgb(53, 162, 235)',
      backgroundColor: coin.color  || 'rgba(53, 162, 235, 0.5)',
    }]
  }

  return <LineChart data={data} options={options} />
  
}

export default RecapChart