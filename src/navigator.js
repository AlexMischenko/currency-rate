import { createStackNavigator, createAppContainer } from 'react-navigation'

import { SignIn, CurrencyRate, CurrencyDetail } from './Screens'

import { Pages as PagesList } from './routes'

const pages = {
  [PagesList.signIn]: SignIn,
  [PagesList.currencyRate]: CurrencyRate,
  [PagesList.currencyDetail]: CurrencyDetail,
}

const RootStack = createStackNavigator(pages, {
  initialRouteName: PagesList.currencyRate,
})

const Navigator = createAppContainer(RootStack)

export default Navigator
