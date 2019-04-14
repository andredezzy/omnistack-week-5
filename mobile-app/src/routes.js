import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import NewTweet from './pages/NewTweet';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        App: createStackNavigator({
            Timeline,
            NewTweet
        })
    })
);

export default Routes;