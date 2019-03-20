import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button

} from "react-native";

import {_getDecks, _getDeck, saveDeckTitle} from "../utils/AsyncStorage"

class Deck extends Component {

    static navigationOptions = {
      title: "Deck 1"

    } // this hides the header for navigation

    render() {

    //  _getDecks().then((data) => {console.log(data)})
      //_getDeck('React').then((data) => {console.log(data)})
      saveDeckTitle('newDeck').then((data) => {console.log(data)})
      saveDeckTitle('AnotherDeck').then((data) => {console.log(data)})


        return (


            <View style={styles.container}>
            <Button title="Take test" onPress={() => this.props.navigation.navigate('Card')}/>

            <Button title="Add Question" onPress={() => this.props.navigation.navigate('AddCard')}/>
            <Button title="Delete Question" onPress={() => this.props.navigation.navigate('DeleteCard')}/>

            </View>
        );
    }
}
export default Deck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
