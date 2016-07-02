'use strict';

import React, { Component } from 'react';
import { AppRegistry, Navigator, AsyncStorage } from 'react-native';
import Login from './js/login';
import Loading from './js/loading';
import Home from './js/home';
import SplashScreen from './js/splashscreen';

var rootHome = "splashscreen"; //default root

class GoPrint_Admin extends Component {

  renderScene(route, navigator){
    if (route.name == 'splashscreen') { return ( <SplashScreen navigator={navigator} /> ) }
    if (route.name == 'login') { return ( <Login navigator={navigator} /> ) }
    if (route.name == 'loading') { return ( <Loading navigator={navigator} /> ) }
    if (route.name == 'home') { return ( <Home navigator={navigator} /> ) }
  }
  
  render() {
    return (
      <Navigator
        initialRoute={{name: rootHome}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

AppRegistry.registerComponent('GoPrint_Admin', () => GoPrint_Admin);

