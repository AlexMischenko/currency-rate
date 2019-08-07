import { getCurrenciesRate as getCurrenciesRateApi } from '../api'
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
