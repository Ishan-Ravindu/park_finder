import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeDrawerParamList} from './types';
import Home from '../screen/homeDrawer/Home';
import Message from '../screen/homeDrawer/Message';
import Setting from '../screen/homeDrawer/Setting';
import Booking from '../screen/homeDrawer/Booking';
import Payment from '../screen/homeDrawer/Payment';
import {NavigationContainer} from '@react-navigation/native';
import SignOut from '../screen/homeDrawer/SignOut';
import { DRAWER_BACKGROUND_COLOR, PRIMARY_BACKGROUND_COLOR, SECONDARY_BACKGROUND_COLOR, WHITE_COLOR } from '../styles/colors';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

const HomeDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="HomeStack" 
      screenOptions={
        {
          headerShown: true,
          headerStyle: {
            backgroundColor: DRAWER_BACKGROUND_COLOR,
            
          },
          headerTintColor: WHITE_COLOR,
          headerTitle: '',
          drawerActiveBackgroundColor: SECONDARY_BACKGROUND_COLOR,
          drawerStyle: {
            backgroundColor: PRIMARY_BACKGROUND_COLOR,
            
          },
          drawerLabelStyle: {
            color: WHITE_COLOR,
            fontSize: 20,            
          },
        }

        
      }
      >
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="Message" component={Message} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Booking" component={Booking} />
        <Drawer.Screen name="Payment" component={Payment} />
        <Drawer.Screen name="SignOut" component={SignOut} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default HomeDrawer;
