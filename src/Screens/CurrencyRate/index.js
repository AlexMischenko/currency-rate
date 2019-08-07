import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, AsyncStorage, Text, TextInput } from 'react-native'

import { AUTHORIZATION_TOKEN } from './../../utils/constants'
import { Pages } from '../../routes'

import styles from './styleSheet'

class CurrencyRate extends PureComponent {
  async componentWillMount() {
    const { navigation } = this.props
    try {
      const token = await AsyncStorage.getItem(AUTHORIZATION_TOKEN)
      if (!token) {
        navigation.navigate(Pages.signIn)
      }
    } catch (error) {
      console.log('TCL: CurrencyRate -> componentWillMount -> error', error)
    }
  }

  render() {
    return (
      <View>
        <Text>CurrencyRate</Text>
      </View>
    )
  }
}

export default CurrencyRate
