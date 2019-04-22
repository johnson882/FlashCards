import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    TouchableHighlight

} from "react-native";

import {_getDecks} from "../utils/AsyncStorage"

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {val:"", load:false};
  }

    static navigationOptions = {
      title: "Flash Cards"

    } // this hides the header for navigation

    componentDidMount(){
      _getDecks().then((value) => {
        this.setState({val: value,load:true})
      })

      this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        _getDecks().then((value) => {
          this.setState({val: value,load:true})
        })
      }
    );
    }

    stateToArray(){
       let stateArray = [];

       if(this.state.val !== "") // val
       {
         let aObject = {};
         let key;

         for (var a in this.state.val){
           key = a;
           aObject["key"] = a;
           stateArray.push(aObject)
           aObject = {}
        }
       }
       return stateArray;
     }

    render() {

      let data = this.stateToArray()
        return (


            <View style={styles.container}>
            

              <FlatList
      data={data}
      extraData={this.state}
      renderItem={({item}) =>
  <Button title={item.key} onPress={() => this.props.navigation.navigate('Deck',
  {
               DeckTitle: item.key,
               otherParam: 'Deck info',
  }
)}/>





               }
               />


            <Button title="Add Deck" onPress={() => this.props.navigation.navigate('AddDeck')}/>
            <Button title="Delete Deck" onPress={() => this.props.navigation.navigate('DeleteDeck')}/>

            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
