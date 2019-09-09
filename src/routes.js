import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Product,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#000080',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
