/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Main from './component/Main';
import { Provider } from 'react-redux';
import Store from './redux/Store';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Provider store = {Store}>
          <Main />
      </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
