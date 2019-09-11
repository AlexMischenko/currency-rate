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
