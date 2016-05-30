/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ProgressBarAndroid,
} from 'react-native';

var btnLogin;

export default class Loading extends Component {
  state: {
    username: '';
    password: '';
  }

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ProgressBarAndroid styleAttr="Inverse" />
        <Text>
          Please wait ..
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loadingText: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 40,
  },
});