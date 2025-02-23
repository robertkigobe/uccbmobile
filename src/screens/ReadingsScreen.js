import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReadingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Readings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReadingsScreen;
