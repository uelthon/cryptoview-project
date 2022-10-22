import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import './Calculator.css'

const Calculator = () => {
  const [coinValue, setCoinValue] = useState(0)
  const [exchange, setExchange] = useState(0)
  const [select, setSelect] = useState('USD')
  const { price, btcPrice, name } = useSelector((state) => state.coin.coin)

  const handleChange = {
    USD: {
      coin: (e) => {
        setCoinValue(e.target.value)
        setExchange(e.target.value * Number(price))
      },
      exchange: (e) => {
        setExchange(e.target.value)
        setCoinValue(e.target.value / Number(price))
      }
    },
    BTC:{
      coin: (e) => {
        setCoinValue(e.target.value)
        setExchange(e.target.value * Number(btcPrice))
      },
      exchange: (e) => {
        setExchange(e.target.value)
        setCoinValue(e.target.value / Number(btcPrice))
      }
    }
  }

  const handleSelect = (e) => {
    setSelect(e.target.value)
    if(e.target.value === 'USD'){
      return setExchange(coinValue * price)
    }
    return setExchange(coinValue * btcPrice)
  }

  return (
    <div>
       <h2>Calculator</h2>
      <p style={{color:'#002358'}}>
        Use the calculator to convert real-time prices between all available cryptocurrencies to Dollar and Bitcoin.
      </p>
      <div className='container-calculator'>
        <InputGroup>
          <Form.Control value={coinValue} onChange={handleChange[select].coin} />
          <span style={{width:'40%'}}>
           {name}
          </span>
        </InputGroup>
        <InputGroup>
          <Form.Control value={exchange} onChange={handleChange[select].exchange} />
          <div style={{width:'40%'}}>
          <Form.Select value={select} onChange={handleSelect}>
            <option value='USD'>USD - US Dollar</option>
            <option value='BTC'>BTC - Bitcoin</option>
          </Form.Select>
          </div>
        </InputGroup>
      </div>
    </div>
  )
}

export default Calculator