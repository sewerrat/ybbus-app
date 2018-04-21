import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from 'src/components/Commons/Navigation';
import { Provider } from 'react-redux';
import {Store} from 'src/modules';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}