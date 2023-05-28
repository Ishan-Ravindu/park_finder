import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "./types";
import ParkMapView from "../screen/homeStack/ParkMapView";
import Home from "../screen/homeDrawer/Home";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = ()=>{
    return(
        <Stack.Navigator 
        screenOptions={
            {
                headerShown:false
            }
        }
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ParkMapView" component={ParkMapView} />
        </Stack.Navigator>
    )
}

export default HomeStack;