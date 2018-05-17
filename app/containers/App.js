/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import TrendingPage from '../pages/TrendingPage'
import RepoDetailPage from '../pages/RepoDetailPage'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

type Props = {}

const RootStack = createStackNavigator(
  {
    Home: TrendingPage,
    Details: RepoDetailPage,
  },
  {
    initialRouteName: 'Home',
  }
)

export default class App extends Component<Props> {

  render() {
    return (
      <RootStack/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
