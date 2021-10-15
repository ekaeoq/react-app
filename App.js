import React, {useState} from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

const Cat = () => {
  return (
	  <View style={style.jao}>
	  	<Text style={style.prvo}>Hello</Text>
	  	<Text style={style.drugo}>Bok Hana, napokon sam krenul kuzit kak ova kurcina radi</Text>
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
	}

});

export default Cat;
