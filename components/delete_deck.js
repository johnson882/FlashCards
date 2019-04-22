import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    ListView,
    TouchableHighlight,

} from "react-native";

import {_getDecks, _getDeck, saveDeckTitle, addCardToDeck, removeDeck, removeCard} from "../utils/AsyncStorage"

class DeleteDeck extends Component {

  constructor(props) {
    super(props);
    this.state = {val:"", load:false};
  }

    static navigationOptions = {
        title: "Delete Decks"
    } // this hides the header for navigation

    componentDidMount(){
      _getDecks().then((value) => {
        this.setState({val: value,load:true})
      })
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

deleteItem(item){
  console.log("deleted Item:", item )
  removeDeck(item).then((value) => {
    this.setState({val: value, load:true})
  })
}


  render(){
    if(this.state.val !== ""){
    // console.log(this.state)
     console.log(this.stateToArray())
  }

let data = this.stateToArray()
console.log("here is your array!:", data
)
    // getDecks.map(item => {arrayOfNames.push(item.title) })


//console.log(deckNameStateToObject())
  // next use array of names to the flatlist where you can click on them and it will delete that
  // deck from the store.


     //console.log("Array of names:", arrayOfNames)

        return (

            <View style={styles.container}>
<Text>Which deck would you like to delete:</Text>

            <FlatList
    data={data}
    extraData={this.state}
    renderItem={({item}) =>

    <TouchableHighlight onPress={() => this.deleteItem(item.key)}>
                    <Text >{item.key}</Text>
               </TouchableHighlight>


  }
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
