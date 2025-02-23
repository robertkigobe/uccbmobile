import AboutDetailedScreen from '../screens/AboutDetailedScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import UmdScreen from '../screens/UmdScreen';
import AboutScreen from '../screens/AboutScreen';
import ReadingsScreen from '../screens/ReadingsScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'UCCB Mobile'
            }}
          />
     <Drawer.Screen name="About" component={AboutDetailedScreen} />

      <Drawer.Screen name="UMD" component={UmdScreen} />
      {/* <Drawer.Screen name="About" component={AboutScreen} /> */}
      <Drawer.Screen name="Readings" component={ReadingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;