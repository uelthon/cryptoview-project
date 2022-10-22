import React from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCoinParams } from '../../../reducers/coinInfoReducer'

const CoinButton = ({time}) => {
  const timePeriod = useSelector((state) => state.coin.params?.timePeriod)
  const btnTime = useRef()
  const dispatch = useDispatch()

  const handleClick = () => {
    const element = btnTime.current

    element.scrollIntoView({
      inline: 'center',
      block:'end',
      behavior: 'smooth'
    })
    
    const newTime = {
      timePeriod: time
    }
    dispatch(setCoinParams(newTime))
  }

  return (
    <button 
      ref={btnTime}
      className={`btn-time-recap ${time === timePeriod ? 'select' : ''}`}
      data-time={time} 
      onClick={() => handleClick()}
    >
      {time}
    </button>
  )
}

export default CoinButton