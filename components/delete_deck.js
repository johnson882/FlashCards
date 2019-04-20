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

  constructor(props) {
    super(props);
    this.state = {val:"", load:false};
  }

    static navigationOptions = {
        title: "Delete Decks"
    } // this hides the header for navigation

    componentDidMount() {
        _getDecks().then((value) => {
          this.setState({val: value,load:true})

        })
      }

      renderCategories(data) {
        console.log("data from func:", data)
    //return data.map((item, index) => <Text key={index}>{item.text}</Text>);
    return "";
    }

       stateToArray(){
          let stateArray = [];

          if(this.state.val !== "") // val
          {
            let value = this.state.val;


            for (var a in this.state.val){

             stateArray.push(a)
        }
console.log("StateArray:", stateArray)

          }



          return stateArray;
        }




    render() {



    let renderthis = (<Text>Pick a deck to delete:</Text>)

    list = (
      <FlatList
        data={this.stateToArray()}
      />
    )
    let getTheDecks = _getDecks()
    let arrayOfNames = [];


  if(this.state.val !== "")
  {
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

            <FlatList
    data={[{key: 'a'}, {key: 'b'}]}
    renderItem={({item}) => <Text>{item.key}</Text>}
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
