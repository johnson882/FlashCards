import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput

} from "react-native";

import InputField from './inputField'

class AddDeck extends Component {
  constructor(props) {
     super(props);
     this.state = { text: '' };
   }

    static navigationOptions = {
       title: 'Add Deck',
    } // this hides the header for navigation

    render() {
        return (
            <View style={{
       backgroundColor: this.state.text,
       borderBottomColor: '#000000',

       }}>

        <Text>Deck Name:</Text>

        <TextInput
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    onChangeText={(text) => this.setState({text})}

    multiline = {true}
     numberOfLines = {4}
     margin = {50}
     padding = {10}
     placeholder= {'Deck Name'}
     placeholderTextColor = {'green'}

  />



              <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>


              <Text>{this.state.text}</Text>
            </View>
        );
    }
}
export default AddDeck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
