import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button

} from "react-native";

class Deck extends Component {

    static navigationOptions = {
      title: "Deck 1"

    } // this hides the header for navigation

    render() {
        return (


            <View style={styles.container}>
            <Button title="Take test" onPress={() => this.props.navigation.navigate('Card')}/>

            <Button title="Add Question" onPress={() => this.props.navigation.navigate('AddCard')}/>
            <Button title="Delete Question" onPress={() => this.props.navigation.navigate('DeleteCard')}/>

            </View>
        );
    }
}
export default Deck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
