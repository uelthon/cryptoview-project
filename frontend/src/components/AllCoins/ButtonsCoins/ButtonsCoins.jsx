import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useDispatch, useSelector } from 'react-redux'
import { setPagination } from '../../../reducers/coinsReducer'

const ButtonsCoins = () => {
  const pagination = useSelector((state) => state.coins.pagination)
  const statsCoins = useSelector((state) => state.coins.statsCoins)
  const limit = useSelector((state) => state.coins.pagination.limit)
  const dispatch = useDispatch()
  
  const total = statsCoins?.total || 10

  if(!statsCoins) return null

  const handleClick = {
    init: () => dispatch(setPagination({
      ...pagination,
      offset: 0,
    })),
    prev: () => dispatch(setPagination({
      ...pagination,
      offset: Number(pagination.offset) - Number(limit)
    })),
    next: () => dispatch(setPagination({
      ...pagination,
      offset: Number(pagination.offset) + Number(limit)
    })),
    last: () => dispatch(setPagination({
      ...pagination,
      offset: Number(total) - Number(limit)
    }))
  }

  return (
    <ButtonGroup>
      <Button 
        variant="outline-secondary"
        onClick={handleClick.init} 
        disabled={pagination.offset === 0}>
          Init
      </Button>
      <Button
        variant="outline-secondary" 
        onClick={handleClick.prev} 
        disabled={pagination.offset < Number(limit)}>
          Prev
      </Button>
      <Button
        variant="outline-secondary" 
        onClick={handleClick.next} 
        disabled={pagination.offset >= Number(total) - Number(limit)}>
          Next
      </Button>
      <Button 
        variant="outline-secondary"
        onClick={handleClick.last} 
        disabled={pagination.offset >= Number(total) - Number(limit)}>
          Last
      </Button>
    </ButtonGroup>
  )
}

export default ButtonsCoins