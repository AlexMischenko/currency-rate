import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import cs from './styleSheet'

const CollapsibleView = ({
  children,
  headerTitle,
  style,
  headerContainerStyle,
  headerTitleStyle,
  expendedContainerStyle,
}) => {
  const [isExpanded, setExpaneded] = useState(false)

  const toggleCollapse = () => setExpaneded(wasExpanded => !wasExpanded)

  return (
    <View style={[cs.collapsibleViewBlock, style]}>
      <View style={[cs.headerBlock, headerContainerStyle]}>
        <Text style={[cs.headerTitleText, headerTitleStyle]}>{headerTitle}</Text>
        <TouchableOpacity style={cs.headerToggleBtn} onPress={toggleCollapse}>
          <AntDesign name={isExpanded ? 'caretup' : 'caretdown'} size={20} color="black" />
        </TouchableOpacity>
      </View>
      {isExpanded && <View style={[cs.expendedBlock, expendedContainerStyle]}>{children}</View>}
    </View>
  )
}

CollapsibleView.propTypes = {
  headerTitle: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
  headerContainerStyle: PropTypes.object,
  headerTitleStyle: PropTypes.object,
  expendedContainerStyle: PropTypes.object,
}

CollapsibleView.defaultProps = {
  style: {},
  headerContainerStyle: {},
  headerTitleStyle: {},
  expendedContainerStyle: {},
}

export default CollapsibleView
