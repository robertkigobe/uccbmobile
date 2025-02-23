import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Title from "../components/Title";
import CustomText from "../components/CustomText";
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Title>About UCCB</Title>
        <Text style={styles.subtitle}>
          Ugandan Catholic Community in the Archdiocese of Boston
        </Text>
        <CustomText>
          The Community shall engender a keen and dynamic sense of belonging,
          fraternity and solidarity among her members, their families,
          supporters, and friends. The unity of the UCCB shall be a springboard
          for evangelization, and charitable outreach within the Archdiocese of
          Boston and beyond. The Community shall explore and support ways that
          enhance the socio-economic, educational and professional development
          needs of her members.{" "}
        </CustomText>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('AboutDetailedScreen')}
        >
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AboutScreen;
