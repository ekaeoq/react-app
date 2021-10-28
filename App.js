import React, {useState} from 'react';
import { Text, FlatList, TextInput, Button, View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import Svip from './extra/Svip';

const Joj = () => {
	const arrayTest = [
		{id: 1, name: "nekaj", penis: "jao"},
		{id: 2, name: "bog", nijepenis: "auuuu"}
	];
	const arr = ["jao","bok","tko si ti"];


  return (
	  <View style={style.jao}>
	  	<Text style={style.prvo}>Hello</Text>
	  	<Text style={style.drugo}>Bok Hana, napokon sam krenul kuzit kak ova kurcina radi</Text>
	  	<TextInput
	  		style={style.textInputStyle}
	  		placeholder="Type"
	  	/>
	  	<View>
	  		<Svip/>
	  	</View>
	  	<KeyboardAvoidingView
	  		behaviour={Platform.OS === "ios" ? "padding" : "height"}
	  		style={style.Testing}>
		
	  		<TextInput style={style.TextInputTest}/>

	  	</KeyboardAvoidingView>
	  	<Button 
	  		title="bok"
	  	/>
	  </View>
  );
}

const style = StyleSheet.create({
	prvo: {
		marginTop: 80,
		fontSize: 30,
		textAlign: "center"
	},
	drugo: {
		marginTop: 5,
		color: "darkgrey",
		textAlign: "center",
	},
	textInputStyle: {
		marginTop: 5,
	},
	addOnTextStyle: {
		marginTop: 5,
		borderWidth: 1,
		borderColor: 'black',
	},
	Testing: {
		marginTop: 5,
	},
	TextInputTest: {
		marginTop: 5,
	},

	

});

export default Joj;
