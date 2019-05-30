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
      removeCard( this.state.deckName, question).then((value) => {console.log(value)})

    }

    getQuestionsFromState(){
      let questions = [];
      //let StateQuestion = this.state.question
      let questionsFromState = this.state.Questions;

      console.log("Get question from state:",this.state.Questions)

      questionsFromState.forEach(function(obj) {
        questions.push(obj.question)
        console.log(obj.question, obj.answer);
      })

      return questions;
    }

    componentDidMount(){
      _getCards( this.props.navigation.getParam('deckName')).then((value) => {
        this.setState({"Questions": value, "loaded":true})
      })
      this.deleteCard();

      //console.log("Questions", this.state.Questions)
    }


    arrayToObject(questions){
       let stateArray = [];
       console.log("questions inside" ,questions)
       if(questions !== "") // val
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

     actionOnRow(item)
     {
       console.log("item:", item)
       this.deleteCard(item);
this.props.navigation.navigate('Deck')
      this.setState({"reload":true, "loaded":false})
     }
    render() {
      let questions = []
      let qState = []
      let aObject = {}
      let flatlist;
      console.log("Questions:", this.state.Questions)

        if(this.state.loaded == true)
        {
            qState = this.getQuestionsFromState()


            console.log("questionListState:", qState)
            aObject = this.arrayToObject(qState)

          console.log("aObject:", aObject);

        }
        else{
          flatlist = <Text>Loading </Text>
        }

        if(this.state.loaded == true)
        {
        return (


            <View style={styles.container}>

            <Text>Which Question do you want to deleted:</Text>
            <Text> </Text>


            <FlatList data = {aObject} renderItem={({ item }) => (

              <TouchableHighlight onPress={() => this.actionOnRow(item.key) }>
                              <Text >{item.key}</Text>
                         </TouchableHighlight>
          )}/>



            <Button title="Delete cards" onPress={() => this.props.navigation.navigate('Deck')}/>


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
        justifyContent: 'center'
    }
});
