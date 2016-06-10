'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
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

    this.props.navigator.push({
      name: 'loading'
    })
    // get the data from API
    // fetch('https://www.cscpro.org/suna/battle/777-2.json')
    //   .then((response) => response.text())
    //   .then((responseText) => {
    //     console.log(responseText);
    //     alert('Hi '+responseText);
    //     this.props.navigator.pop({
    //       name: 'login'
    //     });
    //   })
    //   .catch((error) => {
    //     console.warn(error);
    //   });
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
        console.log(responseText);
        alert(responseText);
        this.props.navigator.pop({
          name: 'login'
        });
      });
    // .then(function(res) {
    //   alert('hello' + res.json()['status']);
    //   return res.json();
    //  })
    // .then(function(resJson) {
    //   alert('hello' + resJson['status']);
    //   return resJson;
    //  });

  }

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
          ref= "username"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          underlineColorAndroid='gray'
          placeholder="your email" />

        <TextInput style={styles.input} 
          ref= "password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          password={true}
          underlineColorAndroid='gray'
          placeholder="your password" />

        <TouchableOpacity onPress={this.clickMe.bind(this)}
          ref="btnLogin"
          disabled={this.state.btnLogin}
        >
          <View
          style={{width: 150, height: 40, marginTop:30,backgroundColor: 'gainsboro', borderRadius: 5}}>
            <Text style={{margin: 10, textAlign: 'center', fontSize: 17 }}>LOGIN IN</Text>
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