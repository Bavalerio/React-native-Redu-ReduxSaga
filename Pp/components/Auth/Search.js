import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default class Search extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Search</Text>
                <Button
                title="Post"
                onPress={() => {navigation.navigate('Publication')}}
                />
            </View>
        )
    }
}