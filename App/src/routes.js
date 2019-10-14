import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './screens/login';

const Routes = createSwitchNavigator(
   {
      Login,
   },
   {
      initialRouteName: 'Login',
   }
);

export default createAppContainer(Routes);