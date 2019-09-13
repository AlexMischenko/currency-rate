import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native'
import HTMLView from 'react-native-htmlview'

import { getCrypoCurrencyDetails } from '../../businessLogic'

import LoaderView from '../../components/LoaderView'
import CollapsibleView from '../../components/CollapsibleView'
import WebDeepLink from '../../components/WebDeepLink'
import HeaderDescription from './components/HeaderDescription'

import cs from './styleSheet'

const CurrencyDetail = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [currencyData, setCurrencyData] = useState(null)
  const currencyId = navigation.getParam('currencyId')

  useEffect(() => {
    async function getDetails() {
      setIsLoading(true)
      const fetchedDetails = await getCrypoCurrencyDetails(currencyId)
      setCurrencyData(fetchedDetails)
      setIsLoading(false)
    }

    getDetails()
  }, [currencyId])

  if (isLoading || !currencyData) {
    return <LoaderView />
  }

  const { homepage: homepageLink, officialForum: officialForumLink } = currencyData.links

  return (
    <ScrollView style={cs.container} contentContainerStyle={cs.page}>
      <HeaderDescription style={cs.headerDescriptionBlock} {...currencyData} />
      <CollapsibleView style={cs.collapsibleBlock} headerTitle="Description">
        <HTMLView value={currencyData.description} />
      </CollapsibleView>
      <CollapsibleView style={cs.collapsibleBlock} headerTitle="Links">
        {homepageLink ? <WebDeepLink href={homepageLink} text="Homepage: " /> : null}
        {officialForumLink ? <WebDeepLink href={officialForumLink} text="Official Forum: " /> : null}
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
