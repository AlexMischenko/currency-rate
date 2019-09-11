import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native'

import { getCrypoCurrencyDetails } from '../../businessLogic'

const CurrencyDetail = ({ navigation }) => {
  const [details, setDetails] = useState(null)
  const currencyId = navigation.getParam('currencyId')

  useEffect(() => {
    async function getDetails() {
      const fetchedDetails = await getCrypoCurrencyDetails(currencyId)
      console.log('TCL: getDetails -> details', details)
      setDetails(fetchedDetails)
    }

    getDetails()
  })

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{}}>{`CurrencyDetail Page ${currencyId}`}</Text>
      <Text style={{}}>{JSON.stringify(details)}</Text>
    </ScrollView>
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
