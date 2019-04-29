import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button

} from "react-native";

class CardQA extends Component {

  constructor(props){
  super(props);
  this.state = {"question": props.question, "answer":props.answer};
}

  render(){

    return(

      <Text>Question: {this.state.question}</Text>

    )
  }
}
export default CardQA;
