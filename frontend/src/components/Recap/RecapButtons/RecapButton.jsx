import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRecapTime } from '../../../reducers/recapReducer'

const RecapButton = ({ time }) => {
  const timePeriod = useSelector((state) => state.recap.recapTime.timePeriod)
  const dispatch = useDispatch()

  const handleClick = () => {
    
    const newTime = {
      timePeriod: time
    } 
    dispatch(setRecapTime(newTime))
  }

  return (
    <button 
      className={`btn-time-recap ${time === timePeriod ? 'select' : ''}`}
      data-time={time} 
      onClick={() => handleClick()}
    >
      {time}
    </button>
  )
}

export default RecapButton