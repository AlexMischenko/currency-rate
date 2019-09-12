import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, Linking } from 'react-native'

import cs from './styleSheet.js'

const WebDeepLink = ({ href, value, text, textStyle, linkStyle }) => {
  const handlePress = () => {
    Linking.openURL(href)
  }

  return (
    <View style={cs.container}>
      <Text style={[cs.defaultText, textStyle]}>{text}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={[cs.linkText, linkStyle]}>{value || href}</Text>
      </TouchableOpacity>
    </View>
  )
}

WebDeepLink.propTypes = {
  href: PropTypes.string.isRequired,
  value: PropTypes.string,
  text: PropTypes.string,
  textStyle: PropTypes.object,
  linkStyle: PropTypes.object,
}

WebDeepLink.defaultProps = {
  textStyle: {},
  linkStyle: {},
}

export default WebDeepLink
