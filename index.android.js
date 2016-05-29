/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  ToolbarAndroid,
  View,
} from 'react-native';

class GoPrint_Admin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to GoPrint Admin!
        </Text>
        <Text style={styles.instructions}>
          www.goprint.id
        </Text>
        <TextInput style={styles.input}
        underlineColorAndroid='gray'
        placeholder="your email" />
        <TextInput style={styles.input} 
        password={true}
        underlineColorAndroid='gray'
        placeholder="your password" />
        <View style={{width: 150, height: 40, marginTop:30,backgroundColor: 'gainsboro', borderRadius: 5}}>
          <Text style={{margin: 10, textAlign: 'center', fontSize: 17 }}>LOGIN IN</Text>
        </View>
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
  welcome: {
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 25,
  },
  input: {
    marginTop: 5,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 17,
    textAlign: 'center',
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
  },
});

AppRegistry.registerComponent('GoPrint_Admin', () => GoPrint_Admin);
