import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

class Profile extends Component {
    render(){
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Button
                title="Post"
                onPress={() => {navigation.navigate('Publication')}}
                />
            </View>
        )
    }
}

export default Profile;