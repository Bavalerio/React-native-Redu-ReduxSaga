import { createStackNavigator } from 'react-navigation-stack';
import { TabFollow } from './TabFollow';
import { Profile, Publication, Comments } from '.';

const StackFollow = createStackNavigator({
    TabFollow: {
        screen: TabFollow,
    },
    Author: {
        screen: Profile,
    },
    Publication: {
        screen: Publication,
    },
    Comments: {
        screen: Comments,
    },

});

export { StackFollow };