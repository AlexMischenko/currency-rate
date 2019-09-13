import axios from 'axios'
import { config } from '../config'

const { apiUrl } = config

export const getCurrenciesRateList = params => {
  return axios
    .get(`${apiUrl}/coins/markets`, {
      params,
    })
    .then(response => response.data)
    .catch(error => {
      console.error(error)
    })
}

export const getCurrencyDetails = (coinId, params) => {
  return axios
    .get(`${apiUrl}/coins/${coinId}`, {
      params,
    })
    .then(response => response.data)
    .catch(error => {
      console.error(error)
    })
}

export const getCurrencyMarketChart = (coinId, params) => {
  return axios
    .get(`${apiUrl}/coins/${coinId}/market_chart`, {
      params,
    })
    .then(response => response.data)
    .catch(error => {
      console.error(error)
    })
}
