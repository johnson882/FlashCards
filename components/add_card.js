import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button

} from "react-native";

class AddCard extends Component {

  constructor(props) {
     super(props);
     this.state = {
       text: 'Name',
    };
   }

    static navigationOptions = {
       title: 'Add Card',
    } // this hides the header for navigation

    render() {
        return (
            <View style={styles.container}>
            <Text>Question:</Text>


            <Text> Answer: </Text>

            <Button title="Add another answer"/>

            <Text> Wrong answer: </Text>



            <Button title="Submit" onPress={() => this.props.navigation.navigate('Deck')}/>
            </View>
        );
    }
}
export default AddCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
