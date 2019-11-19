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

export default class Follow extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Follow</Text>
                <Button
                title="Autor"
                onPress={() => {navigation.navigate('Author')}}
                />
            </View>
        )
    }
}