import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FloorChat from '../components/FloorChat';
import BuyTickets from '../components/BuyTickets';
import ViewMyTickets from '../components/ViewMyTickets';
import Magazine from '../components/Magazine';

const UMDScreen = () => {
  const [activeScreen, setActiveScreen] = React.useState('FloorChat');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'FloorChat':
        return <FloorChat />;
      case 'BuyTickets':
        return <BuyTickets />;
      case 'MyTickets':
        return <ViewMyTickets />;
      case 'Magazine':
        return <Magazine />;
      default:
        return <FloorChat />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {renderScreen()}
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => setActiveScreen('FloorChat')}>
          <Icon 
            name="grid-view" 
            size={28} 
            color={activeScreen === 'FloorChat' ? '#007AFF' : '#666'} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen('BuyTickets')}>
          <Icon 
            name="shopping-cart" 
            size={28} 
            color={activeScreen === 'BuyTickets' ? '#007AFF' : '#666'} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen('MyTickets')}>
          <Icon 
            name="confirmation-number" 
            size={28} 
            color={activeScreen === 'MyTickets' ? '#007AFF' : '#666'} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen('Magazine')}>
          <Icon 
            name="menu-book" 
            size={28} 
            color={activeScreen === 'Magazine' ? '#007AFF' : '#666'} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  }
});

export default UMDScreen;