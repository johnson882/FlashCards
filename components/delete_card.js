import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    TouchableWithoutFeedback,
    TouchableHighlight

} from "react-native";
 import {_getCards,removeCard} from "../utils/AsyncStorage"

 import {ListItem} from 'react-native-elements'

class DeleteCard extends Component {

  constructor(props){
    super(props);
    let theProps = this.props.navigation.getParam('deckName');
    this.state = {"Questions":"", "loaded": false, "deleteLoad": false, "deckName":theProps,  "questionList": "", "reload": false};
  }

  static navigationOptions = {
    title: "Deck 1"
    } // this hides the header for navigation

    deleteCard(question){
      removeCard( this.state.deckName, question).then((value) => {console.log("removed Item:",value)})
      _getCards( this.state.deckName).then((value) => {
        this.setState({"Questions":  value , "loaded":true})
      })
    }

    getQuestionsFromState(questionsObject){
      let questions = [];
      questionsObject.forEach(function(obj,index) {
        questions.push(obj.question)
      })
      return questions;
    }

    componentDidMount(){
      _getCards( this.props.navigation.getParam('deckName')).then((value) => {
        this.setState({"Questions":  value , "loaded":true})
      })
    }

    arrayToObject(questions){
       let stateArray = [];
       if(questions !== "")
       {
         let aObject = {};
         let key;
         for (var a in questions){
           key = questions[a];
           console.log(key);
           aObject["key"] = key;
           stateArray.push(aObject)
           aObject = {}
        }
       }
       return stateArray;
     }

    render() {
      let questions = []
      let qState = []
      let aObject = {}

        if(this.state.loaded == true)
        {
          qState = this.getQuestionsFromState(this.state.Questions);
          aObject = this.arrayToObject(qState)

          return(
            <View style={styles.container}>

            <Text>Which Question do you want to deleted:</Text>
            <Text> </Text>

            <FlatList data = {aObject} renderItem={({ item }) => (
              
              <TouchableHighlight onPress={() => this.deleteCard(item.key) }>
                              <Text style={styles.container}>{item.key}</Text>
                         </TouchableHighlight>

          )}/>

          <Button title="Back" onPress={() => this.props.navigation.navigate('Deck')}/>
          </View>
          );
        }
        else{
          return ( <View>
            <Text>loading</Text>
          </View>)
        }
    }
}
export default DeleteCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    }
});
