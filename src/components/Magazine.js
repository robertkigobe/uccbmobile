import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Magazine = () => {
  const documents = [
    { id: '1', title: 'Magazine Issue 2025', url: 'https://example.com/magazine1.pdf' },
    { id: '2', title: 'Magazine Issue 2024', url: 'https://example.com/magazine2.pdf' },
    { id: '3', title: 'Magazine Issue 2023', url: 'https://example.com/magazine3.pdf' },
    { id: '4', title: 'Magazine Issue 2022', url: 'https://example.com/magazine4.pdf' },
    { id: '5', title: 'Magazine Issue 2021', url: 'https://example.com/magazine5.pdf' },
    { id: '6', title: 'Magazine Issue 2020', url: 'https://example.com/magazine6.pdf' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UCCB Magazines</Text>
      <FlatList
        data={documents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.documentItem}>
            <Text style={styles.documentTitle}>{item.title}</Text>
          </View>
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