import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

class Comments extends Component { 
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Comments</Text>
                <Button title="Autor"
                onPress={() => {navigation.navigate('Author')}} />
            </View>
        )
    }
}

export default Comments;