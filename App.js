import React, {useState} from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import Svip from './extra/Svip';

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
	  	Brate mili jel ovo radi: {text}
	  </Text>
	  <View>
	  <Svip/>
	  </View>

	  	
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
	},

	addOnTextStyle: {
		marginTop: 5,
		borderWidth: 1,
		borderColor: 'black',

	}

	

});

export default Cat;
