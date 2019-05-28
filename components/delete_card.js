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
    let theProps = this.props.navigation.getParam('deckName');
    this.state = {"Questions":"", "loaded": false, "deckName":theProps,  "questionList": ""};

    _getCards(theProps).then((value) => {
      this.setState({"Questions": value, "loaded":true})
    })

  }

    static navigationOptions = {
      title: "Deck 1"

    } // this hides the header for navigation
    deleteCard(question){
      //removeCard( this.state.deckName, "Where do you make Ajax requests in React?").then((value) => {console.log(value)})

    }

    getQuestionsFromState(){
        let newArray;
        let questions = this.state.Questions;
        let length = this.state.Questions.length;
        console.log("length:", length)
      console.log("Get question from state:",this.state.Questions)

    //console.log(this.state.Questions[0])
      //this.state.Questions
      questions.forEach(function(obj) {
        console.log(obj.question, obj.answer);
      })


    }

    componentDidMount(){

      this.deleteCard();

      //console.log("Questions", this.state.Questions)
    }


    stateToArray(){
       let stateArray = [];

       if(this.state.Questions !== "") // val
       {
         let aObject = {};
         let key;

         for (var a in this.state.Questions){
           key = a;
           aObject["Question"] = a;
           stateArray.push(aObject)
           aObject = {}
        }
       }
       return stateArray;
     }


    render() {
      let questions = []
      console.log("Questions:", this.state.Questions)

        if(this.state.loaded == true)
        {
          this.getQuestionsFromState()
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
