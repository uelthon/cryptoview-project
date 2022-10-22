import { createSlice } from "@reduxjs/toolkit";

export const coinInfoSlice = createSlice({
  name: 'coin',
  initialState: {
    coin:null,
    coinStats: null,
    params: {
      timePeriod: '24h'
    }
  },
  reducers: {
    set_coin_info: (state, action) => {
      state.coin = action.payload
    },
    set_coin_stats: (state, action) => {
      state.coinStats = action.payload
    },
    set_coin_params: (state, action) => {
      state.params = action.payload
    }
  }
})

export const { set_coin_info, set_coin_stats, set_coin_params } = coinInfoSlice.actions

export const setCoinInfo = (data) => {
  return dispatch => {
    dispatch(set_coin_info(data))
  }
}

export const setCoinStats = (data) => {
  return dispatch => {
    dispatch(set_coin_stats(data))
  }
}

export const setCoinParams = (params) => {
  return dispatch => {
    dispatch(set_coin_params(params))
  }
}

export default coinInfoSlice.reducer