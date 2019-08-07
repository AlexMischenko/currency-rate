import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, Alert } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'

import { loginUser } from '../../businessLogic'
import { AUTHORIZATION_TOKEN } from '../../utils/constants'
import { Pages } from '../../routes'

import LoaderView from '../../components/LoaderView'

import cs from './styleSheet'

class SignIn extends PureComponent {
  state = {
    username: 'admin',
    password: 'admin',
    isLoading: false,
  }

  handleInput = field => value => {
    this.setState({ [field]: value })
  }

  handeSubmit = async () => {
    const { navigation } = this.props
    const { username, password } = this.state

    if (username && password) {
      try {
        this.setState({ isLoading: true })
        const loginResponse = await loginUser({ username, password })
        this.setState({ isLoading: false })
        Alert.alert(`Username: ${loginResponse.username}`, `Password: ${loginResponse.password}`)

        await AsyncStorage.setItem(AUTHORIZATION_TOKEN, 'secret key')
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: Pages.currencyRate })],
        })
        navigation.dispatch(resetAction)
      } catch (error) {
        this.setState({ isLoading: false })
        Alert.alert(`Error occured :(`, `${error}`)
      }
    } else {
      Alert.alert('All fields are required')
    }
  }

  render() {
    const { username, password, isLoading } = this.state

    if (isLoading) {
      return <LoaderView />
    }

    return (
      <View style={cs.page}>
        <View style={cs.formBlock}>
          <Text style={cs.formTitle}>Login form</Text>
          <TextInput
            style={cs.formInput}
            value={username}
            onChangeText={this.handleInput('username')}
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
