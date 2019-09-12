import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  collapsibleViewBlock: {
    flex: 1,
  },
  headerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
  },
  headerTitleText: {
    fontSize: 19,
    fontWeight: '600',
  },
  headerToggleBtn: {},
  expendedBlock: {
    flex: 1,
    padding: 5,
  },
})
