import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/deck-home'
import AddDeck from './components/add_deck'
import DeleteDeck from './components/delete_deck'
import Deck from './components/deck'
import AddCard from './components/add_card'
import Card from './components/card'
import DeleteCard from './components/delete_card'


import {createStackNavigator, createAppContainer} from 'react-navigation';



class App extends React.Component {
  render() {
    return (

        <AppNavigator />

    );
  }
}

const AppNavigator = createStackNavigator({
  Home,
  AddDeck,
  DeleteDeck,
  Deck,
  AddCard,
  Card,
  DeleteCard

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',





  },
});



export default createAppContainer(AppNavigator);
