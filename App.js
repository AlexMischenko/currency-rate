import React, { Component } from 'react'
import * as Font from 'expo-font'

import LoaderView from './src/components/LoaderView'
import RootNavigator from './src/navigator'

export default class App extends Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      AntDesign: require('./assets/fonts/AntDesign.ttf'),
      Entypo: require('./assets/fonts/Entypo.ttf'),
      EvilIcons: require('./assets/fonts/EvilIcons.ttf'),
      Feather: require('./assets/fonts/Feather.ttf'),
      FontAwesome: require('./assets/fonts/FontAwesome.ttf'),
      FontAwesome5_Brands: require('./assets/fonts/FontAwesome5_Brands.ttf'),
      FontAwesome5_Regular: require('./assets/fonts/FontAwesome5_Regular.ttf'),
      FontAwesome5_Solid: require('./assets/fonts/FontAwesome5_Solid.ttf'),
      Fontisto: require('./assets/fonts/Fontisto.ttf'),
      Foundation: require('./assets/fonts/Foundation.ttf'),
      Ionicons: require('./assets/fonts/Ionicons.ttf'),
      MaterialCommunityIcons: require('./assets/fonts/MaterialCommunityIcons.ttf'),
      MaterialIcons: require('./assets/fonts/MaterialIcons.ttf'),
      Octicons: require('./assets/fonts/Octicons.ttf'),
      SimpleLineIcons: require('./assets/fonts/SimpleLineIcons.ttf'),
      Zocial: require('./assets/fonts/Zocial.ttf'),
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    return this.state.fontLoaded ? <RootNavigator /> : <LoaderView />
  }
}
