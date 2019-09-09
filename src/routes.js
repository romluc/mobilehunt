import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#008b8b',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
