import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList

} from "react-native";
 import {_getCards,removeCard} from "../utils/AsyncStorage"

class DeleteCard extends Component {

  constructor(props){
    super(props);
    this.state = {"Questions":"", "loaded": false};
    let theProps = this.props.navigation.getParam('deckName');
    _getCards(theProps).then((value) => {
      this.setState({"Questions": value, "loaded":true})
    })

  }

    static navigationOptions = {
      title: "Deck 1"

    } // this hides the header for navigation
    deleteCard(){
      removeCard("React", "What is React?").then((value) => {console.log(value)})
    }
    componentDidMount(){
      this.deleteCard();

      //console.log("Questions", this.state.Questions)
    }


    stateToArray(){
       let stateArray = [];

       if(this.state.questions !== "") // val
       {
         let aObject = {};
         let key;

         for (var a in this.state.questions){
           key = a;
           aObject["key"] = a;
           stateArray.push(aObject)
           aObject = {}
        }
       }
       return stateArray;
     }


    render() {
      let questions = []
      console.log("Questions", this.state.Questions)

        if(this.state.loaded == true)
        {
          //questions = this.state
        }
        return (


            <View style={styles.container}>

            <Text>Which Question do you want to deleted:</Text>

            <FlatList

          extraData={this.state}






          />

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
