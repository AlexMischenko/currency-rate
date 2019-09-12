import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native'

import { getCrypoCurrencyDetails } from '../../businessLogic'

import CollapsibleView from '../../components/CollapsibleView'
import HeaderDescription from './HeaderDescription'

import cs from './styleSheet'

const CurrencyDetail = ({ navigation }) => {
  const [details, setDetails] = useState(null)
  const currencyId = navigation.getParam('currencyId')

  useEffect(() => {
    async function getDetails() {
      const fetchedDetails = await getCrypoCurrencyDetails(currencyId)
      console.log('TCL: getDetails -> fetchedDetails', fetchedDetails)
      setDetails(fetchedDetails)
    }

    getDetails()
  }, [currencyId])

  return (
    <ScrollView style={cs.page}>
      {details && <HeaderDescription {...details} />}
      <CollapsibleView headerTitle="Description JSON">
        <Text style={{}}>{JSON.stringify(details)}</Text>
      </CollapsibleView>
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
