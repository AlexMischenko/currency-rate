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
    height: 50,
    borderBottomColor: '#7B7B7B',
  },
  currencyItemTextBold: {
    fontSize: 17,
    color: 'black',
    fontWeight: '500',
  },
  currencyItemText: {
    fontSize: 17,
    color: '#343434',
  },
  currencyItemRateBlock: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  currencyItemPrevious: {
    fontSize: 17,
    color: 'red',
  },
  currencyItemValue: {
    fontSize: 17,
    color: '#3CB371',
  },
})
