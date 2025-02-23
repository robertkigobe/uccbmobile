import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Title from "../components/Title";
import CustomText from "../components/CustomText";

const AboutDetailedScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Title>Our Mission</Title>
        <CustomText>
          The Mission of the UCCB shall be to foster unity among Catholic
          Christians of Ugandan origin; their families; and their friends. The
          Community shall engender a keen and dynamic sense of belonging,
          fraternity and solidarity among her members, their families,
          supporters, and friends.
        </CustomText>
      </View>

      <View style={styles.card}>
        <Title>Our Vision</Title>
        <CustomText>
          The Ugandan Catholic Community in the Archdiocese of Boston shall be a
          united, lively, thriving, loving, and caring community of Christians
          walking together on their shared journey of faith.
        </CustomText>
      </View>

      <View style={styles.card}>
        <Title>Core Values</Title>
        <ScrollView>
          <View style={styles.bulletContainer}>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <CustomText style={styles.bulletText}>
                To gather regularly to pray and celebrate the holy sacraments
              </CustomText>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <CustomText style={styles.bulletText}>
                To harness different gifts, talents and ministries
              </CustomText>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <CustomText style={styles.bulletText}>
                To support and be a voice for the voiceless
              </CustomText>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <CustomText style={styles.bulletText}>
                To raise future generations of Catholic citizens and leaders
              </CustomText>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <CustomText style={styles.bulletText}>
                To act as a bridge between the Archdiocese of Boston and Uganda
              </CustomText>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <CustomText style={styles.bulletText}>
              To spearhead the annual celebration of the Uganda Martyrs‟ Day by the Ugandans in greater Boston, and to ultimately promote this celebration to the status of a major feast of the Archdiocese of Boston.
              </CustomText>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <CustomText style={styles.bulletText}>
              To seek integration into and interaction with the local Community of the Archdiocese of Boston, while encouraging and promoting Ugandan cultural expressions of Catholic liturgy and worship.
              </CustomText>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <CustomText style={styles.bulletText}>
              To conceive and support the development of programs and activities that generate socioeconomic and professional growth among Community members.              </CustomText>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  )
}

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
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    bulletContainer: {
      marginTop: 10,
    },
    bulletPoint: {
      flexDirection: 'row',
      marginBottom: 10,
      paddingRight: 10,
    },
    bullet: {
      fontSize: 20,
      marginRight: 10,
      color: '#007AFF',
    },
    bulletText: {
      flex: 1,
      fontSize: 16,
      lineHeight: 24,
    }
  });

export default AboutDetailedScreen;