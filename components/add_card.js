import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput

} from "react-native";

class AddCard extends Component {

  constructor(props) {
     super(props);
     this.state = {
       textQuestion: 'Question',
       textAnswer: 'answer',
       textWrong1: 'wrong answer'
    };
   }

    static navigationOptions = {
       title: 'Add Card',
    } // this hides the header for navigation

    render() {
        return (
            <View style={{
       
       borderBottomColor: '#000000'}}>
            <Text>Question:</Text>

            <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(textQuestion) => this.setState({textQuestion})}

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
            onChangeText={(textAnswer) => this.setState({textAnswer})}

            multiline = {true}
            numberOfLines = {4}
            margin = {50}
            padding = {10}
            placeholder= {'Answer'}
            placeholderTextColor = {'green'}
            />


            <Button title="Add another answer"/>

            <Text> Wrong answer: </Text>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(textWrong1) => this.setState({textWrong1})}

            multiline = {true}
            numberOfLines = {4}
            margin = {50}
            padding = {10}
            placeholder= {'Wrong Answer'}
            placeholderTextColor = {'red'}
            />


            <Button title="Submit" onPress={() => this.props.navigation.navigate('Deck')}/>
            </View>
        );
    }
}
export default AddCard;

const styles = StyleSheet.create({
    container: {

    }
});
