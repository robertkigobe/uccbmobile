import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ViewMyTickets = () => {
  const myTickets = [
    { 
      id: '1', 
      number: 'A1', 
      event: 'UMD Concert 2025', 
      date: 'March 15, 2025', 
      price: '$150',
      status: 'Valid'
    },
    { 
      id: '2', 
      number: 'B3', 
      event: 'UMD Concert 2025', 
      date: 'March 15, 2025', 
      price: '$150',
      status: 'Valid'
    },
    { 
      id: '3', 
      number: 'C2', 
      event: 'UMD Concert 2025', 
      date: 'March 15, 2025', 
      price: '$150',
      status: 'Used'
    },
    { 
      id: '4', 
      number: 'D8', 
      event: 'UMD Concert 2025', 
      date: 'March 15, 2025', 
      price: '$150',
      status: 'Used'
    },
    { 
      id: '5', 
      number: 'F3', 
      event: 'UMD Concert 2025', 
      date: 'March 15, 2025', 
      price: '$150',
      status: 'Valid'
    },
  ];

  const renderTicket = ({ item }) => (
    <View style={styles.ticketItem}>
      <View style={styles.ticketHeader}>
        <Text style={styles.eventName}>{item.event}</Text>
        <Text style={[styles.status, { color: item.status === 'Valid' ? '#4CAF50' : '#FF9800' }]}>
          {item.status}
        </Text>
      </View>
      <View style={styles.ticketDetails}>
        <Text style={styles.seatNumber}>Seat {item.number}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tickets</Text>
      <FlatList
        data={myTickets}
        renderItem={renderTicket}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  listContainer: {
    paddingBottom: 20
  },
  ticketItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  status: {
    fontSize: 16,
    fontWeight: '500'
  },
  ticketDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  seatNumber: {
    fontSize: 16,
    color: '#666'
  },
  date: {
    fontSize: 16,
    color: '#666'
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: '#007AFF'
  }
});

export default ViewMyTickets;
