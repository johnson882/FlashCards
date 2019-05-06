import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button

} from "react-native";

import CardQA from './CardQA'

import {_getCards} from "../utils/AsyncStorage"


class Card extends Component {

constructor(props){
super(props);
this.state = {"Questions":0, "loaded":false, "index": 0};
this.handler = this.handler.bind(this)
}

handler(index){
  console.log("index from CardQA:", index)
  let aindex = ++index;
  this.setState({"index": aindex})

  console.log("index:", this.state.index)
  return index;
}
    static navigationOptions = {
      title: "Card 1"

    } // this hides the header for navigation

    componentDidMount(){


      _getCards("React").then((value) => {

        this.setState({"Questions":value,"loaded":true})
      })
      console.log(this.state)


    }



    render() {


      let question = [];
      let answer = [];
      let arrayLength = 0;
      let stateIndex = 0;
      let loaded = false;
      console.log("this is the current state:",this.state)
      //let question = this.state.Questions[0].question
      if(this.state.loaded == true)
      {
        arrayLength = this.state.Questions.length;

        for (var i = 0; i < arrayLength; i++) {
          question[i] = this.state.Questions[i].question
          answer[i] = this.state.Questions[i].answer
        }

      console.log("question:",question)
      console.log("answer:",answer)
      stateIndex = this.state.index;
      loaded = this.state.loaded
      console.log("loaded:", loaded)

    }
    let handler = this.handler
    console.log("index in render:",this.state.index)
        return (


            <View style={styles.container}>
            {console.log("state Index:", stateIndex)}

            {loaded == true? <CardQA index={stateIndex} handler={handler.bind(this)} question={question[stateIndex]} answer={answer[stateIndex]} /> : <Text> Waiting for data...</Text> }






            </View>
        );
    }
}
export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
