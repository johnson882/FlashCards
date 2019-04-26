import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button

} from "react-native";

class Card extends Component {

constructor(props){
super(props);
this.state = {};

}


    static navigationOptions = {
      title: "Card 1"

    } // this hides the header for navigation

    render() {
        return (


            <View style={styles.container}>
            <Text> Question: What is the diameter of the sun? </Text>
            <Button title="Show Answer"/>





            <Button title="Submit"  onPress={() => this.props.navigation.navigate('Deck')}/>

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
