import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeDrawerParamList} from './types';
import Home from '../screen/homeDrawer/Home';
import Message from '../screen/homeDrawer/Message';
import Setting from '../screen/homeDrawer/Setting';
import Booking from '../screen/homeDrawer/Booking';
import Payment from '../screen/homeDrawer/Payment';
import {NavigationContainer} from '@react-navigation/native';
import SignOut from '../screen/homeDrawer/SignOut';

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

const HomeDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
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
