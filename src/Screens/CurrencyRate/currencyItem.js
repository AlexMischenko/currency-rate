import React from 'react'
import PropTypes from 'prop-types'
import { View, AsyncStorage, TouchableOpacity, Text, FlatList } from 'react-native'

import { getCurrenciesRate } from '../../businessLogic'
import { AUTHORIZATION_TOKEN } from './../../utils/constants'
import { Pages } from '../../routes'

import cs from './styleSheet'

const CurrencyItem = ({ item: { id, charCode, name, value, previous }, index }) => {
  const valueIncreased = value > previous
  
  return (
    <View style={cs.currencyItemBlock}>
      <View style={cs.currencyItemTextBlock}>
        <Text style={cs.currencyItemTextBold}>{`${index}. `}</Text>
        <Text style={cs.currencyItemTextBold}>{`(${charCode}) `}</Text>
        <Text style={cs.currencyItemText} numberOfLines={1}>
          {name}
        </Text>
      </View>
      <View style={cs.currencyItemRateBlock} onPress={this.handleLogout}>
        <Text style={[cs.currencyItemPrevious, { color: valueIncreased ? 'red' : '#3CB371' }]}>{previous}</Text>
        <Text style={[cs.currencyItemValue, { color: valueIncreased ? '#3CB371' : 'red' }]}>{value}</Text>
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
