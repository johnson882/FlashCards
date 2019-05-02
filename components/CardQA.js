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
  this.state = {"question": props.question, "answer":props.answer, "index": props.index};
}

  render(){
console.log(this.state.index)
    return(
      <View>
      <Text> index: {this.state.index}</Text>
      <Text>Question: {this.state.question}</Text>

      <Text>Answer: {this.state.answer}</Text>

      <Button title={"next Question"} onPress={()=>{this.props.handler(this.state.index)}}> </Button>
</View>
    )
  }
}
export default CardQA;
