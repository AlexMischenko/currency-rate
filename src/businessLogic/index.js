import {
  getCurrenciesRateList as getCurrenciesRateListApi,
  getCurrencyDetails as getCurrencyDetailsApi,
  getCurrencyMarketChart as getCurrencyMarketChartApi,
} from '../api'
import { resolveUri } from 'expo-asset/build/AssetSources'
import UsersDatabase from '../utils/usersDatabase'

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

export const getCurrenciesRateList = ({ perPage, page }) => {
  return getCurrenciesRateListApi({
    vs_currency: 'usd',
    order: 'market_cap_desc',
    price_change_percentage: '24h',
    sparkline: false,
    per_page: perPage,
    page,
  }).then(response => {
    return response.map(currencyInfo => ({
      id: currencyInfo.id,
      charCode: currencyInfo.symbol,
      name: currencyInfo.name,
      value: currencyInfo.current_price,
      image: currencyInfo.image,
      priceChange24h: currencyInfo.price_change_24h,
    }))
  })
}

export const getCurrencyDetails = currancyId => {
  return getCurrencyDetailsApi(currancyId, {
    localization: 'false',
    tickers: false,
    market_data: true,
    community_data: true,
    developer_data: true,
  }).then(response => ({
    id: response.id,
    symbol: response.symbol,
    name: response.name,
    description: response.description.en,
    image: response.image.large,
    genesisDate: response.genesis_date,
    marketCapRank: response.market_cap_rank,
    links: {
      homepage: response.links.homepage[0],
      officialForum: response.links.official_forum_url[0],
    },
  }))
}

export const getCurrencyMarketChart = currancyId => {
  return getCurrencyMarketChartApi(currancyId, {
    vs_currency: 'usd',
    days: '15',
  }).then(response => {
    return response.prices.map(price => ({
      timestamp: price[0],
      value: price[1],
      date: `${new Date(price[0]).toString()}`,
      price: `${price[1]}$`,
    }))
  })
}
