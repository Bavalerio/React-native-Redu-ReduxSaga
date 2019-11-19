import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Follow } from '.';

const TabFollow = createMaterialTopTabNavigator({
    Follow: {
        screen: Follow,
    },
    Followers: {
        screen: Follow,
    },
});

export { TabFollow };