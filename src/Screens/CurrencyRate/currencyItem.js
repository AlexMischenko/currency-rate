import React from 'react'
import PropTypes from 'prop-types'
import { View, AsyncStorage, TouchableOpacity, Text, FlatList } from 'react-native'

import { getCurrenciesRate } from '../../businessLogic'
import { AUTHORIZATION_TOKEN } from './../../utils/constants'
import { Pages } from '../../routes'

import cs from './styleSheet'

const CurrencyItem = ({ item: { id, charCode, name, value, previous }, index }) => {
  return (
    <View style={cs.currencyItemBlock}>
      <Text style={cs.currencyItemTextBold}>{`${index}.`}</Text>
      <Text style={cs.currencyItemTextBold}>{`(${charCode})`}</Text>
      <Text style={cs.currencyItemText}>{name}</Text>
      <View style={cs.currencyItemRateBlock} onPress={this.handleLogout}>
        <Text style={cs.currencyItemPrevious}>{previous}</Text>
        <Text style={cs.currencyItemValue}>{value}</Text>
      </View>
    </View>
  )
}

CurrencyItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    charCode: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.number,
    previous: PropTypes.number,
  }).isRequired,
  index: PropTypes.number,
}

export default CurrencyItem
