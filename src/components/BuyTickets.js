import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const BuyTickets = () => {
  const availableSeats = [
    { id: '1', section: 'Table 1', number: 'A1', price: '$150', location: 'Front Row' },
    { id: '2', section: 'Table 3', number: 'A2', price: '$150', location: 'Front Row' },
    { id: '3', section: 'Table 5', number: 'B1', price: '$150', location: 'Middle' },
    { id: '4', section: 'Table 8', number: 'B2', price: '$150', location: 'Middle' },
    { id: '5', section: 'Table 23', number: 'C1', price: '$150', location: 'Back' },
    { id: '6', section: 'Table 34', number: 'C2', price: '$150', location: 'Back' },
  ];

  const renderSeat = ({ item }) => (
    <View style={styles.seatCard}>
      <View style={styles.seatInfo}>
        <Text style={styles.section}>{item.section}</Text>
        <Text style={styles.seatNumber}>Seat {item.number}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
      <View style={styles.priceSection}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Purchase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Tickets</Text>
      <FlatList
        data={availableSeats}
        renderItem={renderSeat}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  listContainer: {
    paddingBottom: 20
  },
  seatCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  seatInfo: {
    flex: 1
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF'
  },
  seatNumber: {
    fontSize: 16,
    marginVertical: 4
  },
  location: {
    fontSize: 14,
    color: '#666'
  },
  priceSection: {
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  buyButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20
  },
  buyButtonText: {
    color: 'white',
    fontWeight: '600'
  }
});

export default BuyTickets;