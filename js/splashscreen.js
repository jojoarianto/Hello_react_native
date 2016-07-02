
'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ProgressBarAndroid,
  AsyncStorage,
} from 'react-native';

export default class SplashScreen extends Component {

  constructor(props) {
    super(props);

    // get status is user was login?
    AsyncStorage.getItem("email").then((value) => {
      if (value != "" && value != null) { 
        this.props.navigator.replace({ 
          name: 'home'
        });
      } else {
        this.props.navigator.replace({ 
          name: 'login'
        });
      }
    }).done;
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