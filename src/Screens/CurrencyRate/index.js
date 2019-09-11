import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, AsyncStorage, TouchableOpacity, Text, FlatList } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'

import { getCurrenciesRate, getCrypoCurrenciesRateList } from '../../businessLogic'
import { AUTHORIZATION_TOKEN } from './../../utils/constants'
import { Pages } from '../../routes'

import LoaderView from '../../components/LoaderView'
import CurrencyItem from './currencyItem'

import cs from './styleSheet'

const ITEMS_PER_PAGE = 15
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: Pages.signIn })],
})

const CurrencyRate = ({ navigation }) => {
  const [rateData, setRateData] = useState([])
  const [requestPage, setRequestPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    function checkAuthorizationToken() {
      const token = AsyncStorage.getItem(AUTHORIZATION_TOKEN)
      if (!token) {
        return navigation.dispatch(resetAction)
      }
    }

    checkAuthorizationToken()
  })

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        setIsLoading(true)
        const cryptoRate = await getCrypoCurrenciesRateList({ page: requestPage, perPage: ITEMS_PER_PAGE })
        console.log('TCL: fetchCurrencies -> cryptoRate', cryptoRate)
        setRateData(prevRateData => [...prevRateData, ...cryptoRate])
        setIsLoading(false)
      } catch (error) {
        console.log('TCL: CurrencyRate -> fetchCurrencies -> error', error)
      }
    }

    fetchCurrencies()
  }, [requestPage])

  handleLogout = async () => {
    await AsyncStorage.removeItem(AUTHORIZATION_TOKEN)
    navigation.dispatch(resetAction)
  }

  fetchNextPage = () => {
    setRequestPage(prevPage => prevPage + 1)
  }

  if (rateData.length < 1) {
    return <LoaderView />
  }

  return (
    <View style={cs.page}>
      <View style={cs.headerBlock}>
        <Text style={cs.headerTitle}>CurrencyRate</Text>
        <TouchableOpacity style={cs.logoutBtn} onPress={this.handleLogout}>
          <Text style={cs.logoutBtnText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={rateData}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item, index }) => <CurrencyItem item={item} index={index + 1} />}
        onEndReached={fetchNextPage}
        ListFooterComponent={isLoading ? <LoaderView /> : null}
        onEndReachedThreshold={0.1}
      />
    </View>
  )
}

CurrencyRate.navigationOptions = () => ({
  header: null,
})

CurrencyRate.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    dispatch: PropTypes.func,
  }).isRequired,
}

export default CurrencyRate
