import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button

} from "react-native";

class DeleteDeck extends Component {

    static navigationOptions = {
        title: "Delete Decks"
    } // this hides the header for navigation

    render() {
        return (
            <View style={styles.container}>
              <Button title="Back Button" onPress={() => this.props.navigation.navigate('Home')}/>

            </View>
        );
    }
}
export default DeleteDeck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
