import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const width = Dimensions.get('window').width;

const CarouselComponent = () => {
  const data = [
    { title: "Notification 1", text: "Advert 1" },
    { title: "Notification 2", text: "Advert 2" },
    { title: "Notification 3", text: "Advert 3" },
    { title: "Notification 4", text: "Advert 4" },
    { title: "Notification 5", text: "Advert 5" },
  ];

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={200}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  itemTitle: {
    fontSize: 24
  },
  itemText: {
    fontSize: 16
  }
});

export default CarouselComponent;