
'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ProgressBarAndroid,
} from 'react-native';

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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  loadingText: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 40,
  },
});