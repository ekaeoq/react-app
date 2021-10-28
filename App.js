import React, {useState} from 'react';
import { Text, Keyboard, TouchableOpacity, FlatList, TextInput, Button, View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import Svip from './extra/Svip';

const Joj = () => {
	const [task, setTask] = useState();
	const [taskItems, setTaskItems] = useState([]);
	const handleAddTask = () => {
		Keyboard.dismiss();
		console.log(task);
		setTaskItems([...taskItems, task])
		setTask(null);
	}
	const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
    }



  return (
	  <View style={style.jao}>
	  	<Text style={style.prvo}>Hello</Text>
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
	  			style={style.TextInputTest}
	  			placeholder="jebemtimater"
	  			value={task}
	  			onChangeText={text => setTask(text)}
	  		/>

	  	</KeyboardAvoidingView>
	  	<Button 
	  		onPress={() => handleAddTask()}
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
