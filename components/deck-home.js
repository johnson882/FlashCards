import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,

} from "react-native";

class Home extends Component {

    static navigationOptions = {
        header: null
    } // this hides the header for navigation 

    render() {
        return (
            <View style={styles.container}>
              <Text>Home!</Text>
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
