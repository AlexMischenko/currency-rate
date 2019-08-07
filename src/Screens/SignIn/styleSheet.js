import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBlock: {
    width: 300,
    height: 200,
    padding: 20,
    backgroundColor: '#efefef',
    borderRadius: 4,
  },
  formTitle: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#343434',
  },
  formInput: {
    marginTop: 20,
  },
  formSubmitBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 40,
    marginTop: 30,
    backgroundColor: '#F8A136',
    borderRadius: 6,
  },
  formSubmitBtnText: {
    fontSize: 17,
    color: '#ffffff',
  },
})
