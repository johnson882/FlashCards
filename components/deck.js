import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,


} from "react-native";

import {_getDecks, _getDeck, saveDeckTitle, addCardToDeck, removeDeck, removeCard} from "../utils/AsyncStorage"

class Deck extends Component {

    static navigationOptions = {
      title: "Deck 1"

    } // this hides the header for navigation

    render() {

    // _getDecks().then((data) => {console.log(data)}) // gets all decks
      //_getDeck('React').then((data) => {console.log(data)}) // pulls certain deck
      let saveDeck = saveDeckTitle('newDeck') // adds empty Deck
      console.log(saveDeck)


    let saveDeck2 = saveDeckTitle('AnotherDeck')
  //  console.log(saveDeck2)

      // arguments -  object question,String deckName,
      //addCardToDeck({question: 'this is a question test', answer:'this is a answer test'}, 'React').then((data) => {console.log(data)})


      let removeADeck = removeDeck('React') // saves a question to a deck

      //deleteDeck()
      //args: title - a string of the deck you want deleted
       // adds empty Deck


      //DeleteCard()
      //removeCard('JavaScript', 'What is a closure?')
      //args: title - a string of the deck you want your card removed from, question - string of the question you want removed



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
