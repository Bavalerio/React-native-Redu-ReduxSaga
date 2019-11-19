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

class Publication extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Post</Text>
                <Button
                title="Autor"
                onPress={() => {navigation.navigate('Author')}}
                />
                <Button
                title="Coments"
                onPress={() => {navigation.navigate('Comments')}}
                />
            </View>
        )
    }
}

export default Publication;