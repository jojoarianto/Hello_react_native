'use strict';

import React, { Component } from 'react';

import {
	StyleSheet,
	ScrollView,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
	AsyncStorage,
	ToolbarAndroid,
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
		});

	}

	clickLogout(){
        AsyncStorage.removeItem("email");
        AsyncStorage.removeItem("user-key");

		this.props.navigator.replace({ 
	        name: 'login'
	    });
	}

	render() {
		return (
			<View style={styles.viewContainer}>
			<ToolbarAndroid
			  style={styles.toolbar}
		      title="GoPrint Admin"
		      titleColor="white"
		      // actions={[{title: 'Settings', show: 'always'}]}
		      />
			<ScrollView contentContainerStyle={styles.container} horizontal={false}> 
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
				<TouchableOpacity onPress={this.clickLogout.bind(this)}>
					<View
					style={styles.buttonHome}>
						<Text style={styles.textButtonHome}>LOG OUT</Text>
					</View>
				</TouchableOpacity>
			</ScrollView>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	
	viewContainer: {
		backgroundColor: '#ecf0f1',
		flex: 1,
	},
	container: {
		marginTop: 150,
		justifyContent: 'center',
		alignItems: 'center',
		// height: 100%,
		backgroundColor: '#ecf0f1',
	},
	toolbar: {
		backgroundColor: '#2E6AA0',
	    height: 56,
	},
	contentContainer: { paddingVertical: 20 },
	buttonHome: { width: 250, height: 40, marginTop:30, backgroundColor: '#555650', borderRadius: 5 },
	textButtonHome: {margin: 10, textAlign: 'center', fontSize: 17, color: '#FFF' },
});