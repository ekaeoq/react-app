import React, {useState} from 'react';
import { Text, TextInput, Button, View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import Svip from './extra/Svip';

const Joj = () => {
	const [text, setText] = useState('')
	const [items, setItems] = useState([])

	const addItem = () => {
		setItems([... items, {
			id: items.length,
			value: Math.floor(Math.random() * 10) + 1
		}])
	}
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
	  		onChangeText={text => setText(text)}
	  		defaultValue={text}
	  	/>
	  	<Text style={style.addOnTextStyle}>
	  		Brate mili jel ovo radi: {text}
	  	</Text>
	  	<View>
	  		<Svip/>
	  	</View>

	  	
	  	<KeyboardAvoidingView
	  		behaviour={Platform.OS === "ios" ? "padding" : "height"}
	  		style={style.Testing}>
		
	  		<TextInput style={style.TextInputTest}/>

	  	</KeyboardAvoidingView>
	  	<Button 
	  		onPress={addItem}
	  		title="bok"
	  	/>
	  	<View>
	  		{arr.map(function(name,index){
				return <Text key={index}>{name}</Text>

			})}

			
	  	</View>
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
