import { createBottomTabNavigator } from 'react-navigation-stack';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import { Add, Profile } from '.';
import { StackFollow } from './StackFollow';

const AuthenticatedRoutes = createBottomTabNavigator(
    {
        Home: {
            screen: StackHome,
        },
        Search: {
            screen: StackSearch,
        },
        Add: {
            screen: Add,
        },
        Follow: {
            screen: StackFollow,
        },
        Profile: {
            screen: Profile,
        },
    },
    {
        tabBarPosition: 'bottom'
    }
);

export { AuthenticatedRoutes };