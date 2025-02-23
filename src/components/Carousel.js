import React from 'react';
import { View, Image, FlatList, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  require('../../assets/images/carousel/umd1.jpeg'),
  require('../../assets/images/carousel/umd2.jpeg'),
  require('../../assets/images/carousel/umd3.jpeg'),
  require('../../assets/images/carousel/umd2.jpeg'),
  require('../../assets/images/carousel/umd1.jpeg')
];

const CarouselComponent = () => {
  const carouselItems = images.map((image, index) => ({
    id: String(index),
    image: image
  }));

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image 
        source={item.image}
        style={styles.image}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={carouselItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width
  },
  card: {
    width: width - 40,
    flex: 1,
    margin: 20,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});

export default CarouselComponent;