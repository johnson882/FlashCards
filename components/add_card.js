import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    ScrollView,
    TouchableOpacity

} from "react-native";

import {addCardToDeck} from "../utils/AsyncStorage"

class AddCard extends Component {

  constructor(props) {
     super(props);
     this.state = {
       textQuestion: 'Question',
       textAnswer: 'answer',
       textWrong1: 'wrong answer'
    };
    this.handler = this.handler.bind(this)
   }

    static navigationOptions = {
       title: 'Add Card',
    } // this hides the header for navigation

    handler(index){
      
      addCardToDeck({"question": this.state.textQuestion , "answer": this.state.textAnswer }, this.props.navigation.getParam('deckName'))

      this.props.navigation.goBack();
    }

    handleQuestion = (text) => {
      this.setState({"textQuestion": text})

    }
    handleAnswer = (text) => {
      this.setState({"textAnswer": text})

    }
    render() {
        return (
            <ScrollView style={{

       borderBottomColor: '#000000'}}>
            <Text>Question:</Text>

            <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.handleQuestion}

        multiline = {true}
         numberOfLines = {4}
         margin = {50}
         padding = {10}
         placeholder= {'Question'}
         placeholderTextColor = {'grey'}
      />


            <Text> Answer: </Text>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.handleAnswer}

            multiline = {true}
            numberOfLines = {4}
            margin = {50}
            padding = {10}
            placeholder= {'Answer'}
            placeholderTextColor = {'green'}
            />





            <TouchableOpacity

                           onPress = {
                              () => this.handler(this.state.handleQuestion, this.state.handleAnswer)
                           }>
                           <Text> Submit </Text>
                        </TouchableOpacity>


            </ScrollView>
        );
    }
}
export default AddCard;

const styles = StyleSheet.create({
    container: {

    }
});
