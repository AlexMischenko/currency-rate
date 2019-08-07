import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, Alert } from 'react-native'

import { AUTHORIZATION_TOKEN } from '../../utils/constants'
import { Pages } from '../../routes'

import cs from './styleSheet'

class SignIn extends PureComponent {
  state = {
    login: 'admin',
    password: 'admin',
  }

  handleInput = field => value => {
    this.setState({ [field]: value })
  }

  handeSubmit = async () => {
    const { navigation } = this.props
    const { login, password } = this.state

    if (login && password) {
      Alert.alert(`Login: ${login}`, `Password: ${password}`)
      await AsyncStorage.setItem(AUTHORIZATION_TOKEN, 'secret key')
      navigation.navigate(Pages.currencyRate)
    } else {
      Alert.alert('All fields are required')
    }
  }

  render() {
    const { login, password } = this.state

    return (
      <View style={cs.page}>
        <View style={cs.formBlock}>
          <Text style={cs.formTitle}>Login form</Text>
          <TextInput
            style={cs.formInput}
            value={login}
            onChangeText={this.handleInput('login')}
            autoCapitalize="none"
          />
          <TextInput
            style={cs.formInput}
            value={password}
            onChangeText={this.handleInput('password')}
            autoCapitalize="none"
          />
          <TouchableOpacity style={cs.formSubmitBtn} onPress={this.handeSubmit}>
            <Text style={cs.formSubmitBtnText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

SignIn.navigationOptions = () => ({
  header: null,
})

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default SignIn
