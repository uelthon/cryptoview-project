import { createSlice } from "@reduxjs/toolkit";

export const recapSlice = createSlice({
  name:'recap',
  initialState: {
    recapCoins: null,
    coinSelect: null,
    now: null,
    stats: null,
  },
  reducers: {
    set_coins_recap:(state, action) => {
      state.recapCoins = action.payload
    },
    set_coin_select: (state, action) => {
      state.coinSelect = action.payload
    },
    set_now: (state, action) => {
      state.now = action.payload
    },
    set_stats: (state, action) => {
      state.stats = action.payload
    }
  }
})

export const { set_coin_select, set_now, set_stats, set_coins_recap } = recapSlice.actions

export const setCoinsRecap = (data) => {
  return dispatch => {
    dispatch(set_coins_recap(data))
  } 
}

export const setCoinSelect = (coin) => {
  return dispatch => {
    dispatch(set_coin_select(coin))
  }
}

export const setNow = (date) => {
  return dispatch => {
    dispatch(set_now(date))
  }
}

export const setStats = (stats) => {
  return dispatch => {
    dispatch(set_stats(stats))
  }
} 

export default recapSlice.reducer