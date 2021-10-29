import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Svip = (jao) => {
	
	return(
		<View style={pipne.viktor}>
			<Text style={pipne.hana}>{jao.text}</Text>
		</View>
	);
};

const pipne = StyleSheet.create({
	viktor: {
		backgroundColor: 'black',
	    padding: 10,
	    borderRadius: 10,
	    flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
		marginHorizontal: 20

	},
	hana: {
		backgroundColor: 'yellow',
		fontSize: 17,
	}

});

export default Svip;

