import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import cs from './styleSheet'

const LoaderView = () => {
  return (
    <View style={cs.loaderView}>
      <ActivityIndicator size="large" color="#4C71AE" />
    </View>
  )
}

export default LoaderView
