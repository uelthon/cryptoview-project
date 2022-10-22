import React from 'react'
import { useSelector } from 'react-redux'
import './CoinDesc.css'

const CoinDesc = () => {
  const coin = useSelector((state) => state.coin.coin)

  function getMarkup() {
    return {__html: coin.description}; // The HTML string you want to set
  }

  return (
    <div>
      <h2>What is {coin.name}</h2>
      <div className='container-description' dangerouslySetInnerHTML={getMarkup()}>
      </div>
    </div>
  )
}

export default CoinDesc