import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class BlankComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.list}>
                <Text>Hello World</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default BlankComponent;