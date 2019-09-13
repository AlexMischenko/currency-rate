import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'

import cs from './styleSheet'

const HeaderDescription = ({ symbol, name, image, marketCapRank, genesisDate, style }) => (
  <View style={[cs.headerBlock, style]}>
    <Image style={cs.currencyLogo} source={{ uri: image }} />

    <View style={cs.nameTextBlock}>
      <Text style={cs.cryptoRankText}>Market Capitalization Rank #{marketCapRank}</Text>
      <Text style={cs.cryptoNameText}>{name}</Text>
      <Text style={cs.cryptoShortenedText}>({symbol})</Text>
      {genesisDate && <Text style={cs.cryptoDateText}>Genesis Date: {genesisDate}</Text>}
    </View>
  </View>
)

HeaderDescription.propTypes = {
  symbol: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  marketCapRank: PropTypes.number,
  genesisDate: PropTypes.string,
  style: PropTypes.object,
}

HeaderDescription.defaultProps = {
  symbol: 'none',
  name: 'Unknown',
  marketCapRank: 0,
  style: {},
}

export default HeaderDescription
