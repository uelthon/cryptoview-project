import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { AiOutlineLink } from 'react-icons/ai'
import './CoinLinks.css'

const CoinLinks = () => {
  const { links } = useSelector((state) => state.coin.coin)


  return (
        <div className='container-coin-links'>
          <h2>Links</h2>
          <Table responsive>
            <tbody>
              {links.map(e => 
                <tr key={e.name + e.type}>
                  <td><AiOutlineLink/></td>
                  <th style={{color:'#002358'}}>{e.type}</th>
                  <td style={{textAlign:'end'}}><a href={e.url} target='_blank'>{e.url}</a></td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
  )
}

export default CoinLinks