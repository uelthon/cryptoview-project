import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'
import { setPagination } from '../../../reducers/coinsReducer'

const SearchCoins = () => {
  const pagination = useSelector((state) => state.coins.pagination)
  const inputRef = useRef()
  const dispatch = useDispatch()

  let timer = null

  useEffect(() => {
    inputRef.current.value = pagination.search
  }, [])

  const handleChange = (e) => {
    if(timer){
      clearTimeout(timer)
    }
   timer = setTimeout(() =>
     dispatch(setPagination({
      ...pagination,
      search: e.target.value,
      offset: 0
    }))
    , 500)
  }

  return (
    <FloatingLabel label='Search name or symbol'>
      <Form.Control
        ref={inputRef}
        placeholder='Search name or symbol'
        onChange={handleChange}
      />
    </FloatingLabel>
  )
}

export default SearchCoins