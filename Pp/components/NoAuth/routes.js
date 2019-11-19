import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

const SignIn = (props) => {
    const { navigation } = props;
    return (
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <Text>Component Sign In </Text>
            <Button
            title='Back'
            onPress={() => {navigation.goBack(); }}
            />
        </View>
    )
}
const SignUp = (props) => {
    const { navigation } = props;
    return (
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <Text>Component SignUp </Text>
            <Button
            title='Back'
            onPress={() => {navigation.goBack(); }}
            />
        </View>
    )
}

const NotAuthenticated = createStackNavigator({
    SignIn: {
        screen: SignIn,
    },
    SignUp: {
        screen: SignUp,
    }
    },
    {
    headerMode: 'none',
    }
);

export { NotAuthenticated };