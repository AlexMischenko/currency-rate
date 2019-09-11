import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    padding: 15,
    width: '100%',
  },
  headerTitle: {
    fontSize: 27,
    fontWeight: '700',
    color: 'black',
  },
  logoutBtn: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    backgroundColor: '#32CD32',
    borderRadius: 6,
  },
  logoutBtnText: {
    fontSize: 17,
    color: '#ffffff',
  },

  currencyItemBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  currencyItemTextBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyItemIcon: {
    height: 17,
    width: 17,
  },
  currencyItemTextBold: {
    fontSize: 17,
    color: 'black',
    fontWeight: '500',
  },
  currencyItemText: {
    fontSize: 17,
    color: '#343434',
    width: '60%',
  },
  currencyItemRateBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyItemValue: {
    color: '#5E82BC',
    fontSize: 17,
    fontWeight: '600',
    marginRight: 3,
  },
  currencyItemPrevious: {
    fontSize: 17,
  },

  itemSeparator: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: '#7B7B7B',
  },
})
