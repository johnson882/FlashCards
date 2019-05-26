import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    ScrollView

} from "react-native";

import InputField from './inputField'

import {saveDeckTitle, _getDecks} from "../utils/AsyncStorage"

class AddDeck extends Component {
  constructor(props) {
     super(props);
     this.state = { text: '' };

   }

    static navigationOptions = {
       title: 'Add Deck',
    } // this hides the header for navigation

    handleSubmit(deckName){
      saveDeckTitle(this.state.text).then(  console.log(_getDecks()));

 this.props.navigation.goBack();

    }


    render() {
        return (

            <ScrollView style={{
       backgroundColor: this.state.text,
       borderBottomColor: '#000000',

       }}>

        <Text>Deck Name:</Text>

        <TextInput
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    onChangeText={(text) => this.setState({text})}

    multiline = {false}
     numberOfLines = {4}
     margin = {50}
     padding = {10}
     placeholder= {'Deck Name'}
     placeholderTextColor = {'green'}

  />



              <Button title="Submit" onPress={() => {this.handleSubmit()}}/>


              <Text>{this.state.text}</Text>
            </ScrollView>
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
