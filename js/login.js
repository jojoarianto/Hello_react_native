'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
} from 'react-native';

var btnLogin;

export default class Login extends Component {
  state: {
    username: '';
    password: '';
  }

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      btnLogin: false,
    }
  }

  clickMe() {
    let username = this.state.username;
    let password = this.state.password;
    let btnLogin = this.state.btnLogin;

    if (username == '' || password == '') {
      alert('You must enter all field');
      return ;
    }

    this.props.navigator.replace({ 
      name: 'loading'
    })

    var obj = {  
      method: 'POST',
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Origin': '',
        'Host': 'api.goprint.id',
        'app-api-key': 'timdonatindonesia',
      },
      body: JSON.stringify({
        'email': username,
        'password': password
      })
    };

    fetch('http://api.goprint.id/v1/login', obj)
      .then((response) => response.text())
      .then((responseText) => {
        var json = responseText;
        json = JSON.parse(json);
        if (json.status == 'false' || json.status == false) {
          this.props.navigator.replace({ 
            name: 'login'
          });
          alert('Sorry your email or password is invalid');
        }
        if (json.status == 'true' || json.status == true) {
          AsyncStorage.setItem("email", username);

          this.props.navigator.replace({ 
            name: 'home'
          });
        }
      });
  }

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          GoPrint Admin
        </Text>

        <Text style={styles.instructions}>
          www.goprint.id
        </Text>

        <TextInput style={styles.input}
          ref= "username"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          underlineColorAndroid='gray'
          placeholder="email" />

        <TextInput style={styles.input} 
          ref= "password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          password={true}
          underlineColorAndroid='gray'
          placeholder="password" />

        <TouchableOpacity onPress={this.clickMe.bind(this)}
          ref="btnLogin"
          disabled={this.state.btnLogin}
        >
          <View
          style={{width: 250, height: 40, marginTop:30,backgroundColor: '#555650', borderRadius: 5}}>
            <Text style={{margin: 10, textAlign: 'center', fontSize: 17, color: '#FFF' }}>LOGIN IN</Text>
          </View>
        </TouchableOpacity>

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
  welcome: {
    fontSize: 40,
    color: "#2E6AA0",
    textAlign: 'center',
    marginBottom: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 40,
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