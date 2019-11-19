import { createStackNavigator } from 'react-navigation-stack';
import { Search, Profile, Publication, Comments } from '.';

const StackSearch = createStackNavigator({
    Search: {
        screen: Search,
    },
    Publication: {
        screen: Publication,
    },
    Author: {
        screen: Profile,
    },
    Comments: {
        screen: Comments,
    },
});

export { StackSearch };