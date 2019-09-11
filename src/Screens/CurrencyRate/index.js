import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, AsyncStorage, TouchableOpacity, Text, FlatList } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'

import { pingCoinGecko } from '../../api'
import { getCurrenciesRate } from '../../businessLogic'
import { AUTHORIZATION_TOKEN } from './../../utils/constants'
import { Pages } from '../../routes'

import LoaderView from '../../components/LoaderView'
import CurrencyItem from './currencyItem'

import cs from './styleSheet'

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: Pages.signIn })],
})

const CurrencyRate = ({ navigation }) => {
  const [rateData, setRateData] = useState(null)

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const token = await AsyncStorage.getItem(AUTHORIZATION_TOKEN)
        if (!token) {
          return navigation.dispatch(resetAction)
        }
        const rateData = await getCurrenciesRate()
        setRateData(rateData)
      } catch (error) {
        console.log('TCL: CurrencyRate -> componentWillMount -> error', error)
      }
    }

    fetchCurrencies()
  }, [navigation])

  handleLogout = async () => {
    await AsyncStorage.removeItem(AUTHORIZATION_TOKEN)
    navigation.dispatch(resetAction)
  }

  renderItem = ({ item, index }) => {
    return <CurrencyItem item={item} index={index} />
  }

  if (!rateData) {
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
      <FlatList data={rateData.currencies} keyExtractor={item => `${item.id}`} renderItem={this.renderItem} />
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
