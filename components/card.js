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
    this.state = {"Questions":0, "loaded":false, "index": 0, "deckName":"", "finalQuestion":false, "randomArray":[],
     "initArray":false};
   }

   handler(index){
     let aindex = ++index;
     this.setState({"index": aindex})
     return index;
   }

    static navigationOptions = {
      title: "Card 1"
    }

    componentDidMount(){
      let theProps = this.props.navigation.getParam('deckName');

      _getCards(theProps).then((value) => {
          this.setState({"Questions":value,"loaded":true})
      })
    }

    render() {
      let questionsArrayLength = this.state.Questions.length;
      let stateIndex = this.state.index;
      let loaded = this.state.loaded;
      let ifLoad;

      if (stateIndex < questionsArrayLength && loaded == true && this.state.finalQuestion == false)
      {
        ifLoad = <CardQA index={stateIndex} arrayLength={questionsArrayLength} handler={this.handler.bind(this)} question={this.state.Questions[stateIndex].question} answer={this.state.Questions[stateIndex].answer} />
      }
      else if(stateIndex >= questionsArrayLength && loaded == true && this.state.finalQuestion == false ){
        ifLoad =  <Text> QUIZ FININISHED</Text> ;
      }
      else{
        ifLoad = <Text> Waiting for data...</Text>;
      }

      return (
            <View style={styles.container}>
            {ifLoad}
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
