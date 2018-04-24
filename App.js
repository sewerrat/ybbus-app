import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import MainRouter from 'components/Commons/Navigation';
import Home from 'components/Screens/Home/container';
import store from 'modules/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainRouter />
      </Provider>
    );
  }
}