import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

const CurrencyDetail = ({ navigation }) => {
  const currencyId = navigation.getParam('currencyId')

  return (
    <View style={{ flex: 1 }}>
      <Text style={{}}>{`CurrencyDetail Page ${currencyId}`}</Text>
    </View>
  )
}

CurrencyDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
}

export default CurrencyDetail
