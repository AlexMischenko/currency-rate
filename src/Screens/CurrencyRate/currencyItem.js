import React from 'react'
import PropTypes from 'prop-types'
import { View, AsyncStorage, TouchableOpacity, Text, Image } from 'react-native'

import { getCurrenciesRate } from '../../businessLogic'
import { AUTHORIZATION_TOKEN } from './../../utils/constants'
import { Pages } from '../../routes'

import cs from './styleSheet'

const CurrencyItem = ({ item: { id, charCode, name, value, priceChange24h, image }, index }) => {
  const valueIncreased = priceChange24h >= 0
  const priceChangeColor = { color: valueIncreased ? '#3CB371' : 'red' }

  return (
    <View style={cs.currencyItemBlock}>
      <View style={cs.currencyItemTextBlock}>
        <Text style={cs.currencyItemTextBold}>{`${index}. `}</Text>
        <Image style={cs.currencyItemIcon} source={{ uri: image }} />
        <Text style={cs.currencyItemTextBold}>{`(${charCode}) `}</Text>
        <Text style={cs.currencyItemText} numberOfLines={1}>
          {name}
        </Text>
      </View>
      <View style={cs.currencyItemRateBlock} onPress={this.handleLogout}>
        <Text style={cs.currencyItemValue}>{value}</Text>
        <Text style={[cs.currencyItemPrevious, priceChangeColor]}>{priceChange24h}</Text>
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
    priceChange24h: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
  index: PropTypes.number,
}

export default CurrencyItem
