import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AboutDetailedScreen from '../screens/AboutDetailedScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AboutDetailedScreen" component={AboutDetailedScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
