import React from 'react'
import './Loader.css'

const Loader = ({ height }) => {
  return (
    <div className='container-loader' style={{height:height}}>
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  )
}

export default Loader