import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button

} from "react-native";

class DeleteCard extends Component {

    static navigationOptions = {
      title: "Deck 1"

    } // this hides the header for navigation

    render() {
        return (


            <View style={styles.container}>
            <Button title="Question 1: What is the diamter..."/>
            <Button title="Question 2: What is the perimeter..."/>
            <Button title="Question 3: What is the size..."/>



            <Button title="Delete cards" onPress={() => this.props.navigation.navigate('Deck')}/>


            </View>
        );
    }
}
export default DeleteCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
