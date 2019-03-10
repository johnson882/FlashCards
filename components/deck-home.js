import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button

} from "react-native";

class Home extends Component {

    static navigationOptions = {
      title: "Flash Cards"

    } // this hides the header for navigation

    render() {
        return (


            <View style={styles.container}>
              <Button title="Deck 1 (example)" onPress={() => this.props.navigation.navigate('Deck')}/>
            <Button title="Add Deck" onPress={() => this.props.navigation.navigate('AddDeck')}/>
            <Button title="Delete Deck" onPress={() => this.props.navigation.navigate('DeleteDeck')}/>

            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
