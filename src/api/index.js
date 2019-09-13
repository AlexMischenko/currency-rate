import axios from 'axios'
import { config } from '../config'

const { apiUrl } = config

export const getCurrenciesRate = () => {
  return fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(response => response.json())
    .catch(error => {
      console.error(error)
    })
}

export const pingCoinGecko = () => {
  return fetch(`${apiUrl}/ping`)
    .then(response => response.json())
    .catch(error => {
      console.error(error)
    })
}

export const getCrypoCurrenciesRateList = params => {
  return axios
    .get(`${apiUrl}/coins/markets`, {
      params,
    })
    .then(response => response.data)
    .catch(error => {
      console.error(error)
    })
}

export const getCrypoCurrencyDetails = (coinId, params) => {
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
