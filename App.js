import React, {useState} from 'react';
import { Text, Keyboard, TouchableOpacity, Alert, FlatList, TextInput, Button, View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import Svip from './extra/Svip';

const Joj = () => {
	const [task, setTask] = useState();
	const [taskItems, setTaskItems] = useState([]);
	const handleAddTask = () => {
		Keyboard.dismiss();
		console.log(task);
		setTaskItems([...taskItems, task])
		setTask(null);
		if(task === null){
			Alert.alert("jao");
		}
	}
	const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
    }



  return (
	  <View style={style.mainBoy}>
	  	<Text style={style.prvo}>What not to forget:</Text>
	  	<View>{
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Svip text={item} /> 
                </TouchableOpacity>
              )
            })
          }

	  	</View>
	  	<KeyboardAvoidingView
	  		behaviour={Platform.OS === "ios" ? "padding" : "height"}
	  		style={style.Testing}>
	  		<TextInput 
	  			style={style.textInputTest}
	  			placeholder="Type here"
	  			value={task}
	  			onChangeText={text => setTask(text)}
	  		/>
	  		<Button
	  			color="black"
	  			style={style.buttoner}
	  			onPress={() => handleAddTask()}
	  			title="Plop"
	        />
	  </KeyboardAvoidingView>
	  </View>
  );
}
const style = StyleSheet.create({
	mainBoy: {
		flex: 1,
	},

	prvo: {
		marginTop: 65,
		textAlign: 'left',
		marginLeft: 30,
		fontSize: 19,
		paddingBottom: 13

	},
	drugo: {
		marginTop: 5,
		color: "darkgrey",
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
		position: 'absolute',
		bottom: 50,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderColor: 'black',
		paddingHorizontal: 15,
	},
	textInputTest: {
		borderColor: 'black',
		borderWidth: 1,
		width: 280,
		borderRadius: 5,
		padding: 10,
		paddingHorizontal: 10,
	},

	

});

export default Joj;
