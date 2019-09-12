import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  page: {
    flex: 1,
  },

  headerDescriptionBlock: {
    flexDirection: 'row',
  },

  currencyLogo: {
    height: 70,
    width: 70,
    marginRight: 10,
  },

  nameTextBlock: {},
  cryptoRankText: {
    fontSize: 13,
    fontStyle: 'italic',
    textShadowColor: 'black',
    fontWeight: '200',
  },
  cryptoNameText: {
    fontSize: 19,
    fontWeight: '600',
  },
  cryptoShortenedText: {
    fontSize: 15,
    fontWeight: '600',
  },
  cryptoDateText: {
    fontSize: 11,
    fontWeight: '200',
  },
})
