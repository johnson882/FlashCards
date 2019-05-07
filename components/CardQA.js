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
  console.log("cardqa props:",props)
  
}

  render(){
console.log("index in card:",this.props.index)
    return(
      <View>
      <Text> index: {this.props.index}</Text>
      <Text>Question: {this.props.question}</Text>

      <Text>Answer: {this.props.answer}</Text>

      <Button title={"next Question"} onPress={()=>{this.props.handler(this.props.index)}}> </Button>
</View>
    )
  }
}
export default CardQA;
