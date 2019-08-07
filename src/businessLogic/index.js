import { getCurrenciesRate as getCurrenciesRateApi } from '../api'

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
