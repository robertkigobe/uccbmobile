import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Magazine = () => {
  const documents = [
    { id: '1', title: 'Magazine Issue 1', path: require('../../assets/documents/avemaria.pdf') },
    { id: '2', title: 'Magazine Issue 2', path: require('../../assets/documents/avemaria2.pdf') },
    { id: '3', title: 'Magazine Issue 3', path: require('../../assets/documents/avemaria.pdf') },
    { id: '4', title: 'Magazine Issue 4', path: require('../../assets/documents/avemaria.pdf') },
    { id: '5', title: 'Magazine Issue 5', path: require('../../assets/documents/avemaria2.pdf') },
    { id: '6', title: 'Magazine Issue 6', path: require('../../assets/documents/avemaria.pdf') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UCCB Magazines</Text>
      <FlatList
        data={documents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.documentItem}>
            <Text style={styles.documentTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  documentItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  documentTitle: {
    fontSize: 16,
    color: '#007AFF'
  }
});

export default Magazine;
