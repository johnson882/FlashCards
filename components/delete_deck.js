import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList

} from "react-native";

import {_getDecks, _getDeck, saveDeckTitle, addCardToDeck, removeDeck, removeCard} from "../utils/AsyncStorage"

class DeleteDeck extends Component {

    static navigationOptions = {
        title: "Delete Decks"
    } // this hides the header for navigation

    render() {


    let getTheDecks = _getDecks()
    let arrayOfNames = [];


     console.log(getTheDecks)

    // getDecks.map(item => {arrayOfNames.push(item.title) })
    for (var a in getTheDecks){

     arrayOfNames.push(a)
}
  // next use array of names to the flatlist where you can click on them and it will delete that
  // deck from the store.


     console.log("Array of names:", arrayOfNames)
        return (

            <View style={styles.container}>
            <Text>Pick a deck to delete:</Text>
              <FlatList


              />

              <Button title="Back Button" onPress={() => this.props.navigation.navigate('Home')}/>

            </View>
        );
    }
}
export default DeleteDeck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
