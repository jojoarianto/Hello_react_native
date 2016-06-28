'use strict';

import React, { Component } from 'react';

import {
	StyleSheet,
	ScrollView,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from 'react-native';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollHorizontal: false,
		};
	}

	_onPressButton (){
		
		var obj = {  
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Host': 'api.goprint.id',
				'app-api-key': 'timdonatindonesia',
				'api-key': '19TPR31YBSG130IB',
				'user-id': 2,
			},
		};

		fetch('http://api.goprint.id/v1/print/get-list-to-print/1', obj)
		.then((response) => response.text())
		.then((responseText) => {
			alert(responseText);
			// var json = responseText;
			// json = JSON.parse(json);
			// if (json.status == 'false' || json.status == false) {
			// 	this.props.navigator.replace({ 
			// 		name: 'login'
			// 	});
			// }
			// if (json.status == 'true' || json.status == true) {
			// 	this.props.navigator.replace({ 
			// 		name: 'home'
			// 	});
			// }
		});

	}

	render() {
		return (
			<ScrollView contentContainerStyle={styles.container} horizontal={this.state.scrollHorizontal}> 
			<TouchableOpacity ref="btnListUser" onPress={this._onPressButton.bind(this)}>
			<View
			style={styles.buttonHome}>
			<Text style={styles.textButtonHome}>LIST TO PRINT</Text>
			</View>
			</TouchableOpacity>
			<TouchableOpacity ref="btnListUser">
			<View
			style={styles.buttonHome}>
			<Text style={styles.textButtonHome}>LIST USERS</Text>
			</View>
			</TouchableOpacity>
			<TouchableOpacity ref="btnListUser">
			<View
			style={styles.buttonHome}>
			<Text style={styles.textButtonHome}>HISTORY PRINT</Text>
			</View>
			</TouchableOpacity>
			</ScrollView>
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
	contentContainer: { paddingVertical: 20 },
	buttonHome: { width: 250, height: 40, marginTop:30, backgroundColor: '#272822', borderRadius: 5 },
	textButtonHome: {margin: 10, textAlign: 'center', fontSize: 17, color: '#FFF' },
});