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
		backgroundColor: `#e6e6fa`,
	    padding: 10,
	    borderRadius: 10,
	    flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 14,
		marginHorizontal: 20

	},
	hana: {
		fontSize: 17,
	}

});

export default Svip;

