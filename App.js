import React, {useState} from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

const Cat = () => {
	const [text, setText] = useState('')
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
	  </Text>

	  	
	  </View>
  );
};

const style = StyleSheet.create({
	jao: {
	},
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
	}

	

});

export default Cat;
