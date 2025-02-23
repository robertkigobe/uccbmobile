import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CarouselComponent from '../components/Carousel';
import AboutScreen from './AboutScreen';
import AboutDetailedScreen from './AboutDetailedScreen';

const Stack = createStackNavigator();

const MainScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.carouselWrapper}>
      <CarouselComponent />
    </View>
    <AboutScreen />
  </ScrollView>
);

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="AboutDetailedScreen" component={AboutDetailedScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselWrapper: {
    marginTop: 20,
  },
});

export default HomeScreen;