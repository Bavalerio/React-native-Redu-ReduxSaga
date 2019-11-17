import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default class Add extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Add</Text>
            </View>
        )
    }
}