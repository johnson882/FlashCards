import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList

} from "react-native";
 import {_getCards,removeCard} from "../utils/AsyncStorage"

class DeleteCard extends Component {

    static navigationOptions = {
      title: "Deck 1"

    } // this hides the header for navigation

    render() {
        return (


            <View style={styles.container}>

            <Text>Which Question do you want to deleted:</Text>

            <FlatList

          extraData={this.state}






          />

            <Button title="Delete cards" onPress={() => this.props.navigation.navigate('Deck')}/>


            </View>
        );
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
