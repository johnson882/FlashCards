import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button

} from "react-native";

class AddDeck extends Component {

    static navigationOptions = {
       title: 'Add Deck',
    } // this hides the header for navigation

    render() {
        return (
            <View style={styles.container}>
            
              <Button title="Submit" onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}
export default AddDeck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
