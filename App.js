import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/deck-home'
import {createStackNavigator, createAppContainer} from 'react-navigation';



class App extends React.Component {
  render() {
    return (

        <AppNavigator />

    );
  }
}

const AppNavigator = createStackNavigator({
  Home

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
