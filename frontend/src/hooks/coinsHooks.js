import { useEffect, useState } from "react";
import coinServices from "../services/coins";
import { useDispatch, useSelector } from "react-redux";
import { setCoinSelect, setNow, setStats, setCoinsRecap } from "../reducers/recapReducer";
import { setStatsCoins } from "../reducers/coinsReducer";

export const useGetCoins = () => {
  const pagination = useSelector((state) => state.coins.pagination)
  const [ coins, setCoins ] = useState([])
  const [ coinsLoading, setCoinsLoading ] = useState(true)
  const dispatch = useDispatch()

  const fetchData = async () => {
    const data = await coinServices.getAll(pagination)
    setCoins(data.coins)
    dispatch(setStatsCoins(data.stats))
    setCoinsLoading(false)
  }

  useEffect(() => {
    setCoinsLoading(true)
    fetchData()
  }, [pagination])

  return {
    coins,
    coinsLoading
  }
}

export const useRecap = () => {
  const dispatch = useDispatch()
  const [ recapLoading, setRecapLoading ] = useState(true)

  const now = new Date().toJSON()

  const fetchData = async () => {
      const data = await coinServices.getRecap()
      dispatch(setCoinsRecap(data.coins))
      dispatch(setCoinSelect(data.coins[0]))
      dispatch(setNow(now))
      dispatch(setStats(data.stats))
      setRecapLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return {
    recapLoading
  }

}