import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ style, variant = 'body', children }) => {
  return (
    <Text style={[styles[variant], style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8
  },
  body: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24
  },
  caption: {
    fontSize: 14,
    color: '#666'
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff'
  }
});

export default CustomText;
