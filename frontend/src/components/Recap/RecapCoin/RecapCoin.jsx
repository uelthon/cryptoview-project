import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCoinSelect } from '../../../reducers/recapReducer'
import './RecapCoin.css'

const RecapCoins = ({ coin }) => {
  const coinSelect = useSelector((state) => state.recap.coinSelect)
  const selectRef = useRef()
  const dispatch = useDispatch()

  if(!coin) return null

  const id = coinSelect?.uuid || null

  const handleClick = () => {
    const element = selectRef.current
    dispatch(setCoinSelect(coin))
    element.scrollIntoView({
      inline: 'center',
      block: 'center',
      behavior: 'smooth'
    })
  }

  return (
    <div
      ref={selectRef} 
      className={`container-recap-item ${id === coin.uuid ? 'select-recap-item' : '' }`}
      onClick={handleClick}
      >
        <div className='container-item'>
          <img width='36px' height='36px' src={coin.iconUrl}></img>
          <div className='item-desc'>
          <div className='item-title'>
            <h5><Link to={`/coin/${coin.uuid}`}>{coin.name}</Link></h5>
            <p className='symbol'>{coin.symbol}</p>
          </div>
          <div className='item-stats'>
            <h5>{parseFloat(coin.price).toFixed(2)} <span className='currency'>USD</span></h5>
            <h5 style={{color:coin.change > 0 ? 'green' : 'red'}}>
              {
              coin.change > 0 ? `+${coin.change}%` : `${coin.change}%`
              }
            </h5>
          </div>
          </div>
        </div>
    </div>
  )
}

export default RecapCoins