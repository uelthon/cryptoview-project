import { configureStore } from '@reduxjs/toolkit'
import coinsReducer from './reducers/coinsReducer'
import recapReducer from './reducers/recapReducer'
import coinInfoReducer from './reducers/coinInfoReducer'

export default configureStore({
  reducer: {
    coins: coinsReducer,
    recap: recapReducer,
    coin: coinInfoReducer
  }
})