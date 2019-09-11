import {
  getCurrenciesRate as getCurrenciesRateApi,
  getCrypoCurrenciesRateList as getCrypoCurrenciesRateListApi,
} from '../api'
import { resolveUri } from 'expo-asset/build/AssetSources'
import UsersDatabase from '../utils/usersDatabase'

export const getCurrenciesRate = () => {
  return getCurrenciesRateApi().then(response => {
    let fetchedCurrencies = []

    for (let currency in response.Valute) {
      fetchedCurrencies.push(response.Valute[currency])
    }

    const currencies = fetchedCurrencies.map(currency => ({
      id: currency.ID,
      charCode: currency.CharCode,
      name: currency.Name,
      value: currency.Value,
      previous: currency.Previous,
    }))

    return {
      timestamp: response.Timestamp,
      currencies,
    }
  })
}

export const getCrypoCurrenciesRateList = ({ perPage, page }) => {
  return getCrypoCurrenciesRateListApi({
    vs_currency: 'usd',
    order: 'market_cap_desc',
    price_change_percentage: '24h',
    sparkline: false,
    per_page: perPage,
    page,
  }).then(cryptoCurrenciesList => {
    return cryptoCurrenciesList.map(currencyInfo => ({
      id: currencyInfo.id,
      charCode: currencyInfo.symbol,
      name: currencyInfo.name,
      value: currencyInfo.current_price,
      image: currencyInfo.image,
      priceChange24h: currencyInfo.price_change_24h,
    }))
  })
}

export const loginUser = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      const existingUser = UsersDatabase.find(user => user.username === username && user.password === password)
      if (existingUser) {
        resolve(existingUser)
      } else {
        reject('Wrong Credentials')
      }
    }, 1500)
  })
}
