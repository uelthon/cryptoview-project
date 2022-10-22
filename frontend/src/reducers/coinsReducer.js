import { createSlice } from "@reduxjs/toolkit";

export const coinSlice = createSlice({
  name: 'coins',
  initialState: {
    values: [],
    pagination: {
      timePeriod: '24h',
      search: '',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '10',
      offset: 0
    },
    statsCoins: null,
  },
  reducers: {
    set_coins: (state, action) => {
      state.values = action.payload
    },
    set_pagination: (state, action) => {
      state.pagination = action.payload
    },
    set_stats_coins: (state, action) => {
      state.statsCoins = action.payload
    }
  }
})

export const { set_coins, set_pagination, set_stats_coins } = coinSlice.actions

export const setPagination = (params) => {
  return dispatch => {
    dispatch(set_pagination(params))
  }
}

export const setStatsCoins = (stats) => {
  return dispatch => {
    dispatch(set_stats_coins(stats))
  }
}

export default coinSlice.reducer