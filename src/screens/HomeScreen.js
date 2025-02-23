import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CarouselComponent from '../components/Carousel';
import AboutScreen from './AboutScreen';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.carouselWrapper}>
        <CarouselComponent />
      </View>
      <AboutScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  carouselWrapper: {
    marginTop: 20
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20
  },
  aboutSection: {
    padding: 20,
    alignItems: 'center',
    width: '100%'
  },
  aboutTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  aboutText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20
  }
});

export default HomeScreen;