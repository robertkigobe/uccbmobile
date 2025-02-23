import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ style, size = 'medium', children }) => {
  return (
    <Text style={[styles.base, styles[size], style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  large: {
    fontSize: 28,
    marginVertical: 15,
  },
  medium: {
    fontSize: 24,
    marginVertical: 12,
  },
  small: {
    fontSize: 20,
    marginVertical: 10,
  }
});

export default Title;
