'use strict';

import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import Login from './js/login';
import Loading from './js/loading';

class GoPrint_Admin extends Component {
  renderScene(route, navigator){
    if (route.name == 'login') {
      return ( <Login navigator={navigator} /> )
    }
    if (route.name == 'loading') {
      return ( <Loading navigator={navigator} /> )
    }
  }
  
  render() {
    return (
      <Navigator
        initialRoute={{name: 'login'}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

AppRegistry.registerComponent('GoPrint_Admin', () => GoPrint_Admin);
