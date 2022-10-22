import React from 'react'
import ButtonsCoins from '../../components/AllCoins/ButtonsCoins'
import SearchCoins from '../../components/AllCoins/SearchCoins'
import SortCoins from '../../components/AllCoins/SortCoins'
import TableCoins from '../../components/AllCoins/TableCoins'
import './AllCoins.css'

const AllCoins = () => {
  return (
    <div className='container-allcoins'>
      <div className='components'>
        <div className='sort-coins'>
          <div className='title'>
            <h2>Cryptocurrency price list</h2>
            <p>All cryptocurrencies ranked by market cap.</p>
          </div>
          <SortCoins />
        </div>
        <div className='btn-coins'>
          <ButtonsCoins />
        </div>
        <div className='search-coins'>
          <SearchCoins />
        </div>
        <div className='table-coins'>
          <TableCoins />
        </div>
        <div className='btn-coins'>
          <ButtonsCoins />
        </div>
      </div>
    </div>
  )
}

export default AllCoins