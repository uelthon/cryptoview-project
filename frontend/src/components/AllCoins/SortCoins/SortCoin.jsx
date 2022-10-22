import React from 'react'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'
import { setPagination } from '../../../reducers/coinsReducer'

const SortCoin = ({ name, options }) => {
  const pagination = useSelector((state) => state.coins.pagination)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setPagination({
      ...pagination,
      [name]: e.target.value
    }))
  }

  return (
    <Form.Select value={pagination[name]} onChange={handleChange} size='sm'>
      {options.map(e => <option value={e} key={e}>{e}</option>)}
    </Form.Select>
  )
}

export default SortCoin