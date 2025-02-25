import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <Image
      source={require('../../assets/images/logo.jpeg')}
      style={styles.logo}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 20,
  }
});

export default Logo;
